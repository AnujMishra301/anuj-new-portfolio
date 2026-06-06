import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { GraduationCap, Code2, Terminal, Rocket, CheckCircle2 } from 'lucide-react'

interface TimelineEntry {
  year: string
  title: string
  subtitle: string
  icon: React.ReactNode
  bullets: string[]
  accent: 'blue' | 'purple' | 'green' | 'yellow'
  accentClass: string
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Set up scroll progress tracking for the cinematic drawing timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Transform the scaleY of the drawing path
  const scaleY = useTransform(scrollYProgress, [0.05, 0.85], [0, 1])

  const entries: TimelineEntry[] = [
    {
      year: "2024",
      title: "Started B.Tech CSE",
      subtitle: "Computer Science & Systems Inception",
      icon: <GraduationCap className="w-5 h-5 text-blue-400" />,
      bullets: [
        "Started B.Tech in Computer Science Engineering (CSE)",
        "Initiated exploration of system programming and basic computing theory",
        "Engaged in campus dev circles and student developer chapters",
      ],
      accent: "blue",
      accentClass: "hover:border-blue-500/30 hover:shadow-blue-500/5 hover:shadow-lg",
    },
    {
      year: "2025",
      title: "Focused on Java and DSA",
      subtitle: "Deep Algorithmic Foundations",
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      bullets: [
        "Focused heavily on Java programming and deep object-oriented principles",
        "Mastered core Data Structures & Algorithms (DSA)",
        "Built robust algorithmic foundations through constant competitive problem-solving",
      ],
      accent: "green",
      accentClass: "hover:border-emerald-500/30 hover:shadow-emerald-500/5 hover:shadow-lg",
    },
    {
      year: "2026",
      title: "Built BlackBoxCV & Sentinel AI",
      subtitle: "Practical Systems & Backend Focus",
      icon: <Terminal className="w-5 h-5 text-purple-400" />,
      bullets: [
        "Built BlackBoxCV (AI/NLP-powered resume screen analyzer)",
        "Built Sentinel AI (flagship code authenticity machine learning platform)",
        "Started Backend Development using high-throughput Node.js & Express architectures",
      ],
      accent: "purple",
      accentClass: "hover:border-purple-500/30 hover:shadow-purple-500/5 hover:shadow-lg",
    },
    {
      year: "Future",
      title: "Open Source & Scaled Systems",
      subtitle: "GSoC Engagement & AI Applications",
      icon: <Rocket className="w-5 h-5 text-amber-400" />,
      bullets: [
        "Contribute to complex Open Source systems and backend servers",
        "Target Google Summer of Code (GSoC) projects",
        "Engineer high-performance backend systems and production-grade AI applications",
      ],
      accent: "yellow",
      accentClass: "hover:border-amber-500/30 hover:shadow-amber-500/5 hover:shadow-lg",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const borderGlows = {
    blue: "group-hover:border-blue-500/30",
    green: "group-hover:border-emerald-500/30",
    purple: "group-hover:border-purple-500/30",
    yellow: "group-hover:border-amber-500/30",
  }

  const lineGlows = {
    blue: "bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.5)]",
    green: "bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)]",
    purple: "bg-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.5)]",
    yellow: "bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.5)]",
  }

  return (
    <section id="timeline" ref={containerRef} className="relative bg-background py-24 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-text/5">
      {/* Background radial glow */}
      <div className="absolute top-[40%] left-[10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-20 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-text/10 text-xs font-semibold text-accent tracking-wider uppercase"
          >
            Milestones
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
          >
            My <span className="bg-gradient-to-r from-accent via-indigo-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-base md:text-lg leading-relaxed"
          >
            A vertical journey of growth through software engineering, backend systems, and continuous learning.
          </motion.p>
        </div>

        {/* Timeline Path container */}
        <div className="relative">
          
          {/* Static gray timeline backing line */}
          <div className="absolute left-4 md:left-1/2 -translate-x-[1px] top-4 bottom-4 w-[2px] bg-text/10" />

          {/* Animated active/colored timeline drawing line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 -translate-x-[1px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-accent via-purple-500 to-transparent" 
          />

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
              
              return (
                <div 
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-stretch ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0`}
                >
                  {/* Glowing Node on the line */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 z-20">
                    <motion.div 
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="relative flex items-center justify-center"
                    >
                      {/* Interactive indicator circle */}
                      <div className={`w-4 h-4 rounded-full border-2 border-background transition-all duration-300 ${lineGlows[entry.accent]}`} />
                      
                      {/* Ping animation overlay */}
                      <div className="absolute w-8 h-8 rounded-full bg-accent/10 border border-accent/20 animate-ping opacity-30 pointer-events-none" />
                    </motion.div>
                  </div>

                  {/* Card Section */}
                  <div className="w-full md:w-[46%] pl-12 md:pl-0">
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: isEven ? 45 : -45 },
                        visible: { 
                          opacity: 1, 
                          x: 0,
                          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                        }
                      }}
                      className={`group relative rounded-2xl bg-surface/30 backdrop-blur-xl border border-text/10 p-6 sm:p-8 hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 ${entry.accentClass} ${borderGlows[entry.accent]}`}
                    >
                      {/* Interactive mesh highlight */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div className="space-y-4 relative z-10">
                        {/* Meta header */}
                        <div className="flex items-center justify-between border-b border-text/5 pb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-surface border border-text/10 flex items-center justify-center group-hover:border-accent/25 transition-colors duration-300">
                              {entry.icon}
                            </div>
                            <div className="text-left">
                              <h3 className="font-bold text-text group-hover:text-accent transition-colors duration-300">
                                {entry.title}
                              </h3>
                              <p className="text-xs text-muted">
                                {entry.subtitle}
                              </p>
                            </div>
                          </div>
                          <span className="text-2xl sm:text-3xl font-black font-mono bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent opacity-80">
                            {entry.year}
                          </span>
                        </div>

                        {/* Bullet achievements */}
                        <ul className="space-y-3 text-left">
                          {entry.bullets.map((bullet, bulletIdx) => (
                            <li key={bulletIdx} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted group-hover:text-text/90 transition-colors duration-300">
                              <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Bottom line indicator highlight */}
                      <div className="w-full h-1 bg-gradient-to-r from-accent/0 via-accent/30 to-purple-400/0 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
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
