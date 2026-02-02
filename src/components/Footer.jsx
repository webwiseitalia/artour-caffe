import { Link } from 'react-router-dom'
import logo from '../assets/logoartour.webp'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-notte text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo e descrizione */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Artour Caffè" className="h-14 w-auto mb-4" />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Dal primo caffè all'ultimo cocktail. Il tuo angolo sul Porto Turistico di Lovere,
              nel cuore del Lago d'Iseo.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/artour_cafe_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tramonto hover:text-notte transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/393803654787"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-porto hover:text-white transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link rapidi */}
          <div>
            <h4 className="text-tramonto font-semibold text-lg mb-4">Esplora</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Chi Siamo', path: '/chi-siamo' },
                { name: 'Menu', path: '/menu' },
                { name: 'Eventi', path: '/eventi' },
                { name: 'Galleria', path: '/galleria' },
                { name: 'Contatti', path: '/contatti' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-tramonto transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Orari */}
          <div>
            <h4 className="text-tramonto font-semibold text-lg mb-4">Orari</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between text-white/70">
                <span>Lunedì</span>
                <span className="text-spritz">Chiuso</span>
              </li>
              <li className="flex justify-between text-white/70">
                <span>Martedì - Giovedì</span>
                <span>08:00 - 00:00</span>
              </li>
              <li className="flex justify-between text-white/70">
                <span>Venerdì - Sabato</span>
                <span className="text-tramonto font-medium">08:00 - 02:00</span>
              </li>
              <li className="flex justify-between text-white/70">
                <span>Domenica</span>
                <span>08:00 - 00:00</span>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="text-tramonto font-semibold text-lg mb-4">Contatti</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+393803654787" className="flex items-start gap-3 text-white/70 hover:text-tramonto transition-colors">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+39 380 365 4787</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Via del Cantiere, 14<br />24065 Lovere (BG)</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
                <span>Porto Turistico di Cornasola<br />Lago d'Iseo</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} Artour Caffè. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy-policy" className="text-white/50 hover:text-tramonto transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookie-policy" className="text-white/50 hover:text-tramonto transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
