import { CheckCircle, ArrowRight } from 'lucide-react'

const included = [
  'Full admin web portal',
  'Unlimited job cards',
  'Real-time mobile app for techs',
  'Parts & labour tracking',
  'Xero invoicing integration',
  'Push notifications',
  'Job history & reporting',
  'Email support',
]

function PriceTag({
  normal,
  intro,
  period,
  featured = false,
}: {
  normal: string
  intro: string
  period: string
  featured?: boolean
}) {
  return (
    <div className="mb-1">
      <div className="flex items-center gap-2 mb-0.5">
        <span className={`text-sm line-through ${featured ? 'text-brand-300' : 'text-slate-500'}`}>
          {normal}
        </span>
        <span className={`text-xs font-semibold px-1.5 py-0.5 rounded-full ${featured ? 'bg-white/20 text-white' : 'bg-brand-600/15 text-brand-600'}`}>
          Intro offer
        </span>
      </div>
      <div className="flex items-end gap-1">
        <span className="text-4xl font-extrabold text-white">{intro}</span>
        <span className={`pb-1.5 text-sm ${featured ? 'text-brand-200' : 'text-slate-400'}`}>{period}</span>
      </div>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-900 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Simple pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pay only for what you use
          </h2>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            One flat rate for the admin portal, then a small monthly fee per technician. No
            surprises, no lock-in.
          </p>
        </div>

        {/* 28-day trial banner */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/20 border border-brand-600/40 text-brand-400 text-sm font-semibold">
            🎉 28-day free trial — no credit card required
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 items-stretch">

          {/* Admin portal */}
          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-7 flex flex-col">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Admin portal</h3>
            <PriceTag normal="$49" intro="$25" period="/month" />
            <p className="text-sm text-slate-500 mt-2 mb-6">One admin seat included</p>
            <p className="text-sm text-slate-400 leading-relaxed mt-auto">
              Full access to the admin dashboard — create jobs, assign techs, view all reports,
              and manage your workshop from any browser.
            </p>
          </div>

          {/* Per technician — featured */}
          <div className="bg-brand-600 rounded-2xl border border-brand-500 p-7 shadow-2xl shadow-brand-600/30 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative flex flex-col flex-1">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-200 mb-3">Per technician</h3>
              <PriceTag normal="$15" intro="$10" period="/tech/month" featured />
              <p className="text-sm text-brand-200 mt-2 mb-6">Add as many techs as you need</p>

              <ul className="space-y-2.5 mt-auto">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/90">
                    <CheckCircle size={15} className="text-brand-200 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* WOF add-on */}
          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-7 flex flex-col">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">WOF module</h3>
            <PriceTag normal="$12.50" intro="$5" period="/tech/month" />
            <p className="text-sm text-slate-500 mt-2 mb-6">Optional add-on per inspector</p>
            <p className="text-sm text-slate-400 leading-relaxed mt-auto">
              NZTA-compliant digital WOF inspection forms. Capture checks, signatures, and issue
              certificates — all from the app.
            </p>
          </div>

          {/* Example calculator */}
          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-7 flex flex-col">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">Example cost</h3>

            <div className="space-y-4 mt-auto">
              {[
                { label: '1 admin + 2 techs', cost: '$45/mo', sub: '$25 + 2 × $10' },
                { label: '1 admin + 4 techs', cost: '$65/mo', sub: '$25 + 4 × $10' },
                { label: '1 admin + 4 techs + WOF', cost: '$85/mo', sub: '$25 + 4 × $10 + 4 × $5' },
              ].map((ex) => (
                <div key={ex.label} className="flex items-center justify-between py-3 border-b border-slate-700/50 last:border-0">
                  <div>
                    <p className="text-sm font-semibold text-white">{ex.label}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{ex.sub}</p>
                  </div>
                  <span className="text-sm font-bold text-brand-400">{ex.cost}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-slate-700/50 border border-slate-600/50">
              <p className="text-xs text-slate-400 leading-relaxed">
                Introductory pricing. Start with a 28-day free trial — no credit card needed.
              </p>
            </div>

            <a
              href="/#contact"
              className="mt-4 flex items-center gap-1.5 text-sm text-brand-400 hover:text-brand-300 font-medium transition-colors"
            >
              Questions? Talk to us
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Single CTA spanning the full width of all pricing boxes */}
        <div className="mt-6">
          <a
            href="/#contact"
            className="flex w-full items-center justify-center gap-2 px-10 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold transition-colors text-base shadow-lg shadow-brand-600/30"
          >
            Start free trial
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <p className="mt-3 text-center text-sm text-slate-500">
            28 days free · No credit card required
          </p>
        </div>
      </div>
    </section>
  )
}
