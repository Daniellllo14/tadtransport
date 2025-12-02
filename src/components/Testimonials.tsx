import React from 'react'

const quotes = [
  {name:'Effektivitet', text:'Snabba leveranser och kort handläggningstid för alla uppdrag.'},
  {name:'Tillgänglighet', text:'Direkt kontakt med våra medarbetare för snabb service.'},
  {name:'Partnerskap', text:'Vi arbetar som er logistikpartner för långsiktiga relationer.'},
  {name:'Flexibilitet', text:'Skräddarsydda lösningar anpassade efter era specifika behov.'}
]

export default function Testimonials(){
  return (
    <section className="py-12 bg-white/2">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold text-white mb-6">Vad gör oss annorlunda?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {quotes.map(q=> (
            <blockquote key={q.name} className="p-6 rounded-lg bg-white/3 text-gray-100">
              <p className="mb-4">"{q.text}"</p>
              <cite className="text-sm text-tadGold font-semibold">— {q.name}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
