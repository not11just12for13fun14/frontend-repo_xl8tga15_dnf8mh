import { ShieldCheck, Zap, Wrench, Globe, FileEdit, Rocket, RefreshCcw, ServerCog } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: 'Reliability first', desc: 'Enterprise-grade security, monitoring, and backups so your site just works.' },
  { icon: Zap, title: 'Fast delivery', desc: 'From brief to live site quickly with tight iteration cycles.' },
  { icon: Wrench, title: 'Hands-off management', desc: 'We handle hosting, backend, domains, SSL, and updates—end to end.' },
  { icon: FileEdit, title: 'Ticketed updates', desc: 'Submit modification tickets anytime. We implement and deploy for you.' },
  { icon: ServerCog, title: 'All-inclusive stack', desc: 'Modern frontend, scalable backend, analytics, and SEO baked in.' },
  { icon: RefreshCcw, title: 'Long-term support', desc: 'Proactive maintenance with guaranteed response times.' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why businesses choose Smart Presence</h2>
          <p className="mt-3 text-slate-300">Premium, managed web presence for non-technical teams who want results without the complexity.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({icon:Icon,title,desc}) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:bg-slate-900/80 transition-colors">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 text-slate-900">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
