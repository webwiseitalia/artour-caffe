import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'

// Import all images
import foto1 from '../assets/foto/foto-1.webp'
import foto2 from '../assets/foto/foto-2.webp'
import foto3 from '../assets/foto/foto-3.webp'
import foto4 from '../assets/foto/foto-4.webp'
import foto5 from '../assets/foto/foto-5.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto7 from '../assets/foto/foto-7.webp'
import foto8 from '../assets/foto/foto-8.webp'
import foto9 from '../assets/foto/foto-9.webp'
import foto10 from '../assets/foto/foto-10.webp'
import foto11 from '../assets/foto/foto-11.webp'
import foto12 from '../assets/foto/foto-12.webp'
import foto13 from '../assets/foto/foto-13.webp'
import foto14 from '../assets/foto/foto-14.webp'
import foto15 from '../assets/foto/foto-15.webp'
import foto16 from '../assets/foto/foto-16.webp'
import foto17 from '../assets/foto/foto-17.webp'
import foto18 from '../assets/foto/foto-18.webp'
import foto19 from '../assets/foto/foto-19.webp'
import foto20 from '../assets/foto/foto-20.webp'
import foto21 from '../assets/foto/foto-21.webp'
import foto22 from '../assets/foto/foto-22.webp'

gsap.registerPlugin(ScrollTrigger)

const allPhotos = [
  { src: foto1, category: 'drinks', title: 'Spritz con vista', featured: true },
  { src: foto2, category: 'drinks', title: 'Cocktail alla fragola' },
  { src: foto3, category: 'drinks', title: 'Cocktail arancio' },
  { src: foto4, category: 'food', title: 'Focaccia mortadella e burrata', featured: true },
  { src: foto5, category: 'food', title: 'Focaccia rucola e pomodorini' },
  { src: foto6, category: 'food', title: 'Croissant salato' },
  { src: foto7, category: 'food', title: 'Pancake con frutta' },
  { src: foto8, category: 'food', title: 'Colazione gourmet' },
  { src: foto9, category: 'food', title: 'Panino gourmet' },
  { src: foto10, category: 'food', title: 'Pizza fritta' },
  { src: foto11, category: 'food', title: 'Colazione classica' },
  { src: foto12, category: 'food', title: 'Bagel gourmet' },
  { src: foto13, category: 'eventi', title: 'Tartine catering', featured: true },
  { src: foto14, category: 'eventi', title: 'Buffet elegante' },
  { src: foto15, category: 'eventi', title: 'Buffet completo' },
  { src: foto16, category: 'eventi', title: 'Mini burger colorati' },
  { src: foto17, category: 'eventi', title: 'Crostini gourmet' },
  { src: foto18, category: 'eventi', title: 'Tartare e stuzzichini' },
  { src: foto19, category: 'drinks', title: 'Cocktail serale', featured: true },
  { src: foto20, category: 'food', title: 'Dessert con gelato' },
  { src: foto21, category: 'eventi', title: 'Buffet serale' },
  { src: foto22, category: 'eventi', title: 'Servizio catering' },
]

const categories = [
  { id: 'tutti', name: 'Tutti', emoji: '✨', description: 'Esplora tutta la nostra galleria' },
  { id: 'drinks', name: 'Drinks', emoji: '🍹', description: 'Cocktail e bevande artigianali' },
  { id: 'food', name: 'Food', emoji: '🥐', description: 'Piatti e colazioni gourmet' },
  { id: 'eventi', name: 'Eventi', emoji: '🎉', description: 'Catering e feste private' },
]

