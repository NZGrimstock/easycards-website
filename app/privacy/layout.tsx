import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How EasyCards (Industry Forms Limited) collects, uses and protects your personal information, in line with the NZ Privacy Act 2020.',
  alternates: { canonical: 'https://www.easycards.co.nz/privacy' },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
