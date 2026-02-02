import { Link } from 'react-router-dom'

// Import images
import heroImage from '../assets/foto/foto-1.webp'
import cocktailArancio from '../assets/foto/foto-3.webp'
import cocktailRosso from '../assets/foto/foto-2.webp'
import focacciaMortadella from '../assets/foto/foto-4.webp'
import focacciaRucola from '../assets/foto/foto-5.webp'
import colazione from '../assets/foto/foto-8.webp'
import pancake from '../assets/foto/foto-7.webp'
import cocktailSerale from '../assets/foto/foto-19.webp'
import buffet from '../assets/foto/foto-15.webp'
import tartine from '../assets/foto/foto-13.webp'
import dessert from '../assets/foto/foto-20.webp'
import catering from '../assets/foto/foto-22.webp'

export default function Homepage() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Spritz con vista sul Porto di Lovere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-notte/80 via-notte/50 to-notte/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          {/* Pre-title */}
          <p className="text-tramonto font-medium tracking-widest uppercase text-sm mb-4">
            Porto Turistico di Lovere • Lago d'Iseo
          </p>

          {/* Main Title */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-shadow-lg">
            ARTOUR CAFFÈ
          </h1>

          {/* Tagline */}
          <p className="text-2xl sm:text-3xl text-white/90 font-light mb-4 text-shadow">
            Dal primo caffè all'ultimo cocktail
          </p>

          {/* Services */}
          <p className="text-white/70 text-lg mb-8">
            Colazioni • Pranzi • Aperitivi • Serate
          </p>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span className="text-tramonto">★</span>
            <span className="text-white text-sm">4.5/5 su Google</span>
            <span className="text-white/50">|</span>
            <span className="text-spritz text-sm font-medium">Ven-Sab fino alle 2:00</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 bg-tramonto hover:bg-tramonto-dark text-notte font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              Scopri il Menu
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/contatti"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all border border-white/30"
            >
              Vieni a Trovarci
            </Link>
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <a href="https://maps.google.com/?q=Via+del+Cantiere+14+Lovere" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-tramonto transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Porto Turistico di Lovere
            </a>
            <a href="tel:+393803654787" className="flex items-center gap-2 hover:text-tramonto transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              380 365 4787
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-20 lg:py-32 bg-grigio-perla">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-tramonto font-medium tracking-widest uppercase text-sm">Benvenuti</span>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-carbone mt-2 mb-6">
                Il Tuo Angolo sul Lago
              </h2>
              <p className="text-grigio text-lg leading-relaxed mb-6">
                Nel cuore del Porto Turistico di Lovere, uno dei borghi più belli d'Italia,
                Artour Caffè ti aspetta con la sua atmosfera unica. Dalla colazione con vista
                lago agli aperitivi al tramonto, dalle pause pranzo gustose alle serate che
                si prolungano fino a notte fonda nel weekend.
              </p>
              <p className="text-grigio text-lg leading-relaxed mb-8">
                <strong className="text-carbone">Un locale, mille momenti.</strong> Vieni a scoprire il tuo preferito.
              </p>
              <Link
                to="/chi-siamo"
                className="inline-flex items-center gap-2 text-lago font-semibold hover:text-tramonto transition-colors"
              >
                Scopri la nostra storia
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <img
                src={buffet}
                alt="Artour Caffè interno"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-tramonto text-notte p-6 rounded-2xl shadow-xl hidden lg:block">
                <p className="font-accent text-4xl">4.5</p>
                <p className="text-sm font-medium">su Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* I NOSTRI MOMENTI - 4 CARDS */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-tramonto font-medium tracking-widest uppercase text-sm">—— Ogni Momento Giusto</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-carbone mt-2">
              Da Noi Trovi...
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Colazione */}
            <div className="group relative bg-grigio-perla rounded-2xl overflow-hidden hover:shadow-xl transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={colazione}
                  alt="Colazione"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-tramonto text-sm font-medium">Dalle 8:00</span>
                <h3 className="font-heading text-xl font-bold text-carbone mt-1 mb-2">La Colazione Perfetta</h3>
                <p className="text-grigio text-sm mb-4">
                  Caffè aromatico, brioche fragranti, dolci fatti con cura. Inizia bene la giornata.
                </p>
                <Link to="/menu#colazione" className="text-lago font-medium text-sm hover:text-tramonto transition-colors">
                  Menu Colazione →
                </Link>
              </div>
            </div>

            {/* Pranzo */}
            <div className="group relative bg-grigio-perla rounded-2xl overflow-hidden hover:shadow-xl transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={focacciaRucola}
                  alt="Pranzo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-tramonto text-sm font-medium">12:00 - 15:00</span>
                <h3 className="font-heading text-xl font-bold text-carbone mt-1 mb-2">Pranzi Veloci e Gustosi</h3>
                <p className="text-grigio text-sm mb-4">
                  Panini gourmet, piatti del giorno, insalate fresche. Qualità senza attesa.
                </p>
                <Link to="/menu#pranzo" className="text-lago font-medium text-sm hover:text-tramonto transition-colors">
                  Menu Pranzo →
                </Link>
              </div>
            </div>

            {/* Aperitivo */}
            <div className="group relative bg-grigio-perla rounded-2xl overflow-hidden hover:shadow-xl transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cocktailArancio}
                  alt="Aperitivo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-spritz text-sm font-medium">Dalle 18:00</span>
                <h3 className="font-heading text-xl font-bold text-carbone mt-1 mb-2">L'Ora dello Spritz</h3>
                <p className="text-grigio text-sm mb-4">
                  Spritz superlativo, tartine gourmet, vini selezionati. L'aperitivo come si deve.
                </p>
                <Link to="/menu#aperitivo" className="text-lago font-medium text-sm hover:text-tramonto transition-colors">
                  Menu Aperitivo →
                </Link>
              </div>
            </div>

            {/* Serata */}
            <div className="group relative bg-grigio-perla rounded-2xl overflow-hidden hover:shadow-xl transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cocktailSerale}
                  alt="Serata"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-spritz text-sm font-medium">Ven-Sab fino alle 2:00</span>
                <h3 className="font-heading text-xl font-bold text-carbone mt-1 mb-2">Serate sul Porto</h3>
                <p className="text-grigio text-sm mb-4">
                  Cocktail, musica, atmosfera. La notte a Lovere inizia qui.
                </p>
                <Link to="/eventi" className="text-lago font-medium text-sm hover:text-tramonto transition-colors">
                  Scopri gli Eventi →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPRITZ HERO SECTION */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cocktailRosso}
            alt="Spritz con vista lago"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-notte/90 via-notte/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-spritz text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
              🏆 La Nostra Specialità
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow-lg">
              Lo Spritz Superlativo
            </h2>
            <p className="text-white/90 text-xl leading-relaxed mb-8">
              Non è un semplice aperitivo, è un'esperienza. Il nostro spritz è diventato famoso:
              preparato con cura, servito con stile, accompagnato dalle nostre tartine gourmet.
              E con la vista sul Porto di Lovere? Imbattibile.
            </p>
            <blockquote className="border-l-4 border-tramonto pl-6 mb-8">
              <p className="text-white/80 italic text-lg">
                "Spritz superlativo ad un giusto prezzo. Aperitivo consigliato e servizio amichevole."
              </p>
              <cite className="text-tramonto text-sm mt-2 block">— Recensione Google</cite>
            </blockquote>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 bg-tramonto hover:bg-tramonto-dark text-notte font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              Vieni a Provarlo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* LA LOCATION */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
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
            <div className="order-1 lg:order-2">
              <span className="text-tramonto font-medium tracking-widest uppercase text-sm">La Posizione</span>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-carbone mt-2 mb-6">
                Nel Cuore del Porto Turistico
              </h2>
              <p className="text-grigio text-lg leading-relaxed mb-6">
                Lovere è uno dei Borghi più belli d'Italia, e il Porto Turistico di Cornasola
                è una delle marine più moderne d'Europa. Siamo qui, nel punto di incontro tra
                storia e innovazione, tra lago e montagna.
              </p>
              <p className="text-grigio text-lg leading-relaxed mb-8">
                A due passi dal lungolago, dalle piscine, dalla biblioteca. Il punto di partenza
                perfetto per esplorare il Sebino.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: '📍', text: 'Porto Turistico di Lovere' },
                  { icon: '🚗', text: 'Parcheggio nelle vicinanze' },
                  { icon: '♿', text: 'Completamente accessibile' },
                  { icon: '🐕', text: 'Pet-friendly' },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-carbone">
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 text-lago font-semibold hover:text-tramonto transition-colors"
              >
                Come raggiungerci
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RECENSIONI */}
      <section className="py-20 lg:py-32 bg-grigio-perla">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-tramonto font-medium tracking-widest uppercase text-sm">—— Dicono di Noi</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-carbone mt-2 mb-4">
              Le Vostre Esperienze
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex text-tramonto">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-6 h-6 ${i < 4 ? 'fill-current' : 'fill-current opacity-50'}`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-carbone font-semibold">4.5/5 su Google</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                text: "Spritz superlativo ad un giusto prezzo. Aperitivo consigliato e servizio amichevole.",
                author: "Davide P.",
              },
              {
                text: "Pranzo in 12 persone, trovato per caso e senza prenotazione. Stress test pienamente superato. Cibo veramente ottimo, servizio rapido, personale gentile.",
                author: "Cristiano M.",
              },
              {
                text: "Ottimo cibo, il menù offre una scelta tra piatti tradizionali e più innovativi. Ottime anche le tartine dell'aperitivo. Vini di qualità. Assolutamente consigliato!",
                author: "Cri B.",
              },
              {
                text: "Abbiamo cenato, era tutto buonissimo ed il ragazzo che ci lavora è stato super gentile offrendoci anche un amaro. Consiglio di andarci.",
                author: "Camilla P.",
              },
            ].map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                <div className="flex text-tramonto mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-grigio text-sm leading-relaxed mb-4">"{review.text}"</p>
                <p className="text-carbone font-semibold text-sm">— {review.author}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://g.page/r/artour-caffe/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lago font-semibold hover:text-tramonto transition-colors"
            >
              Lascia una recensione
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* EVENTI E COMMUNITY */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={catering}
            alt="Eventi Artour Caffè"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-notte/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-tramonto font-medium tracking-widest uppercase text-sm">Community</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mt-2 mb-6">
            Parte Attiva di Lovere
          </h2>
          <p className="text-white/80 text-xl max-w-3xl mx-auto mb-8">
            Non siamo solo un caffè. Siamo parte della comunità di Lovere, partner di eventi
            come The Urban Steps e collaboratori della Pro Loco. Perché il nostro lago merita
            di essere vissuto e raccontato.
          </p>
          <Link
            to="/eventi"
            className="inline-flex items-center gap-2 bg-tramonto hover:bg-tramonto-dark text-notte font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
          >
            Scopri gli Eventi
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-20 lg:py-32 bg-gradient-lago text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Ti Aspettiamo al Porto
          </h2>
          <p className="text-white/80 text-xl mb-8">
            Aperto tutti i giorni tranne il lunedì
          </p>

          {/* Phone */}
          <a
            href="tel:+393803654787"
            className="inline-flex items-center gap-3 text-3xl sm:text-4xl font-bold text-tramonto hover:text-tramonto-light transition-colors mb-8"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            380 365 4787
          </a>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/393803654787"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-porto hover:bg-porto/90 text-white font-semibold px-8 py-4 rounded-full transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Scrivici su WhatsApp
            </a>
            <Link
              to="/contatti"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all border border-white/30"
            >
              Come Arrivare
            </Link>
          </div>

          <p className="text-tramonto font-semibold text-lg mt-8">
            Venerdì e Sabato fino alle 2:00
          </p>
        </div>
      </section>
    </div>
  )
}
