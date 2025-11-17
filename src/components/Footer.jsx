export default function Footer(){
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div>
            <p className="text-white font-semibold">Smart Presence</p>
            <p className="text-xs text-slate-400 mt-1">Premium, managed web presence for business owners.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm text-slate-300">
            <div>
              <p className="text-slate-400 text-xs mb-2">Company</p>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white">Why Us</a></li>
                <li><a href="#process" className="hover:text-white">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <p className="text-slate-400 text-xs mb-2">Product</p>
              <ul className="space-y-2">
                <li><a href="#request" className="hover:text-white">Start</a></li>
                <li><a href="#faq" className="hover:text-white">FAQs</a></li>
              </ul>
            </div>
            <div>
              <p className="text-slate-400 text-xs mb-2">Legal</p>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Smart Presence. All rights reserved.</div>
      </div>
    </footer>
  )
}