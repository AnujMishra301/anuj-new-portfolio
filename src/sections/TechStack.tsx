import React, { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Code, Server, Database, Wrench, Cpu, Compass, Sparkles, Anchor, Activity, Ship, Globe, Shield } from 'lucide-react'

interface TechItem {
  name: string
  purpose: string
  projects: string[]
  icon: React.ReactNode
  status?: string
}

interface TechCategory {
  title: string
  icon: React.ReactNode
  items: TechItem[]
}

export default function TechStack() {
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

  const categories: TechCategory[] = [
    {
      title: "Languages",
      icon: <Code className="w-5 h-5" />,
      items: [
        {
          name: "Java",
          purpose: "Algorithmic structures, compiler basics",
          projects: ["B.Tech CS Modules"],
          icon: <Code className="w-4 h-4 text-op-ocean" />
        },
        {
          name: "Python",
          purpose: "AI modeling, NLP analyzers, scripts",
          projects: ["Sentinel AI", "BlackBoxCV", "ElderSense AI"],
          icon: <Activity className="w-4 h-4 text-op-red" />
        },
        {
          name: "Go",
          purpose: "High-concurrency systems, server routing",
          projects: ["ElderSense AI", "Sentinel AI Core"],
          icon: <Cpu className="w-4 h-4 text-op-sky" />,
          status: "Exploring"
        }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      items: [
        {
          name: "Spring Boot",
          purpose: "Enterprise REST frameworks, gRPC telemetry APIs",
          projects: ["CS Backend Telemetry"],
          icon: <Server className="w-4 h-4 text-op-ocean" />
        },
        {
          name: "Node.js / Express",
          purpose: "Non-blocking APIs, file parsing handlers",
          projects: ["Sentinel AI", "BlackBoxCV Web Service"],
          icon: <Activity className="w-4 h-4 text-op-brown" />
        },
        {
          name: "gRPC",
          purpose: "Low-latency remote system communication",
          projects: ["ElderSense AI Nodes"],
          icon: <Compass className="w-4 h-4 text-op-red" />
        }
      ]
    },
    {
      title: "Artificial Intelligence",
      icon: <Cpu className="w-5 h-5" />,
      items: [
        {
          name: "Sentence Transformers",
          purpose: "Semantic vector similarity analysis",
          projects: ["BlackBoxCV"],
          icon: <Sparkles className="w-4 h-4 text-op-gold" />
        },
        {
          name: "EdgeML Classifier",
          purpose: "Telemetry anomaly check on edge nodes",
          projects: ["ElderSense AI Edge"],
          icon: <Cpu className="w-4 h-4 text-op-red" />,
          status: "Under Dev"
        },
        {
          name: "Scikit-Learn",
          purpose: "Statistical classification algorithms",
          projects: ["Sentinel AI Classifier"],
          icon: <Shield className="w-4 h-4 text-op-brown" />
        }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5" />,
      items: [
        {
          name: "PostgreSQL",
          purpose: "Relational persistence, optimized telemetry logs",
          projects: ["Sentinel AI Registry", "ElderSense DB"],
          icon: <Database className="w-4 h-4 text-op-ocean" />
        },
        {
          name: "Vector Indexes",
          purpose: "Fast index queries for applicant embeds",
          projects: ["BlackBoxCV Matcher"],
          icon: <Compass className="w-4 h-4 text-op-gold" />
        }
      ]
    },
    {
      title: "DevOps",
      icon: <Ship className="w-5 h-5" />,
      items: [
        {
          name: "Docker",
          purpose: "Containerized environments, sandboxed execution",
          projects: ["Sentinel AI Sandbox", "Local Demos"],
          icon: <Ship className="w-4 h-4 text-op-sky" />
        },
        {
          name: "Local Gateways",
          purpose: "Edge device routers, network collection",
          projects: ["Fault Detection NodeMCU"],
          icon: <Anchor className="w-4 h-4 text-op-brown" />
        }
      ]
    },
    {
      title: "Tools",
      icon: <Wrench className="w-5 h-5" />,
      items: [
        {
          name: "Git / GitHub",
          purpose: "Version tracking and collaborative builds",
          projects: ["All Projects"],
          icon: <Wrench className="w-4 h-4 text-op-navy" />
        },
        {
          name: "Telemetry Sensors",
          purpose: "Low-voltage serial telemetry collection",
          projects: ["Fault Detection Hardware"],
          icon: <Activity className="w-4 h-4 text-op-red" />
        }
      ]
    }
  ]

  const exploringTech = [
    { name: "Kubernetes", purpose: "Orchestrating scalable microservice containers", icon: <Ship className="w-4 h-4 text-op-sky" /> },
    { name: "AWS", purpose: "Distributed cloud infrastructure and hosting environments", icon: <Globe className="w-4 h-4 text-op-ocean" /> },
    { name: "CI / CD", purpose: "Automated integration, tests, and compiler verification", icon: <Activity className="w-4 h-4 text-op-red" /> },
    { name: "Advanced System Design", purpose: "Load-balancing strategies, cache brokers, and replication", icon: <Compass className="w-4 h-4 text-op-gold" /> },
    { name: "Machine Learning", purpose: "Expanding neural network classification metrics", icon: <Cpu className="w-4 h-4 text-op-brown" /> }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  }

  return (
    <section id="techstack" className="relative bg-background py-24 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-text/5">
      
      {/* Background Radial Glow */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-op-ocean/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Decorative sea chart watermark */}
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

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-surface/50 border border-op-gold/30 text-xs font-bold text-op-gold tracking-widest uppercase font-sans shadow-sm backdrop-blur-md"
          >
            Inventory // Blueprints
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-widest font-cinzel text-op-parchment uppercase"
          >
            Tech <span className="bg-gradient-to-b from-op-parchment via-op-gold to-op-brown bg-clip-text text-transparent filter drop-shadow-md">Stack</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-base md:text-lg leading-relaxed font-sans"
          >
            An organized log of systems components, compiled by real application usage, mapping how I build software.
          </motion.p>

          <div className="flex items-center justify-center gap-4 py-1">
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent to-op-brown/30" />
            <Anchor className="w-4 h-4 text-op-brown/50" />
            <div className="w-16 h-[1.5px] bg-gradient-to-l from-transparent to-op-brown/30" />
          </div>
        </div>

        {/* Categories Grid (Modular Drawers) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="relative overflow-hidden rounded-3xl bg-[#fffcf5] border-2 border-op-brown/40 p-6 flex flex-col justify-between hover:border-op-gold hover:shadow-lg transition-all duration-300 group text-op-navy text-left"
            >
              {/* Corner chest-like brackets inside */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-op-brown/30 pointer-events-none group-hover:border-op-gold transition-colors duration-300" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-op-brown/30 pointer-events-none group-hover:border-op-gold transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-op-brown/30 pointer-events-none group-hover:border-op-gold transition-colors duration-300" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-op-brown/30 pointer-events-none group-hover:border-op-gold transition-colors duration-300" />

              <div className="space-y-6 relative z-10 flex flex-col h-full justify-between">
                
                {/* Drawer Header Box */}
                <div className="flex items-center gap-3 border-b border-op-brown/15 pb-3">
                  <div className="w-9 h-9 rounded-lg bg-op-navy text-op-parchment flex items-center justify-center border border-op-gold/30">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-cinzel text-sm sm:text-base font-bold uppercase tracking-wider text-op-navy">
                      {cat.title}
                    </h3>
                    <p className="text-[9px] text-op-navy/50 font-sans uppercase font-bold tracking-wider">
                      {cat.items.length} items cataloged
                    </p>
                  </div>
                </div>

                {/* Stack of Technology Cards */}
                <div className="space-y-3.5 pt-2">
                  {cat.items.map((tech) => (
                    <div 
                      key={tech.name} 
                      className="group/item relative rounded-xl border border-op-brown/20 bg-[#fffdfb] p-3 text-left transition-all duration-300 hover:border-op-gold hover:shadow-[0_4px_12px_rgba(198,134,66,0.08)]"
                    >
                      {/* Name & Badge Row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-op-navy/5 border border-op-brown/15 flex items-center justify-center">
                            {tech.icon}
                          </div>
                          <span className="font-bold text-xs sm:text-sm text-op-navy font-sans">{tech.name}</span>
                        </div>
                        {tech.status && (
                          <span className="text-[8px] font-mono font-bold tracking-wider bg-op-gold/15 border border-op-gold/35 px-1.5 py-0.5 rounded text-op-gold">
                            {tech.status}
                          </span>
                        )}
                      </div>
                      
                      {/* Purpose & Projects (Detailed Experience) */}
                      <div className="mt-2 text-[10px] text-op-navy/70 font-sans leading-relaxed border-t border-op-brown/10 pt-1.5 space-y-0.5">
                        <div className="font-medium"><span className="opacity-60">Purpose:</span> {tech.purpose}</div>
                        {tech.projects && tech.projects.length > 0 && (
                          <div className="font-bold text-op-ocean flex items-center gap-1">
                            <span className="opacity-60 text-op-navy font-medium">Used in:</span>
                            <span>{tech.projects.join(", ")}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* --- Dedicated Section: Exploring New Horizons (Bottom) --- */}
        <motion.div
          initial={{ opacity: 0.85, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto rounded-3xl bg-[#fffcf5] border-2 border-op-brown/40 shadow-md text-op-navy overflow-hidden p-8 sm:p-10 text-left"
        >
          {/* Compass layout background */}
          <div className="absolute right-[-5%] bottom-[-5%] w-52 h-52 pointer-events-none opacity-[0.03] text-op-navy z-0">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current" strokeWidth="1">
              <circle cx="50" cy="50" r="45" />
              <line x1="50" y1="5" x2="50" y2="95" />
              <line x1="5" y1="50" x2="95" y2="50" />
            </svg>
          </div>

          {/* Brackets */}
          <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-op-brown/30" />
          <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-op-brown/30" />
          <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-op-brown/30" />
          <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-op-brown/30" />

          <div className="space-y-6 relative z-10">
            
            <div className="space-y-1">
              <h3 className="font-cinzel text-lg sm:text-xl font-bold uppercase tracking-widest text-op-navy flex items-center gap-2">
                <Compass className="w-5 h-5 text-op-gold animate-spin-slow" />
                <span>Exploring New Horizons</span>
              </h3>
              <p className="text-xs sm:text-sm text-op-navy/70 font-sans font-medium">
                Continuous learning is at the heart of any engineering voyage. I am actively researching these technologies to expand my systems architectures:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-2">
              {exploringTech.map((tech) => (
                <div 
                  key={tech.name}
                  className="rounded-xl border border-op-brown/25 bg-[#fffdfb] p-4 flex flex-col justify-between hover:border-op-gold hover:shadow-sm transition-all duration-300"
                >
                  <div className="space-y-2">
                    <div className="w-7 h-7 rounded bg-op-navy/5 flex items-center justify-center">
                      {tech.icon}
                    </div>
                    <h4 className="font-bold text-xs text-op-navy font-sans tracking-wide">
                      {tech.name}
                    </h4>
                    <p className="text-[10px] text-op-navy/60 font-sans leading-relaxed">
                      {tech.purpose}
                    </p>
                  </div>
                  
                  <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-op-gold block mt-4">
                    ● Researching
                  </span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
