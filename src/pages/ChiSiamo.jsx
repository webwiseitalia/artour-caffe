import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

import buffet from '../assets/foto/foto-15.webp'
import tartine from '../assets/foto/foto-17.webp'
import catering from '../assets/foto/foto-22.webp'
import cocktailSerale from '../assets/foto/foto-19.webp'
import miniburger from '../assets/foto/foto-16.webp'
import colazione from '../assets/foto/foto-8.webp'
import spritz from '../assets/foto/foto-1.webp'
import focaccia from '../assets/foto/foto-4.webp'

gsap.registerPlugin(ScrollTrigger)

export default function ChiSiamo() {
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const timelineRef = useRef(null)
  const teamRef = useRef(null)

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

      // Scroll indicator
      gsap.from('.scroll-indicator', {
        opacity: 0,
        y: -20,
        duration: 1,
        delay: 1.2
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  // Story section animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on sticky image
      gsap.to('.story-main-img', {
        y: 100,
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })

      // Story paragraphs fade in
      gsap.utils.toArray('.story-block').forEach((block, i) => {
        gsap.from(block, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 80%',
          }
        })
      })

      // Inline images reveal
      gsap.utils.toArray('.inline-img').forEach((img) => {
        gsap.from(img, {
          scale: 1.3,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 80%',
          }
        })
      })
    }, storyRef)

    return () => ctx.revert()
  }, [])

  // Timeline animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-item', {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 70%',
        }
      })

      // Timeline line grows
      gsap.from('.timeline-line', {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 70%',
        }
      })
    }, timelineRef)

    return () => ctx.revert()
  }, [])

  // Team section
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.value-card', {
        y: 80,
        opacity: 0,
        rotation: (i) => (i % 2 === 0 ? -3 : 3),
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 70%',
        }
      })
    }, teamRef)

    return () => ctx.revert()
  }, [])

  // Split title into characters
  const titleLine1 = "La Nostra".split('')
  const titleLine2 = "Storia".split('')

  return (
    <div className="bg-[var(--grigio-perla)]">
      {/* CINEMATIC HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-[var(--notte)]">
        {/* Background image mosaic */}
        <div className="absolute inset-0 grid grid-cols-3 opacity-20">
          <div className="overflow-hidden">
            <img src={colazione} alt="" className="w-full h-full object-cover scale-110" />
          </div>
          <div className="overflow-hidden">
            <img src={buffet} alt="" className="w-full h-full object-cover scale-110" />
          </div>
          <div className="overflow-hidden">
            <img src={cocktailSerale} alt="" className="w-full h-full object-cover scale-110" />
          </div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--notte)] via-[var(--notte)]/70 to-[var(--notte)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--notte)] via-transparent to-[var(--notte)] opacity-70" />

        {/* Main content */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 pt-32 pb-16">
          <span className="hero-sub block text-[var(--tramonto)] text-sm tracking-[0.3em] uppercase mb-8">
            Passione e territorio dal 2020
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

          {/* Intro text */}
          <p className="hero-sub text-white/60 text-lg md:text-xl max-w-xl mt-12 leading-relaxed">
            Artour Caffè non è solo un locale. È un progetto nato dalla passione per l'ospitalità
            e dall'amore profondo per il territorio del Lago d'Iseo.
          </p>

          {/* Scroll indicator */}
          <motion.div
            className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-white/30 text-xs tracking-widest uppercase">Scopri di più</span>
            <div className="w-px h-16 bg-gradient-to-b from-[var(--tramonto)] to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* OPENING NUMBERS */}
      <section className="py-16 bg-[var(--carbone)]">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { num: '2020', label: 'Anno di apertura' },
              { num: '365', label: 'Giorni di passione' },
              { num: '∞', label: 'Caffè serviti' },
              { num: '1', label: 'Grande famiglia' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-[var(--tramonto)] font-bold text-4xl md:text-5xl lg:text-6xl block">
                  {stat.num}
                </span>
                <span className="text-white/50 text-xs tracking-wider uppercase mt-2 block">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE STORY - SPLIT LAYOUT */}
      <section ref={storyRef} className="py-24 md:py-40">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left - Sticky image */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <div className="overflow-hidden">
                <img
                  src={catering}
                  alt="Artour Caffè"
                  className="story-main-img w-full aspect-[3/4] object-cover"
                />
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-px bg-[var(--tramonto)]" />
                <span className="text-[var(--grigio)] text-sm italic">Porto Turistico di Lovere</span>
              </div>
            </div>

            {/* Right - Story content */}
            <div className="lg:col-span-6 lg:col-start-7 space-y-20 lg:pt-24">
              {/* Chapter 1 */}
              <div className="story-block">
                <span className="text-[var(--tramonto)] text-xs tracking-widest uppercase">Capitolo 01</span>
                <h2 className="text-[var(--carbone)] font-bold mt-2 mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                  Le Origini
                </h2>
                <p className="text-[var(--grigio)] text-lg leading-relaxed mb-6">
                  La scelta della location non è stata casuale. Il Porto Turistico di Cornasola a Lovere
                  rappresenta il perfetto connubio tra tradizione e modernità: una struttura portuale
                  all'avanguardia incastonata in uno dei borghi più belli d'Italia.
                </p>
                <p className="text-[var(--grigio)] leading-relaxed">
                  Qui, dove il lago incontra le montagne, dove i battelli partono verso Monte Isola,
                  abbiamo scelto di aprire le nostre porte.
                </p>
              </div>

              {/* Inline image */}
              <div className="inline-img overflow-hidden" style={{ marginLeft: '-20%', width: '120%' }}>
                <img
                  src={tartine}
                  alt=""
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>

              {/* Chapter 2 */}
              <div className="story-block">
                <span className="text-[var(--tramonto)] text-xs tracking-widest uppercase">Capitolo 02</span>
                <h2 className="text-[var(--carbone)] font-bold mt-2 mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                  La Visione
                </h2>
                <p className="text-[var(--grigio)] text-lg leading-relaxed mb-6">
                  <strong className="text-[var(--carbone)]">Michele Zana</strong>, figura conosciuta e stimata sul territorio,
                  coinvolto attivamente nella vita culturale e sociale di Lovere, ha voluto creare qualcosa
                  di più di un semplice locale.
                </p>
                <p className="text-[var(--grigio)] leading-relaxed">
                  L'idea era chiara: un punto di riferimento per tutti, capace di accompagnare i suoi ospiti
                  dal primo caffè del mattino all'ultimo cocktail della notte. Un luogo dove la qualità
                  incontra l'accoglienza, dove ogni dettaglio è curato con passione.
                </p>
              </div>

              {/* Quote block */}
              <div className="story-block bg-[var(--notte)] p-8 md:p-12 relative">
                <svg className="absolute top-6 left-6 w-8 h-8 text-[var(--tramonto)]/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-white text-xl md:text-2xl font-light italic leading-relaxed pl-6 border-l-2 border-[var(--tramonto)]">
                  "Volevamo creare un luogo dove le persone si sentissero a casa, che fosse per un
                  espresso veloce o per trascorrere un'intera serata con gli amici."
                </blockquote>
                <cite className="text-[var(--tramonto)] text-sm mt-6 block">— Michele Zana, Fondatore</cite>
              </div>

              {/* Chapter 3 */}
              <div className="story-block">
                <span className="text-[var(--tramonto)] text-xs tracking-widest uppercase">Capitolo 03</span>
                <h2 className="text-[var(--carbone)] font-bold mt-2 mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                  Oggi
                </h2>
                <p className="text-[var(--grigio)] text-lg leading-relaxed mb-6">
                  Artour Caffè è diventato quello che sognavamo: un bar, un bistrot, un punto di ritrovo.
                  Un locale che vive con la sua comunità, che cresce insieme al territorio che lo ospita.
                </p>
                <p className="text-[var(--grigio)] leading-relaxed">
                  Ogni giorno accogliamo turisti e residenti, famiglie e gruppi di amici, professionisti
                  in pausa pranzo e innamorati al tramonto. E per ognuno di loro, cerchiamo di rendere
                  il momento speciale.
                </p>
              </div>

              {/* Grid images */}
              <div className="story-block grid grid-cols-2 gap-4">
                <div className="inline-img overflow-hidden">
                  <img src={spritz} alt="" className="w-full aspect-square object-cover" />
                </div>
                <div className="inline-img overflow-hidden mt-8">
                  <img src={focaccia} alt="" className="w-full aspect-square object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section ref={timelineRef} className="py-24 md:py-40 bg-[var(--notte)]">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <span className="text-[var(--tramonto)] text-xs tracking-widest uppercase">Il nostro percorso</span>
              <h2 className="text-white font-bold mt-2 leading-[1.1]" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
                Tappe<br />
                <span className="text-stroke text-[var(--tramonto)]">Importanti</span>
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6 relative">
              {/* Timeline line */}
              <div className="timeline-line absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--tramonto)] via-white/20 to-transparent" />

              {/* Timeline items */}
              <div className="space-y-12">
                {[
                  { year: '2020', title: 'L\'apertura', desc: 'Nasce Artour Caffè al Porto Turistico di Lovere. Un sogno che diventa realtà.' },
                  { year: '2021', title: 'Crescita', desc: 'Ampliamo l\'offerta con il servizio di catering e eventi privati. La community cresce.' },
                  { year: '2022', title: 'Collaborazioni', desc: 'Partnership con Pro Loco Lovere e Urban Steps. Il locale diventa punto di riferimento culturale.' },
                  { year: '2023', title: 'Riconoscimenti', desc: 'Recensioni eccellenti e passaparola. Artour diventa una tappa obbligata sul lago.' },
                  { year: '2024', title: 'Il futuro', desc: 'Nuovi progetti, stessa passione. Continuiamo a scrivere la nostra storia insieme a voi.' },
                ].map((item, i) => (
                  <div key={i} className="timeline-item flex gap-8 pl-12 relative">
                    {/* Dot */}
                    <div className="absolute left-0 top-1 w-8 h-8 bg-[var(--notte)] border-2 border-[var(--tramonto)] flex items-center justify-center">
                      <div className="w-2 h-2 bg-[var(--tramonto)]" />
                    </div>

                    <div>
                      <span className="text-[var(--tramonto)] font-bold text-xl">{item.year}</span>
                      <h3 className="text-white font-bold text-2xl mt-1 mb-2">{item.title}</h3>
                      <p className="text-white/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section ref={teamRef} className="py-24 md:py-40 bg-[var(--grigio-perla)]">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-[var(--tramonto)] text-xs tracking-widest uppercase">I nostri principi</span>
            <h2 className="text-[var(--carbone)] font-bold mt-2" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
              Cosa ci guida ogni giorno
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                icon: '☕',
                title: 'Qualità',
                text: 'Prodotti selezionati con cura, preparazioni impeccabili, attenzione maniacale ai dettagli. Non facciamo compromessi.',
              },
              {
                num: '02',
                icon: '🤝',
                title: 'Accoglienza',
                text: 'Servizio amichevole e atmosfera rilassata. Ogni cliente che entra è un ospite da far sentire a casa.',
              },
              {
                num: '03',
                icon: '🏔️',
                title: 'Territorio',
                text: 'Legame profondo con Lovere e il Lago d\'Iseo. Non siamo solo un locale, siamo parte della comunità.',
              },
              {
                num: '04',
                icon: '🌅',
                title: 'Versatilità',
                text: 'Un locale per ogni momento della giornata. Dal caffè mattutino al cocktail notturno, stessa qualità e passione.',
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                className="value-card group"
                whileHover={{ y: -10 }}
              >
                <div className="bg-white p-8 h-full shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                  {/* Background number */}
                  <span className="absolute -right-4 -top-4 text-[120px] font-bold text-[var(--grigio-perla)] leading-none pointer-events-none">
                    {value.num}
                  </span>

                  <div className="relative z-10">
                    <span className="text-4xl mb-4 block">{value.icon}</span>
                    <span className="text-[var(--tramonto)] font-bold text-xs tracking-widest">{value.num}</span>
                    <h3 className="text-[var(--carbone)] font-bold text-2xl mt-2 mb-4">{value.title}</h3>
                    <p className="text-[var(--grigio)] text-sm leading-relaxed">{value.text}</p>
                  </div>

                  {/* Hover border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--tramonto)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOVERE SECTION */}
      <section className="py-24 md:py-40 bg-[var(--lago)] text-white overflow-hidden">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Images grid */}
            <div className="lg:col-span-6 grid grid-cols-12 gap-4">
              <motion.div
                className="col-span-7 overflow-hidden"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <img src={miniburger} alt="" className="w-full aspect-[3/4] object-cover" />
              </motion.div>
              <motion.div
                className="col-span-5 mt-16 overflow-hidden"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img src={cocktailSerale} alt="" className="w-full aspect-[3/4] object-cover" />
              </motion.div>
              <motion.div
                className="col-span-5 col-start-2 -mt-16 overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <img src={colazione} alt="" className="w-full aspect-square object-cover" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="lg:col-span-5 lg:col-start-8">
              <span className="text-white/60 text-xs tracking-widest uppercase">Il contesto</span>
              <h2 className="font-bold leading-[1.1] mt-2 mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                Perché<br />
                <span className="text-[var(--tramonto)]">Lovere</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Lovere è riconosciuto come uno dei <strong className="text-white">Borghi più belli d'Italia</strong>,
                un gioiello incastonato sulla sponda occidentale del Lago d'Iseo.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Il Porto Turistico di Cornasola è una delle strutture portuali più moderne d'Europa,
                punto di partenza per escursioni verso Monte Isola e gite sul Sebino.
                Da qui parte anche la ciclovia che costeggia il lago.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                {['Lago d\'Iseo', 'Sebino', 'Monte Isola', 'Accademia Tadini', 'Borghi più belli'].map((tag) => (
                  <span key={tag} className="border border-white/30 text-white px-4 py-2 text-sm hover:bg-white hover:text-[var(--lago)] transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div>
                  <span className="text-[var(--tramonto)] font-bold text-3xl">~60km</span>
                  <span className="text-white/50 text-xs block mt-1">da Bergamo</span>
                </div>
                <div>
                  <span className="text-[var(--tramonto)] font-bold text-3xl">~70km</span>
                  <span className="text-white/50 text-xs block mt-1">da Brescia</span>
                </div>
                <div>
                  <span className="text-[var(--tramonto)] font-bold text-3xl">~100km</span>
                  <span className="text-white/50 text-xs block mt-1">da Milano</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIG QUOTE */}
      <section className="py-24 md:py-40 bg-[var(--notte)] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--tramonto)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--lago)]/10 rounded-full blur-3xl" />

        <div className="relative z-10 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto text-center">
            <svg className="w-20 h-20 mx-auto text-[var(--tramonto)]/30 mb-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-white font-bold leading-tight" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)' }}>
              Cerchiamo di far sentire ogni cliente a casa,<br />
              <span className="text-[var(--tramonto)]">che sia per un caffè veloce</span><br />
              o per una serata intera.
            </blockquote>
            <p className="text-white/40 mt-12">— Il Team Artour Caffè</p>
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
            Vieni a<br />conoscerci
          </h2>
          <p className="text-[var(--notte)]/70 text-lg max-w-xl mx-auto mb-12">
            La nostra storia continua ogni giorno, e vorremmo che tu ne facessi parte.
            Ti aspettiamo al Porto Turistico di Lovere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contatti"
                className="inline-flex items-center justify-center gap-3 bg-[var(--notte)] text-white px-10 py-5 font-bold text-lg"
              >
                Come raggiungerci
                <span>→</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-3 border-2 border-[var(--notte)] text-[var(--notte)] px-10 py-5 font-bold text-lg hover:bg-[var(--notte)] hover:text-white transition-colors"
              >
                Scopri il menu
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
