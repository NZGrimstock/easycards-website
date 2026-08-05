import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The terms governing your use of EasyCards, the digital job card and workshop management platform operated by Industry Forms Limited.',
  alternates: { canonical: 'https://www.easycards.co.nz/terms' },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
