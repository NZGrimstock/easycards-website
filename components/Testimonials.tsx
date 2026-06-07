import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      "We were drowning in paper job cards. Since switching to EasyCards my guys get their jobs the second I create them and I can see exactly where everything is at. Game changer.",
    author: 'Dean Hartley',
    role: 'Workshop Owner',
    business: 'Hartley Auto, Hamilton',
    initials: 'DH',
    color: 'bg-brand-600',
  },
  {
    quote:
      "The Xero integration alone saves me an hour every week. I used to manually key every invoice — now I just hit send and it's done. My bookkeeper loves me for it.",
    author: 'Rachel Voss',
    role: 'Owner / Operator',
    business: 'Voss Panelbeating, Tauranga',
    initials: 'RV',
    color: 'bg-accent-600',
  },
  {
    quote:
      "My apprentices picked it up in five minutes. The push notifications mean nobody misses a job, even when we're flat out. Dead easy to use.",
    author: 'Craig Molloy',
    role: 'Head Mechanic',
    business: "Molloy's Service Centre, Auckland",
    initials: 'CM',
    color: 'bg-purple-600',
  },
]

function Stars() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Workshop stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Workshops are running smoother
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            From panel shops to full-service mechanics — here's what real workshop owners say.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="flex flex-col p-7 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <Stars />
              <blockquote className="mt-4 text-slate-600 leading-relaxed text-sm flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.author}</p>
                  <p className="text-xs text-slate-500">{t.role} · {t.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
