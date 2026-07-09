import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Github, Linkedin } from './Icons'
import { github, linkedin, resume } from '../data/socialLinks'

// Custom Ship Wheel SVG icon
const ShipWheelIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" />
    <line x1="12" y1="1" x2="12" y2="23" />
    <line x1="1" y1="12" x2="23" y2="12" />
    <line x1="4.2" y1="4.2" x2="19.8" y2="19.8" />
    <line x1="4.2" y1="19.8" x2="19.8" y2="4.2" />
  </svg>
)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Principles", href: "#principles" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#timeline" },
    { name: "Tech Stack", href: "#techstack" },
    { name: "Beyond Code", href: "#beyondcode" },
    { name: "Contact", href: "#contact" },
  ]

  // Track page scroll to shrink navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Observe page sections to trigger active indicator
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -55% 0px', // detects focus in the middle viewport range
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    navLinks.forEach((link) => {
      const id = link.href.replace('#', '')
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out font-sans ${
      isScrolled 
        ? "bg-op-navy/60 backdrop-blur-xl border-b border-op-gold/30 py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.18)]" 
        : "bg-op-navy/35 backdrop-blur-md border-b border-op-gold/15 py-4"
    } px-6 md:px-12 flex items-center justify-between`}>
      
      <div className="flex items-center gap-10">
        {/* Custom Ship Wheel Logo Emblem */}
        <a href="#" className="flex items-center gap-3 group select-none">
          <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
            {/* Outer Ship Wheel */}
            <div className="absolute inset-0 group-hover:rotate-45 transition-transform duration-700 ease-out text-op-gold/80 group-hover:text-op-gold">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current" strokeWidth="5.5" strokeLinecap="round">
                <circle cx="50" cy="50" r="32" />
                <circle cx="50" cy="50" r="18" strokeDasharray="3 3" />
                <line x1="50" y1="5" x2="50" y2="95" />
                <line x1="5" y1="50" x2="95" y2="50" />
                <line x1="18.2" y1="18.2" x2="81.8" y2="81.8" />
                <line x1="18.2" y1="81.8" x2="81.8" y2="18.2" />
                <circle cx="50" cy="50" r="8" fill="var(--color-op-navy)" />
              </svg>
            </div>
            {/* Center Initials */}
            <span className="relative z-10 font-cinzel text-xs font-black text-op-parchment tracking-tighter">AM</span>
          </div>
          <span className="hidden md:block font-cinzel text-sm font-black text-op-parchment tracking-widest group-hover:text-op-gold transition-colors duration-300">
            ANUJ MISHRA
          </span>
        </a>
        
        {/* Navigation items (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeSection === id

            return (
              <a 
                key={link.name} 
                href={link.href} 
                className={`group relative py-1.5 px-1 text-xs font-bold tracking-wider uppercase transition-colors duration-300 hover:-translate-y-0.5 hover:text-op-parchment ${
                  isActive ? "text-op-parchment font-extrabold" : "text-op-sky/75"
                }`}
              >
                <span>{link.name}</span>

                {/* Compass Needle Underline Animation */}
                <div className="absolute bottom-0 inset-x-0 h-[2px] flex items-center justify-center pointer-events-none">
                  <span className="w-0 h-[1.5px] bg-op-gold group-hover:w-full transition-all duration-300 origin-center scale-x-0 group-hover:scale-x-100" />
                  <span className="absolute w-1 h-1 bg-op-gold rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Gliding Log Pose / active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-[-11px] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-op-gold animate-pulse shadow-[0_0_8px_rgba(247,201,72,0.6)]" />
                    <span className="w-[1.5px] h-1.5 bg-op-gold/50" />
                  </motion.div>
                )}
              </a>
            )
          })}
        </div>
      </div>

      {/* Action panel (Socials, Resume, Toggle) */}
      <div className="flex items-center gap-4">
        {/* Desktop Social Ports */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl text-op-sky/70 hover:text-op-gold hover:bg-op-navy/35 border border-transparent hover:border-op-gold/20 transition-all duration-300"
            title="GitHub Port"
          >
            <Github className="w-4.5 h-4.5 fill-none stroke-current" />
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl text-op-sky/70 hover:text-op-gold hover:bg-op-navy/35 border border-transparent hover:border-op-gold/20 transition-all duration-300"
            title="LinkedIn Deck"
          >
            <Linkedin className="w-4.5 h-4.5 fill-none stroke-current" />
          </a>
        </div>

        {/* Compact Glassmorphic Resume Log Button */}
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-op-navy/35 backdrop-blur-md border border-op-gold/35 text-xs font-bold text-op-parchment/90 tracking-wider uppercase transition-all duration-300 hover:bg-op-navy/55 hover:border-op-gold/75 hover:text-op-parchment hover:shadow-[0_0_12px_rgba(247,201,72,0.15)] hover:scale-[1.02]"
        >
          {/* Wooden shine overlay */}
          <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-30deg] group-hover:translate-x-[400%] transition-transform duration-1000 ease-out" />
          </div>
          <div className="relative group-hover:rotate-180 transition-transform duration-500 shrink-0">
            <ShipWheelIcon className="w-3.5 h-3.5 text-op-gold/80 group-hover:text-op-gold" />
          </div>
          <span className="relative z-10">Resume Log</span>
        </a>

        {/* Compass Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-op-navy/40 backdrop-blur-md border border-op-gold/35 text-op-parchment/90 hover:border-op-gold/60 hover:bg-op-navy/60 transition-all duration-300 shadow-sm relative group"
          aria-label="Toggle Menu"
        >
          {/* Compass layout ring marks */}
          <div className="absolute inset-0.5 rounded-full border border-dashed border-op-gold/20 group-hover:rotate-90 transition-transform duration-500 pointer-events-none" />
          {isOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 z-40 bg-[#071a2d]/95 backdrop-blur-xl border-b border-op-gold/30 shadow-2xl overflow-hidden lg:hidden flex flex-col py-6 px-6 md:px-12 space-y-6"
          >
            {/* Nav links */}
            <div className="flex flex-col gap-3 text-left">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '')
                const isActive = activeSection === id

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-semibold py-2.5 border-b border-op-gold/10 flex items-center justify-between font-sans uppercase tracking-wider transition-colors duration-300 ${
                      isActive ? "text-op-gold font-bold" : "text-op-parchment/80 hover:text-op-gold"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-op-gold/60" />
                  </a>
                )
              })}
            </div>

            {/* Mobile Actions (Resume + Social Links) */}
            <div className="flex flex-col gap-4 pt-4 border-t border-op-gold/10">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-op-navy border border-op-gold/35 text-op-parchment font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-op-navy/70 hover:border-op-gold/60"
              >
                <ShipWheelIcon className="w-4 h-4 text-op-gold/80" />
                <span>Resume Log</span>
              </a>

              <div className="flex items-center justify-center gap-8 pt-2">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-op-sky hover:text-op-gold transition-colors"
                >
                  <Github className="w-4.5 h-4.5 fill-none stroke-current" />
                  <span>GitHub</span>
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-op-sky hover:text-op-gold transition-colors"
                >
                  <Linkedin className="w-4.5 h-4.5 fill-none stroke-current" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
