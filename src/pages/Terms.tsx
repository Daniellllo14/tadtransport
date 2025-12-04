import React from 'react'

export default function Terms(){
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Användarvillkor</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Allmänna villkor</h2>
            <p>
              Dessa användarvillkor ("Villkor") reglerar din användning av TAD transport AB:s ("TAD transport", "vi", "oss") 
              webbplats och tjänster. Genom att använda våra tjänster accepterar du dessa villkor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Våra tjänster</h2>
            <p>
              TAD transport erbjuder professionella transport- och logistiktjänster inklusive:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Budtjänster och expressleveranser</li>
              <li>Paket- och varudistribution</li>
              <li>Logistiklösningar för företag</li>
              <li>Flyttjänster</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Beställning och bokning</h2>
            <p>
              När du beställer våra tjänster förbinder du dig att:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Lämna korrekta och fullständiga uppgifter</li>
              <li>Se till att godset är korrekt packat och märkt</li>
              <li>Informera om eventuella farliga eller ömtåliga varor</li>
              <li>Betala överenskommet pris enligt faktura</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Priser och betalning</h2>
            <p>
              Alla priser anges i svenska kronor (SEK) exklusive moms. Betalning ska ske enligt överenskommelse, 
              vanligtvis inom 30 dagar från fakturadatum. Vid försenad betalning tillkommer dröjsmålsränta enligt lag.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Ansvar och försäkring</h2>
            <p>
              TAD transport är försäkrat för transportskador enligt gällande lagar och förordningar. 
              Vårt ansvar är begränsat enligt:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>CMR-konventionen för vägtransporter</li>
              <li>Allmänna bestämmelser för godsbefordran (ABG 2015)</li>
              <li>Våra försäkringsvillkor</li>
            </ul>
            <p className="mt-4">
              För värdefulla eller ömtåliga varor rekommenderar vi tilläggsförsäkring som kan tecknas vid bokning.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Leveranstid</h2>
            <p>
              Vi strävar efter att leverera enligt överenskomna tider. Angivna leveranstider är uppskattningar och 
              utgör inte bindande åtaganden. Vi ansvarar inte för förseningar orsakade av omständigheter utanför vår kontroll 
              såsom trafikolyckor, väderförhållanden eller force majeure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Avbokning och ändring</h2>
            <p>
              Avbokning eller ändring av bokning ska göras snarast möjligt. Vid avbokning senare än 24 timmar före 
              planerad hämtning kan en avgift tas ut motsvarande 50% av transportkostnaden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Reklamation</h2>
            <p>
              Reklamation ska göras skriftligt inom 7 dagar från leverans. Vid synliga skador ska detta noteras vid 
              mottagandet. Kontakta oss omedelbart om problem uppstår.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Ändringar av villkor</h2>
            <p>
              Vi förbehåller oss rätten att när som helst ändra dessa villkor. Ändringar träder i kraft när de 
              publiceras på vår webbplats. Din fortsatta användning av våra tjänster efter sådana ändringar 
              innebär att du accepterar de uppdaterade villkoren.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Tillämplig lag</h2>
            <p>
              Dessa villkor regleras av svensk lag. Eventuella tvister ska i första hand lösas genom förhandling. 
              Om överenskommelse inte kan nås ska tvisten avgöras av svensk domstol.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Kontakt</h2>
            <p>
              Om du har frågor om våra användarvillkor, kontakta oss:
            </p>
            <p className="mt-4">
              <strong>TAD transport AB</strong><br />
              c/o Bechlaoui<br />
              Bäverbäcksgränd 155<br />
              124 62 Bandhagen<br /><br />
              E-post: <a href="mailto:info@tadtransport.se" className="text-tadGold hover:underline">info@tadtransport.se</a><br />
              Telefon: <a href="tel:+46707240639" className="text-tadGold hover:underline">+46 70-724 06 39</a><br />
              Org.nr: 559541-8087
            </p>
          </section>

          <p className="text-sm text-gray-400 mt-8">
            Senast uppdaterad: December 2025
          </p>
        </div>
      </div>
    </div>
  )
}
