import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact(){
  return (
    <section className="pt-20 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kontakta oss</h1>
        <p className="text-gray-400 mb-12 max-w-2xl">Vi står till er tjänst för frågor, offerter och bokning av transporter.</p>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-6 rounded-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">📍 Adress</h3>
              <p className="text-gray-300">
                TAD transport AB<br/>
                c/o Bechlaoui<br/>
                Bäverbäcksgränd 155<br/>
                124 62 Bandhagen
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">📞 Telefon</h3>
              <a href="tel:+46707240639" className="text-tadGold hover:text-white transition">
                +46 70-724 06 39
              </a>
              <p className="text-gray-400 text-sm mt-2">Direktkontakt för akuta ärenden</p>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">✉️ E-post</h3>
              <a href="mailto:info@tadtransport.se" className="text-tadGold hover:text-white transition">
                info@tadtransport.se
              </a>
              <p className="text-gray-400 text-sm mt-2">Respons inom 24 timmar</p>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">⏰ Öppettider</h3>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>Mån-Fre: 07:00-19:00</li>
                <li>Lör-Sön: På förfrågan</li>
                <li className="pt-2 text-tadGold">Akuta leveranser: Alltid</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-6">Skicka ett meddelande</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
