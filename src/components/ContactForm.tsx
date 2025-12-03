import React from 'react'

export default function ContactForm(){
  return (
    <form name="contact" method="POST" data-netlify="true" className="grid gap-4">
      <input type="hidden" name="form-name" value="contact" />
      <label className="flex flex-col text-sm text-gray-200">
        Namn
        <input name="name" required className="mt-2 p-3 rounded bg-white/5 border-0 focus:ring-2 focus:ring-tadGold outline-none text-white" />
      </label>
      <label className="flex flex-col text-sm text-gray-200">
        E-post
        <input name="email" type="email" required className="mt-2 p-3 rounded bg-white/5 border-0 focus:ring-2 focus:ring-tadGold outline-none text-white" />
      </label>
      <label className="flex flex-col text-sm text-gray-200">
        Telefon
        <input name="phone" className="mt-2 p-3 rounded bg-white/5 border-0 focus:ring-2 focus:ring-tadGold outline-none text-white" />
      </label>
      <label className="flex flex-col text-sm text-gray-200">
        Meddelande
        <textarea name="message" rows={4} className="mt-2 p-3 rounded bg-white/5 border-0 focus:ring-2 focus:ring-tadGold outline-none text-white resize-none" />
      </label>
      <div>
        <button type="submit" className="btn-gold px-5 py-2 rounded-md">Skicka</button>
      </div>
    </form>
  )
}
