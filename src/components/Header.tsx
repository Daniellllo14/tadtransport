import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="py-4 sticky top-0 z-50 bg-[#0B0B0B]">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center bg-transparent">
          <img src="/images/favicon.png" alt="TAD Transport" className="w-32 h-auto flex-shrink-0" />
          <span className="text-lg sm:text-xl font-bold tracking-widest hidden sm:inline-block -ml-12" style={{color: '#D4AF37', letterSpacing: '0.2em'}}>TAD TRANSPORT</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/tjanster" className="text-gray-300 hover:text-white transition">Tjänster</Link>
          <Link to="/om-oss" className="text-gray-300 hover:text-white transition">Om oss</Link>
          <Link to="/kontakt" className="text-gray-300 hover:text-white transition">Kontakt</Link>
          <Link to="/kontakt" className="btn-gold px-4 py-2 rounded font-medium hover:opacity-90 transition">Få offert</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Växla meny" 
          className="md:hidden text-gray-200 text-2xl"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-tadBg2 border-t border-white/6 p-4 flex flex-col gap-4">
          <Link to="/tjanster" className="text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Tjänster</Link>
          <Link to="/om-oss" className="text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Om oss</Link>
          <Link to="/kontakt" className="text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Kontakt</Link>
          <Link to="/kontakt" className="btn-gold px-4 py-2 rounded font-medium text-center" onClick={() => setMobileMenuOpen(false)}>Få offert</Link>
        </nav>
      )}
    </header>
  )
}
