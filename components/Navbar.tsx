'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Features', href: '/#features' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2" aria-label="EasyCards home">
            <Image
              src="/logo.png"
              alt="EasyCards"
              width={140}
              height={40}
              priority
              className="h-9 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/#contact"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Book a demo
            </a>
            <a
              href="/#pricing"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold transition-colors"
            >
              Start free trial
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-slate-300 hover:text-white p-2"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-slate-300 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-3">
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="block text-center py-2 text-sm font-medium text-slate-300 hover:text-white"
            >
              Book a demo
            </a>
            <a
              href="/#pricing"
              onClick={() => setOpen(false)}
              className="block text-center py-3 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold transition-colors"
            >
              Start free trial
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
