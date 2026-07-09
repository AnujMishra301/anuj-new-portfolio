import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Anchor, Compass, Scroll, Ship } from 'lucide-react'
import { Github, Linkedin } from '../components/Icons'
import { github, linkedin, resume } from '../data/socialLinks'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

// Custom Straw Hat Icon SVG Path
const StrawHatIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Crown */}
    <path d="M25,40 C25,20 35,16 50,16 C65,16 75,20 75,40 Z" fill="#F7C948" stroke="#C68642" strokeWidth="2.5" />
    {/* Red Ribbon */}
    <path d="M25,36 C35,33 65,33 75,36 L75,40 C65,37 35,37 25,40 Z" fill="#D72638" />
    {/* Brim */}
    <path d="M10,40 C30,48 70,48 90,40 C95,43 75,54 50,54 C25,54 5,43 10,40 Z" fill="#F7C948" stroke="#C68642" strokeWidth="2.5" />
  </svg>
)

// Custom Ship Wheel SVG for hover animations on buttons
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

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // Generate subtle sunny/bioluminescent particles
    const tempParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 5,
    }))
    setParticles(tempParticles)
  }, [])

  useEffect(() => {
    if (shouldReduceMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) / 45,
        y: (e.clientY - window.innerHeight / 2) / 45,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [shouldReduceMotion])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  const birdVariants = {
    animate: (custom: { duration: number; delay: number; startY: number }) => ({
      x: shouldReduceMotion ? '0' : ['-15vw', '115vw'],
      y: shouldReduceMotion ? custom.startY : [custom.startY, custom.startY - 30, custom.startY + 15, custom.startY],
      transition: {
        x: { duration: custom.duration, repeat: Infinity, ease: 'linear' as const, delay: custom.delay },
        y: { duration: custom.duration / 4, repeat: Infinity, ease: 'easeInOut' as const }
      }
    })
  }

  const cloudVariants = {
    animate: (custom: { duration: number; startX: string; endX: string }) => ({
      x: shouldReduceMotion ? '0' : [custom.startX, custom.endX],
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        ease: 'linear' as const,
      }
    })
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-op-parchment via-op-sky/50 to-op-ocean px-4 sm:px-6 md:px-12 py-24 sm:py-32">
      
      {/* Soft Sunlight Rays Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-35 z-0">
        <div className="absolute top-[-30%] left-[-15%] w-[80%] h-[160%] bg-[radial-gradient(ellipse_at_top_left,rgba(247,201,72,0.22)_0%,transparent_60%)]" />
        <div className="absolute top-[-30%] left-[5%] w-[8%] h-[180%] bg-gradient-to-b from-white/15 to-transparent origin-top rotate-[15deg] filter blur-md" />
        <div className="absolute top-[-30%] left-[22%] w-[12%] h-[180%] bg-gradient-to-b from-white/12 to-transparent origin-top rotate-[28deg] filter blur-md" />
      </div>

      {/* Grand Line Navigation Map Grid Watermark */}
      <motion.div
        style={{
          x: shouldReduceMotion ? 0 : mousePos.x * -0.6,
          y: shouldReduceMotion ? 0 : mousePos.y * -0.6,
        }}
        className="absolute inset-0 pointer-events-none opacity-[0.09] z-0 flex items-center justify-center"
      >
        <svg viewBox="0 0 1000 600" className="w-full h-full stroke-op-navy" fill="none" strokeWidth="1">
          {/* Calm Belts */}
          <line x1="0" y1="200" x2="1000" y2="200" strokeDasharray="5 5" />
          <line x1="0" y1="400" x2="1000" y2="400" strokeDasharray="5 5" />
          
          {/* Grand Line Center Line */}
          <line x1="0" y1="300" x2="1000" y2="300" strokeWidth="1.5" />
          
          {/* Winding Magnetic Lock Route */}
          <path d="M 50,300 C 150,220 200,380 320,300 C 440,220 500,380 650,300 C 780,220 850,380 950,300" strokeDasharray="4 6" strokeWidth="1.5" />
          
          {/* Island Coordinates & Nodes */}
          <circle cx="50" cy="300" r="4" fill="currentColor" />
          <circle cx="320" cy="300" r="4" fill="currentColor" />
          <circle cx="650" cy="300" r="4" fill="currentColor" />
          <circle cx="950" cy="300" r="4" fill="currentColor" />
          
          {/* Map Grid Coordinates */}
          <text x="20" y="190" fontSize="10" className="font-mono fill-op-navy/60">LAT 10° N // CALM BELT</text>
          <text x="20" y="420" fontSize="10" className="font-mono fill-op-navy/60">LAT 10° S // CALM BELT</text>
          <text x="20" y="320" fontSize="10" className="font-mono fill-op-navy/70">GRAND LINE</text>
        </svg>
      </motion.div>

      {/* Floating Clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <motion.svg
          variants={cloudVariants}
          custom={{ duration: 75, startX: '-25%', endX: '115%' }}
          animate="animate"
          className="absolute top-[10%] w-32 h-16 text-white"
          viewBox="0 0 100 50"
          fill="currentColor"
        >
          <path d="M20,40 C15,40 10,35 12,28 C8,28 4,22 8,16 C12,10 22,8 28,14 C34,8 48,8 52,16 C58,12 68,14 70,22 C76,22 80,28 76,34 C72,40 65,40 20,40 Z" />
        </motion.svg>
        <motion.svg
          variants={cloudVariants}
          custom={{ duration: 110, startX: '-35%', endX: '115%' }}
          animate="animate"
          className="absolute top-[28%] w-48 h-24 text-white"
          viewBox="0 0 100 50"
          fill="currentColor"
        >
          <path d="M20,40 C15,40 10,35 12,28 C8,28 4,22 8,16 C12,10 22,8 28,14 C34,8 48,8 52,16 C58,12 68,14 70,22 C76,22 80,28 76,34 C72,40 65,40 20,40 Z" opacity="0.7" />
        </motion.svg>
      </div>

      {/* Flying Silhouette Seagulls */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.svg
          variants={birdVariants}
          custom={{ duration: 25, delay: 0, startY: 120 }}
          animate="animate"
          className="absolute w-6 h-4 text-op-ocean/45"
          viewBox="0 0 20 10"
        >
          <path d="M0,6 Q5,0 10,6 Q15,0 20,6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </motion.svg>
        <motion.svg
          variants={birdVariants}
          custom={{ duration: 32, delay: 8, startY: 180 }}
          animate="animate"
          className="absolute w-5 h-3.5 text-op-ocean/40"
          viewBox="0 0 20 10"
        >
          <path d="M0,6 Q5,0 10,6 Q15,0 20,6" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </motion.svg>
      </div>

      {/* Rotating Log Pose / Compass Rose Watermark */}
      <motion.div
        style={{
          x: shouldReduceMotion ? "-50%" : `calc(-50% + ${mousePos.x * 0.4}px)`,
          y: shouldReduceMotion ? "-50%" : `calc(-50% + ${mousePos.y * 0.4}px)`,
        }}
        className="absolute top-[40%] left-1/2 md:left-[68%] -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] md:w-[620px] md:h-[620px] pointer-events-none opacity-[0.06] md:opacity-[0.09] z-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full stroke-op-navy" strokeWidth="0.75">
          {/* Glass Globe Silhouette representing a Log Pose */}
          <circle cx="100" cy="100" r="95" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="78" strokeDasharray="1 5" />
          
          <line x1="100" y1="10" x2="100" y2="190" />
          <line x1="10" y1="100" x2="190" y2="100" />
          
          {/* Hanging needle axis & needle pointing to next lock */}
          <path d="M100,100 L95,65 L100,25 Z" fill="rgba(7,26,45,0.15)" />
          <path d="M100,100 L105,65 L100,25 Z" fill="none" />
          <path d="M100,100 L105,135 L100,175 Z" fill="rgba(7,26,45,0.15)" />
          <path d="M100,100 L95,135 L100,175 Z" fill="none" />
          
          <circle cx="100" cy="100" r="8" fill="var(--color-op-gold)" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="2" fill="currentColor" />
          
          {/* Dial Marks */}
          <text x="100" y="8" fill="currentColor" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-cinzel)">LOG POSE</text>
        </svg>
      </motion.div>

      {/* Floating Sparkle Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-op-gold/30 filter blur-[0.5px]"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              bottom: `${p.y}%`,
            }}
            animate={{
              y: [0, -320],
              x: [0, Math.sin(p.id) * 30, Math.sin(p.id + 1) * -30, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Thousand Sunny Bobbing Silhouette */}
      <motion.div
        className="absolute bottom-24 left-[12%] sm:left-[22%] w-10 h-10 pointer-events-none opacity-[0.25] z-10"
        animate={{
          y: shouldReduceMotion ? 0 : [0, -5, 3, 0],
          rotate: shouldReduceMotion ? 0 : [0, -4, 3, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-op-navy">
          {/* Sunny figurehead ship silhouette */}
          <path d="M12,68 C12,68 28,78 55,78 C76,78 86,68 86,68 L89,52 C89,52 65,58 50,58 C35,58 11,52 11,52 Z" />
          <circle cx="84" cy="50" r="9" />
          <path d="M84,40 L90,34 L82,38 L74,32 L80,42 L74,48 L82,46 L90,50 Z" />
          <line x1="50" y1="68" x2="50" y2="12" stroke="currentColor" strokeWidth="3" />
          <path d="M50,15 C65,19 65,39 50,45 C50,45 68,33 50,15" />
          <path d="M50,19 C35,23 35,43 50,49 C50,49 32,37 50,19" />
          <path d="M50,12 L58,15 L50,18 Z" />
        </svg>
      </motion.div>

      {/* Main Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          x: shouldReduceMotion ? 0 : mousePos.x * 0.2,
          y: shouldReduceMotion ? 0 : mousePos.y * 0.2,
        }}
        className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center space-y-10 sm:space-y-12"
      >
        <div className="space-y-6 sm:space-y-8 flex flex-col items-center">
          
          {/* Status Badge with custom Straw Hat accent */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/70 border border-op-gold shadow-[0_4px_20px_rgba(247,201,72,0.15)] backdrop-blur-md text-xs font-bold tracking-widest text-op-navy font-sans uppercase"
          >
            <StrawHatIcon className="w-6 h-4 shrink-0" />
            <span>Voyage Log // Systems & Software</span>
          </motion.div>

          {/* Large Name */}
          <div className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="text-6xl sm:text-8xl md:text-9xl font-black tracking-widest leading-none bg-gradient-to-b from-op-navy via-op-navy to-[#1a3d60] bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(7,26,45,0.06)] pb-2 font-cinzel uppercase"
            >
              ANUJ MISHRA
            </motion.h1>

            {/* Technical Subtitles */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center text-sm sm:text-base md:text-lg font-bold text-op-navy/85 tracking-wide uppercase font-sans"
            >
              <div className="flex items-center gap-2 group hover:text-op-ocean transition-colors duration-300 cursor-default">
                <Ship className="w-4 h-4 text-op-ocean shrink-0" />
                <span>Backend Engineer</span>
              </div>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-op-gold" />
              <div className="flex items-center gap-2 group hover:text-op-red transition-colors duration-300 cursor-default">
                <Anchor className="w-4 h-4 text-op-red shrink-0" />
                <span>Computer Science Student</span>
              </div>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-op-gold" />
              <div className="flex items-center gap-2 group hover:text-op-brown transition-colors duration-300 cursor-default">
                <Compass className="w-4 h-4 text-op-brown shrink-0" />
                <span>AI & System Programming Enthusiast</span>
              </div>
            </motion.div>
          </div>

          {/* Professional Technical Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-op-navy/95 text-base sm:text-lg md:text-xl leading-relaxed font-medium px-4 font-sans"
          >
            I build scalable backend systems, explore AI-powered applications, and enjoy understanding software from system internals to production-ready architecture.
          </motion.p>

          {/* Adventure Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-op-navy/80 text-sm sm:text-base font-cinzel italic tracking-widest font-semibold"
          >
            &ldquo;Always exploring the next horizon.&rdquo;
          </motion.p>
        </div>

        {/* Glassmorphic Maritime CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 w-full"
        >
          {/* Resume Button */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-op-navy/35 backdrop-blur-md border border-op-gold/30 text-op-parchment/90 font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:bg-op-navy/55 hover:border-op-gold/60 hover:text-op-parchment hover:shadow-[0_0_15px_rgba(247,201,72,0.18)] hover:-translate-y-0.5 hover:scale-[1.01] shadow-sm select-none font-sans"
          >
            {/* Subtle Shine Highlight Overlay */}
            <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-30deg] group-hover:translate-x-[400%] transition-transform duration-1000 ease-out" />
            </div>
            {/* Ship Wheel spins on hover */}
            <div className="relative group-hover:rotate-180 transition-transform duration-500 shrink-0">
              <ShipWheelIcon className="w-4 h-4 text-op-gold/80" />
            </div>
            <span className="relative z-10">Resume Log</span>
            <ArrowUpRight className="w-4 h-4 opacity-75 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* GitHub Button */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-op-navy/35 backdrop-blur-md border border-op-gold/30 text-op-parchment/90 font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:bg-op-navy/55 hover:border-op-gold/60 hover:text-op-parchment hover:shadow-[0_0_15px_rgba(247,201,72,0.18)] hover:-translate-y-0.5 hover:scale-[1.01] shadow-sm select-none font-sans"
          >
            <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-30deg] group-hover:translate-x-[400%] transition-transform duration-1000 ease-out" />
            </div>
            <div className="relative group-hover:rotate-180 transition-transform duration-500 shrink-0">
              <Github className="w-4 h-4 text-op-gold/80 fill-none stroke-current" />
            </div>
            <span className="relative z-10">GitHub Port</span>
          </a>

          {/* LinkedIn Button */}
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-op-navy/35 backdrop-blur-md border border-op-gold/30 text-op-parchment/90 font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:bg-op-navy/55 hover:border-op-gold/60 hover:text-op-parchment hover:shadow-[0_0_15px_rgba(247,201,72,0.18)] hover:-translate-y-0.5 hover:scale-[1.01] shadow-sm select-none font-sans"
          >
            <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-30deg] group-hover:translate-x-[400%] transition-transform duration-1000 ease-out" />
            </div>
            <div className="relative group-hover:rotate-180 transition-transform duration-500 shrink-0">
              <Linkedin className="w-4 h-4 text-op-gold/80 fill-none stroke-current" />
            </div>
            <span className="relative z-10">LinkedIn Deck</span>
          </a>
        </motion.div>

        {/* Bento Grid styled as Cartographer Chest Logs */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-16 border-t border-op-gold/30 z-10 font-sans"
        >
          {/* Card 1: Software Engines */}
          <div className="group relative rounded-2xl bg-[#fffcf5] hover:bg-white border-2 border-op-brown/30 hover:border-op-gold p-8 flex flex-col justify-between hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(198,134,66,0.18)] transition-all duration-500 text-left text-op-navy">
            {/* Corner Bracket Accents (Treasure Chest Feel) */}
            <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />
            <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />
            <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />
            <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-op-gold/10 border border-op-gold/30 flex items-center justify-center text-op-ocean group-hover:bg-op-gold/20 transition-colors duration-300">
                <Ship className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold tracking-wide text-op-navy group-hover:text-op-ocean transition-colors duration-300 font-cinzel">Grand Line Engines</h3>
              <p className="text-sm text-op-navy/85 leading-relaxed font-sans">
                Designing resilient backend architectures, scalable web routing layer modules, and high-fidelity server execution loops. Plotting structured paths for complex data sets.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-op-brown/15 flex flex-wrap gap-1.5">
              {['Go', 'Node.js', 'Postgres', 'Docker'].map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 rounded bg-op-brown/10 text-[10px] font-mono font-bold text-op-brown/90 border border-op-brown/20">{tech}</span>
              ))}
            </div>
          </div>

          {/* Card 2: AI Navigation Systems */}
          <div className="group relative rounded-2xl bg-[#fffcf5] hover:bg-white border-2 border-op-brown/30 hover:border-op-gold p-8 flex flex-col justify-between hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(198,134,66,0.18)] transition-all duration-500 text-left text-op-navy">
            {/* Corner Bracket Accents */}
            <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />
            <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />
            <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />
            <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-op-red/10 border border-op-red/30 flex items-center justify-center text-op-red group-hover:bg-op-red/20 transition-colors duration-300">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold tracking-wide text-op-navy group-hover:text-op-red transition-colors duration-300 font-cinzel">AI Navigation Systems</h3>
              <p className="text-sm text-op-navy/85 leading-relaxed font-sans">
                Building AI-powered applications, semantic search systems, intelligent automation, and scalable machine learning workflows while exploring practical applications of modern language models.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-op-brown/15 flex flex-wrap gap-1.5">
              {['Python', 'LLMs', 'NLP', 'Vector Search'].map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 rounded bg-op-brown/10 text-[10px] font-mono font-bold text-op-brown/90 border border-op-brown/20">{tech}</span>
              ))}
            </div>
          </div>

          {/* Card 3: Creative Synthesis */}
          <div className="group relative rounded-2xl bg-[#fffcf5] hover:bg-white border-2 border-op-brown/30 hover:border-op-gold p-8 flex flex-col justify-between hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(198,134,66,0.18)] transition-all duration-500 text-left text-op-navy">
            {/* Corner Bracket Accents */}
            <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />
            <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />
            <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />
            <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-op-brown/10 border border-op-brown/30 flex items-center justify-center text-op-brown group-hover:bg-op-brown/20 transition-colors duration-300">
                <Scroll className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold tracking-wide text-op-navy group-hover:text-op-brown transition-colors duration-300 font-cinzel">Library of Ohara</h3>
              <p className="text-sm text-op-navy/85 leading-relaxed font-sans">
                Synthesizing engineering logs with classic humanities, historical records, and cinematic narratives. Mapping out structured archives connecting sciences and codes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-op-brown/15 flex flex-wrap gap-1.5">
              {['Prose', 'Literature', 'Cinema', 'History'].map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 rounded bg-op-brown/10 text-[10px] font-mono font-bold text-op-brown/90 border border-op-brown/20">{tech}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Ocean Wave Overlays near the Bottom (Transitioning to Dark Mode background #020617) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] pointer-events-none opacity-20 z-0 h-40">
        <svg className="relative block w-[200%] h-full animate-wave-slow" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C150,90 350,10 500,60 C650,110 850,20 1000,70 C1150,120 1350,20 1500,50 L1500,120 L0,120 Z" fill="#0b74c5" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] pointer-events-none opacity-45 z-0 h-32">
        <svg className="relative block w-[200%] h-full animate-wave-mid" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C150,80 300,20 450,50 C600,80 750,20 900,60 C1050,100 1200,30 1350,40 L1500,120 L0,120 Z" fill="#071a2d" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] pointer-events-none z-10 h-24">
        <svg className="relative block w-[200%] h-full animate-wave-fast" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C150,100 350,60 500,80 C650,100 850,40 1000,80 C1150,120 1300,50 1500,90 L1500,120 L0,120 Z" fill="#020617" />
        </svg>
      </div>
    </div>
  )
}
