import { useState } from 'react'

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

const allPhotos = [
  { src: foto1, category: 'drinks', title: 'Spritz con vista' },
  { src: foto2, category: 'drinks', title: 'Cocktail alla fragola' },
  { src: foto3, category: 'drinks', title: 'Cocktail arancio' },
  { src: foto4, category: 'food', title: 'Focaccia mortadella e burrata' },
  { src: foto5, category: 'food', title: 'Focaccia rucola e pomodorini' },
  { src: foto6, category: 'food', title: 'Croissant salato' },
  { src: foto7, category: 'food', title: 'Pancake con frutta' },
  { src: foto8, category: 'food', title: 'Colazione gourmet' },
  { src: foto9, category: 'food', title: 'Panino gourmet' },
  { src: foto10, category: 'food', title: 'Pizza fritta' },
  { src: foto11, category: 'food', title: 'Colazione classica' },
  { src: foto12, category: 'food', title: 'Bagel gourmet' },
  { src: foto13, category: 'eventi', title: 'Tartine catering' },
  { src: foto14, category: 'eventi', title: 'Buffet elegante' },
  { src: foto15, category: 'eventi', title: 'Buffet completo' },
  { src: foto16, category: 'eventi', title: 'Mini burger colorati' },
  { src: foto17, category: 'eventi', title: 'Crostini gourmet' },
  { src: foto18, category: 'eventi', title: 'Tartare e stuzzichini' },
  { src: foto19, category: 'drinks', title: 'Cocktail serale' },
  { src: foto20, category: 'food', title: 'Dessert con gelato' },
  { src: foto21, category: 'eventi', title: 'Buffet serale' },
  { src: foto22, category: 'eventi', title: 'Servizio catering' },
]

const categories = [
  { id: 'tutti', name: 'Tutti' },
  { id: 'drinks', name: 'Drinks' },
  { id: 'food', name: 'Food' },
  { id: 'eventi', name: 'Eventi' },
]

export default function Galleria() {
  const [activeFilter, setActiveFilter] = useState('tutti')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const filteredPhotos = activeFilter === 'tutti'
    ? allPhotos
    : allPhotos.filter(photo => photo.category === activeFilter)

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

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="py-32 pt-40 bg-gradient-lago">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-tramonto font-medium tracking-widest uppercase text-sm">I Nostri Scatti</span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6">
            Galleria Fotografica
          </h1>
          <p className="text-white/80 text-xl max-w-3xl mx-auto">
            Scopri l'atmosfera di Artour Caffè attraverso le nostre foto
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="sticky top-20 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-2 sm:gap-4 sm:justify-center scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all ${
                  activeFilter === cat.id
                    ? 'bg-lago text-white'
                    : 'bg-grigio-perla text-grigio hover:bg-lago/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {filteredPhotos.map((photo, index) => (
              <div
                key={index}
                className="break-inside-avoid mb-4 cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-notte/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">{photo.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-notte/95 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-50"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={prevImage}
            className="absolute left-4 text-white/70 hover:text-white p-2 z-50"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={nextImage}
            className="absolute right-4 text-white/70 hover:text-white p-2 z-50"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[90vh] px-16">
            <img
              src={filteredPhotos[currentImage].src}
              alt={filteredPhotos[currentImage].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 font-medium">
              {filteredPhotos[currentImage].title}
            </p>
            <p className="text-white/50 text-center text-sm mt-1">
              {currentImage + 1} / {filteredPhotos.length}
            </p>
          </div>
        </div>
      )}

      {/* INSTAGRAM CTA */}
      <section className="py-20 lg:py-32 bg-grigio-perla">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-tramonto font-medium tracking-widest uppercase text-sm">—— Seguici</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-carbone mt-2 mb-6">
            @artour_cafe_
          </h2>
          <p className="text-grigio text-xl max-w-2xl mx-auto mb-8">
            Per vedere ancora più foto e rimanere aggiornato su novità ed eventi, seguici su Instagram!
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
    </div>
  )
}
