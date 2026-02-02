import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: '',
    privacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="py-32 pt-40 bg-gradient-lago">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-tramonto font-medium tracking-widest uppercase text-sm">Dove Siamo</span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6">
            Vieni a Trovarci
          </h1>
          <p className="text-white/80 text-xl max-w-3xl mx-auto">
            Porto Turistico di Lovere, sul Lago d'Iseo
          </p>
        </div>
      </section>

      {/* CONTACT INFO + MAP */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              {/* Phone - Big CTA */}
              <div className="bg-tramonto rounded-2xl p-8 mb-8 text-center">
                <p className="text-notte/70 text-sm font-medium mb-2">Chiamaci o scrivici</p>
                <a
                  href="tel:+393803654787"
                  className="flex items-center justify-center gap-3 text-3xl sm:text-4xl font-bold text-notte hover:opacity-80 transition-opacity"
                >
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  380 365 4787
                </a>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/393803654787"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-porto text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 mb-8"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Scrivici su WhatsApp
              </a>

              {/* Address */}
              <div className="bg-grigio-perla rounded-2xl p-8 mb-8">
                <h3 className="font-heading text-xl font-bold text-carbone mb-4">Indirizzo</h3>
                <address className="not-italic text-grigio leading-relaxed">
                  <p className="font-semibold text-carbone text-lg">Artour Caffè</p>
                  <p>Via del Cantiere, 14</p>
                  <p>24065 Lovere (BG)</p>
                  <p className="mt-2 text-lago">Porto Turistico di Cornasola</p>
                  <p className="text-sm text-grigio-chiaro">Lago d'Iseo - Sebino</p>
                </address>
                <a
                  href="https://maps.google.com/?q=Via+del+Cantiere+14+Lovere+BG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lago font-medium mt-4 hover:text-tramonto transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Apri in Google Maps
                </a>
              </div>

              {/* Social */}
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/artour_cafe_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-medium px-6 py-4 rounded-xl transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2779.8893071856645!2d10.065661315795526!3d45.81264997910753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47817e8f3d8c6add%3A0x1f6b7b7b7b7b7b7b!2sVia%20del%20Cantiere%2C%2014%2C%2024065%20Lovere%20BG!5e0!3m2!1sit!2sit!4v1629999999999!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Artour Caffè"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORARI */}
      <section className="py-20 lg:py-32 bg-grigio-perla">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-tramonto font-medium tracking-widest uppercase text-sm">—— Quando Trovarci</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-carbone mt-2">
              Orari di Apertura
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  {[
                    { day: 'Lunedì', hours: 'CHIUSO', closed: true },
                    { day: 'Martedì', hours: '08:00 - 00:00' },
                    { day: 'Mercoledì', hours: '08:00 - 00:00' },
                    { day: 'Giovedì', hours: '08:00 - 00:00' },
                    { day: 'Venerdì', hours: '08:00 - 02:00', lateNight: true },
                    { day: 'Sabato', hours: '08:00 - 02:00', lateNight: true },
                    { day: 'Domenica', hours: '08:00 - 00:00' },
                  ].map((row, index) => (
                    <tr key={row.day} className={index !== 6 ? 'border-b border-grigio-perla' : ''}>
                      <td className={`py-5 px-6 font-medium ${row.closed ? 'text-grigio-chiaro' : 'text-carbone'}`}>
                        {row.day}
                      </td>
                      <td className={`py-5 px-6 text-right font-semibold ${
                        row.closed ? 'text-spritz' : row.lateNight ? 'text-tramonto' : 'text-lago'
                      }`}>
                        {row.hours}
                        {row.lateNight && (
                          <span className="ml-2 text-xs bg-tramonto/10 text-tramonto px-2 py-1 rounded-full">
                            Late Night
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <p className="text-grigio">
                <span className="font-semibold text-carbone">Colazione</span> disponibile tutto il giorno
              </p>
              <p className="text-grigio">
                <span className="font-semibold text-carbone">Aperitivo</span> dalle 18:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COME RAGGIUNGERCI */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-tramonto font-medium tracking-widest uppercase text-sm">—— Indicazioni</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-carbone mt-2">
              Come Raggiungerci
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* In Auto */}
            <div className="bg-grigio-perla rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-lago/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-lago" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 4h4m6-4v8a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h2l2-3h4l2 3h2a2 2 0 012 2z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-carbone mb-4">In Auto</h3>
              <ul className="text-grigio text-sm space-y-2">
                <li><strong>Da Bergamo:</strong> ~35 km via SS42</li>
                <li><strong>Da Brescia:</strong> ~45 km via SS510</li>
                <li><strong>Da Milano:</strong> ~90 km via A4 + SS42</li>
              </ul>
            </div>

            {/* Parcheggio */}
            <div className="bg-grigio-perla rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-porto/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-porto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-carbone mb-4">Parcheggio</h3>
              <p className="text-grigio text-sm">
                Parcheggio gratuito disponibile nelle vicinanze del Porto Turistico
              </p>
            </div>

            {/* In Battello */}
            <div className="bg-grigio-perla rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-cielo/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cielo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15l4-8 4 8m-4-8v8m6-8l4 8 4-8m-4 8v-8M3 21h18" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-carbone mb-4">In Battello</h3>
              <p className="text-grigio text-sm">
                Collegamento con gli altri paesi del Lago d'Iseo via servizio di navigazione
              </p>
            </div>
          </div>

          {/* Accessibilità */}
          <div className="max-w-2xl mx-auto mt-12 bg-lago/5 rounded-2xl p-8">
            <h3 className="font-heading text-xl font-bold text-carbone mb-4 text-center">Accessibilità</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: '♿', text: 'Ingresso accessibile' },
                { icon: '🚻', text: 'Bagno accessibile' },
                { icon: '🅿️', text: 'Parcheggio accessibile' },
                { icon: '🐕', text: 'Pet-friendly' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <span className="text-3xl mb-2">{item.icon}</span>
                  <span className="text-sm text-grigio">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORM CONTATTO */}
      <section className="py-20 lg:py-32 bg-grigio-perla">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-tramonto font-medium tracking-widest uppercase text-sm">—— Scrivici</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-carbone mt-2">
              Inviaci un Messaggio
            </h2>
            <p className="text-grigio mt-4">Ti rispondiamo entro 24 ore</p>
          </div>

          {submitted ? (
            <div className="bg-porto/10 border border-porto rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-porto/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-porto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-carbone mb-2">Messaggio Inviato!</h3>
              <p className="text-grigio">Grazie per averci contattato. Ti risponderemo al più presto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-carbone mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-grigio-chiaro focus:border-lago focus:ring-2 focus:ring-lago/20 outline-none transition-all"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-carbone mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-grigio-chiaro focus:border-lago focus:ring-2 focus:ring-lago/20 outline-none transition-all"
                    placeholder="La tua email"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="telefono" className="block text-sm font-medium text-carbone mb-2">
                  Telefono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-grigio-chiaro focus:border-lago focus:ring-2 focus:ring-lago/20 outline-none transition-all"
                  placeholder="Il tuo numero di telefono"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="messaggio" className="block text-sm font-medium text-carbone mb-2">
                  Messaggio *
                </label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  required
                  rows={5}
                  value={formData.messaggio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-grigio-chiaro focus:border-lago focus:ring-2 focus:ring-lago/20 outline-none transition-all resize-none"
                  placeholder="Come possiamo aiutarti?"
                />
              </div>

              <div className="mb-8">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="privacy"
                    required
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 text-lago rounded focus:ring-lago"
                  />
                  <span className="text-sm text-grigio">
                    Ho letto e accetto la{' '}
                    <Link to="/privacy-policy" className="text-lago hover:text-tramonto">
                      Privacy Policy
                    </Link>
                    . *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-lago hover:bg-lago-dark text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
              </button>

              <p className="text-center text-grigio-chiaro text-sm mt-4">
                Oppure chiamaci al{' '}
                <a href="tel:+393803654787" className="text-lago hover:text-tramonto">
                  380 365 4787
                </a>
                {' '}o scrivici su{' '}
                <a href="https://wa.me/393803654787" className="text-porto hover:text-porto/80">
                  WhatsApp
                </a>
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
