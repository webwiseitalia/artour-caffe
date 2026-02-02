import { Link } from 'react-router-dom'

// Import images
import buffet from '../assets/foto/foto-15.webp'
import tartine from '../assets/foto/foto-17.webp'
import catering from '../assets/foto/foto-22.webp'
import cocktailSerale from '../assets/foto/foto-19.webp'

export default function ChiSiamo() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative py-32 pt-40 bg-gradient-lago">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-tramonto font-medium tracking-widest uppercase text-sm">La Nostra Storia</span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6">
            Un Locale Nato dalla Passione
          </h1>
          <p className="text-white/80 text-xl max-w-3xl mx-auto">
            Per Lovere, per il lago, per chi ama i momenti autentici
          </p>
        </div>
      </section>

      {/* STORIA */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-tramonto font-medium tracking-widest uppercase text-sm">Le Origini</span>
              <h2 className="font-heading text-4xl font-bold text-carbone mt-2 mb-6">
                Dove Tutto è Iniziato
              </h2>
              <p className="text-grigio text-lg leading-relaxed mb-6">
                Artour Caffè nasce dalla passione per l'ospitalità e dall'amore per il territorio
                del Lago d'Iseo. La scelta della location non è stata casuale: il Porto Turistico
                di Lovere rappresenta il perfetto connubio tra tradizione e modernità, un luogo
                dove il lago incontra la vita del borgo.
              </p>
              <p className="text-grigio text-lg leading-relaxed mb-6">
                Michele Zana, figura conosciuta sul territorio e coinvolto attivamente nella
                vita culturale di Lovere, ha voluto creare un punto di riferimento per tutti:
                turisti che scoprono le meraviglie del Sebino e locali che cercano il loro
                angolo preferito per ogni momento della giornata.
              </p>
              <p className="text-grigio text-lg leading-relaxed">
                Da quella visione è nato Artour Caffè: un locale versatile che accompagna
                i suoi ospiti dal primo caffè del mattino all'ultimo cocktail della notte.
              </p>
            </div>
            <div className="relative">
              <img
                src={buffet}
                alt="Interno Artour Caffè"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* I VALORI */}
      <section className="py-20 lg:py-32 bg-grigio-perla">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-tramonto font-medium tracking-widest uppercase text-sm">I Nostri Principi</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-carbone mt-2">
              Cosa Ci Guida
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '✨',
                title: 'Qualità',
                description: 'Prodotti selezionati con cura, preparazioni che rispettano la materia prima, attenzione ai dettagli in ogni piatto e bevanda.',
              },
              {
                icon: '🤝',
                title: 'Accoglienza',
                description: 'Servizio amichevole e genuino, atmosfera rilassata dove sentirsi a casa. Ogni cliente è un ospite gradito.',
              },
              {
                icon: '🏔️',
                title: 'Territorio',
                description: 'Legame profondo con Lovere e il Lago d\'Iseo. Siamo parte attiva della comunità e ne promuoviamo le bellezze.',
              },
              {
                icon: '🌅',
                title: 'Versatilità',
                description: 'Un locale per ogni momento: colazione, pranzo, aperitivo, serata. Sempre la stessa qualità, sempre la stessa passione.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center">
                <span className="text-5xl mb-4 block">{value.icon}</span>
                <h3 className="font-heading text-xl font-bold text-carbone mb-3">{value.title}</h3>
                <p className="text-grigio text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          <blockquote className="max-w-3xl mx-auto mt-16 text-center">
            <p className="text-2xl text-carbone italic font-light leading-relaxed mb-4">
              "Cerchiamo di far sentire ogni cliente a casa, che sia per un caffè veloce
              o per una serata intera con gli amici."
            </p>
            <cite className="text-tramonto font-semibold">— Il Team Artour Caffè</cite>
          </blockquote>
        </div>
      </section>

      {/* LOVERE E IL LAGO */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img src={tartine} alt="Tartine gourmet" className="rounded-2xl shadow-lg" />
                <img src={cocktailSerale} alt="Cocktail serale" className="rounded-2xl shadow-lg mt-8" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-tramonto font-medium tracking-widest uppercase text-sm">Il Contesto</span>
              <h2 className="font-heading text-4xl font-bold text-carbone mt-2 mb-6">
                Perché Lovere
              </h2>
              <p className="text-grigio text-lg leading-relaxed mb-6">
                Lovere è riconosciuto come uno dei <strong className="text-carbone">Borghi più belli d'Italia</strong>,
                un gioiello incastonato sulla sponda occidentale del Lago d'Iseo. Storia millenaria,
                arte, cultura e una natura mozzafiato si fondono in un paesaggio unico.
              </p>
              <p className="text-grigio text-lg leading-relaxed mb-6">
                Il <strong className="text-carbone">Porto Turistico di Cornasola</strong> dove ci troviamo è una delle
                strutture portuali più moderne d'Europa, un polo che unisce servizi nautici,
                sport acquatici, aree verdi e strutture ricettive.
              </p>
              <p className="text-grigio text-lg leading-relaxed mb-8">
                Da qui partono le escursioni verso Monte Isola, le gite in barca sul Sebino,
                le passeggiate sul lungolago. E da qui, Artour Caffè accompagna visitatori
                e residenti in ogni momento della loro giornata sul lago.
              </p>

              <div className="flex flex-wrap gap-3">
                {['Lago d\'Iseo', 'Sebino', 'Monte Isola', 'Accademia Tadini', 'Lungolago'].map((tag) => (
                  <span key={tag} className="bg-lago/10 text-lago px-4 py-2 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={catering}
            alt="Eventi Artour Caffè"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-notte/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-tramonto font-medium tracking-widest uppercase text-sm">Oltre il Locale</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mt-2 mb-6">
              Parte della Comunità
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-6">
              Artour Caffè non è solo un bar, è un punto di incontro per la comunità di Lovere.
              Siamo partner di eventi locali come <strong className="text-tramonto">The Urban Steps</strong>,
              collaboriamo con la <strong className="text-tramonto">Pro Loco</strong> e partecipiamo
              attivamente alla vita culturale del borgo.
            </p>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Crediamo che un locale debba essere più di un semplice posto dove consumare:
              deve essere un luogo dove nascono idee, si creano connessioni, si vive il territorio.
            </p>
            <Link
              to="/eventi"
              className="inline-flex items-center gap-2 bg-tramonto hover:bg-tramonto-dark text-notte font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              Scopri i Nostri Eventi
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-grigio-perla">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-carbone mb-6">
            Vieni a Conoscerci
          </h2>
          <p className="text-grigio text-xl max-w-2xl mx-auto mb-8">
            La nostra storia continua ogni giorno, e ci piacerebbe che tu ne facessi parte.
            Ti aspettiamo al Porto Turistico di Lovere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contatti"
              className="inline-flex items-center justify-center gap-2 bg-lago hover:bg-lago-dark text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              Come Raggiungerci
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-carbone font-semibold px-8 py-4 rounded-full transition-all border-2 border-lago"
            >
              Scopri il Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
