import { useState, useEffect, useRef } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'

// Import images
import colazione from '../assets/foto/foto-11.webp'
import colazioneAvocado from '../assets/foto/foto-8.webp'
import pancake from '../assets/foto/foto-7.webp'
import croissant from '../assets/foto/foto-6.webp'
import focacciaMortadella from '../assets/foto/foto-4.webp'
import focacciaRucola from '../assets/foto/foto-5.webp'
import bagel from '../assets/foto/foto-12.webp'
import hamburger from '../assets/foto/foto-9.webp'
import pizzaFritta from '../assets/foto/foto-10.webp'
import spritz from '../assets/foto/foto-1.webp'
import cocktailArancio from '../assets/foto/foto-3.webp'
import cocktailRosso from '../assets/foto/foto-2.webp'
import cocktailSerale from '../assets/foto/foto-19.webp'
import tartine from '../assets/foto/foto-13.webp'
import dessert from '../assets/foto/foto-20.webp'
import buffet from '../assets/foto/foto-15.webp'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  { id: 'colazione', name: 'Colazione', time: '08:00', emoji: '☕' },
  { id: 'pranzo', name: 'Pranzo', time: '12:00', emoji: '🍽️' },
  { id: 'aperitivo', name: 'Aperitivo', time: '18:00', emoji: '🍹' },
  { id: 'drinks', name: 'Drinks', time: '21:00', emoji: '🍸' },
]

