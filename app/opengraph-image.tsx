import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Easy Cards — Digital Job Cards for NZ Workshops'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #7f1010 0%, #0f172a 55%, #0f172a 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignSelf: 'flex-start',
            padding: '10px 22px',
            borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.25)',
            color: '#ffadad',
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}
        >
          Built for NZ workshops
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 36,
            fontSize: 82,
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          Run your workshop.
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 82,
            fontWeight: 800,
            color: '#e85555',
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          Not your paperwork.
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 36,
            fontSize: 32,
            color: '#94a3b8',
            maxWidth: 900,
          }}
        >
          Real-time digital job cards, technician app, and one-click invoicing via Easy Cards or Xero.
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 'auto',
            alignItems: 'center',
            gap: 20,
            fontSize: 30,
            fontWeight: 700,
            color: 'white',
          }}
        >
          easycards.co.nz
          <span style={{ color: '#475569' }}>|</span>
          <span style={{ color: '#94a3b8', fontWeight: 500 }}>28-day free trial</span>
        </div>
      </div>
    ),
    size,
  )
}
