'use client'

import { useState } from 'react'
import { Send, CheckCircle, MapPin, Mail } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = new FormData(form)

    const name = data.get('name') as string
    const email = data.get('email') as string
    const business = data.get('business') as string
    const techs = data.get('techs') as string
    const message = data.get('message') as string

    const body = `Name: ${name}%0ABusiness: ${business}%0ATechnicians: ${techs}%0AEmail: ${email}%0A%0AMessage: ${message}`
    window.location.href = `mailto:admin@easycards.co.nz?subject=Enquiry from ${encodeURIComponent(name)}&body=${body}`

    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
    }, 400)
  }

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-600 text-xs font-semibold uppercase tracking-wider mb-5">
              Get started
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-5">
              Ready to ditch the paper?
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              Start your 28-day free trial or book a quick demo and we'll walk you through the
              whole thing — usually takes less than 20 minutes.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-9 h-9 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-brand-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Email us</p>
                  <a href="mailto:admin@easycards.co.nz" className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors">
                    admin@easycards.co.nz
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-9 h-9 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-brand-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Based in</p>
                  <p className="text-sm font-semibold text-slate-700">New Zealand</p>
                </div>
              </div>
            </div>

            {/* Trust signals */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { label: '28 days', sub: 'free trial' },
                { label: 'No lock-in', sub: 'cancel anytime' },
                { label: 'NZ support', sub: 'local team' },
              ].map((s) => (
                <div key={s.label} className="text-center p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-sm font-extrabold text-slate-900">{s.label}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-7 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-10">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle size={28} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Message sent!</h3>
                <p className="text-slate-500 text-sm max-w-xs">
                  Thanks for reaching out. We'll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-600 mb-1.5">Your name</label>
                    <input
                      id="contact-name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Dean Hartley"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-600 mb-1.5">Email address</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="dean@workshop.co.nz"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-business" className="block text-xs font-semibold text-slate-600 mb-1.5">Workshop name</label>
                  <input
                    id="contact-business"
                    name="business"
                    required
                    autoComplete="organization"
                    placeholder="Hartley Auto"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="contact-techs" className="block text-xs font-semibold text-slate-600 mb-1.5">How many technicians?</label>
                  <select
                    id="contact-techs"
                    name="techs"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                  >
                    <option>1–2</option>
                    <option>3–5</option>
                    <option>6–10</option>
                    <option>11+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-600 mb-1.5">Message (optional)</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about your workshop or ask us anything..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white font-bold transition-colors text-sm"
                >
                  {loading ? 'Sending...' : (
                    <>
                      Send enquiry
                      <Send size={15} />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400">
                  We typically respond within one business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
