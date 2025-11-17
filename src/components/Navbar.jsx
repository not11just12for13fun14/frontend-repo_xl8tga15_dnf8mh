import { useState } from 'react'
import { Menu, ShieldCheck, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLink = (href, label) => (
    <a href={href} className="text-sm md:text-base text-slate-300 hover:text-white transition-colors">
      {label}
    </a>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-md">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 text-slate-900">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-white font-semibold leading-tight">Smart Presence</p>
                <p className="text-[11px] text-slate-400 -mt-0.5">Managed Web Platforms</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLink('#features','Why Us')}
              {navLink('#process','How It Works')}
              {navLink('#pricing','Pricing')}
              {navLink('#faq','FAQs')}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="mailto:hello@smartpresence.io" className="inline-flex items-center gap-2 text-slate-300 hover:text-white text-sm">
                <Mail size={16}/>hello@smartpresence.io
              </a>
              <a href="#request" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 px-4 py-2 text-slate-900 font-semibold shadow-lg shadow-emerald-500/20">
                <Phone size={16}/> Start Now
              </a>
            </div>

            <button className="md:hidden text-white" onClick={()=>setOpen(!open)} aria-label="Toggle Menu">
              <Menu />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-3">
              <div className="flex flex-col gap-3">
                {navLink('#features','Why Us')}
                {navLink('#process','How It Works')}
                {navLink('#pricing','Pricing')}
                {navLink('#faq','FAQs')}
              </div>
              <a href="#request" className="mt-3 inline-flex w-full justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 px-4 py-3 text-slate-900 font-semibold shadow-lg shadow-emerald-500/20">
                <Phone size={16}/> Start Your Website
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
