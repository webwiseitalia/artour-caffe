import { useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

import heroImage from '../assets/foto/foto-1.webp'
import cocktailArancio from '../assets/foto/foto-3.webp'
import cocktailRosso from '../assets/foto/foto-2.webp'
import focacciaRucola from '../assets/foto/foto-5.webp'
import colazione from '../assets/foto/foto-8.webp'
import pancake from '../assets/foto/foto-7.webp'
import cocktailSerale from '../assets/foto/foto-19.webp'
import buffet from '../assets/foto/foto-15.webp'
import tartine from '../assets/foto/foto-13.webp'
import dessert from '../assets/foto/foto-20.webp'
import focacciaMortadella from '../assets/foto/foto-4.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Homepage() {
  const containerRef = useRef(null)
  const heroRef = useRef(null)

  // Magnetic button effect
  const handleMagnetic = useCallback((e) => {
    const btn = e.currentTarget
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out'
    })
  }, [])

  const handleMagneticLeave = useCallback((e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    })
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Hero parallax on scroll
      if (heroRef.current) {
        const heroImg = heroRef.current.querySelector('img')
        gsap.to(heroImg, {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        })
      }

      // Fade up with stagger for grouped elements
      gsap.utils.toArray('.fade-up').forEach(el => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        })
      })

      // Slide in from left
      gsap.utils.toArray('.slide-in-left').forEach(el => {
        gsap.from(el, {
          x: -80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        })
      })

      // Slide in from right
      gsap.utils.toArray('.slide-in-right').forEach(el => {
        gsap.from(el, {
          x: 80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        })
      })

      // Image reveal with clip-path
      gsap.utils.toArray('.img-reveal').forEach(el => {
        gsap.from(el, {
          clipPath: 'inset(100% 0 0 0)',
          duration: 1.2,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          }
        })
      })

      // Scale up images on scroll
      gsap.utils.toArray('.img-scale-up').forEach(el => {
        const img = el.querySelector('img')
        if (img) {
          gsap.from(img, {
            scale: 1.3,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
            }
          })
        }
      })

      // Parallax images
      gsap.utils.toArray('.parallax-slow').forEach(el => {
        gsap.to(el, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        })
      })

      // Text split animation for big titles
      gsap.utils.toArray('.text-reveal').forEach(el => {
        gsap.from(el, {
          y: '100%',
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        })
      })

      // Horizontal line grow
      gsap.utils.toArray('.line-grow').forEach(el => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 1,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        })
      })

      // Counter animation for rating
      gsap.utils.toArray('.counter').forEach(el => {
        const target = parseFloat(el.dataset.target)
        gsap.from(el, {
          textContent: 0,
          duration: 2,
          ease: 'power2.out',
          snap: { textContent: 0.1 },
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          onUpdate: function() {
            el.textContent = parseFloat(el.textContent).toFixed(1)
          }
        })
      })

      // Stagger cards
      gsap.utils.toArray('.stagger-container').forEach(container => {
        const items = container.querySelectorAll('.stagger-item')
        gsap.from(items, {
          y: 80,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
          }
        })
      })

    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="bg-[#000000] overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════
          HERO - Titolo che si sovrappone alla sezione sotto
      ═══════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="h-[100svh] relative overflow-hidden">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

        <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="pt-20 flex justify-between text-[10px] tracking-[0.4em] text-white/40"
          >
            <span>LAGO D'ISEO</span>
            <span className="text-[#E8B86D]">VEN—SAB 2:00</span>
          </motion.div>

          <div className="pb-[15vh]">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-white font-bold leading-[0.85]"
                style={{ fontSize: 'clamp(4rem, 18vw, 16rem)' }}
              >
                ARTOUR
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#E8B86D] font-bold leading-[0.85]"
                style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}
              >
                CAFFÈ
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center gap-4 mt-6"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="w-16 h-px bg-[#E8B86D] origin-left"
              />
              <span className="text-white/30 text-xs tracking-widest">Porto Turistico di Lovere</span>
            </motion.div>
          </div>
        </div>

        {/* Elemento decorativo che "esce" dall'hero */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8, ease: 'easeOut' }}
          className="absolute bottom-0 right-[10%] translate-y-1/2 z-20 hidden lg:block"
        >
          <div
            className="bg-[#E8B86D] px-8 py-6 text-black cursor-pointer magnetic-btn"
            onMouseMove={handleMagnetic}
            onMouseLeave={handleMagneticLeave}
          >
            <span className="text-xs tracking-widest block">ORARI</span>
            <span className="text-2xl font-bold block mt-1">7 — 24</span>
            <span className="text-xs opacity-60">ven-sab 2:00</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-[10px] tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CHI SIAMO - Immagine che sovrappone il testo
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-20 relative">
        <div className="relative">
          {/* Immagine posizionata a destra */}
          <div className="lg:absolute lg:right-0 lg:top-0 lg:w-[60%] slide-in-right">
            <img
              src={buffet}
              alt=""
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
            {/* Label che esce dall'immagine */}
            <div className="absolute -bottom-6 left-6 md:left-12 bg-[#000000] px-6 py-4">
              <span className="text-white/30 text-[10px] tracking-widest">DAL</span>
              <span className="text-white text-3xl font-bold block">2019</span>
            </div>
          </div>

          {/* Testo */}
          <div className="lg:w-[45%] relative z-10 mt-12 lg:mt-0">
            <span className="text-[#E8B86D] text-[10px] tracking-[0.4em] fade-up">CHI SIAMO</span>
            <h2
              className="text-white font-bold mt-6 fade-up"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 0.95 }}
            >
              Il tuo<br />angolo<br />sul lago
            </h2>
            <p className="text-white/50 text-lg mt-8 leading-relaxed max-w-md fade-up">
              Nel cuore del Porto Turistico di Lovere, uno dei Borghi più belli d'Italia.
            </p>

            {/* Rating che si sovrappone */}
            <div className="mt-12 bg-[#111] p-6 inline-block relative z-20 slide-in-left">
              <div className="flex items-center gap-4">
                <span className="text-[#E8B86D] text-5xl font-bold counter" data-target="4.8">4.8</span>
                <div>
                  <span className="text-[#E8B86D] text-sm">★★★★★</span>
                  <span className="text-white/30 text-xs block">100+ recensioni</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          I MOMENTI - Card sfalsate con titoli sovrapposti
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#111] relative">
        {/* Titolo grande che si sovrappone alle card */}
        <h2
          className="text-white/[0.03] font-bold absolute top-20 left-0 right-0 text-center pointer-events-none select-none hidden lg:block"
          style={{ fontSize: 'clamp(8rem, 20vw, 25rem)' }}
        >
          MOMENTI
        </h2>

        <div className="relative z-10">
          {/* Header centrato */}
          <div className="text-center mb-16 fade-up">
            <span className="text-[#E8B86D] text-[10px] tracking-[0.4em]">I MOMENTI</span>
            <h2 className="text-white font-bold mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Un locale, mille sapori
            </h2>
            <Link to="/menu" className="inline-block mt-4 text-white/30 text-sm hover:text-[#E8B86D] transition-colors">
              Scopri il menu →
            </Link>
          </div>

          {/* Grid sfalsata */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 stagger-container">
            {[
              { title: 'Colazione', time: '8:00', img: colazione, offset: 'lg:mt-0' },
              { title: 'Pranzo', time: '12:00', img: focacciaRucola, offset: 'lg:mt-16' },
              { title: 'Aperitivo', time: '18:00', img: cocktailArancio, offset: 'lg:mt-8' },
              { title: 'Serata', time: '21:00', img: cocktailSerale, offset: 'lg:mt-24' },
            ].map((m, i) => (
              <Link
                key={m.title}
                to={`/menu#${m.title.toLowerCase()}`}
                className={`group stagger-item relative ${m.offset}`}
              >
                <div className="overflow-hidden img-scale-up">
                  <img
                    src={m.img}
                    alt={m.title}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                {/* Titolo che si sovrappone all'immagine */}
                <div className="absolute -bottom-4 left-4 right-4 md:-bottom-6 md:left-6">
                  <div className="bg-[#000000] px-4 py-3 inline-block group-hover:bg-[#E8B86D] transition-colors duration-300">
                    <span className="text-[#E8B86D] text-[10px] tracking-widest block group-hover:text-black transition-colors">{m.time}</span>
                    <h3 className="text-white font-bold text-xl md:text-2xl group-hover:text-black transition-colors">
                      {m.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          APERITIVO - Layout invertito (testo a destra)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-20 relative">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Immagini sovrapposte a SINISTRA */}
          <div className="lg:col-span-7 lg:col-start-1 relative order-2 lg:order-1">
            {/* Immagine principale */}
            <div className="slide-in-left">
              <img
                src={cocktailArancio}
                alt=""
                className="w-[85%] aspect-[4/5] object-cover"
                loading="lazy"
              />
            </div>
            {/* Immagine sovrapposta */}
            <div className="absolute -bottom-12 right-0 md:-right-6 w-[55%] slide-in-right">
              <img
                src={tartine}
                alt=""
                className="w-full aspect-square object-cover shadow-2xl"
                loading="lazy"
              />
              {/* Badge che esce */}
              <div className="absolute -top-4 -left-4 bg-[#FF6B35] text-white px-4 py-2 text-xs font-bold tracking-wider">
                GOURMET
              </div>
            </div>
          </div>

          {/* Colonna testo a DESTRA */}
          <div className="lg:col-span-4 lg:col-start-9 relative z-20 order-1 lg:order-2 lg:text-right">
            <span className="text-[#FF6B35] text-[10px] tracking-[0.4em] font-bold fade-up">DALLE 18:00</span>
            <h2
              className="text-white font-bold mt-4 fade-up"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.9 }}
            >
              Aperitivo
            </h2>
            <p className="text-white/50 text-lg mt-8 lg:ml-auto max-w-sm fade-up">
              Lo spritz superlativo e tartine gourmet. Il momento perfetto, al tramonto sul lago.
            </p>
            <Link
              to="/menu#aperitivo"
              className="inline-flex items-center gap-3 mt-8 text-[#E8B86D] hover:text-white transition-colors fade-up"
            >
              <span className="w-8 h-px bg-current" />
              <span className="text-sm tracking-wide">Menu aperitivo</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          GALLERIA - Composizione organica
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#111] relative overflow-hidden">
        {/* Titolo verticale decorativo */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:block">
          <span
            className="text-white/[0.03] font-bold whitespace-nowrap"
            style={{ fontSize: '10rem', writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
          >
            GALLERY
          </span>
        </div>

        <div className="px-6 md:px-12 lg:px-20 relative z-10">
          {/* Header galleria - allineato a DESTRA */}
          <div className="text-right mb-12 fade-up">
            <span className="text-[#E8B86D] text-[10px] tracking-[0.4em]">GALLERIA</span>
            <h2 className="text-white font-bold mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              I nostri momenti
            </h2>
            <Link to="/galleria" className="inline-block mt-4 text-white/30 text-sm hover:text-[#E8B86D] transition-colors">
              Vedi tutte →
            </Link>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* Grande a sinistra */}
            <div className="col-span-12 md:col-span-7 overflow-hidden img-reveal group cursor-pointer">
              <img src={colazione} alt="" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            {/* Piccola in alto a destra */}
            <div className="col-span-6 md:col-span-5 md:mt-20 overflow-hidden img-reveal group cursor-pointer">
              <img src={focacciaMortadella} alt="" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            {/* Media in basso a sinistra, sovrapposta */}
            <div className="col-span-6 md:col-span-4 md:-mt-24 relative z-10 overflow-hidden img-reveal group cursor-pointer">
              <img src={dessert} alt="" className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            {/* Grande centrale */}
            <div className="col-span-12 md:col-span-6 md:-mt-12 overflow-hidden img-reveal group cursor-pointer">
              <img src={cocktailSerale} alt="" className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            {/* Piccola a destra */}
            <div className="col-span-6 md:col-span-2 md:mt-8 overflow-hidden img-reveal group cursor-pointer">
              <img src={pancake} alt="" className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          EVENTI - Titolo che entra nell'immagine
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-20 relative">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Header con titolo che si sovrappone */}
          <div className="lg:col-span-5 relative z-20">
            <span className="text-[#E8B86D] text-[10px] tracking-[0.4em] fade-up">PROSSIMI</span>
            <h2
              className="text-white font-bold mt-4 fade-up"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.9 }}
            >
              Eventi
            </h2>

            {/* Card eventi */}
            <div className="mt-12 space-y-4 stagger-container">
              <Link to="/eventi" className="stagger-item block p-6 bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 group hover:translate-x-2">
                <div className="flex gap-6 items-start">
                  <div className="text-[#E8B86D]">
                    <span className="text-4xl font-bold block">15</span>
                    <span className="text-[10px] tracking-wider">FEB</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl group-hover:text-[#E8B86D] transition-colors">
                      DJ Set al tramonto
                    </h4>
                    <p className="text-white/40 text-sm mt-1">Sabato · 21:00</p>
                  </div>
                  <span className="ml-auto text-white/0 group-hover:text-[#E8B86D] transition-all duration-300 text-2xl">→</span>
                </div>
              </Link>

              <Link to="/eventi" className="stagger-item block p-6 bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 group hover:translate-x-2">
                <div className="flex gap-6 items-start">
                  <div className="text-[#E8B86D]">
                    <span className="text-4xl font-bold block">21</span>
                    <span className="text-[10px] tracking-wider">FEB</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl group-hover:text-[#E8B86D] transition-colors">
                      Live Music Night
                    </h4>
                    <p className="text-white/40 text-sm mt-1">Venerdì · 21:30</p>
                  </div>
                  <span className="ml-auto text-white/0 group-hover:text-[#E8B86D] transition-all duration-300 text-2xl">→</span>
                </div>
              </Link>
            </div>

            <Link to="/eventi" className="inline-block mt-8 text-white/30 text-sm hover:text-[#E8B86D] transition-colors fade-up">
              Tutti gli eventi →
            </Link>
          </div>

          {/* Immagine evento principale */}
          <div className="lg:col-span-8 lg:col-start-6 lg:-ml-12 relative slide-in-right">
            <img
              src={cocktailRosso}
              alt=""
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
            {/* Label che esce */}
            <div className="absolute top-6 -left-6 md:-left-12 bg-[#E8B86D] text-black px-6 py-4">
              <span className="text-xs font-bold tracking-widest">OGNI WEEKEND</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          RECENSIONI MARQUEE
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#E8B86D] py-5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
          {[1, 2, 3, 4].map(n => (
            <div key={n} className="flex items-center gap-12 mx-8 text-black/80 text-sm">
              <span className="font-medium">"Spritz superlativo"</span>
              <span className="text-black/30">★★★★★</span>
              <span className="font-medium">"Cibo veramente ottimo"</span>
              <span className="text-black/30">★★★★★</span>
              <span className="font-medium">"Location fantastica"</span>
              <span className="text-black/30">★★★★★</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          LOCATION - Mappa con elemento sovrapposto
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-20 relative">
        <div className="relative">
          {/* Mappa posizionata a destra */}
          <div className="lg:absolute lg:right-0 lg:top-0 lg:w-[60%] h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2779.8893071856645!2d10.065661315795526!3d45.81264997910753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47817e8f3d8c6add%3A0x1f6b7b7b7b7b7b7b!2sVia%20del%20Cantiere%2C%2014%2C%2024065%20Lovere%20BG!5e0!3m2!1sit!2sit!4v1629999999999!5m2!1sit!2sit"
              className="w-full h-full grayscale opacity-60"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Mappa"
            />
          </div>

          {/* Box info */}
          <div className="lg:w-[45%] relative z-10 mt-8 lg:mt-0">
            <span className="text-[#E8B86D] text-[10px] tracking-[0.4em] fade-up">VIENI A TROVARCI</span>
            <h2 className="text-white font-bold mt-4 fade-up" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1 }}>
              Ti aspettiamo<br />al porto
            </h2>

            <div className="mt-10 space-y-6">
              <a href="https://maps.google.com/?q=Via+del+Cantiere+14+Lovere+BG" target="_blank" rel="noopener noreferrer" className="block group fade-up">
                <span className="text-white/30 text-[10px] tracking-wider">INDIRIZZO</span>
                <span className="text-white text-lg block mt-1 group-hover:text-[#E8B86D] transition-colors">
                  Via del Cantiere, 14<br />Lovere (BG)
                </span>
              </a>
              <a href="tel:+393803654787" className="block group fade-up">
                <span className="text-white/30 text-[10px] tracking-wider">TELEFONO</span>
                <span className="text-white text-lg block mt-1 group-hover:text-[#E8B86D] transition-colors">
                  +39 380 365 4787
                </span>
              </a>
            </div>

            <div className="flex gap-3 mt-10 fade-up">
              <a
                href="https://wa.me/393803654787"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn bg-[#E8B86D] text-black px-6 py-3 font-semibold hover:bg-white transition-colors text-sm"
                onMouseMove={handleMagnetic}
                onMouseLeave={handleMagneticLeave}
              >
                WhatsApp
              </a>
              <a
                href="https://maps.google.com/?q=Via+del+Cantiere+14+Lovere+BG"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn border border-white/30 text-white px-6 py-3 hover:bg-white hover:text-black transition-all text-sm"
                onMouseMove={handleMagnetic}
                onMouseLeave={handleMagneticLeave}
              >
                Indicazioni
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════════ */}
      <footer className="py-16 border-t border-white/10">
        <div className="px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left fade-up">
            <span className="text-white/20 text-xs tracking-widest">DAL 2019</span>
            <p className="text-white/40 text-sm mt-1">Porto Turistico di Lovere — Lago d'Iseo</p>
          </div>
          <div className="flex gap-6 fade-up">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-[#E8B86D] transition-all duration-300 text-sm hover:-translate-y-1"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-[#E8B86D] transition-all duration-300 text-sm hover:-translate-y-1"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>
    </div>
  )
}
