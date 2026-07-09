import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Terminal, Compass, BookOpen, Anchor } from 'lucide-react'

// Custom Nautical Indicator component (Astrolabe-style Compass Gauges)
interface NauticalGaugeProps {
  title: string
  percentage: number
  angle: number
}

const NauticalGauge = ({ title, percentage, angle }: NauticalGaugeProps) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="flex flex-col items-center text-center space-y-4">
      {/* Outer Dial Container */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center rounded-full bg-[#fffcf5] border-2 border-op-brown/40 shadow-inner group">
        {/* Decorative Compass Markings */}
        <div className="absolute inset-1 rounded-full border border-dashed border-op-brown/15" />
        
        {/* Tick marks on SVG */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full stroke-op-navy/35" fill="none" strokeWidth="0.5">
          {/* Degree Ticks */}
          <line x1="50" y1="5" x2="50" y2="9" />
          <line x1="50" y1="91" x2="50" y2="95" />
          <line x1="5" y1="50" x2="9" y2="50" />
          <line x1="91" y1="50" x2="95" y2="50" />
          <line x1="18.2" y1="18.2" x2="21" y2="21" />
          <line x1="79" y1="79" x2="81.8" y2="81.8" />
          <line x1="18.2" y1="81.8" x2="21" y2="79" />
          <line x1="79" y1="21" x2="81.8" y2="18.2" />
        </svg>

        {/* Needle pointing to progress (animated rotate) */}
        <motion.div
          className="absolute inset-0 w-full h-full flex items-center justify-center"
          initial={{ rotate: shouldReduceMotion ? angle : 0 }}
          whileInView={{ rotate: angle }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 1.5, ease: [0.16, 1, 0.3, 1] as const, delay: shouldReduceMotion ? 0 : 0.2 }}
        >
          {/* Compass Needle representation */}
          <svg viewBox="0 0 100 100" className="w-full h-full text-op-red pointer-events-none" fill="currentColor">
            {/* Pointer needle facing North (upward) */}
            <polygon points="50,12 47,50 50,55" fill="var(--color-op-red)" />
            <polygon points="50,12 53,50 50,55" fill="rgba(215,38,56,0.5)" />
            
            {/* Tail needle facing South */}
            <polygon points="50,88 48,50 50,45" fill="var(--color-op-navy)" />
            <polygon points="50,88 52,50 50,45" fill="rgba(7,26,45,0.4)" />
          </svg>
        </motion.div>

        {/* Center Hub */}
        <div className="relative z-10 w-9 h-9 rounded-full bg-op-navy text-op-parchment flex items-center justify-center text-[10px] font-black border border-op-gold/50 shadow">
          {percentage}%
        </div>
      </div>
      
      {/* Title */}
      <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-op-parchment/90">
        {title}
      </span>
    </div>
  )
}

