'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="mb-10 pb-8 border-b border-slate-800">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors mb-6"
            >
              ← Back to home
            </Link>
            <h1 className="text-4xl font-bold text-white mb-3">Privacy Policy</h1>
            <p className="text-slate-400 text-sm">
              Effective Date: 7 June 2026 &nbsp;·&nbsp; Last Updated: 7 June 2026
            </p>
          </div>

          {/* Body */}
          <div className="prose-policy">

            <p>This Privacy Policy describes how Industry Forms Limited ("we", "us", or "our") collects, uses, and protects your personal information when you use our mobile application and SaaS platform (collectively, the "Service"). We are committed to protecting your privacy and complying with the New Zealand Privacy Act 2020 and the Australian Privacy Act 1988.</p>
            <p>By using our Service, you agree to the collection and use of information as described in this policy. If you do not agree, please discontinue use of the Service.</p>

            <h2>1. Information We Collect</h2>

            <h3>1.1 Account Information</h3>
            <p>When you register for an account, we collect:</p>
            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Password (stored in encrypted form)</li>
              <li>Business or organisation name (if applicable)</li>
            </ul>

            <h3>1.2 Payment Information</h3>
            <p>To process subscription payments, we collect billing details including:</p>
            <ul>
              <li>Credit or debit card details (processed and stored by our payment provider — we do not store full card numbers on our servers)</li>
              <li>Billing address</li>
              <li>Transaction history</li>
            </ul>
            <p>Payments are processed by a PCI DSS-compliant third-party payment processor. Please refer to their privacy policy for information on how they handle your financial data.</p>

            <h3>1.3 Customer Data</h3>
            <p>As part of using our productivity tools, you may input or upload business data, documents, contacts, or other customer information ("Customer Data"). We process this data solely to provide the Service to you, and we do not use it for any other purpose.</p>

            <h3>1.4 Location Data</h3>
            <p>With your permission, we may collect approximate location data to:</p>
            <ul>
              <li>Provide localised features (such as currency, time zones, or regional settings)</li>
              <li>Comply with applicable tax and regulatory requirements</li>
            </ul>
            <p>You can disable location access at any time through your device settings.</p>

            <h3>1.5 Usage and Technical Data</h3>
            <p>We automatically collect certain technical data when you use the Service, including:</p>
            <ul>
              <li>Device type, operating system, and app version</li>
              <li>IP address</li>
              <li>Log data (pages visited, features used, timestamps)</li>
              <li>Crash reports and performance diagnostics</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Create and manage your account</li>
              <li>Process subscription payments and send billing receipts</li>
              <li>Deliver and improve the features of our Service</li>
              <li>Provide customer support</li>
              <li>Send important service notices, updates, and security alerts</li>
              <li>Send marketing communications (only with your consent — you may opt out at any time)</li>
              <li>Detect, investigate, and prevent fraudulent or unauthorised activity</li>
              <li>Comply with legal obligations under New Zealand and Australian law</li>
            </ul>

            <h2>3. How We Share Your Information</h2>
            <p>We do not sell your personal information. We may share your data with:</p>

            <h3>3.1 Service Providers</h3>
            <p>We engage trusted third-party companies to assist us in operating the Service, including payment processors, cloud hosting providers, analytics tools, and email delivery services. These providers are contractually obligated to handle your data securely and only for the purposes we specify.</p>

            <h3>3.2 Legal Requirements</h3>
            <p>We may disclose your information if required to do so by law, court order, or governmental authority, or where we believe disclosure is necessary to protect our legal rights, your safety, or the safety of others.</p>

            <h3>3.3 Business Transfers</h3>
            <p>In the event of a merger, acquisition, or sale of our business assets, your personal information may be transferred to the acquiring entity. We will notify you of any such change and the choices available to you.</p>

            <h2>4. Data Storage and Security</h2>
            <p>Your data is stored on secure servers located in Australia or New Zealand, or with cloud providers that maintain data centres in these regions. We implement industry-standard security measures including encryption in transit (TLS) and at rest, access controls, and regular security reviews.</p>
            <p>While we take reasonable steps to protect your data, no method of electronic transmission or storage is 100% secure. We encourage you to use a strong, unique password and to contact us immediately if you suspect any unauthorised access to your account.</p>

            <h2>5. Data Retention</h2>
            <p>We retain your personal information for as long as your account is active or as needed to provide the Service. If you close your account, we will delete or anonymise your personal data within 90 days, unless we are required to retain it for legal, compliance, or dispute resolution purposes.</p>
            <p>Customer Data you have uploaded or created may be exported before account closure. After the retention period, it will be permanently deleted from our systems.</p>

            <h2>6. Your Privacy Rights</h2>
            <p>Under the New Zealand Privacy Act 2020 and/or the Australian Privacy Act 1988, you have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information (subject to legal obligations)</li>
              <li>Withdraw consent for marketing communications at any time</li>
              <li>Lodge a complaint with the New Zealand Privacy Commissioner (<a href="https://www.privacy.org.nz" target="_blank" rel="noopener noreferrer">www.privacy.org.nz</a>) or the Australian Information Commissioner (<a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">www.oaic.gov.au</a>)</li>
            </ul>
            <p>To exercise any of these rights, please contact us using the details in Section 9.</p>

            <h2>7. Children's Privacy</h2>
            <p>Our Service is not directed at children under the age of 13, and we do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us and we will promptly delete it.</p>

            <h2>8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make material changes, we will notify you by email or via a prominent notice in the app at least 14 days before the changes take effect. Your continued use of the Service after the effective date constitutes acceptance of the updated policy.</p>

            <h2>9. Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact our Privacy Officer:</p>
            <div className="contact-box">
              <p><strong>Industry Forms Limited</strong></p>
              <p>Email: <a href="mailto:privacy@industryforms.co.nz">privacy@industryforms.co.nz</a></p>
              <p>Postal Address: 349 Mangakura Road, Helensville 0875, New Zealand</p>
              <p>We aim to respond to all privacy enquiries within 20 working days.</p>
            </div>

          </div>
        </div>
      </main>

      <footer className="bg-slate-950 border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} Industry Forms Limited &nbsp;·&nbsp;{' '}
          <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
        </p>
      </footer>

      <style jsx global>{`
        .prose-policy { color: #94a3b8; }
        .prose-policy p { margin-bottom: 1rem; font-size: 0.95rem; line-height: 1.7; }
        .prose-policy h2 { font-size: 1.15rem; font-weight: 700; color: #f1f5f9; margin: 2rem 0 0.75rem; padding-top: 1rem; border-top: 1px solid #1e293b; }
        .prose-policy h3 { font-size: 0.95rem; font-weight: 600; color: #cbd5e1; margin: 1.25rem 0 0.5rem; }
        .prose-policy ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 1rem; }
        .prose-policy ul li { font-size: 0.95rem; margin-bottom: 0.35rem; }
        .prose-policy a { color: #60a5fa; text-decoration: none; }
        .prose-policy a:hover { text-decoration: underline; }
        .prose-policy .contact-box { margin-top: 1rem; padding: 1.25rem 1.5rem; background: #0f172a; border: 1px solid #1e293b; border-radius: 0.75rem; font-size: 0.9rem; }
        .prose-policy .contact-box p { margin-bottom: 0.4rem; }
        .prose-policy .contact-box p:last-child { margin-bottom: 0; }
      `}</style>
    </>
  )
}
