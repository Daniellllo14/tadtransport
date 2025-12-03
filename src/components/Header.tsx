import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="py-4 sticky top-0 z-50 bg-gradient-to-b from-tadBg1 to-tadBg2 border-b border-white/6">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 bg-transparent">
          <svg width="50" height="32" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            {/* Speed lines */}
            <line x1="20" y1="60" x2="50" y2="60" stroke="#D4AF37" strokeWidth="7" strokeLinecap="round"/>
            <line x1="25" y1="72" x2="55" y2="72" stroke="#D4AF37" strokeWidth="7" strokeLinecap="round"/>
            <line x1="30" y1="84" x2="60" y2="84" stroke="#D4AF37" strokeWidth="7" strokeLinecap="round"/>
            {/* Truck cab */}
            <path d="M 70 95 L 70 60 L 120 60 L 120 95" stroke="#D4AF37" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Truck cargo */}
            <path d="M 120 65 L 185 65 L 195 75 L 195 95 L 120 95" stroke="#D4AF37" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Wheels */}
            <circle cx="95" cy="105" r="13" stroke="#D4AF37" strokeWidth="7" fill="none"/>
            <circle cx="170" cy="105" r="13" stroke="#D4AF37" strokeWidth="7" fill="none"/>
            {/* Ground */}
            <line x1="50" y1="118" x2="210" y2="118" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round"/>
          </svg>
          <span className="text-lg sm:text-xl font-bold tracking-widest hidden sm:inline-block" style={{color: '#D4AF37', letterSpacing: '0.2em'}}>TAD TRANSPORT</span>
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
