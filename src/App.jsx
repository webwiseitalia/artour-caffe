import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'
import Homepage from './pages/Homepage'
import ChiSiamo from './pages/ChiSiamo'
import Menu from './pages/Menu'
import Eventi from './pages/Eventi'
import Galleria from './pages/Galleria'
import Contatti from './pages/Contatti'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <SmoothScroll>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/eventi" element={<Eventi />} />
            <Route path="/galleria" element={<Galleria />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[var(--grigio-perla)] pt-40 pb-20">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <span className="text-[var(--tramonto)] text-xs tracking-widest uppercase">Legale</span>
        <h1 className="font-bold text-[var(--carbone)] mt-2 mb-12" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
          Privacy Policy
        </h1>
        <div className="space-y-8 text-[var(--grigio)]">
          <section>
            <h2 className="text-[var(--carbone)] font-semibold text-xl mb-4">1. Titolare del Trattamento</h2>
            <p className="leading-relaxed">
              Il titolare del trattamento dei dati personali è Artour Caffè, con sede in Via del Cantiere, 14 - 24065 Lovere (BG).
              Per qualsiasi informazione è possibile contattarci al numero +39 380 365 4787.
            </p>
          </section>
          <section>
            <h2 className="text-[var(--carbone)] font-semibold text-xl mb-4">2. Dati Raccolti</h2>
            <p className="leading-relaxed">
              I dati personali raccolti attraverso il form di contatto includono: nome, indirizzo email,
              numero di telefono (facoltativo) e il contenuto del messaggio.
            </p>
          </section>
          <section>
            <h2 className="text-[var(--carbone)] font-semibold text-xl mb-4">3. Finalità</h2>
            <p className="leading-relaxed">
              I dati vengono utilizzati esclusivamente per rispondere alle richieste inviate
              attraverso il form di contatto.
            </p>
          </section>
          <section>
            <h2 className="text-[var(--carbone)] font-semibold text-xl mb-4">4. Diritti</h2>
            <p className="leading-relaxed">
              In conformità al GDPR, l'utente ha diritto di accedere ai propri dati,
              richiederne la rettifica o la cancellazione.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

function CookiePolicy() {
  return (
    <div className="min-h-screen bg-[var(--grigio-perla)] pt-40 pb-20">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <span className="text-[var(--tramonto)] text-xs tracking-widest uppercase">Legale</span>
        <h1 className="font-bold text-[var(--carbone)] mt-2 mb-12" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
          Cookie Policy
        </h1>
        <div className="space-y-8 text-[var(--grigio)]">
          <section>
            <h2 className="text-[var(--carbone)] font-semibold text-xl mb-4">Cosa sono i Cookie</h2>
            <p className="leading-relaxed">
              I cookie sono piccoli file di testo che i siti visitati inviano al browser dell'utente.
            </p>
          </section>
          <section>
            <h2 className="text-[var(--carbone)] font-semibold text-xl mb-4">Cookie Utilizzati</h2>
            <p className="leading-relaxed">
              Questo sito utilizza cookie tecnici necessari per il funzionamento
              e cookie analitici anonimi.
            </p>
          </section>
          <section>
            <h2 className="text-[var(--carbone)] font-semibold text-xl mb-4">Terze Parti</h2>
            <p className="leading-relaxed">
              Il sito incorpora Google Maps e contenuti Instagram che potrebbero installare propri cookie.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
