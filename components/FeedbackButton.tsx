'use client'

import { useState, useEffect } from 'react'
import { MessageSquarePlus, X, Send, CheckCircle } from 'lucide-react'

export default function FeedbackButton() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && handleClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!message.trim() || loading) return

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind: 'feedback', email, message }),
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        setError(result.error || 'Something went wrong. Please try again.')
        return
      }

      setDone(true)
      setEmail('')
      setMessage('')
      setTimeout(() => {
        setDone(false)
        setOpen(false)
      }, 2200)
    } catch {
      setError('Could not reach our server. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  function handleClose() {
    setOpen(false)
    setMessage('')
    setEmail('')
    setError('')
    setDone(false)
  }

  return (
    <>
      {/* Floating trigger */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-lg shadow-brand-600/30 transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <MessageSquarePlus size={16} aria-hidden="true" />
        Feedback
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-end p-6 sm:items-center sm:justify-end"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="feedback-title"
            className="w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <MessageSquarePlus size={18} aria-hidden="true" className="text-brand-600" />
                <span id="feedback-title" className="font-semibold text-slate-900 text-sm">
                  Send feedback
                </span>
              </div>
              <button
                onClick={handleClose}
                aria-label="Close feedback"
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X size={16} aria-hidden="true" />
              </button>
            </div>

            <div className="p-5">
              {done ? (
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <CheckCircle size={36} aria-hidden="true" className="text-green-500 mb-3" />
                  <p className="font-semibold text-slate-900">Thanks for your feedback!</p>
                  <p className="text-sm text-slate-500 mt-1">We&apos;ll be in touch if we need more.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="feedback-email" className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Your email
                    </label>
                    <input
                      id="feedback-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@workshop.co.nz"
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="feedback-message" className="block text-xs font-semibold text-slate-600 mb-1.5">
                      What&apos;s on your mind?
                    </label>
                    <textarea
                      id="feedback-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Bug report, feature request, general thoughts..."
                      rows={5}
                      required
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
                      autoFocus
                    />
                  </div>

                  {error && (
                    <p role="alert" className="text-sm text-brand-600 bg-brand-50 border border-brand-200 rounded-lg px-3 py-2">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={!message.trim() || !email.trim() || loading}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white text-sm font-semibold transition-colors"
                  >
                    {loading ? 'Sending...' : (
                      <>
                        Send feedback
                        <Send size={14} aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
