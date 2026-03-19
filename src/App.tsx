import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import VoiceAI from './pages/VoiceAI'
import RAGSystems from './pages/RAGSystems'
import AIAgents from './pages/AIAgents'
import FullStackDev from './pages/FullStackDev'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/voice-ai" element={<VoiceAI />} />
          <Route path="/services/rag-systems" element={<RAGSystems />} />
          <Route path="/services/ai-agents" element={<AIAgents />} />
          <Route path="/services/full-stack" element={<FullStackDev />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
