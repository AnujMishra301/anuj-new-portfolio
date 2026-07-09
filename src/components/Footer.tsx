import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Mail, FileText, Compass, X, Trophy } from 'lucide-react'
import { Github, Linkedin } from './Icons'
import { github, linkedin, resume, email } from '../data/socialLinks'

interface Achievement {
  id: string
  title: string
  desc: string
  unlockedDesc: string
}

interface Toast {
  id: string
  title: string
  desc: string
}

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const shouldReduceMotion = useReducedMotion()

  // Achievement States
  const [unlockedIds, setUnlockedIds] = useState<string[]>([])
  const [toasts, setToasts] = useState<Toast[]>([])
  const [panelOpen, setPanelOpen] = useState(false)

  // Message in a bottle states
  const [bottleOpen, setBottleOpen] = useState(false)

  // Log Pose Scroll To Top states
  const [logPoseRotate, setLogPoseRotate] = useState(0)
  const [poseRipple, setPoseRipple] = useState(false)

  // Sections visited tracking set
  const visitedSections = useRef<Set<string>>(new Set())
  // Books opened tracking set
  const openedBooks = useRef<Set<string>>(new Set())

  const achievementsList: Achievement[] = [
    {
      id: "explorer",
      title: "Explorer",
      desc: "Visit every cataloged section of the voyage.",
      unlockedDesc: "You have traversed the entire map of my engineering work!"
    },
    {
      id: "historian",
      title: "Historian",
      desc: "Open and read every book in my literature shelf.",
      unlockedDesc: "You have analyzed every literary catalog in my library."
    },
    {
      id: "poet",
      title: "Poet",
      desc: "Discover the hidden journal notes between volumes.",
      unlockedDesc: "You uncovered the hidden poetic manuscripts on the shelf."
    },
    {
      id: "navigator",
      title: "Navigator",
      desc: "Drop anchor at the ElderSense AI flagship centerpiece.",
      unlockedDesc: "You navigated successfully to the flagship ElderSense destination!"
    },
    {
      id: "curious-mind",
      title: "Curious Mind",
      desc: "Find and read the Message in a Bottle.",
      unlockedDesc: "You salvaged the drifting letter and read its secret log."
    },
    {
      id: "grand-line-explorer",
      title: "Grand Line Explorer",
      desc: "Unlock all 5 hidden explorer achievements.",
      unlockedDesc: "Incredible! You have conquered every hidden secret on the Grand Line!"
    }
  ]

  // Load persistence
  useEffect(() => {
    try {
      const saved = localStorage.getItem('anuj-portfolio-achievements')
      if (saved) {
        setUnlockedIds(JSON.parse(saved))
      }
    } catch (e) {
      console.warn("Storage read error: ", e)
    }
  }, [])

  // Lock handler helper
  const unlockAchievement = (id: string) => {
    setUnlockedIds((prev) => {
      if (prev.includes(id)) return prev
      const updated = [...prev, id]
      
      // Save persistence
      localStorage.setItem('anuj-portfolio-achievements', JSON.stringify(updated))

      // Trigger Toast alert
      const match = achievementsList.find(a => a.id === id)
      if (match) {
        triggerToast(match.title, match.unlockedDesc)
      }

      // Check Master completion trigger
      const baseUnlockedCount = updated.filter(x => x !== 'grand-line-explorer').length
      if (baseUnlockedCount === 5 && !prev.includes('grand-line-explorer')) {
        setTimeout(() => {
          unlockAchievement('grand-line-explorer')
        }, 1500)
      }

      return updated
    })
  }

  const triggerToast = (title: string, desc: string) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((prev) => [...prev, { id, title, desc }])
    setTimeout(() => {
      setToasts((prev) => prev.filter(t => t.id !== id))
    }, 4500)
  }

  // Set up listeners for section intersections & custom events
  useEffect(() => {
    // 1. Observe all major sections
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          visitedSections.current.add(entry.target.id)
          // Threshold checking: base sections excluding footer/nav
          const targets = ['hero', 'about', 'principles', 'projects', 'timeline', 'techstack', 'beyondcode', 'contact']
          const visitedCount = targets.filter(t => visitedSections.current.has(t)).length
          if (visitedCount >= targets.length) {
            unlockAchievement('explorer')
          }
        }
      })
    }, { threshold: 0.15 })

    const sections = ['hero', 'about', 'principles', 'projects', 'timeline', 'techstack', 'beyondcode', 'contact']
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    // 2. Listen to custom book dispatches
    const handleBookOpened = (e: Event) => {
      const detail = (e as CustomEvent).detail
      if (detail && detail.id) {
        openedBooks.current.add(detail.id)
        if (openedBooks.current.size >= 4) {
          unlockAchievement('historian')
        }
      }
    }

    // 3. Listen to custom journal & centerpiece dispatches
    const handleJournalOpened = () => {
      unlockAchievement('poet')
    }
    const handleElderSenseReached = () => {
      unlockAchievement('navigator')
    }

    window.addEventListener('book-opened', handleBookOpened)
    window.addEventListener('journal-opened', handleJournalOpened)
    window.addEventListener('eldersense-reached', handleElderSenseReached)

    return () => {
      observer.disconnect()
      window.removeEventListener('book-opened', handleBookOpened)
      window.removeEventListener('journal-opened', handleJournalOpened)
      window.removeEventListener('eldersense-reached', handleElderSenseReached)
    }
  }, [])

  // Log Pose scroll to top animation
  const handleScrollTop = () => {
    setLogPoseRotate(prev => prev + 720 + Math.floor(Math.random() * 360))
    setPoseRipple(true)
    setTimeout(() => setPoseRipple(false), 800)

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Opens message in a bottle & rewards Curious Mind
  const openBottleMessage = () => {
    setBottleOpen(true)
    unlockAchievement('curious-mind')
  }

  return (
    <footer className="relative bg-background border-t border-text/5 pt-20 pb-12 px-6 md:px-12 overflow-hidden select-none">
      
      {/* Calm Harbor Scene Low-Contrast Background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden opacity-[0.04] md:opacity-[0.07] text-op-navy">
        
        {/* Soft Moon Reflected in Sea */}
        <div className="absolute bottom-16 left-[25%] w-32 h-32 rounded-full bg-[radial-gradient(circle,var(--color-op-gold)_10%,transparent_60%)] filter blur-md opacity-30" />
        
        {/* Distant islands curves */}
        <svg viewBox="0 0 400 100" className="absolute bottom-10 inset-x-0 w-full h-16 fill-current">
          <path d="M 0,100 L 40,80 Q 80,70 120,85 T 240,90 Q 280,75 320,88 L 400,100 Z" />
          <path d="M 30,100 L 90,85 Q 150,75 210,90 T 360,95 L 400,100 Z" className="opacity-50" />
        </svg>

        {/* Waves sways */}
        <svg viewBox="0 0 200 40" className="absolute bottom-0 inset-x-0 w-full h-8 fill-current" preserveAspectRatio="none">
          <path d="M 0,25 Q 50,18 100,25 T 200,25 L 200,40 L 0,40 Z" />
        </svg>

        {/* Twinkling stars */}
        <div className="absolute inset-0">
          <div className="absolute top-[12%] left-[18%] w-1 h-1 rounded-full bg-current opacity-70" />
          <div className="absolute top-[25%] right-[22%] w-1.5 h-1.5 rounded-full bg-current opacity-70" />
          <div className="absolute top-[18%] left-[45%] w-1.2 h-1.2 rounded-full bg-current opacity-70" />
          <div className="absolute top-[30%] right-[48%] w-1 h-1 rounded-full bg-current opacity-70" />
        </div>

        {/* Faint anchored ship */}
        <svg viewBox="0 0 80 50" className="absolute bottom-12 left-[12%] w-24 h-16 fill-current">
          <path d="M 10,40 Q 40,38 70,40 L 65,34 L 15,34 Z" />
          <line x1="30" y1="34" x2="30" y2="12" stroke="currentColor" strokeWidth="1" />
          <line x1="50" y1="34" x2="50" y2="16" stroke="currentColor" strokeWidth="1" />
        </svg>

        {/* Lighthouse beacon ray */}
        <svg viewBox="0 0 20 40" className="absolute bottom-10 right-[15%] w-8 h-16 fill-current">
          <path d="M 5,40 L 8,15 L 12,15 L 15,40 Z" />
          <circle cx="10" cy="10" r="3" />
        </svg>

      </div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Closing Reflective Message */}
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <p className="font-serif italic text-base sm:text-lg leading-relaxed text-op-parchment/90">
            "Every project began with curiosity. <br />
            Every journey began with a first step. <br />
            Thank you for taking the time to explore mine."
          </p>
          
          <div className="font-cinzel text-sm font-bold tracking-widest text-op-gold uppercase">
            — Anuj Mishra
          </div>

          <div className="flex items-center justify-center gap-3 opacity-30 py-1">
            <div className="w-12 h-[1px] bg-op-brown" />
            <Compass className="w-4 h-4 text-op-brown" />
            <div className="w-12 h-[1px] bg-op-brown" />
          </div>
        </div>

        {/* Engraved Plaque Built-With badging */}
        <div className="space-y-4">
          <span className="font-mono text-[9px] font-bold text-op-gold/50 uppercase tracking-widest block text-center">
            Logbook Engravings // Built With
          </span>
          
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-lg mx-auto">
            {["React 19", "TypeScript", "Vite", "Framer Motion", "Tailwind CSS"].map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 rounded bg-gradient-to-b from-[#1b344d]/20 to-[#071321]/50 border border-op-gold/30 text-op-gold font-mono text-[10px] font-bold tracking-wider shadow-inner uppercase cursor-default select-none transition-all hover:border-op-gold"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom footer index mapping */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-8 border-t border-text/5 text-left font-sans">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <a href="#" className="font-cinzel font-black tracking-widest text-xl text-op-gold hover:text-white transition-colors">
              AM
            </a>
            <p className="text-muted text-xs leading-relaxed max-w-xs font-medium">
              Systems engineer exploring backend pipelines, machine learning layers, literature, and cinema logic. Anchored on the Grand Line.
            </p>
          </div>

          {/* Column 2: Sections */}
          <div className="space-y-3.5">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-op-gold/70">
              Core Map Directory
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#about" className="text-muted hover:text-op-gold transition-colors">About logbook</a></li>
              <li><a href="#principles" className="text-muted hover:text-op-gold transition-colors">Principles values</a></li>
              <li><a href="#projects" className="text-muted hover:text-op-gold transition-colors">Project islands</a></li>
              <li><a href="#timeline" className="text-muted hover:text-op-gold transition-colors">Voyage timeline</a></li>
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="space-y-3.5">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-op-gold/70">
              Inventory Log
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#techstack" className="text-muted hover:text-op-gold transition-colors">Technology toolkit</a></li>
              <li><a href="#beyondcode" className="text-muted hover:text-op-gold transition-colors">Beyond code details</a></li>
              <li><a href="#dashboard" className="text-muted hover:text-op-gold transition-colors">Status terminal</a></li>
              <li><a href="#contact" className="text-muted hover:text-op-gold transition-colors">Get in touch</a></li>
            </ul>
          </div>

          {/* Column 4: Links / Connect */}
          <div className="space-y-3.5">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-op-gold/70">
              Anchors & Ports
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-white transition-colors">
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-[#0077b5] transition-colors">
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn Link</span>
                </a>
              </li>
              <li>
                <a href={email} className="flex items-center gap-2 text-muted hover:text-op-gold transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Channel</span>
                </a>
              </li>
              <li>
                <a href={resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-emerald-400 transition-colors">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume Profile</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Global layout controls, Achievement check panel link & Copyright */}
        <div className="pt-8 border-t border-text/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-muted font-sans font-medium">
          
          {/* Achievement Check Drawer Panel Toggle & Message bottle indicator */}
          <div className="flex items-center gap-4">
            
            {/* Achievement button toggle */}
            <button
              onClick={() => setPanelOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface/40 border border-op-gold/30 text-op-gold hover:bg-op-gold/10 hover:border-op-gold transition-all cursor-pointer shadow-sm text-[10px] font-bold uppercase tracking-wider select-none"
            >
              <Trophy className="w-3.5 h-3.5 text-op-gold animate-bounce" />
              <span>Logbook Achievements ({unlockedIds.length}/6)</span>
            </button>

            {/* Drifting Message in a bottle */}
            <button
              onClick={openBottleMessage}
              className="relative w-7 h-12 flex items-center justify-center cursor-pointer opacity-80 hover:opacity-100 transition-opacity active:scale-95"
              aria-label="Investigate floating glass bottle"
            >
              {/* Floating Animation */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, -3, 0], rotate: [-2, 3, -2] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="w-full h-full text-op-gold flex items-center justify-center"
              >
                <svg viewBox="0 0 20 40" className="w-6 h-10 stroke-current fill-transparent" strokeWidth="1.2">
                  <path d="M 8,2 L 12,2 L 12,8 Q 18,10 18,22 Q 18,36 10,38 Q 2,36 2,22 Q 2,10 8,8 Z" />
                  {/* Rolled message scroll representation inside */}
                  <rect x="7" y="14" width="6" height="15" rx="1" className="fill-op-gold opacity-50" strokeWidth="0.5" />
                  {/* Floating ripples around the bottle */}
                  <ellipse cx="10" cy="36" rx="6" ry="1.5" className="stroke-op-ocean/30" />
                </svg>
              </motion.div>
            </button>

          </div>

          {/* Copyright notice */}
          <div className="flex flex-col sm:items-end gap-1 font-mono text-[10px] opacity-75">
            <span>&copy; {currentYear} Anuj Mishra. Anchored coordinates.</span>
            <span>Crafted with Logical Precision & Adventurous Empathy.</span>
          </div>

        </div>

      </div>

      {/* --- LOG POSE COMPASS SCROLL TO TOP FLOATING BUTTON --- */}
      <div className="fixed bottom-6 left-6 z-40 select-none">
        <button
          onClick={handleScrollTop}
          className="relative w-12 h-12 rounded-full bg-[#fffcf5] border-2 border-op-brown/40 flex items-center justify-center hover:border-op-gold transition-colors shadow-lg cursor-pointer group focus:outline-none"
          aria-label="Scroll to top of page using Log Pose"
        >
          {/* Compass needle inside */}
          <motion.div
            animate={{ rotate: logPoseRotate }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-8 h-8 flex items-center justify-center"
          >
            <svg viewBox="0 0 32 32" className="w-full h-full text-op-navy fill-current">
              <circle cx="16" cy="16" r="14" className="stroke-op-brown/20 fill-transparent" strokeWidth="1" />
              {/* Compass points indicators */}
              <text x="16" y="6" textAnchor="middle" className="text-[5px] font-sans font-black opacity-30">N</text>
              
              {/* Needle pointer */}
              <polygon points="16,4 19,16 16,14" className="fill-op-red" />
              <polygon points="16,28 13,16 16,14" className="fill-op-navy/60" />
              
              <circle cx="16" cy="16" r="2" fill="var(--color-op-gold)" />
            </svg>
          </motion.div>

          {/* Click Ripple Indicator */}
          <AnimatePresence>
            {poseRipple && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: 1.6, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 rounded-full border border-op-gold pointer-events-none"
              />
            )}
          </AnimatePresence>

          <span className="absolute bottom-[-10px] text-[7px] font-bold text-op-navy bg-[#fffcf5] border border-op-brown/20 px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest font-sans whitespace-nowrap">
            Log Pose
          </span>
        </button>
      </div>

      {/* --- FLOATING TOAST NOTIFICATION CORNER --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none max-w-sm">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#fffcf5] border-2 border-op-gold rounded-2xl p-4 shadow-2xl flex items-start gap-3 text-left text-op-navy pointer-events-auto"
            >
              <div className="w-8 h-8 rounded-full bg-op-gold/10 border border-op-gold/30 flex items-center justify-center text-op-gold shrink-0">
                <Trophy className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h5 className="font-cinzel text-xs font-bold uppercase tracking-wider text-op-navy">
                  Achievement Unlocked: {t.title}
                </h5>
                <p className="text-[10px] text-op-navy/80 font-sans font-medium leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* --- MESSAGE IN A BOTTLE MODAL PANEL --- */}
      <AnimatePresence>
        {bottleOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setBottleOpen(false)}
              className="absolute inset-0 bg-op-navy/70 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.85, rotate: 2 }}
              className="relative w-full max-w-md bg-[#fffdf8] border-2 border-op-brown text-op-navy rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.5)] p-8 text-left z-10 flex flex-col justify-between"
            >
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-op-brown/30" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-op-brown/30" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-op-brown/30" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-op-brown/30" />

              <button
                onClick={() => setBottleOpen(false)}
                className="absolute top-4 right-4 w-7 h-7 rounded-full border border-op-brown/40 flex items-center justify-center hover:text-op-red hover:border-op-red transition-all cursor-pointer shadow-sm relative group z-20"
                aria-label="Close scroll log"
              >
                <X className="w-3.5 h-3.5 relative z-10" />
              </button>

              <div className="space-y-4 pt-2">
                <span className="font-mono text-[8px] font-bold text-op-brown/50 uppercase tracking-widest block">
                  Salvaged Marine Bottle Log
                </span>
                
                <h4 className="font-cinzel text-base font-bold tracking-widest text-op-navy border-b border-op-brown/15 pb-2 uppercase">
                  Letter to the Curious
                </h4>

                <p className="text-sm leading-relaxed text-op-navy/90 font-serif italic pt-1 whitespace-pre-line">
                  "To the next generation of software engineers:
                  
                  Stay curious about the compiler stack. Scale your architectures simply. Build logic with technical precision, but never lose your empathy for the humans reading your code.
                  
                  The sea of knowledge is infinite, but the journey makes it worth it."
                </p>

                <div className="pt-4 border-t border-op-brown/15 flex justify-between items-center text-[9px] font-mono text-op-gold font-bold uppercase tracking-wider">
                  <span>— Anuj Mishra</span>
                  <span>Coordinates: 3°15'S, 120°28'E</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- LOGBOOK ACHIEVEMENTS DRAWER OVERLAY PANEL --- */}
      <AnimatePresence>
        {panelOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPanelOpen(false)}
              className="absolute inset-0 bg-op-navy/60 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-sm h-full bg-[#fffcf5] border-l-2 border-op-brown text-op-navy p-6 sm:p-8 flex flex-col justify-between shadow-2xl z-10"
            >
              <div className="space-y-6 flex-1 flex flex-col overflow-hidden">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-op-brown/15 pb-4">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-op-gold" />
                    <h3 className="font-cinzel text-sm font-bold uppercase tracking-wider text-op-navy">
                      Voyager Achievements
                    </h3>
                  </div>
                  
                  <button
                    onClick={() => setPanelOpen(false)}
                    className="w-7 h-7 rounded-full border border-op-brown/40 flex items-center justify-center hover:text-op-red hover:border-op-red transition-all cursor-pointer shadow-sm relative group"
                    aria-label="Close achievements panel"
                  >
                    <X className="w-3.5 h-3.5 relative z-10" />
                  </button>
                </div>

                {/* Subtitle count */}
                <div className="text-[10px] font-mono text-op-navy/65 font-bold uppercase tracking-wider text-left bg-op-brown/5 border border-op-brown/10 p-3 rounded-xl flex justify-between">
                  <span>Completion Status:</span>
                  <span className="text-op-gold font-bold">
                    {unlockedIds.length} / 6 unlocked
                  </span>
                </div>

                {/* List of achievements */}
                <div className="flex-1 overflow-y-auto pr-1 space-y-3 text-left">
                  {achievementsList.map((ach) => {
                    const isUnlocked = unlockedIds.includes(ach.id)
                    return (
                      <div
                        key={ach.id}
                        className={`border rounded-xl p-3.5 transition-all duration-300 ${
                          isUnlocked 
                            ? "bg-op-gold/5 border-op-gold/45 shadow-sm" 
                            : "bg-op-brown/5 border-op-brown/15 opacity-70"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`font-cinzel text-xs font-bold uppercase tracking-wider ${isUnlocked ? "text-op-navy" : "text-op-navy/60"}`}>
                            {ach.title}
                          </span>
                          
                          {/* Unlocked stamp badge checkbox */}
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center text-[8px] font-black shrink-0 ${
                            isUnlocked 
                              ? "bg-op-gold border-op-gold text-op-navy" 
                              : "border-op-brown/30 text-transparent"
                          }`}>
                            ✓
                          </div>
                        </div>

                        <p className={`text-[10px] leading-relaxed font-sans font-medium mt-1.5 ${isUnlocked ? "text-op-navy/90" : "text-op-navy/50"}`}>
                          {isUnlocked ? ach.unlockedDesc : ach.desc}
                        </p>
                      </div>
                    )
                  })}
                </div>

              </div>

              {/* Reset button inside drawer */}
              {unlockedIds.length > 0 && (
                <button
                  onClick={() => {
                    if (confirm("Reset all unlocked voyager logs and start achievements exploration fresh?")) {
                      setUnlockedIds([])
                      localStorage.removeItem('anuj-portfolio-achievements')
                      triggerToast("Logs Reset", "Your expedition logbook achievements have been wiped.")
                    }
                  }}
                  className="w-full text-center text-[9px] font-mono font-bold tracking-widest text-op-red hover:underline mt-6 uppercase cursor-pointer"
                >
                  Reset Logbook Achievements
                </button>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </footer>
  )
}
