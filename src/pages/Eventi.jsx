import { Link } from 'react-router-dom'

// Import images
import buffet from '../assets/foto/foto-15.webp'
import catering from '../assets/foto/foto-22.webp'
import miniburger from '../assets/foto/foto-16.webp'
import tartine from '../assets/foto/foto-18.webp'
import serata from '../assets/foto/foto-21.webp'
import cocktailSerale from '../assets/foto/foto-19.webp'

export default function Eventi() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative py-32 pt-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={buffet}
            alt="Eventi Artour Caffè"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-notte/90 via-notte/70 to-notte/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-tramonto font-medium tracking-widest uppercase text-sm">Eventi & Serate</span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6">
            Non Solo un Caffè,<br />Un Punto di Ritrovo
          </h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Serate, eventi privati, collaborazioni con la comunità locale.
            Artour Caffè è il cuore pulsante del Porto Turistico di Lovere.
          </p>
        </div>
      </section>

      {/* SERATE WEEKEND */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block bg-spritz text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                Ogni Weekend
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-carbone mb-6">
                Serate Fino alle 2:00
              </h2>
              <p className="text-grigio text-lg leading-relaxed mb-6">
                Il venerdì e il sabato Artour Caffè si trasforma: l'atmosfera si fa più
                intima, le luci più soffuse, la musica accompagna i cocktail preparati
                con cura dal nostro staff.
              </p>
              <p className="text-grigio text-lg leading-relaxed mb-8">
                È il momento perfetto per un dopocena con gli amici, un appuntamento
                speciale, o semplicemente per godersi la vista sul porto illuminato
                mentre sorseggi il tuo drink preferito.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-grigio-perla px-6 py-4 rounded-xl">
                  <p className="text-2xl font-bold text-lago">Ven - Sab</p>
                  <p className="text-grigio text-sm">Aperti fino alle 2:00</p>
                </div>
                <div className="bg-grigio-perla px-6 py-4 rounded-xl">
                  <p className="text-2xl font-bold text-spritz">Cocktail</p>
                  <p className="text-grigio text-sm">Classici e signature</p>
                </div>
                <div className="bg-grigio-perla px-6 py-4 rounded-xl">
                  <p className="text-2xl font-bold text-tramonto">Musica</p>
                  <p className="text-grigio text-sm">Atmosfera curata</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={cocktailSerale}
                alt="Serata Artour Caffè"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-notte text-white p-6 rounded-2xl shadow-xl hidden lg:block">
                <p className="font-heading text-xl font-bold">La Notte</p>
                <p className="text-white/70">inizia qui</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="py-20 lg:py-32 bg-grigio-perla">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-tramonto font-medium tracking-widest uppercase text-sm">—— Collaborazioni</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-carbone mt-2">
              Parte della Comunità
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The Urban Steps */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="aspect-video bg-lago flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="font-accent text-4xl tracking-wider">THE URBAN STEPS</p>
                  <p className="text-white/70 mt-2">Evento partner</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-heading text-2xl font-bold text-carbone mb-4">The Urban Steps</h3>
                <p className="text-grigio leading-relaxed mb-4">
                  Siamo orgogliosi partner di The Urban Steps, evento che celebra la cultura
                  urbana e artistica di Lovere. Michele Zana è attivamente coinvolto
                  nell'organizzazione, portando Artour Caffè nel cuore della manifestazione.
                </p>
                <p className="text-lago font-medium">Arte, musica e community sul lago</p>
              </div>
            </div>

            {/* Pro Loco */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="aspect-video bg-tramonto flex items-center justify-center">
                <div className="text-center text-notte">
                  <p className="font-heading text-3xl font-bold">PRO LOCO</p>
                  <p className="text-notte/70 mt-2">Lovere</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-heading text-2xl font-bold text-carbone mb-4">Pro Loco Lovere</h3>
                <p className="text-grigio leading-relaxed mb-4">
                  Collaboriamo con la Pro Loco di Lovere per promuovere il territorio
                  e le sue tradizioni. Durante le festività e gli eventi locali,
                  Artour Caffè è sempre presente come punto di riferimento per residenti e turisti.
                </p>
                <p className="text-tramonto font-medium">Tradizione e territorio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTI PRIVATI */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img src={catering} alt="Catering" className="rounded-2xl shadow-lg" />
                <img src={miniburger} alt="Mini burger" className="rounded-2xl shadow-lg mt-8" />
                <img src={tartine} alt="Tartine gourmet" className="rounded-2xl shadow-lg -mt-8" />
                <img src={serata} alt="Serata" className="rounded-2xl shadow-lg" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-tramonto font-medium tracking-widest uppercase text-sm">Su Misura</span>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-carbone mt-2 mb-6">
                Eventi Privati
              </h2>
              <p className="text-grigio text-lg leading-relaxed mb-6">
                Stai organizzando una festa di compleanno, un evento aziendale, o una
                ricorrenza speciale? Artour Caffè può ospitare il tuo evento con
                un servizio su misura.
              </p>
              <p className="text-grigio text-lg leading-relaxed mb-8">
                Dal buffet di tartine gourmet ai nostri iconici mini burger colorati,
                dalla selezione di vini ai cocktail signature: creiamo insieme
                l'esperienza perfetta per i tuoi ospiti.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Buffet personalizzati',
                  'Finger food e tartine gourmet',
                  'Cocktail bar dedicato',
                  'Location con vista porto',
                  'Capacità per gruppi',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-tramonto/20 text-tramonto rounded-full flex items-center justify-center text-sm">✓</span>
                    <span className="text-carbone">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/393803654787?text=Ciao!%20Vorrei%20informazioni%20per%20organizzare%20un%20evento%20privato"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-porto hover:bg-porto/90 text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contattaci per il Tuo Evento
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM FEED */}
      <section className="py-20 lg:py-32 bg-grigio-perla">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-tramonto font-medium tracking-widest uppercase text-sm">—— Seguici</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-carbone mt-2 mb-6">
            @artour_cafe_
          </h2>
          <p className="text-grigio text-xl max-w-2xl mx-auto mb-12">
            Scopri i nostri eventi, le novità del menu e i momenti speciali sul nostro Instagram
          </p>

          <a
            href="https://www.instagram.com/artour_cafe_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Seguici su Instagram
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-lago text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
            Ci Vediamo Questo Weekend?
          </h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-8">
            Venerdì e sabato fino alle 2:00. Cocktail, musica, atmosfera.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contatti"
              className="inline-flex items-center justify-center gap-2 bg-tramonto hover:bg-tramonto-dark text-notte font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              Come Arrivare
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all border border-white/30"
            >
              Scopri il Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
