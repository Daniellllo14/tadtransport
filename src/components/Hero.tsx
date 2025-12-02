import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="relative min-h-[80vh] flex items-center pt-8 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/images/hero-delivery.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Professionell logistik.<br/>Pålitlig leverans.
          </h1>
          <p className="mt-6 text-gray-200 text-xl max-w-2xl">
            TAD transport levererar paket och gods med precision och punktlighet. Vi erbjuder flexibla transportlösningar anpassade efter era behov.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <Link to="/kontakt" className="btn-gold px-8 py-4 rounded-lg font-semibold shadow-2xl hover:opacity-90 transition text-lg">
              Börja samarbeta
            </Link>
            <Link to="/tjanster" className="px-8 py-4 rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition text-lg font-semibold">
              Läs om vår service
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
