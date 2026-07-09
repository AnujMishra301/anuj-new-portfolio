import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { GraduationCap, Terminal, Cpu, Sparkles, Compass, Ship, Anchor, ArrowUpRight } from 'lucide-react'

interface TimelineEntry {
  year: string
  title: string
  subtitle: string
  icon: React.ReactNode
  description: string
  technologies: string[]
  accent: 'ocean' | 'brown' | 'red' | 'gold' | 'sky'
  accentClass: string
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

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

  // Scroll progress for route drawing & ship travel
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Transform scale of active route line
  const scaleY = useTransform(scrollYProgress, [0.08, 0.88], [0, 1])
  
  // Position of traveling ship along vertical route
  const shipTop = useTransform(scrollYProgress, [0.08, 0.88], ["0%", "100%"])

  const entries: TimelineEntry[] = [
    {
      year: "2024",
      title: "Beginning Computer Science",
      subtitle: "Foundations & Analytical Architecture",
      icon: <GraduationCap className="w-5 h-5" />,
      description: "Initiated my academic CSE voyage. Focused heavily on memory management, compiler basics, functional syntax structures, and foundational object-oriented logic using Java.",
      technologies: ["Java", "C", "Object-Oriented Design", "Computing Theory"],
      accent: "ocean",
      accentClass: "border-op-ocean text-op-ocean hover:shadow-[0_8px_25px_rgba(11,116,197,0.15)] bg-[#fffcf5]/90 hover:bg-white"
    },
    {
      year: "2025",
      title: "Learning Backend Engineering",
      subtitle: "RESTful Layers & Telemetry Systems",
      icon: <Terminal className="w-5 h-5" />,
      description: "Transitioned from algorithmic logic to high-performance production systems. Mastered database optimization (indexing, transactions) and concurrent routing using Spring Boot and gRPC.",
      technologies: ["Spring Boot", "Go", "PostgreSQL", "gRPC", "Docker"],
      accent: "brown",
      accentClass: "border-op-brown text-op-brown hover:shadow-[0_8px_25px_rgba(198,134,66,0.15)] bg-[#fffcf5]/90 hover:bg-white"
    },
    {
      year: "2025 - 2026",
      title: "Building AI Applications",
      subtitle: "NLP Parsing & Latency Optimization",
      icon: <Cpu className="w-5 h-5" />,
      description: "Integrated machine learning models directly into backend pipelines. Built BlackBoxCV and Sentinel AI, developing parsing pipelines for code structure analysis and semantic vector index search.",
      technologies: ["Python", "Sentence Transformers", "Scikit-Learn", "Vector Databases"],
      accent: "red",
      accentClass: "border-op-red text-op-red hover:shadow-[0_8px_25px_rgba(215,38,56,0.15)] bg-[#fffcf5]/90 hover:bg-white"
    },
    {
      year: "2026",
      title: "Thinking in Scalable Systems",
      subtitle: "Distributed Message Brokers & Resilient Scaling",
      icon: <Sparkles className="w-5 h-5" />,
      description: "Pivoted toward high-availability infrastructure. Configured clustering telemetry brokers (MQTT, WebSockets), caching strategies, and system pipeline diagnostics to ensure seamless data broadcast.",
      technologies: ["WebSockets", "MQTT", "Redis", "System Telemetry"],
      accent: "sky",
      accentClass: "border-op-sky text-op-sky hover:shadow-[0_8px_25px_rgba(142,214,255,0.15)] bg-[#fffcf5]/90 hover:bg-white"
    },
    {
      year: "Vision",
      title: "Discovering ElderSense",
      subtitle: "The Voyage Destination",
      icon: <Compass className="w-5 h-5 animate-pulse" />,
      description: "Formulated the vision for ElderSense AI. Combines experience in low-power mesh networks, timeseries database scaling, and LLM classifiers to address critical elderly care tracking challenges.",
      technologies: ["EdgeML", "Mesh Networking", "Timeseries DB", "Human-Centered Design"],
      accent: "gold",
      accentClass: "border-op-gold text-op-gold hover:shadow-[0_8px_25px_rgba(247,201,72,0.18)] bg-[#fffefb] shadow-[0_0_20px_rgba(247,201,72,0.1)] hover:bg-white"
    },
    {
      year: "Present",
      title: "Current Expedition",
      subtitle: "Active Engineering & Development Streams",
      icon: <Ship className="w-5 h-5" />,
      description: "Deep diving into Go microservices and low-latency API architecture. Practicing advanced DSA logic, PyTorch models for sentence embedding, GSoC open-source preparations, and world literature logs.",
      technologies: ["Go Microservices", "Data Structures & Algos", "PyTorch ML", "Open Source Contributing"],
      accent: "ocean",
      accentClass: "border-op-ocean text-op-ocean hover:shadow-[0_8px_25px_rgba(11,116,197,0.15)] bg-[#fffcf5]/90 hover:bg-white"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  return (
    <section id="timeline" ref={containerRef} className="relative bg-background py-24 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-text/5">
      
      {/* Background radial glow */}
      <div className="absolute top-[40%] left-[10%] w-[500px] h-[500px] bg-op-ocean/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Navigation Map Watermark (Parallax) */}
      <motion.div
        style={{
          x: shouldReduceMotion ? 0 : mousePos.x * -0.4,
          y: shouldReduceMotion ? 0 : mousePos.y * -0.4,
        }}
        className="absolute inset-0 pointer-events-none opacity-[0.06] md:opacity-[0.08] z-0 flex items-center justify-center"
      >
        <svg viewBox="0 0 1000 800" className="w-full h-full stroke-op-navy" fill="none" strokeWidth="1">
          <circle cx="500" cy="400" r="300" strokeDasharray="3 3" />
          <line x1="500" y1="0" x2="500" y2="800" />
          <line x1="0" y1="400" x2="1000" y2="400" />
        </svg>
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-20 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-surface/50 border border-op-gold/30 text-xs font-bold text-op-gold tracking-widest uppercase font-sans shadow-sm backdrop-blur-md"
          >
            Chronicle // Roadmap
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-widest font-cinzel text-op-parchment uppercase"
          >
            Voyage <span className="bg-gradient-to-b from-op-parchment via-op-gold to-op-brown bg-clip-text text-transparent filter drop-shadow-md">Timeline</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-base md:text-lg leading-relaxed font-sans"
          >
            A chronological records map of my growth as an engineer, plotting the milestones that led to my flagship focus.
          </motion.p>

          <div className="flex items-center justify-center gap-4 py-1">
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent to-op-brown/30" />
            <Anchor className="w-4 h-4 text-op-brown/50" />
            <div className="w-16 h-[1.5px] bg-gradient-to-l from-transparent to-op-brown/30" />
          </div>
        </div>

        {/* Timeline Path container */}
        <div className="relative">
          
          {/* Static ocean route backing line */}
          <div className="absolute left-4 md:left-1/2 -translate-x-[1px] top-4 bottom-4 w-[2px] bg-dashed bg-op-gold/25" />

          {/* Animated active timeline drawing line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 -translate-x-[1px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-op-gold via-op-brown to-transparent" 
          />

          {/* Animated Ship traveling along active route */}
          <motion.div 
            style={{ top: shipTop }}
            className="absolute left-4 md:left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#fffcf5] border border-op-gold text-op-navy flex items-center justify-center shadow-lg z-30 pointer-events-none"
          >
            <Ship className="w-4.5 h-4.5 text-op-ocean animate-[bounce_2s_infinite]" />
          </motion.div>

          {/* Staggered Timeline entries */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            {entries.map((entry, idx) => {
              const isEven = idx % 2 === 0
              const isLast = idx === entries.length - 1
              
              return (
                <div 
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-stretch ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0`}
                >
                  {/* Milestones marker indicators on path line */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 z-25">
                    <motion.div 
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="relative flex items-center justify-center"
                    >
                      {/* Interactive ring marker */}
                      <div className={`w-4 h-4 rounded-full border-2 border-[#fffcf5] bg-[#fffcf5] shadow-md z-10 transition-colors ${
                        entry.accent === 'gold' 
                          ? 'border-op-gold bg-op-gold shadow-[0_0_10px_#F7C948]' 
                          : 'border-op-brown/70 bg-op-navy'
                      }`} />
                      
                      {/* Active indicator ping */}
                      {entry.accent === 'gold' && (
                        <div className="absolute w-8 h-8 rounded-full bg-op-gold/20 animate-ping pointer-events-none" />
                      )}
                    </motion.div>
                  </div>

                  {/* Milestones Card Section */}
                  <div className="w-full md:w-[46%] pl-12 md:pl-0 text-left">
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: shouldReduceMotion ? 0 : (isEven ? 40 : -40), y: shouldReduceMotion ? 20 : 0 },
                        visible: { 
                          opacity: 1, 
                          x: 0,
                          y: 0,
                          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
                        }
                      }}
                      className={`group relative rounded-2xl border-2 p-6 sm:p-8 hover:scale-[1.01] transition-all duration-500 shadow-md text-op-navy ${entry.accentClass}`}
                    >
                      {/* Corner chest-like brackets inside */}
                      <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-op-brown/30 pointer-events-none" />
                      <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-op-brown/30 pointer-events-none" />
                      <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-op-brown/30 pointer-events-none" />
                      <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-op-brown/30 pointer-events-none" />

                      <div className="space-y-4 relative z-10">
                        {/* Milestone Meta header */}
                        <div className="flex items-center justify-between border-b border-op-brown/15 pb-3">
                          <div className="flex items-center gap-3">
                            {/* Dial Wrapper */}
                            <div className="w-10 h-10 rounded-xl bg-op-navy text-op-parchment flex items-center justify-center shrink-0 border border-op-gold/30">
                              {entry.icon}
                            </div>
                            <div>
                              <h3 className="font-cinzel text-sm sm:text-base font-bold uppercase tracking-wider text-op-navy">
                                {entry.title}
                              </h3>
                              <p className="text-[10px] text-op-navy/60 font-sans font-medium uppercase tracking-wider">
                                {entry.subtitle}
                              </p>
                            </div>
                          </div>
                          <span className="text-xl sm:text-2xl font-black font-mono text-op-gold bg-clip-text">
                            {entry.year}
                          </span>
                        </div>

                        {/* Technical Description */}
                        <p className="text-xs sm:text-sm text-op-navy/85 leading-relaxed font-sans font-medium">
                          {entry.description}
                        </p>

                        {/* Technologies Learned Badges */}
                        <div className="pt-2 border-t border-op-brown/10 space-y-1.5 font-sans">
                          <span className="text-[9px] font-bold tracking-wider text-op-navy/50 uppercase">Log Inventory acquired:</span>
                          <div className="flex flex-wrap gap-1">
                            {entry.technologies.map((t) => (
                              <span
                                key={t}
                                className="px-2 py-0.5 rounded bg-op-brown/10 border border-op-brown/25 text-[9px] font-semibold text-op-brown font-mono"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Special link to projects centerpiece for ElderSense vision */}
                        {isLast && (
                          <div className="pt-2">
                            <a
                              href="#projects"
                              className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-op-ocean hover:text-op-navy transition-colors font-sans"
                            >
                              <span>Explore active ElderSense Roadmap</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        )}

                      </div>
                    </motion.div>
                  </div>

                  {/* Empty Spacer side on Desktop */}
                  <div className="hidden md:block w-[46%]" />
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
