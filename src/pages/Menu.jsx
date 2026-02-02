import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

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

const categories = [
  { id: 'colazione', name: 'Colazione', icon: '☕' },
  { id: 'pranzo', name: 'Pranzo', icon: '🍽️' },
  { id: 'aperitivo', name: 'Aperitivo', icon: '🍹' },
  { id: 'drinks', name: 'Drinks', icon: '🍸' },
]

const menuItems = {
  colazione: {
    title: 'Colazione',
    subtitle: 'Dalle 8:00 - Inizia la giornata con gusto',
    image: colazioneAvocado,
    sections: [
      {
        name: 'Caffetteria',
        items: [
          { name: 'Espresso', description: 'Caffè Hausbrandt' },
          { name: 'Cappuccino', description: 'Con latte fresco' },
          { name: 'Caffè Americano', description: 'Lungo e aromatico' },
          { name: 'Latte Macchiato', description: 'Latte con caffè' },
          { name: 'Tè e Infusi', description: 'Selezione premium' },
        ],
      },
      {
        name: 'Dolci',
        items: [
          { name: 'Cornetto Classico', description: 'Vuoto o con farcitura' },
          { name: 'Cornetto Integrale', description: 'Con miele o marmellata' },
          { name: 'Pain au Chocolat', description: 'Sfoglia con cioccolato' },
          { name: 'Torte della Casa', description: 'Preparazione giornaliera' },
        ],
      },
      {
        name: 'Salato',
        items: [
          { name: 'Toast Avocado e Salmone', description: 'Con uovo pochè e fiori edibili', featured: true },
          { name: 'Waffle Salato', description: 'Con accompagnamenti' },
          { name: 'Pancake', description: 'Con frutta fresca e sciroppo', featured: true },
          { name: 'Bowl di Frutta', description: 'Frutta di stagione' },
        ],
      },
    ],
  },
  pranzo: {
    title: 'Pranzo',
    subtitle: '12:00 - 15:00 - Qualità senza attesa',
    image: focacciaRucola,
    sections: [
      {
        name: 'Focacce Gourmet',
        items: [
          { name: 'Mortadella e Burrata', description: 'Con pistacchio e basilico', featured: true },
          { name: 'Rucola e Pomodorini', description: 'Con stracciatella e olio EVO', featured: true },
          { name: 'Prosciutto Crudo', description: 'Con mozzarella di bufala' },
          { name: 'Vegetariana', description: 'Verdure grigliate e hummus' },
        ],
      },
      {
        name: 'Panini e Toast',
        items: [
          { name: 'Croissant Salato', description: 'Farcito del giorno' },
          { name: 'Bagel', description: 'Con bresaola, rucola e grana', featured: true },
          { name: 'Club Sandwich', description: 'Pollo, bacon, uovo' },
          { name: 'Toast Gourmet', description: 'Combinazioni creative' },
        ],
      },
      {
        name: 'Piatti',
        items: [
          { name: 'Hamburger Artour', description: 'Con salse della casa' },
          { name: 'Insalatona', description: 'Mix di stagione con proteine' },
          { name: 'Piatto del Giorno', description: 'Chiedi al bancone' },
          { name: 'Pizza Fritta', description: 'Con pomodoro e mozzarella', featured: true },
        ],
      },
    ],
  },
  aperitivo: {
    title: 'Aperitivo',
    subtitle: 'Dalle 18:00 - L\'ora dello Spritz',
    image: spritz,
    highlight: {
      title: '🏆 Lo Spritz Superlativo',
      description: 'Il nostro spritz è diventato famoso: preparato con cura, servito con stile, accompagnato dalle nostre tartine gourmet.',
    },
    sections: [
      {
        name: 'Spritz & Classici',
        items: [
          { name: 'Spritz Artour', description: 'La nostra specialità', featured: true },
          { name: 'Aperol Spritz', description: 'Il classico' },
          { name: 'Hugo', description: 'Con sciroppo di sambuco' },
          { name: 'Negroni', description: 'Gin, Campari, Vermouth' },
          { name: 'Americano', description: 'Campari, Vermouth, soda' },
        ],
      },
      {
        name: 'Vini al Calice',
        items: [
          { name: 'Prosecco', description: 'DOC Valdobbiadene' },
          { name: 'Franciacorta', description: 'Brut DOCG' },
          { name: 'Bianco della Casa', description: 'Selezione locale' },
          { name: 'Rosso della Casa', description: 'Selezione locale' },
        ],
      },
      {
        name: 'Stuzzichini',
        items: [
          { name: 'Tartine Gourmet', description: 'Assortimento del giorno', featured: true },
          { name: 'Tagliere Misto', description: 'Salumi e formaggi locali' },
          { name: 'Olive all\'Ascolana', description: 'Fritte al momento' },
          { name: 'Crostini', description: 'Con creme e paté' },
        ],
      },
    ],
  },
  drinks: {
    title: 'Drinks & Serata',
    subtitle: 'Ven-Sab fino alle 2:00 - La notte inizia qui',
    image: cocktailSerale,
    sections: [
      {
        name: 'Cocktail Classici',
        items: [
          { name: 'Moscow Mule', description: 'Vodka, lime, ginger beer' },
          { name: 'Mojito', description: 'Rum, menta, lime, zucchero' },
          { name: 'Gin Tonic', description: 'Gin premium e tonica' },
          { name: 'Margarita', description: 'Tequila, triple sec, lime' },
          { name: 'Daiquiri', description: 'Rum, lime, zucchero' },
        ],
      },
      {
        name: 'Signature Cocktails',
        items: [
          { name: 'Cocktail Artour', description: 'La nostra creazione segreta', featured: true },
          { name: 'Sunset Lake', description: 'Ispirato ai tramonti sul lago', featured: true },
          { name: 'Porto Breeze', description: 'Fresco e dissetante' },
        ],
      },
      {
        name: 'Birre & Altro',
        items: [
          { name: 'Birre Artigianali', description: 'Selezione rotante' },
          { name: 'Birre Classiche', description: 'Alla spina e in bottiglia' },
          { name: 'Long Drinks', description: 'Gin Lemon, Vodka Lemon...' },
          { name: 'Analcolici', description: 'Mocktail e virgin drinks' },
        ],
      },
      {
        name: 'Dolce Fine Serata',
        items: [
          { name: 'Amari', description: 'Selezione italiana' },
          { name: 'Grappe', description: 'Artigianali' },
          { name: 'Whisky', description: 'Selezione premium' },
          { name: 'Dessert', description: 'Dolci della casa' },
        ],
      },
    ],
  },
}

