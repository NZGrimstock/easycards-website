import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import FeedbackButton from '@/components/FeedbackButton'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const siteUrl = 'https://www.easycards.co.nz'
const title = 'EasyCards — Digital Job Cards for NZ Workshops'
const description =
  'Replace paper job cards with real-time digital job management. Create jobs in the admin portal, assign to technicians instantly, and batch-invoice via Easy Cards or Xero when complete. Built for NZ mechanics, panelbeaters and workshops.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  title: {
    default: title,
    template: '%s — EasyCards',
  },
  description,
  keywords: [
    'job card software',
    'workshop management software',
    'mechanic software NZ',
    'panelbeater software',
    'digital job cards',
    'Xero integration workshop',
    'WOF inspection software',
    'automotive workshop app New Zealand',
  ],
  authors: [{ name: 'Industry Forms Limited' }],
  category: 'Business Software',
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    title,
    description: 'Real-time job cards, team assignment and Xero invoicing for NZ workshops.',
    url: siteUrl,
    siteName: 'EasyCards',
    locale: 'en_NZ',
    type: 'website',
    // Image comes from app/opengraph-image.tsx
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: 'Real-time job cards, team assignment and Xero invoicing for NZ workshops.',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'EasyCards',
      legalName: 'Industry Forms Limited',
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      email: 'admin@easycards.co.nz',
      areaServed: 'NZ',
      address: { '@type': 'PostalAddress', addressCountry: 'NZ' },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'EasyCards',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      url: siteUrl,
      description,
      offers: {
        '@type': 'Offer',
        price: '25',
        priceCurrency: 'NZD',
        description: 'Admin portal, introductory monthly price. 28-day free trial, no credit card required.',
      },
      provider: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'EasyCards',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ" className={inter.variable}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:text-slate-900 focus:font-semibold focus:shadow-lg"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <FeedbackButton />
      </body>
    </html>
  )
}
