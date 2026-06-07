import { PlusCircle, UserCheck, CheckSquare, ArrowRight, Receipt } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: PlusCircle,
    title: 'Create a job card',
    description:
      'Open the admin portal and create a job in under a minute. Add the customer, vehicle, description, parts needed and any notes for your team.',
    color: 'text-brand-600 bg-brand-50 border-brand-200',
    iconColor: 'text-brand-600',
  },
  {
    number: '02',
    icon: UserCheck,
    title: 'Assign to a technician',
    description:
      'Pick a tech from your team. They instantly receive the job card on their phone with a push notification — no delay, no confusion.',
    color: 'text-purple-600 bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600',
  },
  {
    number: '03',
    icon: CheckSquare,
    title: 'Tech completes the job',
    description:
      'Your technician logs time, adds parts used, attaches photos, and marks the job complete — all from the EasyCards mobile app.',
    color: 'text-accent-600 bg-accent-50 border-accent-200',
    iconColor: 'text-accent-600',
  },
  {
    number: '04',
    icon: Receipt,
    title: 'Batch invoice via Xero',
    description:
      'Completed jobs flow into your billing queue. Review, then send them straight to Xero in one click. Invoicing done.',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-600',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200 border border-slate-300 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Simple workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Up and running in minutes
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            No training days needed. EasyCards works the way your workshop already does — just
            faster and without the paper.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-slate-200 z-0" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative z-10 flex flex-col items-center text-center">
                {/* Step number + icon */}
                <div className={`w-24 h-24 rounded-2xl border-2 ${step.color} flex flex-col items-center justify-center mb-5 shadow-sm`}>
                  <Icon size={28} className={step.iconColor} />
                  <span className={`text-xs font-bold mt-1 ${step.iconColor} opacity-60`}>{step.number}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[220px]">{step.description}</p>

                {/* Arrow between steps (mobile) */}
                {i < steps.length - 1 && (
                  <div className="sm:hidden mt-4 text-slate-300">
                    <ArrowRight size={20} className="rotate-90" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold transition-colors text-base shadow-lg shadow-brand-600/20"
          >
            Start your free trial today
            <ArrowRight size={18} />
          </a>
          <p className="mt-3 text-sm text-slate-400">28 days free · No credit card required</p>
        </div>
      </div>
    </section>
  )
}
