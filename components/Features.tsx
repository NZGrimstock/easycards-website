import {
  Smartphone,
  Zap,
  FileText,
  Clock,
  Wrench,
  Bell,
  BarChart3,
  ShieldCheck,
} from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Digital job cards',
    description:
      'Create detailed job cards in seconds. Capture customer info, vehicle details, work description, parts needed and priority — all in one place.',
    color: 'bg-brand-600/10 text-brand-500',
  },
  {
    icon: Zap,
    title: 'Real-time delivery',
    description:
      'The moment you assign a job, your technician gets it on their phone. No more walking across the shop floor, no more lost paper cards.',
    color: 'bg-yellow-500/10 text-yellow-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile app for techs',
    description:
      'Your team works from a native iOS and Android app. View job details, log time, add parts used, and mark stages complete — all from the workshop floor.',
    color: 'bg-accent-600/10 text-accent-500',
  },
  {
    icon: Clock,
    title: 'Time & labour tracking',
    description:
      'Technicians log hours as they work. Labour costs calculate automatically so you always know the true cost of every job.',
    color: 'bg-purple-500/10 text-purple-500',
  },
  {
    icon: Wrench,
    title: 'Parts & consumables',
    description:
      'Add parts from your workshop catalogue or on the fly. Quantities, costs and totals roll up automatically — ready for the invoice.',
    color: 'bg-orange-500/10 text-orange-500',
  },
  {
    icon: Bell,
    title: 'Push notifications',
    description:
      'Techs are instantly notified when a new job is assigned or a job is updated. No one misses a beat, even when the shop is loud.',
    color: 'bg-red-500/10 text-red-500',
  },
  {
    icon: BarChart3,
    title: 'Job status at a glance',
    description:
      'See every job — scheduled, in progress, staged, complete — in one view. Know exactly where the work is at without leaving your desk.',
    color: 'bg-cyan-500/10 text-cyan-500',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & reliable',
    description:
      'Your data is stored securely in the cloud with daily backups. Access your jobs from any browser, anywhere, anytime.',
    color: 'bg-emerald-500/10 text-emerald-500',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Everything you need
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built for the workshop floor
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Every feature is designed around how real workshops operate — from the front desk to
            the pit.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="group p-6 rounded-2xl border border-slate-100 hover:border-brand-100 hover:shadow-lg hover:shadow-brand-600/5 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl ${f.color} mb-4`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
