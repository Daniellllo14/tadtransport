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
              TAD transport AB grundades av fyra unga och erfarna logistikprofessionaler med ett gemensamt mål: att bygga Sveriges mest pålitliga transportföretag. Vi förstod att marknaden behövde en partner som kombinerade hastighet, pålitlighet och äkta kundvård.
            </p>
            <p className="text-gray-400 mb-4">
              Idag levererar vi paket och varor för e-commerce, retail och logistikföretag. Vi är B2B-fokuserade och arbetar med kontraktsbaserade leveranser där varje dag räknas. Vår framgång bygger på enkla principer: gör vad du lovar, häll 100% in, och skapa långsiktiga partnerskap.
            </p>
            <p className="text-gray-400">
              Vi är 4 ägare som är både hungriga och disciplinerade. Vi älskar att lösa svåra logistikproblem och bygga affärer som varar.
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
              <p className="text-gray-400">Vi rör oss fort</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10 text-center">
              <div className="text-4xl font-bold text-tadGold mb-2">Pålitligt</div>
              <p className="text-gray-400">Vi levererar</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10 text-center">
              <div className="text-4xl font-bold text-tadGold mb-2">Försäkrat</div>
              <p className="text-gray-400">Alltid skyddat</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10 text-center">
              <div className="text-4xl font-bold text-tadGold mb-2">Flexibelt</div>
              <p className="text-gray-400">Vi anpassar oss</p>
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
          <h3 className="text-2xl font-semibold text-white mb-2">Kontakta oss</h3>
          <p className="text-gray-400 mb-6">Vi erbjuder kostnadsfria konsultationer och snabb offerthantering.</p>
          <a href="/kontakt" className="inline-block px-8 py-3 bg-tadGold text-black font-semibold rounded-lg hover:bg-opacity-90 transition">
            Starta ett projekt
          </a>
        </div>
      </div>
    </section>
  )
}
