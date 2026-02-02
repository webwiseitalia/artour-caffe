import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

// Import images
import buffet from '../assets/foto/foto-15.webp'
import catering from '../assets/foto/foto-22.webp'
import miniburger from '../assets/foto/foto-16.webp'
import tartine from '../assets/foto/foto-18.webp'
import serata from '../assets/foto/foto-21.webp'
import cocktailSerale from '../assets/foto/foto-19.webp'
import cocktailArancio from '../assets/foto/foto-3.webp'
import cocktailRosso from '../assets/foto/foto-2.webp'
import crostini from '../assets/foto/foto-17.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Eventi() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-title', {
        y: 150,
        opacity: 0,
        duration: 1.4,
        ease: 'power4.out',
        delay: 0.2
      })

      gsap.from('.hero-desc', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
      })

      // Stats animation
      gsap.from('.stat-card', {
        y: 60,
        opacity: 0,
        rotation: (i) => (i % 2 === 0 ? -5 : 5),
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 80%',
        }
      })

      // Weekend section parallax
      gsap.to('.weekend-img', {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.weekend-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })

      // Collab cards
      gsap.from('.collab-card', {
        y: 100,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.collab-section',
          start: 'top 70%',
        }
      })

      // Private events gallery
      gsap.from('.private-img', {
        y: 80,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.private-section',
          start: 'top 70%',
        }
      })

      // Timeline items
      gsap.from('.timeline-item', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.timeline-section',
          start: 'top 70%',
        }
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="bg-[var(--grigio-perla)]">
      {/* HERO - CINEMATIC */}
      <section className="relative min-h-[90vh] flex items-end pb-16 bg-[var(--notte)] overflow-hidden">
        <div className="absolute inset-0">
          <img src={buffet} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--notte)] via-[var(--notte)]/50 to-[var(--notte)]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--notte)]/90 via-[var(--notte)]/50 to-transparent" />
        </div>

        <div className="relative z-10 px-6 md:px-12 lg:px-24 w-full pt-32">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <span className="text-[var(--tramonto)] text-xs tracking-[0.3em] uppercase block mb-6">
                Eventi & Serate
              </span>
              <h1 className="hero-title text-white font-bold leading-[0.85]" style={{ fontSize: 'clamp(3.5rem, 12vw, 10rem)' }}>
                Non solo<br />
                <span className="text-stroke text-[var(--tramonto)]">un caffè</span>
              </h1>
              <p className="hero-desc text-white/60 text-xl max-w-xl mt-8 leading-relaxed">
                Serate fino a tarda notte, eventi privati su misura, collaborazioni con la comunità locale.
                Artour Caffè è il cuore pulsante del Porto Turistico di Lovere.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/30 text-[10px] tracking-widest uppercase">Scopri</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="stats-section py-12 bg-[var(--notte)] border-t border-white/10">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 'Ven-Sab', label: 'Serate Speciali' },
              { value: '2:00', label: 'Aperti fino a' },
              { value: '50+', label: 'Eventi l\'anno' },
              { value: '∞', label: 'Momenti unici' },
            ].map((stat, i) => (
              <div key={i} className="stat-card text-center p-6 border border-white/10">
                <p className="text-[var(--tramonto)] font-bold text-3xl md:text-4xl">{stat.value}</p>
                <p className="text-white/50 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEEKEND NIGHTS */}
      <section className="weekend-section py-32 md:py-48">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 bg-[var(--spritz)] text-white text-sm font-semibold px-5 py-2 mb-8">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Ogni Weekend
              </span>
              <h2 className="text-[var(--carbone)] font-bold leading-[0.95]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                Serate<br />
                <span className="text-[var(--lago)]">fino alle 2:00</span>
              </h2>
              <p className="text-[var(--grigio)] text-lg leading-relaxed mt-8 mb-6">
                Il venerdì e il sabato Artour Caffè si trasforma: l'atmosfera si fa più
                intima, le luci più soffuse, la musica accompagna i cocktail preparati
                con cura dal nostro staff.
              </p>
              <p className="text-[var(--grigio)] leading-relaxed mb-12">
                È il momento perfetto per un dopocena con gli amici, un appuntamento
                speciale, o semplicemente per godersi la vista sul porto illuminato
                mentre sorseggi il tuo drink preferito.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: '🍸', title: 'Cocktail', desc: 'Classici & Signature' },
                  { icon: '🎵', title: 'Musica', desc: 'Atmosfera curata' },
                  { icon: '🌙', title: 'Vista', desc: 'Porto illuminato' },
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-white">
                    <span className="text-3xl block mb-2">{item.icon}</span>
                    <p className="font-bold text-[var(--carbone)] text-sm">{item.title}</p>
                    <p className="text-[var(--grigio)] text-xs mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="relative">
                <div className="overflow-hidden" style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)' }}>
                  <img
                    src={cocktailSerale}
                    alt=""
                    className="weekend-img w-full aspect-[4/5] object-cover scale-110"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-[var(--notte)] p-8">
                  <p className="text-[var(--tramonto)] font-bold text-3xl">La Notte</p>
                  <p className="text-white/50 text-sm mt-1">inizia qui</p>
                </div>
                <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-[var(--tramonto)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COCKTAIL GALLERY */}
      <section className="py-8 bg-[var(--notte)] overflow-hidden">
        <div className="flex gap-4" style={{ width: 'max-content' }}>
          {[cocktailSerale, cocktailArancio, cocktailRosso, serata, cocktailSerale, cocktailArancio, cocktailRosso, serata].map((img, i) => (
            <div key={i} className="w-[250px] h-[180px] overflow-hidden">
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* COMMUNITY / COLLABORATIONS */}
      <section className="collab-section py-32 md:py-48 bg-[var(--notte)]">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-12 gap-8 mb-20">
            <div className="lg:col-span-7">
              <span className="text-[var(--tramonto)] text-xs tracking-[0.3em] uppercase">Collaborazioni</span>
              <h2 className="text-white font-bold leading-[0.95] mt-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                Parte attiva<br />
                <span className="text-stroke text-[var(--tramonto)]">della comunità</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 lg:pt-8">
              <p className="text-white/60 leading-relaxed">
                Non siamo solo un locale. Siamo parte del tessuto sociale di Lovere,
                partner di eventi culturali e collaboratori delle istituzioni locali.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* The Urban Steps */}
            <div className="collab-card group">
              <div className="border border-white/10 overflow-hidden hover:border-[var(--tramonto)]/50 transition-all duration-700">
                <div className="aspect-[16/9] bg-gradient-to-br from-[var(--lago)] to-[var(--lago-dark)] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                      backgroundSize: '30px 30px'
                    }} />
                  </div>
                  <div className="relative text-center">
                    <p className="text-white font-bold tracking-[0.5em]" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>THE URBAN STEPS</p>
                    <p className="text-white/50 mt-2 text-sm tracking-[0.3em]">EVENTO PARTNER</p>
                  </div>
                </div>
                <div className="p-8 lg:p-10 bg-white/5">
                  <h3 className="text-white font-bold text-2xl mb-4">The Urban Steps</h3>
                  <p className="text-white/60 leading-relaxed mb-6">
                    Siamo orgogliosi partner di The Urban Steps, evento che celebra la cultura
                    urbana e artistica di Lovere. Michele Zana è attivamente coinvolto
                    nell'organizzazione, portando Artour Caffè nel cuore della manifestazione.
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-[var(--lago)] font-semibold">Arte, musica e community</span>
                    <span className="text-[var(--tramonto)]">→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Loco */}
            <div className="collab-card group lg:mt-16">
              <div className="border border-white/10 overflow-hidden hover:border-[var(--tramonto)]/50 transition-all duration-700">
                <div className="aspect-[16/9] bg-gradient-to-br from-[var(--tramonto)] to-[var(--spritz)] flex items-center justify-center relative overflow-hidden">
                  <div className="relative text-center">
                    <p className="text-[var(--notte)] font-bold" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>PRO LOCO</p>
                    <p className="text-[var(--notte)]/60 mt-2 text-sm tracking-[0.3em]">LOVERE</p>
                  </div>
                </div>
                <div className="p-8 lg:p-10 bg-white/5">
                  <h3 className="text-white font-bold text-2xl mb-4">Pro Loco Lovere</h3>
                  <p className="text-white/60 leading-relaxed mb-6">
                    Collaboriamo con la Pro Loco di Lovere per promuovere il territorio
                    e le sue tradizioni. Durante le festività e gli eventi locali,
                    Artour Caffè è sempre presente come punto di riferimento.
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-[var(--tramonto)] font-semibold">Tradizione e territorio</span>
                    <span className="text-[var(--tramonto)]">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVATE EVENTS */}
      <section className="private-section py-32 md:py-48">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Content */}
            <div className="lg:col-span-5 lg:order-2">
              <span className="text-[var(--tramonto)] text-xs tracking-[0.3em] uppercase">Su Misura</span>
              <h2 className="text-[var(--carbone)] font-bold leading-[0.95] mt-4 mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                Eventi<br />
                <span className="text-stroke text-[var(--lago)]">Privati</span>
              </h2>
              <p className="text-[var(--grigio)] text-lg leading-relaxed mb-6">
                Stai organizzando una festa di compleanno, un evento aziendale, o una
                ricorrenza speciale? Artour Caffè può ospitare il tuo evento con
                un servizio completamente su misura.
              </p>
              <p className="text-[var(--grigio)] leading-relaxed mb-10">
                Dal buffet di tartine gourmet ai nostri iconici mini burger colorati,
                dalla selezione di vini ai cocktail signature: creiamo insieme
                l'esperienza perfetta per i tuoi ospiti.
              </p>

              <ul className="space-y-4 mb-12">
                {[
                  'Buffet personalizzati',
                  'Finger food e tartine gourmet',
                  'Cocktail bar dedicato',
                  'Location con vista porto',
                  'Capacità fino a 80 persone',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="w-10 h-10 border border-[var(--tramonto)] text-[var(--tramonto)] flex items-center justify-center font-bold text-sm">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[var(--carbone)] font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="https://wa.me/393803654787?text=Ciao!%20Vorrei%20informazioni%20per%20organizzare%20un%20evento%20privato"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-[#25D366] text-white px-10 py-5 font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contattaci su WhatsApp
              </motion.a>
            </div>

            {/* Gallery */}
            <div className="lg:col-span-6 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="private-img">
                  <img src={catering} alt="" className="w-full aspect-[3/4] object-cover" />
                </div>
                <div className="private-img mt-12">
                  <img src={miniburger} alt="" className="w-full aspect-[3/4] object-cover" />
                </div>
                <div className="private-img -mt-12">
                  <img src={tartine} alt="" className="w-full aspect-[3/4] object-cover" />
                </div>
                <div className="private-img">
                  <img src={crostini} alt="" className="w-full aspect-[3/4] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE - TYPICAL EVENING */}
      <section className="timeline-section py-32 md:py-48 bg-[var(--notte)]">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-[var(--tramonto)] text-xs tracking-[0.3em] uppercase">La Serata Tipo</span>
              <h2 className="text-white font-bold leading-[0.95] mt-4" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
                Una notte<br />
                <span className="text-stroke text-[var(--tramonto)]">al porto</span>
              </h2>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="space-y-8">
                {[
                  { time: '18:00', title: 'Aperitivo', desc: 'Il sole inizia a calare. È l\'ora dello spritz superlativo.' },
                  { time: '20:00', title: 'Cena', desc: 'Tartine gourmet, taglieri e piatti della casa.' },
                  { time: '22:00', title: 'Cocktail', desc: 'I classici e le nostre creazioni signature.' },
                  { time: '00:00', title: 'Late Night', desc: 'La musica si alza, l\'atmosfera si scalda.' },
                  { time: '02:00', title: 'Closing', desc: 'L\'ultimo brindisi sotto le stelle del porto.' },
                ].map((item, i) => (
                  <div key={i} className="timeline-item flex gap-8 items-start">
                    <div className="w-20 shrink-0">
                      <span className="text-[var(--tramonto)] font-bold text-xl">{item.time}</span>
                    </div>
                    <div className="flex-1 border-l border-white/20 pl-8 pb-8">
                      <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-white/80 text-xs tracking-[0.3em] uppercase">Seguici</span>
              <h2 className="text-white font-bold leading-[0.95] mt-4" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
                @artour_cafe_
              </h2>
              <p className="text-white/80 text-lg mt-6 max-w-md">
                Scopri i nostri eventi, le novità del menu e i momenti speciali sul nostro Instagram.
              </p>
            </div>

            <div className="flex justify-start lg:justify-end">
              <motion.a
                href="https://www.instagram.com/artour_cafe_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-white text-[var(--notte)] font-semibold px-10 py-5 text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Seguici su Instagram
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-48 bg-[var(--lago)]">
        <div className="px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-white font-bold leading-[0.85] mb-8" style={{ fontSize: 'clamp(3rem, 8vw, 8rem)' }}>
            Ci Vediamo<br />
            <span className="text-stroke">Questo Weekend?</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12">
            Venerdì e sabato fino alle 2:00. Cocktail, musica, atmosfera.
            Il porto ti aspetta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contatti"
              className="inline-flex items-center justify-center gap-3 bg-[var(--tramonto)] text-[var(--notte)] px-10 py-5 font-semibold hover:bg-white transition-colors duration-500"
            >
              Come Arrivare
            </Link>
            <Link
              to="/menu#drinks"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-10 py-5 font-semibold hover:bg-white hover:text-[var(--lago)] transition-all duration-500"
            >
              Scopri i Cocktail
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
