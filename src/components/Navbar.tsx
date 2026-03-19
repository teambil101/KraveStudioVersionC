import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary-600">
            <path d="M8 12a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M12 12a4 4 0 0 1 8 0v4a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span className="text-lg font-bold tracking-tight text-neutral-900">
            KraveStudio
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-1">
              Services
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Dropdown */}
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-2 min-w-[180px]">
                <Link to="/services/voice-ai" className="block px-3 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors">Voice AI</Link>
                <Link to="/services/rag-systems" className="block px-3 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors">RAG Systems</Link>
                <Link to="/services/ai-agents" className="block px-3 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors">AI Agents</Link>
                <Link to="/services/full-stack" className="block px-3 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors">Full-Stack Dev</Link>
              </div>
            </div>
          </div>
          <Link to="/about" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">About</Link>
          <Link to="/contact" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://cal.com/kravestudio"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 shadow-sm shadow-primary-500/25 transition-all duration-200"
          >
            Book a Call
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-neutral-600"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 px-6 py-4 space-y-3">
          <Link to="/services/voice-ai" className="block text-sm text-neutral-600 hover:text-neutral-900" onClick={() => setMenuOpen(false)}>Voice AI</Link>
          <Link to="/services/rag-systems" className="block text-sm text-neutral-600 hover:text-neutral-900" onClick={() => setMenuOpen(false)}>RAG Systems</Link>
          <Link to="/about" className="block text-sm text-neutral-600 hover:text-neutral-900" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="block text-sm text-neutral-600 hover:text-neutral-900" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
}
