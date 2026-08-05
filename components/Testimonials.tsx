import { Star } from 'lucide-react'
import JsonLd from '@/components/JsonLd'

const testimonials = [
  {
    quote:
      "My apprentices picked it up in five minutes. The push notifications mean nobody misses a job, even when we're flat out. Dead easy to use.",
    author: 'Edin',
    role: 'Workshop Owner',
    business: 'Parakai Automotive',
    initials: 'E',
    color: 'bg-brand-600',
  },
]

const reviewStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  // Points at the SoftwareApplication node declared in app/layout.tsx. Without the
  // shared @id, Google treats this as a review of an unrelated second app.
  itemReviewed: { '@id': 'https://www.easycards.co.nz/#software' },
  reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
  reviewBody: testimonials[0].quote,
  author: {
    '@type': 'Person',
    name: testimonials[0].author,
    jobTitle: testimonials[0].role,
    worksFor: { '@type': 'Organization', name: testimonials[0].business },
  },
}

function Stars() {
  return (
    <div className="flex gap-1" role="img" aria-label="Rated 5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} aria-hidden="true" className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-white py-24 lg:py-32">
      <JsonLd data={reviewStructuredData} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Workshop story
          </div>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Workshops are running smoother
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Real feedback from a New Zealand workshop using Easy Cards every day.
          </p>
        </div>

        {/* Card */}
        <div className="max-w-2xl mx-auto">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="flex flex-col items-center text-center p-10 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <Stars />
              <blockquote className="mt-5 text-slate-600 leading-relaxed text-lg">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-900">{t.author}</p>
                  <p className="text-xs text-slate-500">{t.role} · {t.business}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
