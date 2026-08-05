'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <div className="mb-10 pb-8 border-b border-slate-800">
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors mb-6">
              ← Back to home
            </Link>
            <h1 className="text-4xl font-bold text-white mb-3">Terms of Service</h1>
            <p className="text-slate-400 text-sm">
              Effective Date: 8 June 2026 &nbsp;·&nbsp; Last Updated: 8 June 2026
            </p>
          </div>

          <div className="prose-policy">

            <p>These Terms of Service ("Terms") govern your use of Easy Cards, a digital job card and workshop management platform operated by Industry Forms Limited ("we", "us", or "our"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, you must not use the Service.</p>

            <h2>1. The Service</h2>
            <p>Easy Cards provides a cloud-based workshop management system including a web admin portal, mobile application for technicians, and related integrations (collectively, the "Service"). The Service is intended for use by automotive workshops, panelbeaters, and similar trade businesses in New Zealand and Australia.</p>

            <h2>2. Accounts</h2>
            <h3>2.1 Registration</h3>
            <p>To use the Service you must create an account. You agree to provide accurate and complete information and to keep it up to date. You are responsible for maintaining the security of your account credentials and for all activity that occurs under your account.</p>

            <h3>2.2 Authorised Users</h3>
            <p>You may invite team members (technicians and administrators) to use the Service under your account. You are responsible for ensuring that all authorised users comply with these Terms.</p>

            <h3>2.3 Account Suspension</h3>
            <p>We reserve the right to suspend or terminate accounts that violate these Terms, are used fraudulently, or where subscription fees remain unpaid.</p>

            <h2>3. Subscriptions and Billing</h2>
            <h3>3.1 Free Trial</h3>
            <p>New accounts are entitled to a 28-day free trial. No credit card is required to start a trial. At the end of the trial period, continued access requires a paid subscription.</p>

            <h3>3.2 Subscription Fees</h3>
            <p>Subscription fees are charged monthly per the pricing displayed at easycards.co.nz/pricing. Fees are exclusive of GST (New Zealand) or GST/applicable taxes (Australia), which will be added at checkout. Pricing may change with 30 days' written notice.</p>

            <h3>3.3 Payment</h3>
            <p>Payments are processed by a third-party payment provider. By providing payment details, you authorise us to charge the applicable fees on a recurring monthly basis. If a payment fails, we will notify you and your access may be suspended until payment is resolved.</p>

            <h3>3.4 Cancellation and Refunds</h3>
            <p>You may cancel your subscription at any time. Access continues until the end of the current billing period. We do not provide refunds for partial months. If we cancel your account for breach of these Terms, no refund will be provided.</p>

            <h2>4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for any unlawful purpose or in violation of any applicable law or regulation</li>
              <li>Upload or transmit malicious code, viruses, or harmful content</li>
              <li>Attempt to gain unauthorised access to any part of the Service or its infrastructure</li>
              <li>Reverse-engineer, decompile, or disassemble any part of the Service</li>
              <li>Resell or sublicense the Service without our prior written consent</li>
              <li>Use the Service to store or transmit content that is defamatory, obscene, or infringes any third-party rights</li>
            </ul>

            <h2>5. Your Data</h2>
            <h3>5.1 Ownership</h3>
            <p>You retain ownership of all data you input into the Service ("Customer Data"), including job records, customer details, and vehicle information.</p>

            <h3>5.2 Licence to Us</h3>
            <p>By using the Service, you grant us a limited licence to store, process, and display your Customer Data solely to provide and improve the Service.</p>

            <h3>5.3 Data Export and Deletion</h3>
            <p>You may export your Customer Data at any time. Upon account termination, we will retain your data for 90 days before permanent deletion, during which time you may request an export. See our <Link href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link> for further details.</p>

            <h2>6. Intellectual Property</h2>
            <p>The Service, including all software, designs, trademarks, and content created by us, is owned by Industry Forms Limited and protected by intellectual property laws. Nothing in these Terms transfers ownership of our intellectual property to you.</p>

            <h2>7. Third-Party Integrations</h2>
            <p>The Service integrates with third-party services including Xero (accounting), Google Calendar, and payment processors. Your use of these integrations is subject to the respective third party's terms of service. We are not responsible for any third-party service's availability, accuracy, or actions.</p>

            <h2>8. Warranties and Disclaimers</h2>
            <p>The Service is provided "as is" and "as available". To the maximum extent permitted by law, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components.</p>

            <h2>9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, our total liability to you for any claim arising out of or related to these Terms or the Service shall not exceed the total fees paid by you in the three months preceding the claim. We are not liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits or data, even if we have been advised of the possibility of such damages.</p>
            <p>Nothing in these Terms excludes liability that cannot be excluded by law, including liability under the New Zealand Consumer Guarantees Act 1993 where applicable.</p>

            <h2>10. Indemnification</h2>
            <p>You agree to indemnify and hold harmless Industry Forms Limited, its officers, directors, and employees from any claims, damages, losses, or expenses (including legal fees) arising from your use of the Service, your Customer Data, or your violation of these Terms.</p>

            <h2>11. Changes to the Service</h2>
            <p>We may modify, suspend, or discontinue any part of the Service at any time with reasonable notice. We will not be liable to you for any modification, suspension, or discontinuation of the Service.</p>

            <h2>12. Changes to These Terms</h2>
            <p>We may update these Terms from time to time. Material changes will be notified via email or in-app notice at least 14 days before they take effect. Your continued use of the Service after the effective date constitutes your acceptance of the updated Terms.</p>

            <h2>13. Governing Law</h2>
            <p>These Terms are governed by the laws of New Zealand. Any disputes will be subject to the exclusive jurisdiction of the New Zealand courts, except where mandatory consumer protection laws in Australia or another jurisdiction apply.</p>

            <h2>14. Contact</h2>
            <p>For questions about these Terms, please contact us:</p>
            <div className="contact-box">
              <p><strong>Industry Forms Limited</strong></p>
              <p>Email: <a href="mailto:admin@easycards.co.nz">admin@easycards.co.nz</a></p>
              <p>Postal Address: 349 Mangakura Road, Helensville 0875, New Zealand</p>
            </div>

          </div>
        </div>
      </main>

      <footer className="bg-slate-950 border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} Industry Forms Limited &nbsp;·&nbsp;{' '}
          <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          &nbsp;·&nbsp;
          <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
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
