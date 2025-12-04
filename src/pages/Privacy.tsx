import React from 'react'

export default function Privacy(){
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Integritetspolicy</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Hantering av personuppgifter</h2>
            <p>
              TAD transport AB ("vi", "oss", "vårt") respekterar din integritet och är engagerade i att skydda dina personuppgifter. 
              Denna integritetspolicy förklarar hur vi samlar in, använder och skyddar information om dig när du använder vår webbplats och tjänster.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Vilka uppgifter samlar vi in?</h2>
            <p>Vi kan samla in följande typer av information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kontaktinformation (namn, e-postadress, telefonnummer)</li>
              <li>Företagsinformation (organisationsnummer, adress)</li>
              <li>Information om leveranser och transporter</li>
              <li>Teknisk information (IP-adress, webbläsartyp, besöksstatistik)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Hur använder vi dina uppgifter?</h2>
            <p>Vi använder dina personuppgifter för att:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Utföra och administrera våra transporttjänster</li>
              <li>Kommunicera med dig om dina beställningar och leveranser</li>
              <li>Skicka viktig information om våra tjänster</li>
              <li>Förbättra vår webbplats och våra tjänster</li>
              <li>Uppfylla rättsliga krav</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Delning av information</h2>
            <p>
              Vi säljer eller hyr aldrig ut dina personuppgifter till tredje part. Vi kan dela information med:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Samarbetspartners som hjälper oss att leverera våra tjänster</li>
              <li>Myndigheter när det krävs enligt lag</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Dina rättigheter</h2>
            <p>Enligt GDPR har du rätt att:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Få tillgång till dina personuppgifter</li>
              <li>Rätta felaktiga uppgifter</li>
              <li>Radera dina uppgifter</li>
              <li>Invända mot behandling av dina uppgifter</li>
              <li>Begära dataportabilitet</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Cookies</h2>
            <p>
              Vi använder cookies för att förbättra din upplevelse på vår webbplats. Du kan när som helst ändra dina 
              cookie-inställningar i din webbläsare.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Kontakta oss</h2>
            <p>
              Om du har frågor om vår integritetspolicy eller hur vi hanterar dina personuppgifter, kontakta oss:
            </p>
            <p className="mt-4">
              <strong>TAD transport AB</strong><br />
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
