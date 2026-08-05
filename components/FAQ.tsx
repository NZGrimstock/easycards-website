'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Do I need a credit card to start the free trial?',
    a: 'No. Your 28-day trial is completely free with no credit card required. Sign up, invite your team, and start managing jobs straight away.',
  },
  {
    q: 'How does the Xero integration work?',
    a: 'You connect your Xero account once from the admin portal. When jobs are marked complete and ready to bill, they appear in your billing queue. You can review the totals and send one, some or all of them to Xero as invoices in a single click. Labour, parts and consumables are all included automatically.',
  },
  {
    q: 'What devices does the mobile app support?',
    a: 'The Easy Cards mobile app is available for iOS (iPhone) and Android phones. Your technicians download it from the App Store or Google Play and sign in with their account.',
  },
  {
    q: 'Can I cancel anytime?',
    a: "Yes, absolutely. There are no lock-in contracts. You can cancel your subscription at any time and you won't be charged for the following month.",
  },
  {
    q: 'How many team members can I add?',
    a: 'As many as you need. Each additional technician is $10 per month. If you have seasonal staff, you can add or remove team members as your team changes.',
  },
  {
    q: 'Do my technicians need to be tech-savvy?',
    a: "Easy Cards is designed to be simple. Most technicians are up and running in under five minutes. The mobile app is clean and straightforward — if they can use a smartphone, they'll be fine.",
  },
  {
    q: 'Does it work for panel shops and specialist trades?',
    a: 'Yes. Easy Cards works for any workshop-based trade — mechanical, panelbeating, WOF stations, auto electrical, tyre shops, and more. Job cards are flexible enough to suit any workflow.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. All data is encrypted in transit and at rest, stored in a secure cloud database with regular backups. You own your data and can export it at any time.',
  },
]

function FAQItem({ q, a, id }: { q: string; a: string; id: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-slate-200 last:border-0">
      <h3>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={`${id}-answer`}
          id={`${id}-question`}
          className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        >
          <span className="text-base font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
            {q}
          </span>
          <ChevronDown
            size={20}
            aria-hidden="true"
            className={`flex-shrink-0 text-slate-400 transition-transform duration-200 mt-0.5 ${open ? 'rotate-180' : ''}`}
          />
        </button>
      </h3>
      {open && (
        <div
          id={`${id}-answer`}
          role="region"
          aria-labelledby={`${id}-question`}
          className="pb-5 text-sm text-slate-500 leading-relaxed -mt-1"
        >
          {a}
        </div>
      )}
    </div>
  )
}

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-slate-50 py-24 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200 border border-slate-300 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-4">
            FAQs
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Common questions
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Can't find what you're looking for?{' '}
            <a href="/#contact" className="text-brand-600 hover:text-brand-700 font-medium">
              Get in touch.
            </a>
          </p>
        </div>

        {/* Accordion */}
        <div className="bg-white rounded-2xl border border-slate-200 px-6 sm:px-8 divide-y-0">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} id={`faq-${i}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
