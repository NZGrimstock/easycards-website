import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EasyCards — Digital Job Cards for NZ Workshops',
  description:
    'Replace paper job cards with real-time digital job management. Create jobs in the admin portal, assign to technicians instantly, and batch-invoice to Xero when complete. Built for NZ mechanics, panelbeaters and workshops.',
  keywords: 'job card software, workshop management, mechanic software, panelbeater software, Xero integration, NZ workshop, job tracking',
  openGraph: {
    title: 'EasyCards — Digital Job Cards for NZ Workshops',
    description: 'Real-time job cards, team assignment and Xero invoicing for NZ workshops.',
    url: 'https://www.easycards.co.nz',
    siteName: 'EasyCards',
    locale: 'en_NZ',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ">
      <body className="font-sans">{children}</body>
    </html>
  )
}
