import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

import foto1 from '../assets/foto/foto-1.webp'
import foto15 from '../assets/foto/foto-15.webp'
import foto19 from '../assets/foto/foto-19.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    motivo: '',
    messaggio: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const heroRef = useRef(null)
  const infoRef = useRef(null)
  const formRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero character animation
      gsap.from('.hero-char', {
        y: 150,
        rotationX: 90,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.03,
        delay: 0.3
      })

      // Hero subtitle
      gsap.from('.hero-sub', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8
      })

      // Floating images
      gsap.to('.floating-img', {
        y: -20,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.5, from: 'random' }
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  // Info section animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.info-card', {
        y: 60,
        opacity: 0,
        rotation: (i) => (i % 2 === 0 ? -2 : 2),
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: infoRef.current,
          start: 'top 70%',
        }
      })
    }, infoRef)

    return () => ctx.revert()
  }, [])

  // Form section animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.form-element', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 70%',
        }
      })
    }, formRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await new Promise(resolve => setTimeout(resolve, 800))
    setSubmitted(true)
  }

  // Split title into characters
  const titleLine1 = "Vieni a".split('')
  const titleLine2 = "Trovarci".split('')

  return (
    <div className="bg-[var(--grigio-perla)]">
      {/* CINEMATIC HERO */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden bg-[var(--notte)]">
        {/* Floating preview images */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-img absolute top-[20%] left-[8%] w-32 h-40 md:w-44 md:h-52 opacity-25 rotate-[-6deg]">
            <img src={foto1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="floating-img absolute top-[30%] right-[10%] w-28 h-36 md:w-40 md:h-48 opacity-20 rotate-[4deg]">
            <img src={foto15} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="floating-img absolute bottom-[25%] right-[25%] w-36 h-28 md:w-48 md:h-36 opacity-15 rotate-[-3deg]">
            <img src={foto19} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--notte)] via-transparent to-[var(--notte)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--notte)] via-transparent to-[var(--notte)] opacity-60" />

        {/* Main content */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 pt-32 pb-16">
          <span className="hero-sub block text-[var(--tramonto)] text-sm tracking-[0.3em] uppercase mb-8">
            Porto Turistico di Lovere
          </span>

          {/* Main title with character animation */}
          <h1 className="font-bold text-white leading-[0.85] overflow-hidden" style={{ fontSize: 'clamp(3rem, 12vw, 12rem)' }}>
            <span className="block">
              {titleLine1.map((char, i) => (
                <span key={i} className="hero-char inline-block">{char === ' ' ? '\u00A0' : char}</span>
              ))}
            </span>
            <span className="block overflow-hidden mt-2">
              {titleLine2.map((char, i) => (
                <span key={i} className="hero-char inline-block text-stroke text-[var(--tramonto)]">
                  {char}
                </span>
              ))}
            </span>
          </h1>

          {/* Quick info */}
          <div className="hero-sub flex flex-wrap gap-8 mt-12">
            <div>
              <span className="text-white/40 text-xs tracking-wider uppercase block">Indirizzo</span>
              <span className="text-white text-lg">Via del Cantiere, 14 - Lovere (BG)</span>
            </div>
            <div>
              <span className="text-white/40 text-xs tracking-wider uppercase block">Telefono</span>
              <a href="tel:+393803654787" className="text-[var(--tramonto)] text-lg hover:text-white transition-colors">
                +39 380 365 4787
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-white/30 text-xs tracking-widest uppercase">Scopri di più</span>
            <div className="w-px h-16 bg-gradient-to-b from-[var(--tramonto)] to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="py-8 bg-[var(--tramonto)]">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-[var(--notte)] font-semibold text-lg">
              Preferisci contattarci direttamente?
            </p>
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="tel:+393803654787"
                className="inline-flex items-center gap-2 bg-[var(--notte)] text-white px-6 py-3 font-medium"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Chiamaci
              </motion.a>
              <motion.a
                href="https://wa.me/393803654787"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 font-medium"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section ref={infoRef} className="py-24 md:py-40">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left - Info cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Address card */}
              <motion.div
                className="info-card bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[var(--tramonto)] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                <span className="text-5xl mb-4 block">📍</span>
                <span className="text-[var(--tramonto)] text-xs tracking-widest uppercase">Indirizzo</span>
                <address className="not-italic text-[var(--carbone)] mt-3">
                  <p className="font-bold text-2xl">Artour Caffè</p>
                  <p className="text-[var(--grigio)] mt-2">Via del Cantiere, 14</p>
                  <p className="text-[var(--grigio)]">24065 Lovere (BG)</p>
                  <p className="text-[var(--lago)] mt-3 font-medium">Porto Turistico di Cornasola</p>
                </address>
                <a
                  href="https://maps.google.com/?q=Via+del+Cantiere+14+Lovere+BG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--tramonto)] hover:text-[var(--spritz)] transition-colors mt-6 font-medium"
                >
                  Apri in Google Maps
                  <span>→</span>
                </a>
              </motion.div>

              {/* Hours card */}
              <motion.div
                className="info-card bg-[var(--notte)] p-8 relative overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--tramonto)]/10 rounded-full blur-2xl" />
                <span className="text-5xl mb-4 block">🕐</span>
                <span className="text-[var(--tramonto)] text-xs tracking-widest uppercase">Orari</span>
                <h3 className="text-white font-bold text-2xl mt-3 mb-6">Quando siamo aperti</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between text-white/80 pb-4 border-b border-white/10">
                    <span>Lunedì</span>
                    <span className="text-[var(--spritz)] font-semibold">Chiuso</span>
                  </li>
                  <li className="flex justify-between text-white/80 pb-4 border-b border-white/10">
                    <span>Martedì — Giovedì</span>
                    <span>08:00 — 00:00</span>
                  </li>
                  <li className="flex justify-between text-white/80 pb-4 border-b border-white/10">
                    <span>Venerdì — Sabato</span>
                    <span className="text-[var(--tramonto)] font-semibold">08:00 — 02:00</span>
                  </li>
                  <li className="flex justify-between text-white/80">
                    <span>Domenica</span>
                    <span>08:00 — 00:00</span>
                  </li>
                </ul>
              </motion.div>

              {/* Contact card */}
              <motion.div
                className="info-card bg-[var(--lago)] p-8 text-white relative overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                <span className="text-5xl mb-4 block">📞</span>
                <span className="text-white/60 text-xs tracking-widest uppercase">Contatti Diretti</span>
                <div className="mt-6 space-y-4">
                  <a
                    href="tel:+393803654787"
                    className="block text-3xl font-bold hover:text-[var(--tramonto)] transition-colors"
                  >
                    380 365 4787
                  </a>
                  <a
                    href="mailto:info@artourcaffe.it"
                    className="block text-white/80 hover:text-white transition-colors"
                  >
                    info@artourcaffe.it
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right - Map + Form */}
            <div className="lg:col-span-6 lg:col-start-7 space-y-8">
              {/* Map */}
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 3%, 100% 100%, 0 97%)' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2779.8893071856645!2d10.065661315795526!3d45.81264997910753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47817e8f3d8c6add%3A0x1f6b7b7b7b7b7b7b!2sVia%20del%20Cantiere%2C%2014%2C%2024065%20Lovere%20BG!5e0!3m2!1sit!2sit!4v1629999999999!5m2!1sit!2sit"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Mappa Artour Caffè"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                {/* Map overlay badge */}
                <div className="absolute bottom-6 left-6 bg-[var(--notte)] text-white px-4 py-2 text-sm font-medium">
                  Porto Turistico
                </div>
              </div>

              {/* Form */}
              <div ref={formRef} className="bg-white p-8 md:p-12 shadow-sm">
                <span className="form-element text-[var(--tramonto)] text-xs tracking-widest uppercase">Scrivici</span>
                <h2 className="form-element text-[var(--carbone)] font-bold mt-2 mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  Invia un messaggio
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[var(--porto)]/10 border-2 border-[var(--porto)] p-8 text-center"
                  >
                    <span className="text-5xl block mb-4">✅</span>
                    <p className="text-[var(--porto)] font-bold text-2xl mb-2">Messaggio inviato!</p>
                    <p className="text-[var(--grigio)]">Ti risponderemo al più presto.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="form-element grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[var(--grigio)] text-xs tracking-wider uppercase block mb-2">Nome *</label>
                        <input
                          type="text"
                          placeholder="Il tuo nome"
                          required
                          value={formData.nome}
                          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                          className="w-full bg-[var(--grigio-perla)] border-0 border-b-2 border-transparent focus:border-[var(--lago)] py-4 px-4 text-[var(--carbone)] placeholder:text-[var(--grigio)]/50 outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[var(--grigio)] text-xs tracking-wider uppercase block mb-2">Email *</label>
                        <input
                          type="email"
                          placeholder="La tua email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[var(--grigio-perla)] border-0 border-b-2 border-transparent focus:border-[var(--lago)] py-4 px-4 text-[var(--carbone)] placeholder:text-[var(--grigio)]/50 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="form-element grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[var(--grigio)] text-xs tracking-wider uppercase block mb-2">Telefono</label>
                        <input
                          type="tel"
                          placeholder="Opzionale"
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                          className="w-full bg-[var(--grigio-perla)] border-0 border-b-2 border-transparent focus:border-[var(--lago)] py-4 px-4 text-[var(--carbone)] placeholder:text-[var(--grigio)]/50 outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[var(--grigio)] text-xs tracking-wider uppercase block mb-2">Motivo</label>
                        <select
                          value={formData.motivo}
                          onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
                          className="w-full bg-[var(--grigio-perla)] border-0 border-b-2 border-transparent focus:border-[var(--lago)] py-4 px-4 text-[var(--carbone)] outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Seleziona...</option>
                          <option value="info">Informazioni generali</option>
                          <option value="prenotazione">Prenotazione tavolo</option>
                          <option value="evento">Evento privato</option>
                          <option value="catering">Catering</option>
                          <option value="altro">Altro</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-element">
                      <label className="text-[var(--grigio)] text-xs tracking-wider uppercase block mb-2">Messaggio *</label>
                      <textarea
                        placeholder="Come possiamo aiutarti?"
                        required
                        rows={5}
                        value={formData.messaggio}
                        onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                        className="w-full bg-[var(--grigio-perla)] border-0 border-b-2 border-transparent focus:border-[var(--lago)] py-4 px-4 text-[var(--carbone)] placeholder:text-[var(--grigio)]/50 outline-none transition-colors resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="form-element w-full bg-[var(--lago)] text-white px-12 py-5 font-bold text-lg hover:bg-[var(--notte)] transition-colors"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      Invia messaggio
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO REACH US */}
      <section className="py-24 md:py-40 bg-[var(--notte)]">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-12 gap-16 items-end mb-16">
            <div className="lg:col-span-6">
              <span className="text-[var(--tramonto)] text-xs tracking-widest uppercase">Indicazioni</span>
              <h2 className="text-white font-bold mt-2 leading-[1.1]" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
                Come<br />
                <span className="text-stroke text-[var(--tramonto)]">raggiungerci</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="text-white/60 text-lg">
                Siamo facilmente raggiungibili in auto, con parcheggio gratuito nelle vicinanze.
                Il locale è accessibile a tutti.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🚗',
                title: 'In auto',
                items: ['Da Bergamo: ~35 km via SS42', 'Da Brescia: ~45 km via SS510', 'Da Milano: ~90 km via A4'],
              },
              {
                icon: '🅿️',
                title: 'Parcheggio',
                items: ['Parcheggio gratuito', 'Nelle vicinanze del porto', 'Ampio e comodo'],
              },
              {
                icon: '⛵',
                title: 'In battello',
                items: ['Fermata Porto Turistico', 'Collegamento con Monte Isola', 'Navigazione Lago d\'Iseo'],
              },
              {
                icon: '♿',
                title: 'Accessibilità',
                items: ['Ingresso accessibile', 'Bagno per disabili', 'Pet-friendly 🐕'],
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="border border-white/10 p-8 hover:border-[var(--tramonto)]/50 hover:bg-white/5 transition-all duration-500 group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-5xl mb-6 block group-hover:scale-110 transition-transform">{card.icon}</span>
                <h3 className="text-white font-bold text-xl mb-4">{card.title}</h3>
                <ul className="text-white/60 text-sm space-y-2">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-[var(--tramonto)] mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Distance badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            {[
              { city: 'Bergamo', dist: '35 km' },
              { city: 'Brescia', dist: '45 km' },
              { city: 'Milano', dist: '90 km' },
              { city: 'Iseo', dist: '25 km' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white/5 border border-white/10 px-6 py-4 text-center"
                whileHover={{ scale: 1.05, borderColor: 'var(--tramonto)' }}
              >
                <span className="text-[var(--tramonto)] font-bold text-2xl block">{item.dist}</span>
                <span className="text-white/50 text-xs tracking-wider uppercase">da {item.city}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL FOLLOW */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[var(--lago)] to-[var(--notte)]">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-white/50 text-xs tracking-widest uppercase">Seguici</span>
            <h2 className="text-white font-bold mt-4 mb-8" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
              Rimani in contatto
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-12">
              Seguici sui social per rimanere aggiornato su eventi, novità e tutto quello che succede al locale!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://www.instagram.com/artour_cafe_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold px-8 py-4"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @artour_cafe_
              </motion.a>

              <motion.a
                href="https://www.facebook.com/artourcaffe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#1877F2] text-white font-bold px-8 py-4"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-40 bg-[var(--tramonto)] relative overflow-hidden">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, var(--notte) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} />
        </div>

        <div className="relative z-10 px-6 md:px-12 lg:px-24 text-center">
          <span className="text-[var(--notte)]/60 text-xs tracking-widest uppercase">Ti aspettiamo</span>
          <h2 className="text-[var(--notte)] font-bold mt-4 mb-8" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
            A presto!
          </h2>
          <p className="text-[var(--notte)]/70 text-lg max-w-xl mx-auto mb-12">
            Che sia per un caffè veloce, un pranzo di lavoro o una serata con gli amici,
            saremo felici di accoglierti.
          </p>

          <motion.a
            href="https://maps.google.com/?q=Via+del+Cantiere+14+Lovere+BG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[var(--notte)] text-white px-10 py-5 font-bold text-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Portami lì
            <span>→</span>
          </motion.a>
        </div>
      </section>
    </div>
  )
}