export default function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) / 60,
        y: (e.clientY - window.innerHeight / 2) / 60,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [shouldReduceMotion])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  return (
    <section id="about" className="relative bg-background py-24 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-text/5">
      
      {/* Parallax Map Background Grid Watermark */}
      <motion.div
        style={{
          x: shouldReduceMotion ? 0 : mousePos.x * -0.5,
          y: shouldReduceMotion ? 0 : mousePos.y * -0.5,
        }}
        className="absolute right-[-10%] top-[8%] w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] pointer-events-none opacity-[0.03] text-op-sky z-0"
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current" strokeWidth="0.8">
          <circle cx="50" cy="50" r="42" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="25" />
          <line x1="50" y1="5" x2="50" y2="95" />
          <line x1="5" y1="50" x2="95" y2="50" />
          <path d="M 15,15 Q 50,85 85,15" />
          <path d="M 15,85 Q 50,15 85,85" strokeDasharray="2 2" />
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-24 relative z-10">
        
        {/* Section Title Divider */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-cinzel text-xs font-bold tracking-widest text-op-gold uppercase">Logbook // Profile</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-widest font-cinzel uppercase text-op-parchment">
              Who I Am
            </h2>
          </motion.div>
          
          <div className="flex items-center justify-center gap-4 py-2">
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent to-op-brown/30" />
            <Anchor className="w-4 h-4 text-op-brown/50" />
            <div className="w-16 h-[1.5px] bg-gradient-to-l from-transparent to-op-brown/30" />
          </div>
        </div>

        {/* Subsection 1 & 4: Open Logbook / Parchment Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto rounded-3xl bg-[#fffcf5] border-2 border-op-brown/40 shadow-[0_15px_40px_rgba(0,0,0,0.3)] text-op-navy overflow-hidden p-8 sm:p-12"
        >
          {/* Compass watermark inside book */}
          <div className="absolute right-[-8%] bottom-[-10%] w-[280px] h-[280px] pointer-events-none opacity-[0.03] text-op-navy">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current" strokeWidth="1">
              <circle cx="50" cy="50" r="45" />
              <line x1="50" y1="5" x2="50" y2="95" />
              <line x1="5" y1="50" x2="95" y2="50" />
            </svg>
          </div>

          {/* Corner chest-like brackets inside */}
          <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-op-brown/30" />
          <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-op-brown/30" />
          <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-op-brown/30" />
          <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-op-brown/30" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative z-10">
            {/* Column 1: Introduction */}
            <div className="space-y-4">
              <h3 className="font-cinzel text-lg sm:text-xl font-bold uppercase tracking-wider text-op-navy border-b border-op-brown/15 pb-2">
                Explorer Ledger
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-op-navy/90 font-sans">
                I am a software engineer and computer science explorer specializing in building highly performant backend architectures and scalable distributed engines. My technical path focuses heavily on compiler design, parsing structures, systems internals, and production-ready server components. Charting courses through complex algorithms and routing layers is my core passion.
              </p>
            </div>

            {/* Column 2: Personal Philosophy */}
            <div className="space-y-4">
              <h3 className="font-cinzel text-lg sm:text-xl font-bold uppercase tracking-wider text-op-navy border-b border-op-brown/15 pb-2">
                Personal Philosophy
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-op-navy/90 font-sans">
                To me, engineering is a voyage of discovery that extends far beyond writing code. My approach is anchored in insatiable curiosity, structured logic, and interdisciplinary thinking—connecting system constraints with ideas from cinema, literature, and history. I believe the best architectures are drafted with creative vision, clean engineering craftsmanship, and a constant hunger to explore new technological horizons.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Subsection 2: What I Build (Three feature cards) */}
        <div className="space-y-10">
          <div className="text-center space-y-2">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold uppercase tracking-widest text-op-parchment/90">
              What I Build
            </h3>
            <p className="text-op-sky/80 text-xs sm:text-sm tracking-wide uppercase font-sans font-semibold">
              Primary domains of development & synthesis
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Card 1: Backend Engineering */}
            <motion.div
              variants={cardVariants}
              className="group relative rounded-2xl bg-[#fffcf5] hover:bg-white border-2 border-op-brown/30 hover:border-op-gold p-8 flex flex-col justify-between hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(198,134,66,0.18)] transition-all duration-500 text-left text-op-navy"
            >
              {/* Corner chest bracket styles */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />

              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-op-gold/10 border border-op-gold/30 flex items-center justify-center text-op-ocean group-hover:bg-op-gold/20 transition-colors duration-300">
                  <Terminal className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold tracking-wide text-op-navy group-hover:text-op-ocean transition-colors duration-300 font-cinzel">Backend Engineering</h4>
                <p className="text-sm text-op-navy/85 leading-relaxed font-sans">
                  Architecting resilient and performant backend engines. Building distributed microservices, optimized database queries, RESTful/gRPC APIs, and production-grade workflows utilizing Spring Boot and concurrent structures.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-op-brown/15 flex flex-wrap gap-1.5">
                {['Spring Boot', 'Go', 'Postgres', 'Docker'].map((tech) => (
                  <span key={tech} className="px-2.5 py-0.5 rounded bg-op-brown/10 text-[10px] font-mono font-bold text-op-brown/90 border border-op-brown/20">{tech}</span>
                ))}
              </div>
            </motion.div>

            {/* Card 2: Artificial Intelligence */}
            <motion.div
              variants={cardVariants}
              className="group relative rounded-2xl bg-[#fffcf5] hover:bg-white border-2 border-op-brown/30 hover:border-op-gold p-8 flex flex-col justify-between hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(198,134,66,0.18)] transition-all duration-500 text-left text-op-navy"
            >
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />

              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-op-red/10 border border-op-red/30 flex items-center justify-center text-op-red group-hover:bg-op-red/20 transition-colors duration-300">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold tracking-wide text-op-navy group-hover:text-op-red transition-colors duration-300 font-cinzel">Artificial Intelligence</h4>
                <p className="text-sm text-op-navy/85 leading-relaxed font-sans">
                  Harnessing the power of modern machine learning. Integrating large language models (LLMs), semantic vector databases, intelligent automation layers, and scalable inference workflows for data-rich production workloads.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-op-brown/15 flex flex-wrap gap-1.5">
                {['Python', 'LLMs', 'NLP', 'Vector Search'].map((tech) => (
                  <span key={tech} className="px-2.5 py-0.5 rounded bg-op-brown/10 text-[10px] font-mono font-bold text-op-brown/90 border border-op-brown/20">{tech}</span>
                ))}
              </div>
            </motion.div>

            {/* Card 3: Beyond Engineering */}
            <motion.div
              variants={cardVariants}
              className="group relative rounded-2xl bg-[#fffcf5] hover:bg-white border-2 border-op-brown/30 hover:border-op-gold p-8 flex flex-col justify-between hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(198,134,66,0.18)] transition-all duration-500 text-left text-op-navy"
            >
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-op-brown/35 group-hover:border-op-gold transition-colors duration-300" />

              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-op-brown/10 border border-op-brown/30 flex items-center justify-center text-op-brown group-hover:bg-op-brown/20 transition-colors duration-300">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold tracking-wide text-op-navy group-hover:text-op-brown transition-colors duration-300 font-cinzel">Beyond Engineering</h4>
                <p className="text-sm text-op-navy/85 leading-relaxed font-sans">
                  Engaging in creative synthesis at the intersections of humanities and sciences. Exploring classical Russian literature, moral philosophy, cinematic auteur structures, and historical institutional systems to inform technical design.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-op-brown/15 flex flex-wrap gap-1.5">
                {['Literature', 'Cinema', 'History', 'Prose'].map((tech) => (
                  <span key={tech} className="px-2.5 py-0.5 rounded bg-op-brown/10 text-[10px] font-mono font-bold text-op-brown/90 border border-op-brown/20">{tech}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Subsection 3: Current Focus (Nautical progress indicators) */}
        <div className="space-y-12 pt-6">
          <div className="text-center space-y-2">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold uppercase tracking-widest text-op-parchment/90">
              Current Navigation Priorities
            </h3>
            <p className="text-op-sky/80 text-xs sm:text-sm tracking-wide uppercase font-sans font-semibold">
              Astrolabe Knowledge Gauges // Heading to New Horizons
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center max-w-4xl mx-auto"
          >
            <NauticalGauge title="Backend Engineering" percentage={92} angle={331.2} />
            <NauticalGauge title="System Design" percentage={85} angle={306} />
            <NauticalGauge title="Artificial Intelligence" percentage={80} angle={288} />
            <NauticalGauge title="Open Source" percentage={75} angle={270} />
          </motion.div>
        </div>

      </div>
    </section>
  )
}
