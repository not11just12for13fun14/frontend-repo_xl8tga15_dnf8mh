import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Foundation',
    price: '$1,990 setup + $149/mo',
    description: 'Perfect for small businesses that want a premium, managed site without complexity.',
    features: [
      'Custom design (up to 5 pages)',
      'Secure hosting + SSL',
      'Domain & email integration',
      'Basic SEO + analytics',
      'Monthly content updates (2 tickets/mo)',
      'Uptime monitoring & backups',
    ],
    cta: 'Start Foundation',
  },
  {
    name: 'Growth',
    price: '$3,990 setup + $349/mo',
    description: 'For growing teams that need more pages, features, and faster iteration.',
    features: [
      'Custom design (up to 15 pages)',
      'Advanced SEO + performance',
      'Feature development (auth, forms, CMS)',
      'Priority support',
      'Weekly updates (8 tickets/mo)',
      'Staging environment',
    ],
    highlight: true,
    cta: 'Choose Growth',
  },
  {
    name: 'Scale',
    price: 'Custom setup + $999+/mo',
    description: 'For complex sites, integrations, or ongoing product-level development.',
    features: [
      'Unlimited pages',
      'Custom integrations & APIs',
      'Dedicated success manager',
      'SLA & on-call support',
      'A/B testing & experiments',
      'Quarterly strategy reviews',
    ],
    cta: 'Talk to Sales',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Transparent pricing for long-term partnership</h2>
          <p className="mt-3 text-slate-300">Setup once, then an ongoing plan that keeps your web presence fast, secure, and up to date.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl border bg-slate-900/60 p-6 ${plan.highlight ? 'border-emerald-400/40 shadow-emerald-500/20 shadow-xl' : 'border-white/10'}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                {plan.highlight && <span className="text-xs rounded-full bg-emerald-400/20 text-emerald-300 px-2 py-1">Most Popular</span>}
              </div>
              <p className="mt-2 text-2xl font-bold text-white">{plan.price}</p>
              <p className="mt-2 text-sm text-slate-300">{plan.description}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-200">
                    <span className="mt-0.5 rounded-full bg-emerald-400/20 text-emerald-300 p-1"><Check size={14} /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#request" className={`mt-6 inline-flex w-full justify-center rounded-xl px-5 py-3 font-semibold ${plan.highlight ? 'bg-gradient-to-r from-emerald-400 to-cyan-500 text-slate-900' : 'border border-white/15 text-white hover:bg-white/10'}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
