import React from 'react'

export default function About(){
  return (
    <section className="pt-20 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Om TadTransport</h1>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Vår historia</h2>
            <p className="text-gray-400 mb-4">
              TAD transport AB grundades av erfarna logistikprofessionaler med ett gemensamt mål: att leverera pålitliga och professionella transportlösningar. Vi fokuserar på att vara en pålitlig partner som kombinerar hastighet, precision och engagerad kundservice.
            </p>
            <p className="text-gray-400 mb-4">
              Vi levererar gods och varor för logistikföretag och företagskunder. Vi arbetar med kontraktsbaserade leveranser där precision och punktlighet är avgörande. Vår framgång bygger på tydliga principer: leverera enligt avtal, hålla våra åtaganden och bygga långsiktiga samarbeten.
            </p>
            <p className="text-gray-400">
              Vi är ett målmedvetet och disciplinerat team. Vi strävar efter att lösa logistikutmaningar med snabba och pålitliga chaufförer och bygga relationer med tillit som grund.
            </p>
            <img 
              src="/images/package-delivery.jpg" 
              alt="TAD TRANSPORT paket redo för leverans" 
              className="mt-8 w-full max-w-md rounded-xl shadow-2xl"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10 text-center">
              <div className="text-4xl font-bold text-tadGold mb-2">Snabbt</div>
              <p className="text-gray-400">Optimerade rutter och erfarna förare säkerställer att era leveranser når fram i tid, varje gång. Vi planerar proaktivt och hanterar trafik effektivt.</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10 text-center">
              <div className="text-4xl font-bold text-tadGold mb-2">Pålitligt</div>
              <p className="text-gray-400">Över 98% punktlighet och konsekvent kvalitet i varje leverans. Vi håller våra löften och tar ansvar när något inte går enligt plan.</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10 text-center">
              <div className="text-4xl font-bold text-tadGold mb-2">Professionellt</div>
              <p className="text-gray-400">Erfarna chaufförer med godkänt för yrkesmässig trafik och lång erfarenhet av att köra paket och gods för företag.</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10 text-center">
              <div className="text-4xl font-bold text-tadGold mb-2">Flexibelt</div>
              <p className="text-gray-400">Vi skräddarsyr lösningar efter era behov med flexibla avtalstider, anpassade rapporteringsrutiner och möjlighet till korta beslutsvägar.</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">Vårt team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <img src="/images/daniel.png" alt="Daniel Yamout" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover object-top border-4 border-tadGold/30" />
              <h3 className="text-xl font-semibold text-white mb-1">Daniel Yamout</h3>
              <p className="text-tadGold text-sm font-medium mb-2">Ansvarig för digitalisering och IT-system</p>
              <p className="text-gray-400 text-sm">Schemaläggning, kodning och tekniska lösningar</p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-tadGold/30 overflow-hidden bg-gradient-to-br from-white/5 to-white/2">
                <img src="/images/marwan.png" alt="Marwan Salim" className="w-full h-full object-cover scale-110" style={{objectPosition: '60% 50%'}} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">Marwan Salim</h3>
              <p className="text-tadGold text-sm font-medium mb-2">Fordonsansvarig</p>
              <p className="text-gray-400 text-sm">Besiktningar, underhåll och fordonshantering</p>
            </div>
            <div className="text-center">
              <img src="/images/toufic.jpg" alt="Toufic Kanj" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-tadGold/30" style={{objectPosition: '70% center'}} />
              <h3 className="text-xl font-semibold text-white mb-1">Toufic Kanj</h3>
              <p className="text-tadGold text-sm font-medium mb-2">Lagerchef och personalansvarig</p>
              <p className="text-gray-400 text-sm">Lagerverksamhet och rekrytering</p>
            </div>
            <div className="text-center">
              <img src="/images/adam.jpg" alt="Adam Chahine" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover object-top border-4 border-tadGold/30" />
              <h3 className="text-xl font-semibold text-white mb-1">Adam Chahine</h3>
              <p className="text-tadGold text-sm font-medium mb-2">Lagerchef och personalansvarig</p>
              <p className="text-gray-400 text-sm">Lagerverksamhet och rekrytering</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">Våra värderingar</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">🎯 Pålitlighet först</h3>
              <p className="text-gray-400">Vi lovar vad vi kan leverera och levererar vad vi lovar. Tiden på dygnet är inte relevant — vi levererar på överenskommet tidpunkt.</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">⚡ Effektivitet</h3>
              <p className="text-gray-400">Vi säger nej till slöseriet. Varje leverans är optimerad för kostnad och tid — utan att kompromissa på kvalitet.</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">🤝 Äkta partnerskap</h3>
              <p className="text-gray-400">Vi är inte bara en leverantör. Vi sitter på samma sida av bordet och vill att dina affärer lyckas.</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">👥 Människor av klass</h3>
              <p className="text-gray-400">Vår team är förare, ledare och affärspersoner som faktiskt bryr sig. Du märker skillnaden.</p>
            </div>
          </div>
        </div>

        <div className="text-center p-8 rounded-lg bg-white/2 border border-white/10">
          <h3 className="text-2xl font-semibold text-white mb-2">Diskutera era transportbehov</h3>
          <p className="text-gray-400 mb-6">Kontakta oss för att diskutera kontraktsbaserade transportlösningar anpassade efter era volymer och krav.</p>
          <a href="/kontakt" className="inline-block px-8 py-3 bg-tadGold text-black font-semibold rounded-lg hover:bg-opacity-90 transition">
            Kontakta oss
          </a>
        </div>
      </div>
    </section>
  )
}
