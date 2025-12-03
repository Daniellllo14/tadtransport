import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="border-t border-white/6 mt-16 bg-white/2">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-white mb-3">TAD transport</h3>
            <p className="text-gray-400 text-sm">Transport- och logistikverksamhet. Budtjänster, paket- och varudistribution. Försäkrat och pålitligt.</p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Tjänster</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><Link to="/tjanster" className="hover:text-white transition">Budtjänster</Link></li>
              <li><Link to="/tjanster" className="hover:text-white transition">Logistiklösningar</Link></li>
              <li><Link to="/tjanster" className="hover:text-white transition">Flyttjänster</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-3">Om oss</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><Link to="/om-oss" className="hover:text-white transition">Om TadTransport</Link></li>
              <li><a href="mailto:info@tadtransport.se" className="hover:text-white transition">Kontakta oss</a></li>
              <li><a href="#" className="hover:text-white transition">Jobb</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-3">Kontakt</h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p>📍 c/o Bechlaoui<br/>Bäverbäcksgränd 155<br/>124 62 Bandhagen</p>
              <p>📞 <a href="tel:+46707240639" className="hover:text-white transition">+46 70-724 06 39</a></p>
              <p>✉️ <a href="mailto:info@tadtransport.se" className="hover:text-white transition">info@tadtransport.se</a></p>
              <p>🏢 Org.nr: 559541-8087</p>
              <p className="text-tadGold text-xs font-semibold mt-1">✓ Godkänd för yrkesmässig trafik</p>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-white/6 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} TAD transport AB. Org.nr: 559541-8087</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Integritetspolicy</a>
            <a href="#" className="hover:text-white transition">Användarvillkor</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
