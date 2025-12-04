import React from 'react'

const services = [
  {
    icon: '📦',
    title: 'Paketleveranser',
    desc: 'Professionella paketleveranser för företag och logistikpartners.',
    features: ['Kontraktsbaserade leveranser', 'Spårning i realtid', 'Fullständig försäkring', 'Direktkontakt']
  },
  {
    icon: '🚚',
    title: 'Budtjänster',
    desc: 'Snabba budleveranser för tidskritiska försändelser och dokument.',
    features: ['Kort responstid', 'Flexibla tider', 'Professionella förare', 'Leveransbekräftelse']
  },
  {
    icon: '🚛',
    title: 'Kontraktstransporter',
    desc: 'Regelbundna transportuppdrag för företag och logistikpartners.',
    features: ['Fasta rutter', 'Löpande rapportering', 'Punktliga leveranser', 'Anpassningsbara lösningar']
  },
  {
    icon: '💼',
    title: 'Specialtransporter',
    desc: 'Skräddarsydda lösningar för ovanliga, stora eller känsliga transporter.',
    features: ['Individuell planering', 'Erfarna förare', 'Omfattande försäkring', 'Dedikerad kontaktperson']
  },
]

export default function Services(){
  return (
    <section className="pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Våra tjänster</h1>
        <p className="text-gray-400 max-w-2xl mb-8">Kontraktsbaserade transportlösningar för företag och B2B-logistikpartners.</p>
          <img 
            src="/images/logistics-warehouse.jpg" 
            alt="TAD transport logistiklager med paket och arbetare" 
            className="w-full max-w-4xl mt-8 rounded-xl shadow-2xl"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map(s => (
            <div key={s.title} className="p-8 rounded-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10">
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-gray-300 mb-4">{s.desc}</p>
              <ul className="space-y-2">
                {s.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-gray-400">
                    <span className="text-tadGold">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-tadGold/20 to-white/5 rounded-lg p-8 border border-tadGold/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Behöver ni en speciallösning?</h3>
          <p className="text-gray-300 mb-6">Kontakta oss för att diskutera era specifika behov och få en kostnadsfri offert.</p>
          <a href="/kontakt" className="btn-gold px-6 py-3 rounded font-medium hover:opacity-90 transition inline-block">
            Få offert nu
          </a>
        </div>
      </div>
    </section>
  )
}
