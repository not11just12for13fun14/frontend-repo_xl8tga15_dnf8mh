import { ClipboardList, Code2, Globe2, LifeBuoy, CheckCircle2 } from 'lucide-react'

const steps = [
  { icon: ClipboardList, title: 'Request', desc: 'Tell us what you need. No technical jargon required.' },
  { icon: Code2, title: 'Design & build', desc: 'We design the experience and ship high-quality code.' },
  { icon: Globe2, title: 'Launch & hosting', desc: 'We deploy, connect your domain, and set up analytics/SEO.' },
  { icon: LifeBuoy, title: 'Maintain', desc: 'We monitor uptime, performance, and security 24/7.' },
  { icon: CheckCircle2, title: 'Update anytime', desc: 'Send a ticket with changes—content, pages, features.' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">A smooth, done-for-you process</h2>
          <p className="mt-3 text-slate-300">From idea to ongoing growth, we handle the entire lifecycle so you never touch the technical side.</p>
        </div>

        <ol className="mt-10 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map(({icon:Icon,title,desc}, i) => (
            <li key={title} className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 text-slate-900">
                  <Icon size={20} />
                </div>
                <span className="text-sm text-slate-400">Step {i+1}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
