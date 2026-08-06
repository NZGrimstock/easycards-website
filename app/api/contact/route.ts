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

// ponytail: in-memory sliding window, per server instance. Vercel may run this
// route on several instances at once, so a determined attacker gets roughly
// N x MAX_PER_WINDOW. That is fine for stopping a naive loop or an accidental
// double-submit; swap in Upstash Redis (shared counter) or Vercel BotID if real
// abuse shows up. Deliberately not silent — callers get a 429 and Retry-After.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const MAX_TRACKED_IPS = 5000
const hits = new Map<string, number[]>()

function rateLimit(ip: string): { limited: boolean; retryAfter: number } {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)

  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent)
    return { limited: true, retryAfter: Math.ceil((WINDOW_MS - (now - recent[0])) / 1000) }
  }

  recent.push(now)
  hits.set(ip, recent)

  // Drop keys whose window has fully expired so the map cannot grow unbounded.
  if (hits.size > MAX_TRACKED_IPS) {
    // Deleting during Map.forEach is safe — entries already visited are unaffected.
    hits.forEach((times, key) => {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key)
    })
  }

  return { limited: false, retryAfter: 0 }
}

function field(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

// Anything interpolated into the subject line gets CR/LF stripped. Resend's JSON
// API encodes headers itself, but this removes the header-injection shape entirely.
function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim()
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(request: Request) {
  // Vercel always sets x-forwarded-for; the client IP is the first entry.
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown'
  const { limited, retryAfter } = rateLimit(ip)
  if (limited) {
    return NextResponse.json(
      { error: 'Too many messages from this connection. Please try again shortly.' },
      { status: 429, headers: { 'Retry-After': String(retryAfter) } },
    )
  }

  let payload: Record<string, unknown>
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }
  // `null` and arrays are valid JSON but not valid payloads — .json() is typed
  // `any`, so without this a body of `null` throws on the first property read.
  if (payload === null || typeof payload !== 'object' || Array.isArray(payload)) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot: real users never see or fill this. Accept silently so bots don't retry.
  // Deliberately NOT named company/organisation/address — those are strong browser
  // autofill signals, and a false positive here silently discards a real enquiry.
  if (field(payload.contact_ref, 100)) {
    console.warn('Contact form rejected by honeypot.')
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
    // (ternary binds looser than ||, so the else branch is `!name || !business`)
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
          ? `Website feedback from ${singleLine(email)}`
          : singleLine(`Enquiry from ${name}${business ? ` — ${business}` : ''}`),
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