export default function Galleria() {
  const [activeFilter, setActiveFilter] = useState('tutti')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const heroRef = useRef(null)
  const galleryRef = useRef(null)
  const stripRef = useRef(null)
  const featuredRef = useRef(null)

  const filteredPhotos = activeFilter === 'tutti'
    ? allPhotos
    : allPhotos.filter(photo => photo.category === activeFilter)

  const featuredPhotos = allPhotos.filter(p => p.featured)
  const activeCategory = categories.find(c => c.id === activeFilter)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.from('.hero-char', {
        y: 150,
        rotationX: 90,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.03,
        delay: 0.3
      })

      // Subtitle animation
      gsap.from('.hero-sub', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8
      })

      // Stats animation
      gsap.from('.hero-stat', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        delay: 1
      })

      // Floating images
      gsap.to('.floating-img', {
        y: -30,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.5, from: 'random' }
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  // Horizontal strip animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.strip-track', {
        x: '-50%',
        ease: 'none',
        scrollTrigger: {
          trigger: stripRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
    }, stripRef)

    return () => ctx.revert()
  }, [])

  // Featured section parallax
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.featured-img').forEach((img, i) => {
        gsap.to(img, {
          y: i % 2 === 0 ? -80 : 80,
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        })
      })
    }, featuredRef)

    return () => ctx.revert()
  }, [])

  // Gallery items animation on filter change
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-item', {
        y: 100,
        opacity: 0,
        scale: 0.8,
        rotation: gsap.utils.random(-5, 5),
        duration: 0.8,
        ease: 'power3.out',
        stagger: {
          each: 0.04,
          from: 'random'
        }
      })
    }, galleryRef)

    return () => ctx.revert()
  }, [activeFilter])

  const openLightbox = (index) => {
    setCurrentImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredPhotos.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, filteredPhotos.length])

  // Split title into characters
  const titleChars = "Galleria".split('')
  const subtitleChars = "Fotografica".split('')

  return (
    <div className="bg-[var(--grigio-perla)]">
      {/* CINEMATIC HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-[var(--notte)]">
        {/* Floating preview images */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-img absolute top-[15%] left-[5%] w-32 h-40 md:w-48 md:h-56 opacity-30 rotate-[-8deg]">
            <img src={foto1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="floating-img absolute top-[25%] right-[8%] w-28 h-36 md:w-40 md:h-48 opacity-25 rotate-[6deg]">
            <img src={foto4} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="floating-img absolute bottom-[20%] left-[15%] w-36 h-28 md:w-52 md:h-40 opacity-20 rotate-[3deg]">
            <img src={foto19} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="floating-img absolute bottom-[30%] right-[15%] w-32 h-44 md:w-44 md:h-56 opacity-25 rotate-[-4deg]">
            <img src={foto13} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="floating-img absolute top-[60%] left-[40%] w-24 h-32 md:w-36 md:h-44 opacity-15 rotate-[10deg]">
            <img src={foto7} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--notte)] via-transparent to-[var(--notte)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--notte)] via-transparent to-[var(--notte)] opacity-50" />

        {/* Main content */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 pt-32 pb-16">
          <span className="hero-sub block text-[var(--tramonto)] text-sm tracking-[0.3em] uppercase mb-8">
            I nostri scatti migliori
          </span>

          {/* Main title with character animation */}
          <h1 className="font-bold text-white leading-[0.85] overflow-hidden" style={{ fontSize: 'clamp(3.5rem, 14vw, 14rem)' }}>
            <span className="block">
              {titleChars.map((char, i) => (
                <span key={i} className="hero-char inline-block">{char}</span>
              ))}
            </span>
            <span className="block overflow-hidden mt-2">
              {subtitleChars.map((char, i) => (
                <span key={i} className="hero-char inline-block text-stroke text-[var(--tramonto)]">
                  {char}
                </span>
              ))}
            </span>
          </h1>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 mt-16">
            <div className="hero-stat">
              <span className="block text-[var(--tramonto)] font-bold text-5xl md:text-6xl">
                {allPhotos.length}
              </span>
              <span className="text-white/50 text-sm tracking-wider uppercase mt-1 block">Foto</span>
            </div>
            <div className="hero-stat">
              <span className="block text-[var(--tramonto)] font-bold text-5xl md:text-6xl">
                {categories.length - 1}
              </span>
              <span className="text-white/50 text-sm tracking-wider uppercase mt-1 block">Categorie</span>
            </div>
            <div className="hero-stat">
              <span className="block text-[var(--tramonto)] font-bold text-5xl md:text-6xl">∞</span>
              <span className="text-white/50 text-sm tracking-wider uppercase mt-1 block">Momenti</span>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-white/30 text-xs tracking-widest uppercase">Scorri</span>
            <div className="w-px h-16 bg-gradient-to-b from-[var(--tramonto)] to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* HORIZONTAL PHOTO STRIP */}
      <section ref={stripRef} className="py-8 bg-[var(--carbone)] overflow-hidden">
        <div className="strip-track flex gap-4" style={{ width: 'max-content' }}>
          {[...allPhotos, ...allPhotos].map((photo, i) => (
            <div key={i} className="w-48 h-32 md:w-64 md:h-40 shrink-0 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <img src={photo.src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section ref={featuredRef} className="py-24 md:py-40 bg-[var(--grigio-perla)] overflow-hidden">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
            <div className="lg:col-span-5">
              <span className="text-[var(--tramonto)] text-xs tracking-widest uppercase">In evidenza</span>
              <h2 className="text-[var(--carbone)] font-bold mt-2 leading-[1.1]" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
                I nostri scatti<br />
                <span className="text-[var(--lago)]">preferiti</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-[var(--grigio)] text-lg">
                Una selezione dei momenti più belli catturati al nostro locale. Ogni foto racconta una storia di gusto, convivialità e atmosfera unica.
              </p>
            </div>
          </div>

          {/* Featured grid - asymmetric */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 md:col-span-7 row-span-2 overflow-hidden group cursor-pointer" onClick={() => { setActiveFilter('tutti'); openLightbox(0) }}>
              <div className="featured-img relative h-[400px] md:h-[600px]">
                <img src={featuredPhotos[0]?.src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--notte)]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[var(--tramonto)] text-xs tracking-widest uppercase">{featuredPhotos[0]?.category}</span>
                  <p className="text-white font-bold text-2xl mt-1">{featuredPhotos[0]?.title}</p>
                </div>
              </div>
            </div>

            <div className="col-span-6 md:col-span-5 overflow-hidden group cursor-pointer" onClick={() => { setActiveFilter('tutti'); openLightbox(3) }}>
              <div className="featured-img relative h-[200px] md:h-[290px]">
                <img src={featuredPhotos[1]?.src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--notte)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-semibold">{featuredPhotos[1]?.title}</p>
                </div>
              </div>
            </div>

            <div className="col-span-6 md:col-span-5 overflow-hidden group cursor-pointer" onClick={() => { setActiveFilter('tutti'); openLightbox(12) }}>
              <div className="featured-img relative h-[200px] md:h-[290px]">
                <img src={featuredPhotos[2]?.src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--notte)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-semibold">{featuredPhotos[2]?.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY SELECTOR */}
      <section className="sticky top-0 z-40 bg-[var(--notte)] border-b border-white/10">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between py-6 gap-6">
            {/* Category pills */}
            <div className="flex gap-2 md:gap-4 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`flex items-center gap-2 px-5 py-3 font-medium whitespace-nowrap transition-all ${
                    activeFilter === cat.id
                      ? 'bg-[var(--tramonto)] text-[var(--notte)]'
                      : 'border border-white/20 text-white hover:border-[var(--tramonto)]/50'
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="text-lg">{cat.emoji}</span>
                  <span>{cat.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Category info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-4"
              >
                <span className="text-white/50 text-sm hidden md:block">{activeCategory?.description}</span>
                <span className="bg-white/10 text-[var(--tramonto)] px-3 py-1 text-sm font-semibold">
                  {filteredPhotos.length} foto
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* DYNAMIC GALLERY GRID */}
      <section className="py-16 md:py-24" ref={galleryRef}>
        <div className="px-6 md:px-12 lg:px-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5"
            >
              {filteredPhotos.map((photo, index) => {
                // Create varied sizes for visual interest
                const isLarge = index % 7 === 0
                const isTall = index % 5 === 2
                const isWide = index % 6 === 3

                return (
                  <motion.div
                    key={`${activeFilter}-${index}`}
                    className={`gallery-item cursor-pointer group relative overflow-hidden ${
                      isLarge ? 'col-span-2 row-span-2' : ''
                    } ${isTall && !isLarge ? 'row-span-2' : ''} ${isWide && !isLarge ? 'col-span-2' : ''}`}
                    onClick={() => openLightbox(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    whileHover={{ zIndex: 10 }}
                  >
                    <motion.div
                      className={`relative ${isLarge ? 'h-[400px] md:h-[500px]' : isTall ? 'h-[350px] md:h-[420px]' : 'h-[200px] md:h-[250px]'} w-full`}
                      animate={{
                        scale: hoveredIndex === index ? 1.02 : 1,
                        rotate: hoveredIndex === index ? (index % 2 === 0 ? 1 : -1) : 0
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-full object-cover transition-all duration-700"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--notte)] via-[var(--notte)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                      {/* Content overlay */}
                      <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
                        {/* Category badge */}
                        <div className="self-end">
                          <span className="bg-[var(--tramonto)] text-[var(--notte)] text-xs font-bold px-3 py-1 uppercase tracking-wider">
                            {photo.category}
                          </span>
                        </div>

                        {/* Title and action */}
                        <div>
                          <p className="text-white font-bold text-lg md:text-xl mb-3">{photo.title}</p>
                          <div className="flex items-center gap-2 text-white/70 text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                            Clicca per ingrandire
                          </div>
                        </div>
                      </div>

                      {/* Corner decorations */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--tramonto)] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--tramonto)] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="py-24 md:py-32 bg-[var(--lago)]">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-16 h-16 mx-auto text-white/30 mb-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-white font-bold leading-tight" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
              Ogni foto è un momento di felicità condiviso con voi. Grazie per essere parte della nostra storia.
            </blockquote>
            <p className="text-white/60 mt-8">— Team Artour Caffè</p>
          </div>
        </div>
      </section>

      {/* INSTAGRAM CTA */}
      <section className="py-24 md:py-40 bg-[var(--notte)] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--tramonto)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--spritz)]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="text-[var(--tramonto)] text-xs tracking-widest uppercase">Seguici su Instagram</span>
              <h2 className="text-white font-bold leading-[0.95] mt-4" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
                @artour<br />
                <span className="text-stroke text-[var(--tramonto)]">_cafe_</span>
              </h2>
              <p className="text-white/60 text-lg mt-8 max-w-md">
                Per vedere ancora più foto e rimanere sempre aggiornato su novità, eventi speciali e dietro le quinte, seguici su Instagram!
              </p>

              <motion.a
                href="https://www.instagram.com/artour_cafe_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-bold px-10 py-5 text-lg mt-10"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Seguici su Instagram
                <span className="ml-2">→</span>
              </motion.a>
            </div>

            <div className="lg:col-span-6">
              {/* Instagram-style grid */}
              <div className="grid grid-cols-3 gap-2">
                {allPhotos.slice(0, 9).map((photo, i) => (
                  <motion.div
                    key={i}
                    className="aspect-square overflow-hidden group cursor-pointer"
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                  >
                    <img
                      src={photo.src}
                      alt=""
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[var(--notte)]/98 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/50 hover:text-white p-2 z-50 transition-colors group"
            >
              <div className="relative">
                <svg className="w-10 h-10 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 text-white/30 text-sm font-mono">
              {String(currentImage + 1).padStart(2, '0')} / {String(filteredPhotos.length).padStart(2, '0')}
            </div>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage() }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white p-4 z-50 transition-all hover:scale-110"
            >
              <svg className="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage() }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white p-4 z-50 transition-all hover:scale-110"
            >
              <svg className="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="max-w-6xl max-h-[90vh] px-16 md:px-24"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredPhotos[currentImage]?.src}
                alt={filteredPhotos[currentImage]?.title}
                className="max-w-full max-h-[75vh] object-contain mx-auto"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 text-center"
              >
                <span className="text-[var(--tramonto)] text-xs tracking-widest uppercase block">
                  {filteredPhotos[currentImage]?.category}
                </span>
                <p className="text-white font-bold text-2xl mt-2">
                  {filteredPhotos[currentImage]?.title}
                </p>
              </motion.div>
            </motion.div>

            {/* Thumbnail strip */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-[80vw] overflow-x-auto scrollbar-hide px-4">
              {filteredPhotos.map((photo, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrentImage(i) }}
                  className={`w-16 h-16 shrink-0 overflow-hidden transition-all ${
                    i === currentImage ? 'ring-2 ring-[var(--tramonto)] opacity-100' : 'opacity-40 hover:opacity-70'
                  }`}
                >
                  <img src={photo.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
