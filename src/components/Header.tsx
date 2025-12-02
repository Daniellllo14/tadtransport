import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="py-4 sticky top-0 z-50 bg-gradient-to-b from-tadBg1 to-tadBg2 border-b border-white/6">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-white/10 to-transparent rounded flex items-center justify-center">
            <span className="text-yellow-500 font-bold text-lg">T</span>
          </div>
          <span className="text-lg font-bold text-white hidden sm:inline">TadTransport</span>
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
