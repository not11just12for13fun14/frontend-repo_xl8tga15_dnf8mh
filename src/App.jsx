import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import Pricing from './components/Pricing'
import CTAForm from './components/CTAForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Process />
        <Pricing />
        <CTAForm />
      </main>

      <Footer />
    </div>
  )
}

export default App