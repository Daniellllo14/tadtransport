import React from 'react'

const items = [
  { icon: '⚡', title: 'Kontraktsleveranser', desc: 'Pålitliga last mile-leveranser som B2B-underleverantör till logistikföretag.' },
  { icon: '🎯', title: 'Full spårbarhet', desc: 'Realtidsuppföljning och rapportering från upphämtning till leverans.' },
  { icon: '✅', title: 'Hög punktlighet', desc: 'Garanterad leverans enligt avtalad tidpunkt och kontraktsvillkor.' },
  { icon: '🤝', title: 'Erfarna chaufförer', desc: 'Professionella förare med god lokalkunskap och yrkeskompetens.' },
  { icon: '📱', title: 'Snabb kommunikation', desc: 'Direkt kontakt med operatörer vid avvikelser eller ändringar.' },
  { icon: '💼', title: 'Företagsfokus', desc: 'Specialiserade på kontraktsbaserade transportlösningar för B2B-kunder.' },
]

export default function Features(){
  return (
    <section className="py-16 bg-white/2">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-2">Våra styrkor</h2>
        <p className="text-gray-400 mb-12">Professionell transport med fokus på tillförlitlighet och kundservice.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(i=> (
            <div key={i.title} className="p-6 bg-gradient-to-br from-white/5 to-white/2 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/8 transition">
              <div className="text-4xl mb-3">{i.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{i.title}</h3>
              <p className="text-gray-400">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
