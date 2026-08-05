import { CheckCircle, ArrowRight } from 'lucide-react'

const xeroPoints = [
  'Completed jobs queue automatically in Easy Cards',
  'Review job totals, labour, parts and consumables',
  'Send one or all jobs to Xero in a single click',
  'Invoices appear in Xero instantly — no re-keying',
  'Keeps your bookkeeper happy and your cash flow moving',
]

export default function XeroSection() {
  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Xero visual */}
          <div className="relative order-2 lg:order-1">
            {/* Glow */}
            <div className="absolute inset-0 bg-accent-400/10 rounded-3xl blur-3xl" />

            <div className="relative bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
              {/* Header bar */}
              <div className="bg-accent-800 px-5 py-3 flex items-center justify-between">
                <span className="text-slate-300 text-xs">Easy Cards — Billing Queue</span>
                <span className="text-accent-300 text-xs font-semibold">3 jobs ready</span>
              </div>

              <div className="p-5 space-y-3">
                {[
                  { num: '#1040', name: 'James Nguyen', amount: '$485.00', parts: '$210', labour: '$275' },
                  { num: '#1038', name: 'Paula Simmons', amount: '$860.00', parts: '$540', labour: '$320' },
                  { num: '#1036', name: 'Lee Thornton', amount: '$225.00', parts: '$85', labour: '$140' },
                ].map((job) => (
                  <div key={job.num} className="bg-slate-800 rounded-xl p-4 border border-slate-700 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-mono text-accent-400">{job.num}</span>
                        <span className="text-xs text-slate-500">· Parts {job.parts} · Labour {job.labour}</span>
                      </div>
                      <p className="text-white text-sm font-semibold">{job.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold text-sm">{job.amount}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                        <span className="text-xs text-accent-400">Ready</span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Send to Xero button — illustrative mockup, not interactive */}
                <div className="w-full mt-2 py-3 rounded-xl bg-accent-600 text-white font-bold text-sm flex items-center justify-center gap-2">
                  Send all 3 to Xero
                  <ArrowRight size={16} aria-hidden="true" />
                </div>

                <p className="text-center text-xs text-slate-500 pb-1">Total: $1,570.00 · 3 invoices</p>
              </div>
            </div>

            {/* Xero badge */}
            <div className="absolute -top-4 -right-4 bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-accent-600 flex items-center justify-center">
                <span className="text-white font-black text-xs">X</span>
              </div>
              <span className="text-sm font-bold text-slate-800">Xero Connected</span>
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
          </div>

          {/* Right: copy */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-50 border border-accent-200 text-accent-700 text-xs font-semibold uppercase tracking-wider mb-5">
              Xero integration
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-5">
              From job complete to{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-600 to-accent-400">
                invoice sent
              </span>{' '}
              in one click.
            </h2>

            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              Stop manually re-entering job details into Xero. Easy Cards connects directly to your
              Xero account and pushes completed jobs as invoices — automatically including labour,
              parts and consumables.
            </p>

            <ul className="space-y-3 mb-8">
              {xeroPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-accent-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">{point}</span>
                </li>
              ))}
            </ul>

            <a
              href="/#contact"
              className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-semibold transition-colors"
            >
              Book a demo to see Easy Cards live
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
