import { useState } from 'react'
import { Send, Loader2 } from 'lucide-react'

export default function CTAForm() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', website_type: '', budget_range: '', timeline: '', description: '', domain_status: '', maintenance_plan: ''
  })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: '' })

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, requested_features: [] })
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      const data = await res.json()
      setStatus({ state: 'success', message: 'Thanks! Your request has been submitted. We will reach out shortly.' })
      setForm({ name: '', email: '', company: '', website_type: '', budget_range: '', timeline: '', description: '', domain_status: '', maintenance_plan: '' })
      console.log('Inserted ID', data.id)
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <section id="request" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Start your website request</h2>
            <p className="mt-3 text-slate-300">Tell us about your business and the site you want. We’ll handle everything from design to deployment and ongoing updates.</p>
            <ul className="mt-6 list-disc list-inside text-slate-300 space-y-1 text-sm">
              <li>We respond within 1 business day</li>
              <li>No obligation — pick a plan after the proposal</li>
              <li>Migration help and domain setup included</li>
            </ul>
          </div>

          <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required value={form.name} onChange={change} placeholder="Full name" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-400/40" />
              <input name="email" type="email" required value={form.email} onChange={change} placeholder="Email" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-400/40" />
              <input name="company" value={form.company} onChange={change} placeholder="Company" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-400/40" />
              <input name="website_type" value={form.website_type} onChange={change} placeholder="Website type (e.g., service, ecom, booking)" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-400/40" />
              <select name="budget_range" value={form.budget_range} onChange={change} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-emerald-400/40">
                <option value="">Budget range</option>
                <option>Under $2k</option>
                <option>$2k - $5k</option>
                <option>$5k - $10k</option>
                <option>$10k+</option>
              </select>
              <select name="timeline" value={form.timeline} onChange={change} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-emerald-400/40">
                <option value="">Timeline</option>
                <option>2 weeks</option>
                <option>1 month</option>
                <option>1-2 months</option>
              </select>
              <select name="domain_status" value={form.domain_status} onChange={change} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-emerald-400/40">
                <option value="">Domain</option>
                <option>Have a domain</option>
                <option>Need help purchasing</option>
                <option>Transferring domain</option>
              </select>
              <select name="maintenance_plan" value={form.maintenance_plan} onChange={change} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-emerald-400/40">
                <option value="">Update cadence</option>
                <option>Monthly</option>
                <option>Bi-weekly</option>
                <option>Weekly</option>
              </select>
            </div>
            <textarea name="description" required value={form.description} onChange={change} placeholder="Describe your ideal site, goals, and key features." rows={5} className="mt-4 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-400/40" />

            <button type="submit" disabled={status.state==='loading'} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 px-5 py-3 text-slate-900 font-semibold shadow-lg shadow-emerald-500/20 disabled:opacity-70">
              {status.state==='loading' ? <Loader2 className="animate-spin" size={18}/> : <Send size={18}/>} Submit request
            </button>
            {status.message && (
              <p className={`mt-3 text-sm ${status.state==='success' ? 'text-emerald-300' : status.state==='error' ? 'text-red-400' : 'text-slate-300'}`}>{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
