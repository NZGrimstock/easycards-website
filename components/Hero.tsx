import { ArrowRight, CheckCircle } from 'lucide-react'

const highlights = [
  '28-day free trial',
  'No credit card required',
  'Cancel anytime',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-900 bg-grid-pattern overflow-hidden flex items-center">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/80 via-slate-900/90 to-slate-900" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-600/20 border border-brand-600/30 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6">
              Built for NZ workshops
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Run your workshop.{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-accent-400">
                Not your paperwork.
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-lg">
              EasyCards replaces paper job cards with a real-time digital system. Create jobs in
              seconds, assign to your techs instantly, and invoice through Xero when the work is
              done.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle size={15} className="text-accent-400 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold transition-colors text-base shadow-lg shadow-brand-600/30"
              >
                Start free trial
                <ArrowRight size={18} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold transition-colors text-base"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Right: App mockup */}
          <div className="relative hidden lg:block">
            {/* Glow */}
            <div className="absolute inset-0 bg-brand-600/20 rounded-3xl blur-3xl scale-95" />

            {/* Main card */}
            <div className="relative bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
              {/* Admin portal header */}
              <div className="bg-brand-800 px-5 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-slate-400 text-xs">EasyCards — Admin Portal</span>
              </div>

              <div className="p-5 space-y-3">
                {/* Job card 1 */}
                <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-brand-400">#1042</span>
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">In progress</span>
                      </div>
                      <p className="text-white font-semibold text-sm">Sarah Mitchell</p>
                      <p className="text-slate-400 text-xs mt-0.5">Toyota Camry 2019 · WXY 123</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-white text-xs font-bold">MJ</div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-700/50 text-xs text-slate-500">
                    WOF + Full service · Assigned to Mike Johnson
                  </div>
                </div>

                {/* Job card 2 */}
                <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-brand-400">#1041</span>
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">Assigned</span>
                      </div>
                      <p className="text-white font-semibold text-sm">Brad Tanner</p>
                      <p className="text-slate-400 text-xs mt-0.5">Holden Ute 2017 · ABC 456</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-accent-600 flex items-center justify-center text-white text-xs font-bold">SL</div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-700/50 text-xs text-slate-500">
                    Brake pads + rotors · Assigned to Sarah Lee
                  </div>
                </div>

                {/* Job card 3 */}
                <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-brand-400">#1040</span>
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">Ready to bill</span>
                      </div>
                      <p className="text-white font-semibold text-sm">James Nguyen</p>
                      <p className="text-slate-400 text-xs mt-0.5">Ford Ranger 2021 · DEF 789</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-white text-xs font-bold">JD</div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-700/50 flex items-center justify-between">
                    <span className="text-xs text-slate-500">Transmission service</span>
                    <span className="text-xs font-semibold text-green-400">→ Send to Xero</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute -bottom-4 -left-6 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 shadow-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">MJ</div>
              <div>
                <p className="text-xs text-white font-semibold">Job #1042 received</p>
                <p className="text-xs text-slate-400">Mike's phone · just now</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  )
}
