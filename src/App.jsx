import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Homepage from './pages/Homepage'
import ChiSiamo from './pages/ChiSiamo'
import Menu from './pages/Menu'
import Eventi from './pages/Eventi'
import Galleria from './pages/Galleria'
import Contatti from './pages/Contatti'

function App() {
  return (
    <>
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
    </>
  )
}

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-grigio-perla pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-carbone mb-8">Privacy Policy</h1>
        <div className="bg-white rounded-2xl p-8 shadow-sm prose prose-gray max-w-none">
          <p className="text-grigio leading-relaxed mb-6">
            <strong>Artour Caffè</strong> - Via del Cantiere, 14 - 24065 Lovere (BG)
          </p>
          <h2 className="font-heading text-2xl font-bold text-carbone mt-8 mb-4">1. Titolare del Trattamento</h2>
          <p className="text-grigio leading-relaxed mb-6">
            Il titolare del trattamento dei dati personali è Artour Caffè, con sede in Via del Cantiere, 14 - 24065 Lovere (BG).
            Per qualsiasi informazione relativa al trattamento dei dati personali è possibile contattarci al numero +39 380 365 4787.
          </p>
          <h2 className="font-heading text-2xl font-bold text-carbone mt-8 mb-4">2. Tipologia di Dati Raccolti</h2>
          <p className="text-grigio leading-relaxed mb-6">
            I dati personali raccolti attraverso il form di contatto presente sul sito includono: nome, indirizzo email,
            numero di telefono (facoltativo) e il contenuto del messaggio inviato.
          </p>
          <h2 className="font-heading text-2xl font-bold text-carbone mt-8 mb-4">3. Finalità del Trattamento</h2>
          <p className="text-grigio leading-relaxed mb-6">
            I dati raccolti vengono utilizzati esclusivamente per rispondere alle richieste di informazioni inviate
            attraverso il form di contatto e per fornire informazioni sui nostri servizi.
          </p>
          <h2 className="font-heading text-2xl font-bold text-carbone mt-8 mb-4">4. Diritti dell'Interessato</h2>
          <p className="text-grigio leading-relaxed mb-6">
            In conformità al GDPR (Regolamento UE 2016/679), l'utente ha diritto di accedere ai propri dati personali,
            richiederne la rettifica, la cancellazione, la limitazione del trattamento, nonché di opporsi al trattamento stesso.
          </p>
        </div>
      </div>
    </div>
  )
}

function CookiePolicy() {
  return (
    <div className="min-h-screen bg-grigio-perla pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-carbone mb-8">Cookie Policy</h1>
        <div className="bg-white rounded-2xl p-8 shadow-sm prose prose-gray max-w-none">
          <p className="text-grigio leading-relaxed mb-6">
            <strong>Artour Caffè</strong> - Via del Cantiere, 14 - 24065 Lovere (BG)
          </p>
          <h2 className="font-heading text-2xl font-bold text-carbone mt-8 mb-4">Cosa sono i Cookie</h2>
          <p className="text-grigio leading-relaxed mb-6">
            I cookie sono piccoli file di testo che i siti visitati inviano al browser dell'utente,
            dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva.
          </p>
          <h2 className="font-heading text-2xl font-bold text-carbone mt-8 mb-4">Cookie Utilizzati</h2>
          <p className="text-grigio leading-relaxed mb-6">
            Questo sito utilizza esclusivamente cookie tecnici necessari per il corretto funzionamento del sito
            e cookie analitici in forma anonima per raccogliere informazioni aggregate sull'utilizzo del sito.
          </p>
          <h2 className="font-heading text-2xl font-bold text-carbone mt-8 mb-4">Cookie di Terze Parti</h2>
          <p className="text-grigio leading-relaxed mb-6">
            Il sito incorpora contenuti di terze parti (Google Maps, Instagram) che potrebbero installare
            propri cookie. Per maggiori informazioni, consultare le rispettive privacy policy.
          </p>
          <h2 className="font-heading text-2xl font-bold text-carbone mt-8 mb-4">Gestione dei Cookie</h2>
          <p className="text-grigio leading-relaxed mb-6">
            L'utente può gestire le preferenze relative ai cookie attraverso le impostazioni del proprio browser.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