const menuData = {
  colazione: {
    title: 'Colazione',
    subtitle: 'Inizia la giornata con gusto',
    time: 'Dalle 8:00',
    description: 'Caffè aromatico Hausbrandt, brioche fragranti sfornate ogni mattina, e le nostre specialità dolci e salate.',
    heroImage: colazioneAvocado,
    galleryImages: [pancake, croissant, colazione],
    color: 'var(--tramonto)',
    sections: [
      {
        name: 'Caffetteria',
        items: [
          { name: 'Espresso', desc: 'Caffè Hausbrandt', featured: false },
          { name: 'Cappuccino', desc: 'Con latte fresco', featured: false },
          { name: 'Caffè Americano', desc: 'Lungo e aromatico', featured: false },
          { name: 'Latte Macchiato', desc: 'Latte con caffè', featured: false },
          { name: 'Tè e Infusi', desc: 'Selezione premium', featured: false },
        ],
      },
      {
        name: 'Dolci',
        items: [
          { name: 'Cornetto Classico', desc: 'Vuoto o con farcitura', featured: false },
          { name: 'Cornetto Integrale', desc: 'Con miele o marmellata', featured: false },
          { name: 'Pain au Chocolat', desc: 'Sfoglia con cioccolato', featured: false },
          { name: 'Torte della Casa', desc: 'Preparazione giornaliera', featured: true },
        ],
      },
      {
        name: 'Salato',
        items: [
          { name: 'Toast Avocado e Salmone', desc: 'Con uovo pochè e fiori edibili', featured: true },
          { name: 'Waffle Salato', desc: 'Con accompagnamenti', featured: false },
          { name: 'Pancake', desc: 'Con frutta fresca e sciroppo', featured: true },
          { name: 'Bowl di Frutta', desc: 'Frutta di stagione', featured: false },
        ],
      },
    ],
  },
  pranzo: {
    title: 'Pranzo',
    subtitle: 'Qualità senza attesa',
    time: '12:00 — 15:00',
    description: 'Focacce gourmet farcite al momento, panini creativi e piatti del giorno. Tutto preparato con ingredienti freschi.',
    heroImage: focacciaRucola,
    galleryImages: [focacciaMortadella, bagel, hamburger, pizzaFritta],
    color: 'var(--lago)',
    sections: [
      {
        name: 'Focacce Gourmet',
        items: [
          { name: 'Mortadella e Burrata', desc: 'Con pistacchio e basilico', featured: true },
          { name: 'Rucola e Pomodorini', desc: 'Con stracciatella e olio EVO', featured: true },
          { name: 'Prosciutto Crudo', desc: 'Con mozzarella di bufala', featured: false },
          { name: 'Vegetariana', desc: 'Verdure grigliate e hummus', featured: false },
        ],
      },
      {
        name: 'Panini e Toast',
        items: [
          { name: 'Croissant Salato', desc: 'Farcito del giorno', featured: false },
          { name: 'Bagel', desc: 'Con bresaola, rucola e grana', featured: true },
          { name: 'Club Sandwich', desc: 'Pollo, bacon, uovo', featured: false },
          { name: 'Toast Gourmet', desc: 'Combinazioni creative', featured: false },
        ],
      },
      {
        name: 'Piatti',
        items: [
          { name: 'Hamburger Artour', desc: 'Con salse della casa', featured: false },
          { name: 'Insalatona', desc: 'Mix di stagione con proteine', featured: false },
          { name: 'Piatto del Giorno', desc: 'Chiedi al bancone', featured: false },
          { name: 'Pizza Fritta', desc: 'Con pomodoro e mozzarella', featured: true },
        ],
      },
    ],
  },
  aperitivo: {
    title: 'Aperitivo',
    subtitle: "L'ora dello Spritz",
    time: 'Dalle 18:00',
    description: 'Il momento perfetto per rilassarsi con vista sul porto. Il nostro spritz è diventato famoso in tutto il Sebino.',
    heroImage: spritz,
    galleryImages: [cocktailArancio, tartine, buffet],
    color: 'var(--spritz)',
    highlight: {
      emoji: '🏆',
      title: 'Lo Spritz Superlativo',
      text: 'Preparato con cura, servito con stile, accompagnato dalle nostre tartine gourmet.',
    },
    sections: [
      {
        name: 'Spritz & Classici',
        items: [
          { name: 'Spritz Artour', desc: 'La nostra specialità', featured: true },
          { name: 'Aperol Spritz', desc: 'Il classico', featured: false },
          { name: 'Hugo', desc: 'Con sciroppo di sambuco', featured: false },
          { name: 'Negroni', desc: 'Gin, Campari, Vermouth', featured: false },
          { name: 'Americano', desc: 'Campari, Vermouth, soda', featured: false },
        ],
      },
      {
        name: 'Vini al Calice',
        items: [
          { name: 'Prosecco', desc: 'DOC Valdobbiadene', featured: false },
          { name: 'Franciacorta', desc: 'Brut DOCG', featured: true },
          { name: 'Bianco della Casa', desc: 'Selezione locale', featured: false },
          { name: 'Rosso della Casa', desc: 'Selezione locale', featured: false },
        ],
      },
      {
        name: 'Stuzzichini',
        items: [
          { name: 'Tartine Gourmet', desc: 'Assortimento del giorno', featured: true },
          { name: 'Tagliere Misto', desc: 'Salumi e formaggi locali', featured: false },
          { name: 'Olive all\'Ascolana', desc: 'Fritte al momento', featured: false },
          { name: 'Crostini', desc: 'Con creme e paté', featured: false },
        ],
      },
    ],
  },
  drinks: {
    title: 'Drinks & Serata',
    subtitle: 'La notte inizia qui',
    time: 'Ven-Sab fino alle 2:00',
    description: 'Cocktail classici e signature, preparati con passione. L\'atmosfera perfetta per concludere la serata.',
    heroImage: cocktailSerale,
    galleryImages: [cocktailRosso, cocktailArancio, dessert],
    color: 'var(--cielo)',
    sections: [
      {
        name: 'Cocktail Classici',
        items: [
          { name: 'Moscow Mule', desc: 'Vodka, lime, ginger beer', featured: false },
          { name: 'Mojito', desc: 'Rum, menta, lime, zucchero', featured: false },
          { name: 'Gin Tonic', desc: 'Gin premium e tonica', featured: false },
          { name: 'Margarita', desc: 'Tequila, triple sec, lime', featured: false },
          { name: 'Daiquiri', desc: 'Rum, lime, zucchero', featured: false },
        ],
      },
      {
        name: 'Signature Cocktails',
        items: [
          { name: 'Cocktail Artour', desc: 'La nostra creazione segreta', featured: true },
          { name: 'Sunset Lake', desc: 'Ispirato ai tramonti sul lago', featured: true },
          { name: 'Porto Breeze', desc: 'Fresco e dissetante', featured: false },
        ],
      },
      {
        name: 'Birre & Long Drinks',
        items: [
          { name: 'Birre Artigianali', desc: 'Selezione rotante', featured: false },
          { name: 'Birre Classiche', desc: 'Alla spina e in bottiglia', featured: false },
          { name: 'Long Drinks', desc: 'Gin Lemon, Vodka Lemon...', featured: false },
          { name: 'Analcolici', desc: 'Mocktail e virgin drinks', featured: false },
        ],
      },
      {
        name: 'Dolce Fine Serata',
        items: [
          { name: 'Amari', desc: 'Selezione italiana', featured: false },
          { name: 'Grappe', desc: 'Artigianali', featured: false },
          { name: 'Whisky', desc: 'Selezione premium', featured: false },
          { name: 'Dessert', desc: 'Dolci della casa', featured: true },
        ],
      },
    ],
  },
}

