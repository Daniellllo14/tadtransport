import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="py-4 sticky top-0 z-50 bg-gradient-to-b from-tadBg1 to-tadBg2 border-b border-white/6">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <svg width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Truck body */}
            <path d="M40 120 L40 90 L110 90 L140 90 L165 100 L165 120 Z" stroke="#D4AF37" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Speed lines */}
            <line x1="15" y1="85" x2="35" y2="85" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round"/>
            <line x1="20" y1="95" x2="40" y2="95" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round"/>
            <line x1="25" y1="105" x2="45" y2="105" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round"/>
            {/* Wheels */}
            <circle cx="70" cy="130" r="12" stroke="#D4AF37" strokeWidth="5" fill="none"/>
            <circle cx="145" cy="130" r="12" stroke="#D4AF37" strokeWidth="5" fill="none"/>
            {/* Ground line */}
            <line x1="30" y1="142" x2="175" y2="142" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round"/>
          </svg>
          <span className="text-xl font-bold tracking-wider hidden sm:inline" style={{color: '#D4AF37', letterSpacing: '0.15em'}}>TAD TRANSPORT</span>
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
