'use client'

import { useState } from 'react'
import { MessageSquarePlus, X, Send, CheckCircle } from 'lucide-react'

export default function FeedbackButton() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [done, setDone] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!message.trim()) return
    const subject = encodeURIComponent('Feedback — EasyCards website')
    const body = encodeURIComponent(message.trim())
    window.location.href = `mailto:admin@easycards.co.nz?subject=${subject}&body=${body}`
    setDone(true)
    setMessage('')
    setTimeout(() => {
      setDone(false)
      setOpen(false)
    }, 2000)
  }

  function handleClose() {
    setOpen(false)
    setMessage('')
    setDone(false)
  }

  return (
    <>
      {/* Floating trigger */}
      <button
        onClick={() => setOpen(true)}
        title="Send feedback"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-lg shadow-brand-600/30 transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <MessageSquarePlus size={16} />
        Feedback
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-end p-6 sm:items-center sm:justify-end"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <MessageSquarePlus size={18} className="text-brand-600" />
                <span className="font-semibold text-slate-900 text-sm">Send feedback</span>
              </div>
              <button
                onClick={handleClose}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="p-5">
              {done ? (
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <CheckCircle size={36} className="text-green-500 mb-3" />
                  <p className="font-semibold text-slate-900">Thanks for your feedback!</p>
                  <p className="text-sm text-slate-500 mt-1">Opening your email client…</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      What&apos;s on your mind?
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Bug report, feature request, general thoughts..."
                      rows={5}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
                      autoFocus
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!message.trim()}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white text-sm font-semibold transition-colors"
                  >
                    Send feedback
                    <Send size={14} />
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
