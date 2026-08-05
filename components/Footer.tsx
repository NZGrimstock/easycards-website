import Image from 'next/image'

const links = {
  Product: [
    { label: 'Features', href: '/#features' },
    { label: 'How it works', href: '/#how-it-works' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Xero integration', href: '/#features' },
  ],
  Support: [
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact us', href: '/#contact' },
    { label: 'Book a demo', href: '/#contact' },
    { label: 'admin@easycards.co.nz', href: 'mailto:admin@easycards.co.nz' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Image src="/logo.png" alt="Easy Cards" width={130} height={36} className="h-8 w-auto mb-4" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Real-time digital job cards for NZ workshops. Built for mechanics, panelbeaters and
              trades that need to get the work done.
            </p>
            <p className="mt-5 text-xs text-slate-600">
              &copy; {new Date().getFullYear()} Easy Cards NZ Ltd. All rights reserved.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                {section}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">Made with care in New Zealand.</p>
          <div className="flex gap-5 text-xs text-slate-600">
            <a href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
