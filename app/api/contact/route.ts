import { NextResponse } from 'next/server'

const LIMITS = {
  name: 100,
  email: 200,
  business: 150,
  techs: 20,
  message: 2000,
} as const

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'admin@easycards.co.nz'
// Must be an address on a domain verified in Resend.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'website@easycards.co.nz'

function field(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot: real users never see or fill this. Accept silently so bots don't retry.
  if (field(payload.company, 100)) {
    return NextResponse.json({ ok: true })
  }

  const isFeedback = payload.kind === 'feedback'
  const name = field(payload.name, LIMITS.name)
  const email = field(payload.email, LIMITS.email)
  const business = field(payload.business, LIMITS.business)
  const techs = field(payload.techs, LIMITS.techs)
  const message = field(payload.message, LIMITS.message)

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }
  if (isFeedback ? !message : !name || !business) {
    return NextResponse.json({ error: 'Please fill in the required fields.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set — cannot send contact email.')
    return NextResponse.json(
      { error: 'Our contact form is temporarily unavailable. Please email admin@easycards.co.nz.' },
      { status: 503 },
    )
  }

  const rows = isFeedback
    ? [['Email', email], ['Feedback', message]]
    : [
        ['Name', name],
        ['Email', email],
        ['Workshop', business],
        ['Technicians', techs],
        ['Message', message || '—'],
      ]

  const html = rows
    .map(([label, value]) => `<p><strong>${label}:</strong><br>${escapeHtml(value).replace(/\n/g, '<br>')}</p>`)
    .join('')

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Easy Cards Website <${FROM_EMAIL}>`,
        to: [TO_EMAIL],
        reply_to: email,
        subject: isFeedback
          ? `Website feedback from ${email}`
          : `Enquiry from ${name}${business ? ` — ${business}` : ''}`,
        html,
      }),
    })

    if (!response.ok) {
      console.error('Resend rejected the message:', response.status, await response.text())
      return NextResponse.json(
        { error: 'We could not send your message. Please email admin@easycards.co.nz.' },
        { status: 502 },
      )
    }
  } catch (error) {
    console.error('Failed to reach Resend:', error)
    return NextResponse.json(
      { error: 'We could not send your message. Please email admin@easycards.co.nz.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
