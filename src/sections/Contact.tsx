import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Mail, FileText, ArrowUpRight, Anchor, Compass, Send } from 'lucide-react'
import { Github, Linkedin } from '../components/Icons'
import { github, linkedin, resume, email } from '../data/socialLinks'

// Custom Snail Transponder (Den Den Mushi inspired SVG)
interface SnailProps {
  mouseX: number
  mouseY: number
  onClick: () => void
  revealed: boolean
}

const SnailTransponder = ({ mouseX, mouseY, onClick, revealed }: SnailProps) => {
  const shouldReduceMotion = useReducedMotion()

  // Calculate eye shifts based on cursor tracking
  const eyeX = shouldReduceMotion ? 0 : mouseX * 0.08
  const eyeY = shouldReduceMotion ? 0 : mouseY * 0.08

  return (
    <button
      onClick={onClick}
      className="relative w-44 h-44 cursor-pointer focus:outline-none group select-none flex items-center justify-center"
      aria-label={revealed ? "Contact options loaded" : "Tap to activate transponder"}
    >
      {/* Soft golden aura glow on hover */}
      <div className="absolute inset-4 rounded-full bg-op-gold/5 blur-xl group-hover:bg-op-gold/15 transition-all duration-500 opacity-60" />

      <motion.div
        animate={shouldReduceMotion ? {} : { scale: [1, 1.015, 1], y: [0, 0.5, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="w-full h-full relative z-10"
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-op-navy">
          {/* Snail Body */}
          <path
            d="M 12,85 C 22,82 28,70 38,72 C 48,74 52,86 64,84 C 74,82 82,78 88,82 C 92,85 85,88 78,88 C 65,88 25,88 12,85 Z"
            fill="var(--color-op-brown)"
            className="opacity-90"
          />
          <path
            d="M 12,85 C 22,82 28,70 38,72 C 48,74 52,86 64,84"
            stroke="rgba(7,26,45,0.2)"
            strokeWidth="1"
          />

          {/* Snail Shell (Phone Receiver Spiral) */}
          <circle cx="48" cy="56" r="22" fill="var(--color-op-navy)" className="opacity-95 stroke-op-gold/30" strokeWidth="1" />
          <path
            d="M 48,34 C 60,34 70,44 70,56 C 70,68 60,78 48,78 C 36,78 26,68 26,56 C 26,44 36,36 48,36 C 58,36 66,44 66,54 C 66,64 58,72 48,72 C 38,72 30,64 30,54 C 30,46 38,38 48,38"
            stroke="var(--color-op-gold)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="opacity-75"
          />

          {/* Snail shell rotary phone details */}
          <circle cx="48" cy="56" r="6" fill="var(--color-op-gold)" className="opacity-80" />
          {[...Array(6)].map((_, i) => {
            const angle = (i * 60 * Math.PI) / 180
            const x = 48 + 14 * Math.cos(angle)
            const y = 56 + 14 * Math.sin(angle)
            return (
              <circle key={i} cx={x} cy={y} r="2" fill="var(--color-op-parchment)" className="opacity-60" />
            )
          })}

          {/* Eye Stalk Left */}
          <motion.path
            d={`M 22,80 L 16,36`}
            stroke="var(--color-op-brown)"
            strokeWidth="2.5"
            strokeLinecap="round"
            animate={shouldReduceMotion ? {} : { rotate: [-1, 1, -1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />

          {/* Eye Stalk Right */}
          <motion.path
            d={`M 26,80 L 26,34`}
            stroke="var(--color-op-brown)"
            strokeWidth="2.5"
            strokeLinecap="round"
            animate={shouldReduceMotion ? {} : { rotate: [1, -1, 1] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
          />

          {/* Eye Left */}
          <g transform={`translate(${16 + eyeX}, ${36 + eyeY})`}>
            <circle cx="0" cy="0" r="5.5" fill="#fff" stroke="var(--color-op-navy)" strokeWidth="1" />
            {/* Blinking pupil */}
            <motion.circle
              cx="0"
              cy="0"
              r="2.5"
              fill="var(--color-op-navy)"
              animate={shouldReduceMotion ? {} : { scaleY: [1, 0.1, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", repeatDelay: 3 }}
            />
          </g>

          {/* Eye Right */}
          <g transform={`translate(${26 + eyeX}, ${34 + eyeY})`}>
            <circle cx="0" cy="0" r="5.5" fill="#fff" stroke="var(--color-op-navy)" strokeWidth="1" />
            <motion.circle
              cx="0"
              cy="0"
              r="2.5"
              fill="var(--color-op-navy)"
              animate={shouldReduceMotion ? {} : { scaleY: [1, 0.1, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", repeatDelay: 3.2 }}
            />
          </g>

          {/* Snail Mouth */}
          <path d="M 22,82 Q 24,85 26,82" stroke="var(--color-op-navy)" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Helper text bubble (fades out when revealed) */}
      <AnimatePresence>
        {!revealed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute bottom-[-15px] bg-[#fffcf5] border border-op-brown/40 rounded-xl px-2.5 py-1 text-[9px] font-bold text-op-navy shadow font-sans uppercase tracking-widest pointer-events-none block whitespace-nowrap"
          >
            Click to Wake Transponder
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const [transponderRevealed, setTransponderRevealed] = useState(false)
  
  // Snail tracking coordinates
  const [snailCoords, setSnailCoords] = useState({ x: 0, y: 0 })

  // Form states
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [successVisible, setSuccessVisible] = useState(false)
  const [streakLoaded, setStreakLoaded] = useState(false)

  const handleSnailMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    // Normalise offsets from center of container
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setSnailCoords({ x, y })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setSubmitting(true)
    // Envelope animation delay
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      
      // Delay before success note appears
      setTimeout(() => {
        setSuccessVisible(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 700)
    }, 1200)
  }

  const contactButtons = [
    {
      label: "Email",
      value: "mishraanuj301@gmail.com",
      href: email,
      icon: <Mail className="w-5 h-5 text-op-ocean" />,
      actionLabel: "Send Message",
      isMail: true
    },
    {
      label: "LinkedIn",
      value: "Anuj Kumar Mishra",
      href: linkedin,
      icon: <Linkedin className="w-5 h-5 text-op-ocean" />,
      actionLabel: "Connect",
      isMail: false
    },
    {
      label: "GitHub",
      value: "AnujMishra301",
      href: github,
      icon: <Github className="w-5 h-5 text-op-navy" />,
      actionLabel: "Follow",
      isMail: false
    },
    {
      label: "Resume",
      value: "Download Profile PDF",
      href: resume,
      icon: <FileText className="w-5 h-5 text-op-brown" />,
      actionLabel: "Open PDF",
      isMail: false
    }
  ]

  return (
    <section id="contact" ref={containerRef} className="relative bg-background py-24 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-text/5">
      
      {/* Peaceful Harbor Low-Contrast Backdrop Scene */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        
        {/* Soft Moon glow */}
        <div className="absolute top-10 right-[15%] w-24 h-24 rounded-full bg-[radial-gradient(circle,rgba(255,245,214,0.1),transparent_70%)]" />
        
        {/* Twinkling stars */}
        {!shouldReduceMotion && (
          <div className="absolute inset-0 opacity-40">
            <motion.div animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-[8%] left-[20%] w-1 h-1 rounded-full bg-white" />
            <motion.div animate={{ opacity: [0.7, 0.2, 0.7] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }} className="absolute top-[12%] right-[25%] w-1.5 h-1.5 rounded-full bg-op-gold" />
            <motion.div animate={{ opacity: [0.4, 0.9, 0.4] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }} className="absolute top-[20%] left-[65%] w-1 h-1 rounded-full bg-white" />
          </div>
        )}

        {/* Anchored ship silhouette bottom-right */}
        <svg viewBox="0 0 100 50" className="absolute bottom-16 right-[10%] w-36 h-20 fill-op-navy opacity-[0.07] text-op-navy">
          <path d="M 10,45 Q 50,42 90,45 L 85,38 L 15,38 Z" />
          <line x1="35" y1="38" x2="35" y2="12" stroke="currentColor" strokeWidth="1.5" />
          <line x1="65" y1="38" x2="65" y2="18" stroke="currentColor" strokeWidth="1.5" />
          <polygon points="35,14 48,22 35,26" className="fill-current opacity-70" />
        </svg>

        {/* Calm sea waves bobbing slowly */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute bottom-0 inset-x-0 h-10 opacity-[0.06] text-op-navy z-0"
        >
          <svg viewBox="0 0 200 40" className="w-full h-full fill-current" preserveAspectRatio="none">
            <path d="M 0,20 Q 50,15 100,20 T 200,20 L 200,40 L 0,40 Z" />
          </svg>
        </motion.div>

        {/* Faint distant lighthouse silhouette */}
        <svg viewBox="0 0 20 40" className="absolute bottom-10 left-[8%] w-10 h-20 fill-op-navy opacity-[0.08] text-op-navy">
          <path d="M 4,40 L 7,12 L 13,12 L 16,40 Z" />
          <circle cx="10" cy="8" r="3" />
        </svg>

      </div>

      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-surface/50 border border-op-gold/30 text-xs font-bold text-op-gold tracking-widest uppercase font-sans shadow-sm backdrop-blur-md"
          >
            End of Voyage // Communication
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-widest font-cinzel text-op-parchment uppercase"
          >
            Get In <span className="bg-gradient-to-b from-op-parchment via-op-gold to-op-brown bg-clip-text text-transparent filter drop-shadow-md">Touch</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-base md:text-lg leading-relaxed font-sans"
          >
            The next adventure starts with a conversation. Let's design, build, or brainstorm the next system together.
          </motion.p>

          <div className="flex items-center justify-center gap-4 py-1">
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent to-op-brown/30" />
            <Anchor className="w-4 h-4 text-op-brown/50" />
            <div className="w-16 h-[1.5px] bg-gradient-to-l from-transparent to-op-brown/30" />
          </div>
        </div>

        {/* Center Transponder Trigger Button */}
        <div 
          onMouseMove={handleSnailMouseMove}
          className="flex flex-col items-center justify-center py-6"
        >
          <SnailTransponder
            mouseX={snailCoords.x}
            mouseY={snailCoords.y}
            onClick={() => setTransponderRevealed(!transponderRevealed)}
            revealed={transponderRevealed}
          />
        </div>

        {/* Expanded Form and Card Grid */}
        <AnimatePresence>
          {transponderRevealed && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 25 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4 text-left"
            >
              
              {/* Left Side: Elegant Communication Cards */}
              <div className="space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  {contactButtons.map((btn) => (
                    <a
                      key={btn.label}
                      href={btn.href}
                      target={btn.isMail ? undefined : "_blank"}
                      rel={btn.isMail ? undefined : "noopener noreferrer"}
                      className="group relative flex items-center justify-between p-5 rounded-2xl bg-[#fffcf5] border-2 border-op-brown/30 hover:border-op-gold hover:shadow-md hover:scale-[1.01] transition-all duration-300 select-none text-op-navy"
                    >
                      {/* Corner chest-like brackets inside */}
                      <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t border-l border-op-brown/25 group-hover:border-op-gold transition-colors duration-300 pointer-events-none" />
                      <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b border-r border-op-brown/25 group-hover:border-op-gold transition-colors duration-300 pointer-events-none" />

                      <div className="flex items-center gap-4 relative z-10">
                        {/* Icon */}
                        <div className="w-10 h-10 rounded-xl bg-op-navy text-op-parchment flex items-center justify-center border border-op-gold/20 group-hover:scale-115 transition-transform duration-300 shrink-0">
                          {btn.icon}
                        </div>

                        <div className="space-y-0.5">
                          <span className="font-cinzel text-xs font-bold uppercase tracking-wider block opacity-70">
                            {btn.label}
                          </span>
                          <p className="text-[10px] sm:text-xs font-mono font-bold tracking-wide">
                            {btn.value}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-op-navy/50 group-hover:text-op-ocean transition-colors">
                        <span>{btn.actionLabel}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </a>
                  ))}
                </div>

                {/* Compact Open Source Activity Card */}
                <div className="relative overflow-hidden rounded-2xl bg-[#fffcf5] border-2 border-op-brown/30 p-4 flex flex-col justify-between select-none text-op-navy mt-1">
                  {/* Corner brackets */}
                  <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t border-l border-op-brown/25 pointer-events-none" />
                  <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b border-r border-op-brown/25 pointer-events-none" />

                  <div className="flex items-center gap-3 border-b border-op-brown/15 pb-2 mb-3">
                    <Github className="w-4 h-4 text-op-navy" />
                    <span className="font-cinzel text-xs font-bold uppercase tracking-wider block">
                      Open Source Activity
                    </span>
                  </div>

                  <div className="relative w-full aspect-[480/160] bg-op-navy/5 rounded-xl border border-op-brown/10 overflow-hidden flex items-center justify-center">
                    <img
                      src="https://streak-stats.demolab.com?user=AnujMishra301&theme=transparent&stroke=c68642&ring=f7c948&fire=d72638&currStreakNum=0b74c5&currStreakLabel=071a2d"
                      alt="GitHub Commit Streak"
                      className={`w-full h-full object-contain transition-opacity duration-500 z-10 ${streakLoaded ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => setStreakLoaded(true)}
                    />
                    {!streakLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-op-navy/40 animate-pulse">
                        Mapping active git streams...
                      </div>
                    )}
                  </div>
                </div>

              </div>

              {/* Right Side: Explorer Journal Contact Form */}
              <div className="relative rounded-3xl bg-[#fffcf5] border-2 border-op-brown/40 p-6 sm:p-8 flex flex-col justify-between shadow-sm min-h-[360px] text-op-navy relative overflow-hidden">
                
                {/* Corner chest-like brackets inside */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-op-brown/30 pointer-events-none" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-op-brown/30 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-op-brown/30 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-op-brown/30 pointer-events-none" />

                <AnimatePresence mode="wait">
                  {submitted ? (
                    
                    /* SUCCESS SCREEN: Paper Airplane flight success message */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4"
                    >
                      <AnimatePresence>
                        {!successVisible ? (
                          /* Gliding Paper Airplane SVG Animation */
                          <motion.div
                            initial={{ x: -20, y: 40, scale: 0.6, rotate: -25, opacity: 1 }}
                            animate={{ x: 300, y: -280, scale: 1.1, rotate: -15, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-op-gold"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12">
                              <polygon points="3 12 22 2 13 22 11 13 3 12" />
                              <line x1="11" y1="13" x2="22" y2="2" />
                            </svg>
                          </motion.div>
                        ) : (
                          /* Final Success message text */
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-4 font-sans"
                          >
                            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-600 mx-auto">
                              ✓
                            </div>
                            <h4 className="font-cinzel text-sm font-bold uppercase tracking-wider text-op-navy">
                              Log cast into the ocean
                            </h4>
                            <p className="text-xs text-op-navy/70 leading-relaxed font-medium">
                              Your message has been safely folded and sent across the currents. It will reach my terminal coordinates shortly!
                            </p>
                            <button
                              onClick={() => {
                                setSubmitted(false)
                                setSuccessVisible(false)
                              }}
                              className="text-[9px] font-bold uppercase tracking-wider text-op-ocean hover:underline"
                            >
                              Send another scroll
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                  ) : (
                    
                    /* NORMAL CONTACT FORM VIEW */
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="flex-1 flex flex-col justify-between space-y-4 h-full relative"
                    >
                      <div className="space-y-3.5">
                        
                        <div className="flex items-center gap-2 border-b border-op-brown/15 pb-2">
                          <Compass className="w-4 h-4 text-op-gold" />
                          <h3 className="font-cinzel text-xs font-bold tracking-widest text-op-navy uppercase">
                            Explorer's Logbook
                          </h3>
                        </div>

                        {/* Name input */}
                        <div className="space-y-1 text-left font-sans">
                          <label htmlFor="name" className="text-[9px] font-bold tracking-wider text-op-navy/55 uppercase">
                            Explorer Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="e.g. Admiral Koby"
                            className="w-full text-xs font-semibold px-3 py-2 rounded-lg bg-[#fffdfb] border border-op-brown/20 focus:border-op-gold focus:outline-none placeholder-op-navy/35 text-op-navy"
                          />
                        </div>

                        {/* Email input */}
                        <div className="space-y-1 text-left font-sans">
                          <label htmlFor="email" className="text-[9px] font-bold tracking-wider text-op-navy/55 uppercase">
                            Return Coordinates (Email)
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="e.g. koby@marine.org"
                            className="w-full text-xs font-semibold px-3 py-2 rounded-lg bg-[#fffdfb] border border-op-brown/20 focus:border-op-gold focus:outline-none placeholder-op-navy/35 text-op-navy"
                          />
                        </div>

                        {/* Subject input */}
                        <div className="space-y-1 text-left font-sans">
                          <label htmlFor="subject" className="text-[9px] font-bold tracking-wider text-op-navy/55 uppercase">
                            Log Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="e.g. Collaboration on gRPC systems"
                            className="w-full text-xs font-semibold px-3 py-2 rounded-lg bg-[#fffdfb] border border-op-brown/20 focus:border-op-gold focus:outline-none placeholder-op-navy/35 text-op-navy"
                          />
                        </div>

                        {/* Message text area */}
                        <div className="space-y-1 text-left font-sans">
                          <label htmlFor="message" className="text-[9px] font-bold tracking-wider text-op-navy/55 uppercase">
                            Log message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={3}
                            required
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Draft your scroll message details here..."
                            className="w-full text-xs font-semibold px-3 py-2 rounded-lg bg-[#fffdfb] border border-op-brown/20 focus:border-op-gold focus:outline-none placeholder-op-navy/35 text-op-navy resize-none min-h-[75px]"
                          />
                        </div>

                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-op-navy border border-op-gold/35 text-op-parchment font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-op-navy/80 hover:shadow-md hover:scale-[1.01] cursor-pointer disabled:opacity-75"
                      >
                        <Send className="w-3.5 h-3.5 text-op-gold" />
                        <span>{submitting ? "Folding Scroll..." : "Cast Message"}</span>
                      </button>

                    </motion.form>
                  )}
                </AnimatePresence>

              </div>

            </motion.div>
          )}
        </AnimatePresence>

        {/* Closing Statements */}
        <div className="pt-6 text-center space-y-2">
          <p className="font-cinzel text-lg sm:text-xl font-bold uppercase tracking-wider text-op-parchment">
            "Every great journey begins with a conversation."
          </p>
          <p className="font-sans text-xs sm:text-sm font-semibold tracking-wide text-op-sky/80 uppercase">
            Let's build something worth remembering.
          </p>
        </div>

      </div>
    </section>
  )
}