export default function Menu() {
  const location = useLocation()
  const [activeCategory, setActiveCategory] = useState('colazione')

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash && menuItems[hash]) {
      setActiveCategory(hash)
    }
  }, [location])

  const currentMenu = menuItems[activeCategory]

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative py-32 pt-40 bg-gradient-lago">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-tramonto font-medium tracking-widest uppercase text-sm">Cosa Offriamo</span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6">
            Il Nostro Menu
          </h1>
          <p className="text-white/80 text-xl max-w-3xl mx-auto">
            Dalla colazione alla notte, sempre qualità e passione
          </p>
        </div>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="sticky top-20 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-2 sm:gap-4 sm:justify-center scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-lago text-white'
                    : 'bg-grigio-perla text-grigio hover:bg-lago/10'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MENU CONTENT */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-carbone mb-4">
                {currentMenu.title}
              </h2>
              <p className="text-grigio text-xl">{currentMenu.subtitle}</p>

              {/* Highlight Box for Aperitivo */}
              {currentMenu.highlight && (
                <div className="mt-8 bg-spritz/10 border-l-4 border-spritz p-6 rounded-r-xl">
                  <h3 className="font-heading text-xl font-bold text-carbone mb-2">
                    {currentMenu.highlight.title}
                  </h3>
                  <p className="text-grigio">{currentMenu.highlight.description}</p>
                </div>
              )}
            </div>
            <div className="relative">
              <img
                src={currentMenu.image}
                alt={currentMenu.title}
                className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>

          {/* Menu Sections */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentMenu.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-grigio-perla rounded-2xl p-6">
                <h3 className="font-heading text-2xl font-bold text-carbone mb-6 pb-4 border-b border-grigio-chiaro">
                  {section.name}
                </h3>
                <ul className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={`${item.featured ? 'bg-white rounded-xl p-4 shadow-sm' : ''}`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className={`font-semibold ${item.featured ? 'text-lago' : 'text-carbone'}`}>
                            {item.featured && <span className="text-tramonto mr-2">★</span>}
                            {item.name}
                          </h4>
                          <p className="text-grigio text-sm mt-1">{item.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-grigio-chiaro mt-12 text-sm">
            Menu soggetto a variazioni stagionali. Per allergeni e intolleranze, chiedi al nostro staff.
          </p>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="py-8 bg-grigio-perla overflow-hidden">
        <div className="flex gap-4 animate-scroll">
          {[pancake, croissant, bagel, hamburger, pizzaFritta, tartine, cocktailArancio, cocktailRosso, dessert].map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="h-48 w-48 object-cover rounded-xl flex-shrink-0"
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-lago text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
            Hai Fame o Sete?
          </h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-8">
            Vieni a trovarci al Porto Turistico di Lovere. Ti aspettiamo con le nostre specialità!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+393803654787"
              className="inline-flex items-center justify-center gap-2 bg-tramonto hover:bg-tramonto-dark text-notte font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Chiamaci
            </a>
            <Link
              to="/contatti"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all border border-white/30"
            >
              Come Arrivare
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
