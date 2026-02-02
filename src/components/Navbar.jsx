import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import logo from '../assets/logoartour.webp'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    if (isOpen && menuRef.current) {
      const links = menuRef.current.querySelectorAll('.menu-link')
      gsap.fromTo(links,
        { y: 80, opacity: 0, rotateX: -40 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.2
        }
      )
    }
  }, [isOpen])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Chi Siamo', path: '/chi-siamo' },
    { name: 'Menu', path: '/menu' },
    { name: 'Eventi', path: '/eventi' },
    { name: 'Galleria', path: '/galleria' },
    { name: 'Contatti', path: '/contatti' },
  ]

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled ? 'py-3' : 'py-6'
        }`}
        style={{
          background: isScrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-12">
          <Link to="/" className="relative z-50">
            <motion.img
              src={logo}
              alt="Artour Caffè"
              className="h-10 md:h-12 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            />
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span className={`text-sm tracking-wide transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-[var(--tramonto)]' : 'text-white/80 hover:text-white'
                }`}>
                  {link.name}
                </span>
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[var(--tramonto)] transition-all duration-500 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <motion.a
              href="tel:+393803654787"
              className="hidden md:flex items-center gap-2 text-white/80 hover:text-[var(--tramonto)] transition-colors text-sm"
              whileHover={{ x: 3 }}
            >
              <span className="font-light">+39</span>
              <span className="font-medium">380 365 4787</span>
            </motion.a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            >
              <div className="relative w-6 h-4">
                <span className={`absolute left-0 w-full h-px bg-white transition-all duration-500 ${
                  isOpen ? 'top-1/2 rotate-45' : 'top-0'
                }`} />
                <span className={`absolute left-0 top-1/2 w-full h-px bg-white transition-all duration-500 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`absolute left-0 w-full h-px bg-white transition-all duration-500 ${
                  isOpen ? 'top-1/2 -rotate-45' : 'bottom-0'
                }`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full screen menu */}
      <motion.div
        initial={false}
        animate={{
          clipPath: isOpen ? 'circle(150% at 95% 5%)' : 'circle(0% at 95% 5%)'
        }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-40 bg-[var(--notte)] lg:hidden"
      >
        <div ref={menuRef} className="h-full flex flex-col justify-center px-12" style={{ perspective: '1000px' }}>
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className="menu-link py-4 opacity-0"
            >
              <span className={`text-4xl md:text-6xl font-bold tracking-tight transition-colors ${
                location.pathname === link.path ? 'text-[var(--tramonto)]' : 'text-white'
              }`}>
                {link.name}
              </span>
            </Link>
          ))}

          <div className="mt-16 opacity-0 menu-link">
            <a
              href="tel:+393803654787"
              className="text-white/60 text-lg hover:text-[var(--tramonto)] transition-colors"
            >
              +39 380 365 4787
            </a>
            <p className="text-white/40 text-sm mt-2">
              Via del Cantiere, 14 — Lovere
            </p>
          </div>
        </div>
      </motion.div>
    </>
  )
}
