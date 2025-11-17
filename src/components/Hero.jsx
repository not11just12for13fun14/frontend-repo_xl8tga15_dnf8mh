import Spline from '@splinetool/react-spline'
import { ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.12),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.12),transparent_40%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs text-slate-300">
              <ShieldCheck size={14} className="text-emerald-400"/>
              Enterprise-grade reliability
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300">
              Premium managed websites for businesses that never want to touch code
            </h1>
            <p className="mt-6 text-slate-300 text-lg leading-relaxed">
              Smart Presence designs, builds, hosts and maintains your website end-to-end. Fast delivery, ongoing updates, secure hosting, and zero technical headaches—so you stay focused on your business.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#request" className="inline-flex justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 px-6 py-3 text-slate-900 font-semibold shadow-lg shadow-emerald-500/20">
                Start your site request
              </a>
              <a href="#pricing" className="inline-flex justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white hover:bg-white/10">
                See transparent pricing
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-400">
              <div>Secure hosting</div>
              <div>Domain & email setup</div>
              <div>Monthly updates</div>
              <div>Performance monitoring</div>
            </div>
          </div>

          <div className="h-[520px] lg:h-[620px] rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md relative">
            <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