export default function Menu() {
  const location = useLocation()
  const [activeCategory, setActiveCategory] = useState('colazione')
  const containerRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash && menuData[hash]) {
      setActiveCategory(hash)
    }
  }, [location])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.2
      })

      gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4
      })

      gsap.from('.category-pill', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.1,
        delay: 0.6
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.menu-section-card', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
      })

      gsap.from('.gallery-img', {
        scale: 1.2,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [activeCategory])

  const currentMenu = menuData[activeCategory]

  return (
    <div ref={containerRef} className="bg-[var(--grigio-perla)]">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-end pb-8 bg-[var(--notte)] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={currentMenu.heroImage}
              alt=""
              className="w-full h-full object-cover opacity-50"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--notte)] via-[var(--notte)]/60 to-[var(--notte)]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--notte)]/80 to-transparent" />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 pt-32">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="hero-subtitle text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: currentMenu.color }}>
                Il Nostro Menu
              </span>
              <h1 className="hero-title text-white font-bold leading-[0.85]" style={{ fontSize: 'clamp(3.5rem, 12vw, 10rem)' }}>
                Dalla mattina<br />
                <span className="text-stroke" style={{ color: currentMenu.color }}>alla notte</span>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 pb-4">
              <p className="hero-subtitle text-white/60 leading-relaxed">
                Un locale, mille momenti. Ogni ora del giorno ha il suo sapore speciale da Artour Caffè.
              </p>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 mt-12 pb-8">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`category-pill flex items-center gap-3 px-6 py-4 font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'text-[var(--notte)]'
                    : 'border border-white/20 text-white hover:border-white/40'
                }`}
                style={{
                  backgroundColor: activeCategory === cat.id ? currentMenu.color : 'transparent'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-xl">{cat.emoji}</span>
                <div className="text-left">
                  <span className="block font-semibold">{cat.name}</span>
                  <span className={`text-xs ${activeCategory === cat.id ? 'opacity-70' : 'opacity-50'}`}>{cat.time}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* MENU CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Category Intro */}
          <section className="py-20 md:py-32">
            <div className="px-6 md:px-12 lg:px-24">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-5">
                  <span className="text-xs tracking-[0.3em] uppercase" style={{ color: currentMenu.color }}>
                    {currentMenu.time}
                  </span>
                  <h2 className="text-[var(--carbone)] font-bold leading-[0.95] mt-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                    {currentMenu.title}
                  </h2>
                  <p className="text-[var(--grigio)] text-xl mt-6 leading-relaxed">
                    {currentMenu.description}
                  </p>

                  {/* Highlight box */}
                  {currentMenu.highlight && (
                    <div
                      className="mt-8 p-6 border-l-4"
                      style={{ borderColor: currentMenu.color, backgroundColor: `color-mix(in srgb, ${currentMenu.color} 10%, white)` }}
                    >
                      <p className="text-2xl mb-2">{currentMenu.highlight.emoji}</p>
                      <h3 className="font-bold text-[var(--carbone)] text-lg">{currentMenu.highlight.title}</h3>
                      <p className="text-[var(--grigio)] text-sm mt-2">{currentMenu.highlight.text}</p>
                    </div>
                  )}
                </div>

                {/* Gallery */}
                <div className="lg:col-span-6 lg:col-start-7">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="gallery-img col-span-2">
                      <img
                        src={currentMenu.heroImage}
                        alt=""
                        className="w-full aspect-[16/9] object-cover"
                        style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)' }}
                      />
                    </div>
                    {currentMenu.galleryImages.slice(0, 2).map((img, i) => (
                      <div key={i} className="gallery-img">
                        <img
                          src={img}
                          alt=""
                          className="w-full aspect-square object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Menu Sections */}
          <section className="pb-20 md:pb-32">
            <div className="px-6 md:px-12 lg:px-24">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {currentMenu.sections.map((section, sectionIndex) => (
                  <div
                    key={sectionIndex}
                    className="menu-section-card bg-white p-8 lg:p-10 hover:shadow-xl transition-shadow duration-500"
                    style={{ marginTop: sectionIndex % 2 === 1 ? '2rem' : '0' }}
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <span
                        className="text-sm font-bold px-3 py-1"
                        style={{ backgroundColor: `color-mix(in srgb, ${currentMenu.color} 15%, white)`, color: currentMenu.color }}
                      >
                        0{sectionIndex + 1}
                      </span>
                      <h3 className="text-[var(--carbone)] font-bold text-xl">{section.name}</h3>
                    </div>

                    <ul className="space-y-5">
                      {section.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className={`group ${item.featured ? 'relative pl-4' : ''}`}
                        >
                          {item.featured && (
                            <span
                              className="absolute left-0 top-0 bottom-0 w-1"
                              style={{ backgroundColor: currentMenu.color }}
                            />
                          )}
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h4 className={`font-semibold ${item.featured ? '' : 'text-[var(--carbone)]'}`} style={item.featured ? { color: currentMenu.color } : {}}>
                                {item.name}
                              </h4>
                              <p className="text-[var(--grigio)] text-sm mt-1">{item.desc}</p>
                            </div>
                            {item.featured && (
                              <span style={{ color: currentMenu.color }}>★</span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="text-[var(--grigio)] text-sm mt-12 text-center">
                * Menu soggetto a variazioni stagionali. Per allergeni e intolleranze, chiedi al nostro staff.
              </p>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>

      {/* MARQUEE */}
      <section className="py-8 bg-[var(--notte)] overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 text-white/10 font-bold whitespace-nowrap" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
                <span>COLAZIONE</span>
                <span style={{ color: currentMenu.color }}>✦</span>
                <span>PRANZO</span>
                <span style={{ color: currentMenu.color }}>✦</span>
                <span>APERITIVO</span>
                <span style={{ color: currentMenu.color }}>✦</span>
                <span>SERATA</span>
                <span style={{ color: currentMenu.color }}>✦</span>
                <span>SPRITZ</span>
                <span style={{ color: currentMenu.color }}>✦</span>
                <span>COCKTAIL</span>
                <span style={{ color: currentMenu.color }}>✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-40" style={{ backgroundColor: currentMenu.color }}>
        <div className="px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[var(--notte)] font-bold leading-[0.95]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                Hai Fame<br />
                <span className="text-stroke">o Sete?</span>
              </h2>
              <p className="text-[var(--notte)]/70 text-lg mt-6 max-w-md">
                Vieni a trovarci al Porto Turistico di Lovere. Ti aspettiamo con le nostre specialità!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <motion.a
                href="tel:+393803654787"
                className="inline-flex items-center justify-center gap-3 bg-[var(--notte)] text-white px-10 py-5 font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Chiamaci
              </motion.a>
              <Link
                to="/contatti"
                className="inline-flex items-center justify-center gap-3 border-2 border-[var(--notte)]/30 text-[var(--notte)] px-10 py-5 font-semibold hover:bg-[var(--notte)] hover:text-white transition-all duration-500"
              >
                Come Arrivare
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
