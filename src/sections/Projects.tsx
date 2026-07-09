import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ExternalLink, HelpCircle, Award, Sparkles, Anchor, Compass, Scroll, Ship, X, ArrowUpRight } from 'lucide-react'

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

interface Project {
  id: string
  name: string
  tagline: string
  description: string
  challenges: string
  lessons: string
  improvements: string
  architecture: string
  pipeline: string[]
  techStack: {
    Frontend?: string[]
    Backend?: string[]
    "AI / ML"?: string[]
    Core?: string[]
    Styling?: string[]
    Integration?: string[]
    Tools?: string[]
  }
  stats: {
    accuracy?: string
    status: string
    extra?: string
  }
  githubUrl: string
  demoUrl: string
  color: string
  icon: React.ReactNode
  x: string // relative percentage for absolute grid placement
  y: string
}

export default function Projects() {
  const [hoveredIsland, setHoveredIsland] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeTab, setActiveTab] = useState<'log' | 'arch'>('log')
  const [expandedMilestone, setExpandedMilestone] = useState<string | null>("backend")
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

  const projects: Project[] = [
    {
      id: "sentinel-ai",
      name: "Sentinel AI",
      tagline: "AI-Powered Code Authenticity Analysis & Software Trust Platform",
      description: "An automated software trust platform analyzing generative AI patterns, structural code logic, and authorship probabilities. Combines natural language processing with abstract syntax trees to deliver precise verification.",
      challenges: "Developing a parsing pipeline capable of analyzing code structures independent of syntax style, and training a classifier to accurately distinguish human-written logic from machine-synthesized code patterns.",
      lessons: "Learned the importance of combining Abstract Syntax Tree (AST) tokenization with high-level NLP semantic markers to minimize false positives in source code analysis.",
      improvements: "Extending cross-language AST checking support to compile-to-JS languages and drafting a dedicated VSCode compiler-extension plugin.",
      architecture: "Code parser splits inputs into Abstract Syntax Trees (ASTs), extracts node metrics, runs semantic NLP similarity, and pipes features into a decision-scoring classifier.",
      pipeline: ["Code Inputs", "AST Parsing", "NLP Extraction", "Classifier", "Trust Score"],
      techStack: {
        Frontend: ["React", "TypeScript", "Tailwind CSS"],
        Backend: ["Node.js", "Express"],
        "AI / ML": ["Python", "Machine Learning", "Natural Language Processing"],
        Tools: ["Git", "GitHub"]
      },
      stats: {
        accuracy: "94.2% Class",
        status: "Active Beta",
        extra: "120ms Latency"
      },
      githubUrl: "https://github.com/AnujMishra301/ai-code-detector",
      demoUrl: "https://github.com/AnujMishra301/ai-code-detector",
      color: "border-op-ocean text-op-ocean",
      icon: <Ship className="w-6 h-6" />,
      x: "25%",
      y: "12%"
    },
    {
      id: "blackbox-cv",
      name: "BlackBoxCV",
      tagline: "NLP Resume Screener & ATS Match Optimizer",
      description: "An intelligent resume screening system simulating ATS evaluation logic. Utilizes semantic vector embeddings to match applicant profiles against core vacancy requirements and recruiter heuristics.",
      challenges: "Resolving performance bottlenecks when parsing unstructured resume PDF files and aligning semantic search embeddings with multi-variable recruiter scoring heuristics.",
      lessons: "Deepened expertise in sentence transformers, semantic indexing layouts, and NLP normalization techniques for raw text files.",
      improvements: "Integrating automated profile enhancement recommendations and structural grammar analysis to improve job-seeker readiness.",
      architecture: "PDF document parsed and structured, runs sentence transformers matching, checks recruiter heuristics ruleset, outputs structured resume score metrics.",
      pipeline: ["Resume PDF", "Parse Text", "Vector Embed", "Rule Engine", "ATS Score"],
      techStack: {
        Core: ["Python", "Streamlit"],
        "AI / ML": ["Sentence Transformers", "Scikit-Learn", "NLP"]
      },
      stats: {
        accuracy: "89% Match Acc",
        status: "Active Dev",
        extra: "PDF Extraction"
      },
      githubUrl: "https://github.com/AnujMishra301/BlackBoxCV",
      demoUrl: "https://github.com/AnujMishra301/BlackBoxCV",
      color: "border-op-red text-op-red",
      icon: <Compass className="w-6 h-6" />,
      x: "72%",
      y: "32%"
    },
    {
      id: "fault-detection",
      name: "Fault Detection System",
      tagline: "Real-Time Low Voltage Power Line Telemetry & Alerting System",
      description: "An IoT-enabled embedded hardware system detecting line faults in low-voltage power networks. Engineered with microcontrollers to transmit real-time telemetry metrics and trigger automated alerts.",
      challenges: "Designing noise-tolerant sensor logging logic on low-cost hardware and establishing low-latency networking under high-impedance line situations.",
      lessons: "Acquired deep insight into C++ hardware scheduling, serial communication protocols, and cloud-to-edge messaging logic.",
      improvements: "Incorporating edge-based ML anomaly detection to predict cable insulation failures prior to physical line breakage.",
      architecture: "NodeMCU reads voltage inputs from line sensors, analyzes edge anomalies, pushes alert logs via HTTP/WebSockets to a monitoring database.",
      pipeline: ["Sensors Log", "NodeMCU Edge", "WebSocket Push", "API Gateway", "Alert Dispatch"],
      techStack: {
        Core: ["C++", "NodeMCU"],
        Integration: ["WebSockets", "HTML/CSS/JS"],
        Tools: ["Telemetry Sensors"]
      },
      stats: {
        accuracy: "<5s Dispatch",
        status: "Completed",
        extra: "Edge Telemetry"
      },
      githubUrl: "https://github.com/AnujMishra301/Fault-Detection-System-Low-Voltage",
      demoUrl: "https://github.com/AnujMishra301/Fault-Detection-System-Low-Voltage",
      color: "border-op-brown text-op-brown",
      icon: <Anchor className="w-6 h-6" />,
      x: "28%",
      y: "58%"
    },
    {
      id: "portfolio",
      name: "Personal Portfolio Website",
      tagline: "High-Fidelity Systems Showcase & Interactive Brand Platform",
      description: "A cinematic developer portfolio highlighting technical systems logic and creative humanities. Implements customized theme variables, cursor-tracked parallax layout, and dynamic viewport observers.",
      challenges: "Designing high-performance visual layers (waves, particle engines, compass watermarks) using purely vector SVGs and React logic while keeping bundle sizes light.",
      lessons: "Mastered Framer Motion layout animations (layoutId spring shifts), intersection observing in React, and strict type safety layouts.",
      improvements: "Developing automated offline fallback states and integrating dynamic API performance stats in a telemetry console dashboard.",
      architecture: "React 19 Frontend renders lightweight SVGs, coordinates page interactions, caches API responses, and optimizes Lighthouse speeds.",
      pipeline: ["Vite Core", "TSX Component", "Framer Motion", "Tailwind CSS", "Lighthouse V4"],
      techStack: {
        Core: ["React", "TypeScript", "Vite"],
        Integration: ["Framer Motion", "Tailwind CSS"],
        Tools: ["GitHub API", "Vercel"]
      },
      stats: {
        accuracy: "100 Lighthouse",
        status: "Active Dev",
        extra: "Strict TS Check"
      },
      githubUrl: "https://github.com/AnujMishra301/anuj-new-portfolio",
      demoUrl: "https://github.com/AnujMishra301/anuj-new-portfolio",
      color: "border-op-sky text-op-sky",
      icon: <Scroll className="w-6 h-6" />,
      x: "66%",
      y: "78%"
    }
  ]

  // ElderSense AI Milestone Details
  const roadmap = [
    {
      id: "backend",
      name: "Backend Architecture",
      progress: 90,
      status: "Core setup ready",
      details: "Configuring microsecond telemetry buffers, concurrent gRPC channels for sensory data broadcast, and high-throughput Postgres timeseries index mapping logic.",
      badge: "completed"
    },
    {
      id: "system",
      name: "System Architecture",
      progress: 70,
      status: "Data pipelines active",
      details: "Designing resilient local gateway transceivers capable of applying edge classification rules before broadcasting safety reports to cloud gateways.",
      badge: "active"
    },
    {
      id: "ai",
      name: "AI Integration",
      progress: 60,
      status: "Model training active",
      details: "Training local EdgeML algorithms to isolate behavioral fall metrics from raw sensor data with minimum power draws, avoiding false telemetry logs.",
      badge: "active"
    },
    {
      id: "mobile",
      name: "Mobile Platform",
      progress: 30,
      status: "React Native mockups",
      details: "Prototyping responsive dashboard screens in React Native with encrypted storage caching and local notification alert push controllers.",
      badge: "concept"
    },
    {
      id: "deploy",
      name: "Cloud & Production Deployment",
      progress: 10,
      status: "Mesh network trials",
      details: "Evaluating mesh radio transceiver modules under local residency simulations to calculate packet transmission integrity and drop ratios.",
      badge: "concept"
    }
  ]

  return (
    <section id="projects" className="relative bg-background py-24 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-text/5">
      
      {/* Background Soft Glow */}
      <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-op-ocean/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Decorative Sea Map Parallax Grid Watermark */}
      <motion.div
        style={{
          x: shouldReduceMotion ? 0 : mousePos.x * -0.4,
          y: shouldReduceMotion ? 0 : mousePos.y * -0.4,
        }}
        className="absolute inset-0 pointer-events-none opacity-[0.06] md:opacity-[0.09] z-0 flex items-center justify-center"
      >
        <svg viewBox="0 0 1000 900" className="w-full h-full stroke-op-navy" fill="none" strokeWidth="1">
          <circle cx="500" cy="450" r="400" strokeDasharray="3 3" />
          <circle cx="500" cy="450" r="220" />
          
          <line x1="500" y1="0" x2="500" y2="900" />
          <line x1="0" y1="450" x2="1000" y2="450" />
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-surface/50 border border-op-gold/30 text-xs font-bold text-op-gold tracking-widest uppercase font-sans shadow-sm backdrop-blur-md"
          >
            Voyager Records
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-widest font-cinzel text-op-parchment uppercase"
          >
            Nautical <span className="bg-gradient-to-b from-op-parchment via-op-gold to-op-brown bg-clip-text text-transparent filter drop-shadow-md">Sea Map</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-base md:text-lg leading-relaxed font-sans"
          >
            Explore the islands of my engineering voyage. Hover to inspect their magnetic indicators, and click to drop anchor and read log details.
          </motion.p>

          <div className="flex items-center justify-center gap-4 py-1">
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent to-op-brown/30" />
            <Anchor className="w-4 h-4 text-op-brown/50" />
            <div className="w-16 h-[1.5px] bg-gradient-to-l from-transparent to-op-brown/30" />
          </div>
        </div>

        {/* Desktop Sea Map Layout (lg screens) */}
        <div className="relative w-full h-[880px] hidden lg:block border border-op-gold/15 rounded-3xl bg-op-navy/15 backdrop-blur-sm overflow-hidden select-none">
          
          {/* Animated Connecting Sea Route Path: Ends down at center-bottom */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 800" preserveAspectRatio="none">
            <motion.path
              d="M 250,100 C 550,160 820,200 720,260 C 620,320 180,380 280,480 C 380,580 820,550 660,650 C 500,750 480,800 480,880"
              fill="none"
              stroke="var(--color-op-gold)"
              strokeWidth="2.5"
              strokeDasharray="6 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </svg>

          {/* Island Nodes Map */}
          {projects.map((proj) => {
            const isHovered = hoveredIsland === proj.id
            const isActiveColor = proj.id === "sentinel-ai" 
              ? "text-op-ocean border-op-ocean hover:shadow-[0_0_20px_rgba(11,116,197,0.3)] bg-op-ocean/5" 
              : proj.id === "blackbox-cv" 
              ? "text-op-red border-op-red hover:shadow-[0_0_20px_rgba(215,38,56,0.3)] bg-op-red/5"
              : proj.id === "fault-detection" 
              ? "text-op-brown border-op-brown hover:shadow-[0_0_20px_rgba(198,134,66,0.3)] bg-op-brown/5"
              : "text-op-sky border-op-sky hover:shadow-[0_0_20px_rgba(142,214,255,0.3)] bg-op-sky/5"

            return (
              <div
                key={proj.id}
                style={{
                  top: proj.y,
                  left: proj.x,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center"
              >
                {/* Floating Wave Ripples on Hover */}
                <AnimatePresence>
                  {isHovered && !shouldReduceMotion && (
                    <>
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0.8 }}
                        animate={{ scale: 1.6, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                        className="absolute w-16 h-16 rounded-full border border-op-gold/30 pointer-events-none"
                      />
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0.8 }}
                        animate={{ scale: 2.3, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut", delay: 0.5 }}
                        className="absolute w-16 h-16 rounded-full border border-op-gold/15 pointer-events-none"
                      />
                    </>
                  )}
                </AnimatePresence>

                {/* Island Compass Node Button */}
                <button
                  onMouseEnter={() => setHoveredIsland(proj.id)}
                  onMouseLeave={() => setHoveredIsland(null)}
                  onClick={() => {
                    setSelectedProject(proj)
                    setActiveTab('log')
                  }}
                  className={`w-16 h-16 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md transform hover:scale-110 z-20 ${isActiveColor}`}
                >
                  <div className="absolute inset-0.5 rounded-full border border-dashed border-op-gold/20 animate-[spin_40s_linear_infinite]" />
                  {proj.icon}
                </button>

                {/* Hover Statistics Popup Dialog */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="absolute bottom-20 w-44 bg-[#fffcf5] border border-op-brown/40 rounded-xl p-3 shadow-lg text-left text-op-navy z-30"
                    >
                      <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#fffcf5] border-r border-b border-op-brown/40 rotate-45" />
                      <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-op-navy border-b border-op-brown/15 pb-1 block truncate">
                        {proj.name}
                      </h4>
                      <div className="mt-1.5 space-y-1 font-sans text-[10px] text-op-navy/85">
                        <div className="flex justify-between">
                          <span>Status:</span>
                          <span className="font-semibold text-op-navy">{proj.stats.status}</span>
                        </div>
                        {proj.stats.accuracy && (
                          <div className="flex justify-between">
                            <span>Metric:</span>
                            <span className="font-semibold text-op-red">{proj.stats.accuracy}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span>Latency:</span>
                          <span className="font-semibold text-op-brown">{proj.stats.extra}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Permanent Floating Name Label below dial */}
                <span className="mt-3 font-cinzel text-xs font-bold tracking-widest text-op-parchment/90 uppercase bg-op-navy/60 px-2 py-0.5 rounded border border-op-gold/10">
                  {proj.name}
                </span>
              </div>
            )
          })}
        </div>

        {/* Mobile & Tablet Stacking Map (below lg screens) */}
        <div className="relative w-full lg:hidden block pl-8 sm:pl-12">
          
          {/* Vertical connecting sea route line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-[2px] bg-dashed bg-op-gold/30 z-0" />

          {/* List of stacked projects */}
          <div className="space-y-12 relative z-10 text-left">
            {projects.map((proj) => (
              <div key={proj.id} className="relative flex gap-6 items-start">
                
                {/* Compass Node Icon on timeline */}
                <div className="absolute left-[-28px] sm:left-[-36px] w-12 h-12 rounded-full bg-[#fffcf5] border-2 border-op-brown/40 flex items-center justify-center text-op-navy shadow-md shrink-0">
                  <div className="absolute inset-0.5 rounded-full border border-dashed border-op-brown/20" />
                  {proj.icon}
                </div>

                {/* Card summary box */}
                <div className="flex-1 rounded-2xl bg-[#fffcf5] border border-op-brown/20 p-6 text-op-navy space-y-4 shadow-sm">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-cinzel text-lg font-bold uppercase tracking-wider text-op-navy">
                      {proj.name}
                    </h3>
                    <span className="ml-auto text-[9px] font-mono font-bold tracking-wider bg-op-brown/10 border border-op-brown/20 px-2 py-0.5 rounded text-op-brown">
                      {proj.stats.status}
                    </span>
                  </div>

                  <p className="text-xs text-op-navy/85 leading-relaxed font-sans">
                    {proj.tagline}
                  </p>

                  <button
                    onClick={() => {
                      setSelectedProject(proj)
                      setActiveTab('log')
                    }}
                    className="flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase text-op-ocean hover:text-op-navy transition-colors font-sans"
                  >
                    <span>Drop Anchor & View Log</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Featured Centerpiece Destination: ElderSense AI --- */}
        <motion.div
          initial={{ opacity: 0.85, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          onViewportEnter={() => window.dispatchEvent(new CustomEvent('eldersense-reached'))}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-[#1b344d]/30 via-[#0a1829]/70 to-[#030912]/95 border-2 border-op-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.45)] text-op-parchment overflow-hidden p-8 sm:p-12 text-left"
        >
          {/* Dawn sunburst glow backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(247,201,72,0.14),transparent_60%)] pointer-events-none z-0" />

          {/* Compass watermark */}
          <div className="absolute left-[-5%] bottom-[-5%] w-64 h-64 pointer-events-none opacity-[0.02] text-op-parchment z-0">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current" strokeWidth="1">
              <circle cx="50" cy="50" r="45" />
              <line x1="50" y1="5" x2="50" y2="95" />
              <line x1="5" y1="50" x2="95" y2="50" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 relative z-10 items-center">
            
            {/* Left Column: Heading, description, and interactive milestones roadmap (3/5 width) */}
            <div className="lg:col-span-3 space-y-6">
              
              {/* Badges & Header */}
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="px-3 py-1 rounded bg-op-gold/15 border border-op-gold text-[9px] font-black tracking-widest uppercase text-op-gold">
                    ★ Personal Passion Project
                  </span>
                  <span className="px-3 py-1 rounded bg-[#fffcf5]/10 border border-[#fffcf5]/20 text-[9px] font-bold tracking-widest uppercase text-op-parchment/80 animate-pulse">
                    Currently Under Development
                  </span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-black font-cinzel tracking-widest text-op-parchment uppercase">
                  ElderSense AI
                </h3>
              </div>

              {/* Description */}
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-op-parchment/90 font-sans font-medium">
                <p>
                  ElderSense represents the long-term flagship vision of my portfolio. It synthesizes robust backend architectures, distributed network telemetry, scalable artificial intelligence, and human-centered design into a single unified platform focused on improving safety, care tracking, and response times for our elderly population.
                </p>
                <blockquote className="border-l-2 border-op-gold pl-4 py-1 italic font-cinzel text-xs tracking-wider text-op-gold uppercase block">
                  "Every project before this has been a step toward building ElderSense."
                </blockquote>
              </div>

              {/* Interactive Milestones Timeline */}
              <div className="space-y-3 pt-2">
                <h4 className="text-[10px] font-mono font-bold tracking-widest text-op-gold uppercase">Development Milestones Roadmap</h4>
                
                <div className="space-y-2 text-xs font-sans">
                  {roadmap.map((m) => {
                    const isExpanded = expandedMilestone === m.id
                    const dotSymbol = m.badge === "completed" ? "✓" : m.badge === "active" ? "➔" : "⚙"
                    const badgeStyles = m.badge === "completed" 
                      ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" 
                      : m.badge === "active" 
                      ? "text-op-gold bg-op-gold/10 border-op-gold/30" 
                      : "text-op-brown bg-op-brown/10 border-op-brown/20"

                    return (
                      <div 
                        key={m.id}
                        className={`border rounded-xl transition-all duration-300 select-none overflow-hidden ${
                          isExpanded 
                            ? "bg-[#fffcf5]/5 border-op-gold/40 shadow-sm" 
                            : "bg-[#fffcf5]/0 border-op-gold/10 hover:border-op-gold/25 hover:bg-[#fffcf5]/2 cursor-pointer"
                        }`}
                        onClick={() => setExpandedMilestone(isExpanded ? null : m.id)}
                      >
                        {/* Milestone header row */}
                        <div className="flex items-center gap-3 p-3.5">
                          <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[8px] font-black shrink-0 ${badgeStyles}`}>
                            {dotSymbol}
                          </span>
                          <div className="flex-1 flex justify-between font-bold text-op-parchment">
                            <span>{m.name}</span>
                            <span className="text-[10px] opacity-75 font-mono font-medium">({m.progress}%)</span>
                          </div>
                        </div>

                        {/* Expandable details card */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                              className="border-t border-[#fffcf5]/5"
                            >
                              <div className="p-4 bg-[#071321]/40 space-y-2">
                                <div className="text-[10px] font-mono text-op-gold font-bold uppercase tracking-wider">
                                  Current Focus: {m.status}
                                </div>
                                <p className="text-xs text-op-parchment/80 leading-relaxed">
                                  {m.details}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* GitHub Link Shortcut */}
              <div className="pt-2 flex">
                <a
                  href="https://github.com/AnujMishra301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-op-navy border border-op-gold/30 hover:border-op-gold/60 text-op-parchment font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-[#fffcf5]/5 shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>Repository Platform</span>
                </a>
              </div>

            </div>

            {/* Right Column: Cinematic Lighthouse Landscape Artwork Scene (2/5 width) */}
            <div className="lg:col-span-2 relative aspect-square border border-op-gold/20 rounded-2xl overflow-hidden bg-op-navy/40 flex items-center justify-center shadow-inner z-10">
              
              {/* Golden Sun & Sunrise Dawn Sky */}
              <div className="absolute bottom-16 w-44 h-44 rounded-full bg-[radial-gradient(circle,rgba(247,201,72,0.2),transparent_70%)] blur-md z-0" />
              <div className="absolute bottom-20 w-16 h-16 rounded-full bg-op-gold/15 z-0" />

              {/* Mountains silhouette in background */}
              <svg viewBox="0 0 200 100" className="absolute bottom-12 w-full h-24 fill-op-navy/60 text-op-navy/60 z-0">
                <path d="M 0,100 L 40,50 L 80,75 L 130,40 L 170,80 L 200,100 Z" />
                <path d="M 20,100 L 70,60 L 110,85 L 160,50 L 200,100 Z" className="opacity-40" />
              </svg>

              {/* Gentle ocean waves bobbing loop */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-0 inset-x-0 h-16 z-20"
              >
                <svg viewBox="0 0 200 50" className="w-full h-full fill-op-navy text-op-navy opacity-90" preserveAspectRatio="none">
                  <path d="M 0,25 Q 50,15 100,25 T 200,25 L 200,50 L 0,50 Z" />
                </svg>
              </motion.div>
              
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [-1, 2, -1] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
                className="absolute bottom-0 inset-x-0 h-14 z-20"
              >
                <svg viewBox="0 0 200 50" className="w-full h-full fill-op-navy/70 text-op-navy/70" preserveAspectRatio="none">
                  <path d="M 0,30 Q 60,18 120,30 T 200,30 L 200,50 L 0,50 Z" />
                </svg>
              </motion.div>

              {/* Flying Birds drifting from right to left */}
              {!shouldReduceMotion && (
                <div className="absolute inset-0 z-10 pointer-events-none">
                  {/* Bird 1 */}
                  <motion.div
                    initial={{ x: 260, y: 50, scale: 0.8 }}
                    animate={{ x: -60, y: 30 }}
                    transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                    className="absolute"
                  >
                    <svg viewBox="0 0 10 6" className="w-3.5 h-2 text-op-gold/50 fill-none stroke-current" strokeWidth="1">
                      <path d="M 0,3 Q 2.5,0 5,3 Q 7.5,0 10,3" />
                    </svg>
                  </motion.div>
                  {/* Bird 2 */}
                  <motion.div
                    initial={{ x: 300, y: 75, scale: 0.6 }}
                    animate={{ x: -60, y: 45 }}
                    transition={{ repeat: Infinity, duration: 22, ease: "linear", delay: 3 }}
                    className="absolute"
                  >
                    <svg viewBox="0 0 10 6" className="w-2.5 h-1.5 text-op-gold/40 fill-none stroke-current" strokeWidth="1">
                      <path d="M 0,3 Q 2.5,0 5,3 Q 7.5,0 10,3" />
                    </svg>
                  </motion.div>
                </div>
              )}

              {/* Lighthouse Tower Structure Silhouette */}
              <div className="absolute bottom-12 z-10 flex flex-col items-center">
                <svg viewBox="0 0 24 36" className="w-10 h-16 text-op-navy/95 fill-current stroke-op-gold/15" strokeWidth="0.5">
                  {/* Base rocks */}
                  <path d="M 2,36 Q 12,34 22,36 L 22,33 L 2,33 Z" />
                  {/* Main tower shaft */}
                  <path d="M 7,33 L 9.5,10 L 14.5,10 L 17,33 Z" />
                  {/* Balcony deck */}
                  <rect x="8" y="8" width="8" height="2" rx="0.5" />
                  {/* Lantern Chamber */}
                  <rect x="10.5" y="4" width="3" height="4" rx="0.5" />
                  {/* Roof cap */}
                  <path d="M 9.5,4 L 12,0.5 L 14.5,4 Z" />
                </svg>

                {/* Constant yellow beacon flash */}
                <div className="absolute top-1 w-2 h-2 rounded-full bg-op-gold shadow-[0_0_15px_#F7C948] animate-pulse" />
              </div>

              {/* Rotating Lighthouse Beacon Light Beam */}
              <motion.div
                animate={shouldReduceMotion ? {} : { rotate: 360 }}
                transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
                className="absolute bottom-[44px] w-[500px] h-[500px] flex items-center justify-center pointer-events-none z-10"
              >
                {/* Golden beacon slice cone */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-op-gold/15 fill-current">
                  {/* Right Beam Cone */}
                  <polygon points="50,50 95,35 95,65" />
                  {/* Left Beam Cone */}
                  <polygon points="50,50 5,35 5,65" />
                </svg>
              </motion.div>

              {/* Floating Spark particles drifting up */}
              {!shouldReduceMotion && (
                <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        x: 40 + Math.random() * 120,
                        y: 220,
                        opacity: 0.1,
                        scale: 0.5 + Math.random() * 0.5
                      }}
                      animate={{
                        y: [-10, 240],
                        opacity: [0, 0.7, 0]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 6 + Math.random() * 4,
                        delay: i * 1.5,
                        ease: "easeOut"
                      }}
                      className="absolute w-1.5 h-1.5 rounded-full bg-op-gold"
                    />
                  ))}
                </div>
              )}

            </div>

          </div>
        </motion.div>

      </div>

      {/* Expanded detailed Project Parchment Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-op-navy/60 backdrop-blur-md cursor-pointer"
            />

            {/* Parchment Panel Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl bg-[#fffcf5] border-2 border-op-brown text-op-navy rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col max-h-[85vh] z-10"
            >
              {/* Corner chest-like brackets inside */}
              <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-op-brown/30 pointer-events-none" />
              <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-op-brown/30 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-op-brown/30 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b-2 border-r-2 border-op-brown/30 pointer-events-none" />

              {/* Modal Header */}
              <div className="p-6 sm:p-8 border-b border-op-brown/15 flex items-start justify-between relative z-10">
                <div className="space-y-1.5 text-left max-w-[85%]">
                  <span className="font-mono text-[9px] font-bold tracking-widest text-op-brown uppercase block">Voyager Logbook Entries</span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-wide text-op-navy font-cinzel">
                    {selectedProject.name}
                  </h3>
                  <p className="text-xs text-op-navy/85 font-sans leading-relaxed font-medium">
                    {selectedProject.tagline}
                  </p>
                </div>

                {/* Close Button shell as small compass */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-full border border-op-brown/40 flex items-center justify-center text-op-navy hover:text-op-red hover:border-op-red transition-all cursor-pointer shadow-sm relative group"
                  aria-label="Close details"
                >
                  <div className="absolute inset-0.5 rounded-full border border-dashed border-op-brown/10 group-hover:rotate-90 transition-transform duration-500" />
                  <X className="w-4 h-4 relative z-10" />
                </button>
              </div>

              {/* Tab Selector Links */}
              <div className="px-6 sm:px-8 border-b border-op-brown/10 flex gap-4 bg-op-brown/5 relative z-10 font-sans">
                <button
                  onClick={() => setActiveTab('log')}
                  className={`py-3.5 text-xs font-bold uppercase tracking-wider transition-colors relative cursor-pointer ${
                    activeTab === 'log' ? "text-op-navy" : "text-op-navy/50 hover:text-op-navy"
                  }`}
                >
                  <span>Logbook Details</span>
                  {activeTab === 'log' && (
                    <motion.div layoutId="modalTabBorder" className="absolute bottom-0 inset-x-0 h-[2px] bg-op-gold" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('arch')}
                  className={`py-3.5 text-xs font-bold uppercase tracking-wider transition-colors relative cursor-pointer ${
                    activeTab === 'arch' ? "text-op-navy" : "text-op-navy/50 hover:text-op-navy"
                  }`}
                >
                  <span>System Architecture</span>
                  {activeTab === 'arch' && (
                    <motion.div layoutId="modalTabBorder" className="absolute bottom-0 inset-x-0 h-[2px] bg-op-gold" />
                  )}
                </button>
              </div>

              {/* Modal Body Contents (Scrollable Scroll) */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-left relative z-10 font-sans">
                
                {activeTab === 'log' ? (
                  /* TAB 1: Logbook Details content */
                  <div className="space-y-6">
                    
                    {/* Story & Description */}
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-mono font-bold tracking-widest text-op-brown uppercase">Voyage Description</h4>
                      <p className="text-sm leading-relaxed text-op-navy/90">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      
                      {/* Challenges */}
                      <div className="bg-op-red/5 border border-op-red/15 rounded-xl p-4 space-y-2">
                        <div className="flex items-center gap-1.5 text-[9px] font-black text-op-red uppercase tracking-widest">
                          <HelpCircle className="w-3.5 h-3.5" />
                          <span>The Challenge</span>
                        </div>
                        <p className="text-xs leading-relaxed text-op-navy/90">
                          {selectedProject.challenges}
                        </p>
                      </div>

                      {/* Lessons Learned */}
                      <div className="bg-op-ocean/5 border border-op-ocean/15 rounded-xl p-4 space-y-2">
                        <div className="flex items-center gap-1.5 text-[9px] font-black text-op-ocean uppercase tracking-widest">
                          <Award className="w-3.5 h-3.5" />
                          <span>Lessons Learned</span>
                        </div>
                        <p className="text-xs leading-relaxed text-op-navy/90">
                          {selectedProject.lessons}
                        </p>
                      </div>

                    </div>

                    {/* Future Roadmap / Improvements */}
                    <div className="bg-op-gold/5 border border-op-gold/20 rounded-xl p-4 space-y-2">
                      <div className="flex items-center gap-1.5 text-[9px] font-black text-op-gold uppercase tracking-widest">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Future Horizon Roadmap</span>
                      </div>
                      <p className="text-xs leading-relaxed text-op-navy/95">
                        {selectedProject.improvements}
                      </p>
                    </div>

                  </div>
                ) : (
                  /* TAB 2: System Architecture blueprint content */
                  <div className="space-y-6">
                    
                    {/* System layout description */}
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-mono font-bold tracking-widest text-op-brown uppercase">Architecture Overview</h4>
                      <p className="text-sm leading-relaxed text-op-navy/90">
                        {selectedProject.architecture}
                      </p>
                    </div>

                    {/* Visual pipeline flowchart block */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-[10px] font-mono font-bold tracking-widest text-op-brown uppercase">Engineering System Pipeline</h4>
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 bg-op-navy/5 border border-op-brown/15 rounded-2xl p-4 text-[10px] font-mono text-op-navy relative overflow-hidden">
                        
                        {selectedProject.pipeline.map((step, idx) => (
                          <React.Fragment key={step}>
                            <div className="px-3 py-1.5 rounded-lg bg-[#fffcf5] border border-op-brown/30 font-bold shadow-sm text-center shrink-0 w-full sm:w-auto">
                              {step}
                            </div>
                            {idx < selectedProject.pipeline.length - 1 && (
                              <span className="text-op-gold font-bold text-center rotate-90 sm:rotate-0">➔</span>
                            )}
                          </React.Fragment>
                        ))}

                      </div>
                    </div>

                    {/* Telemetry Metrics board */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-[10px] font-mono font-bold tracking-widest text-op-brown uppercase">Telemetry & Core stats</h4>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="p-3 rounded-xl bg-op-navy/5 border border-op-brown/15">
                          <span className="text-[8px] font-bold tracking-wider text-op-navy/60 uppercase block">Project Status</span>
                          <span className="text-xs font-bold text-op-navy flex items-center gap-1.5 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-op-gold animate-pulse" />
                            <span>{selectedProject.stats.status}</span>
                          </span>
                        </div>
                        {selectedProject.stats.accuracy && (
                          <div className="p-3 rounded-xl bg-op-navy/5 border border-op-brown/15">
                            <span className="text-[8px] font-bold tracking-wider text-op-navy/60 uppercase block">Accuracy Rating</span>
                            <span className="text-xs font-bold text-op-red block mt-0.5">{selectedProject.stats.accuracy}</span>
                          </div>
                        )}
                        <div className="p-3 rounded-xl bg-op-navy/5 border border-op-brown/15 col-span-1">
                          <span className="text-[8px] font-bold tracking-wider text-op-navy/60 uppercase block">Engine Speed</span>
                          <span className="text-xs font-bold text-op-ocean block mt-0.5">{selectedProject.stats.extra}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                )}

                {/* Categorized Tech Stack Tags */}
                <div className="space-y-3 pt-4 border-t border-op-brown/15">
                  <h4 className="text-[10px] font-mono font-bold tracking-widest text-op-brown uppercase">Voyager Inventory Stacks</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {Object.entries(selectedProject.techStack).map(([category, items]) => (
                      <div key={category} className="space-y-1.5">
                        <span className="text-[9px] font-semibold tracking-wider text-op-navy/60 uppercase">{category}</span>
                        <div className="flex flex-wrap gap-1.5">
                          {items?.map((item: string) => (
                            <span
                              key={item}
                              className="px-2 py-0.5 rounded bg-op-brown/10 border border-op-brown/20 text-[10px] font-semibold text-op-brown font-mono"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}

                  </div>
                </div>

              </div>

              {/* Modal Footer (Action Buttons) */}
              <div className="p-6 sm:p-8 border-t border-op-brown/15 bg-op-brown/5 flex flex-col sm:flex-row gap-3 relative z-10 font-sans">
                
                {/* Repository Link */}
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-op-navy border border-op-gold/35 text-op-parchment font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-op-navy/80 hover:border-op-gold/60 hover:shadow-md hover:scale-[1.01]"
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub Port</span>
                </a>

                {/* Live Demo Link */}
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-op-navy border border-op-gold/35 text-op-parchment font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-op-navy/80 hover:border-op-gold/60 hover:shadow-md hover:scale-[1.01]"
                >
                  <ExternalLink className="w-4 h-4 text-op-gold" />
                  <span>Live Demo</span>
                </a>

                {/* Architecture blueprint toggle shortcut */}
                <button
                  onClick={() => setActiveTab(activeTab === 'arch' ? 'log' : 'arch')}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-op-navy/35 border border-op-gold/35 text-op-parchment/90 font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-op-navy/55 hover:border-op-gold/60 hover:text-op-parchment hover:scale-[1.01]"
                >
                  <ShipWheelIcon className="w-4 h-4 text-op-gold/80" />
                  <span>{activeTab === 'arch' ? "Details log" : "System blueprint"}</span>
                </button>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  )
}
