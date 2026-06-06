import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, HelpCircle, ToggleLeft, Award, Activity, CheckCircle2, FileText, Terminal, Cpu, Sparkles } from 'lucide-react'

// Unused Project interface removed

export default function Projects() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const featuredFeatures = [
    "AI-generated code detection",
    "Human vs AI probability scoring",
    "Source code analysis",
    "Confidence scoring",
    "Detailed reporting dashboard",
    "Developer-friendly interface",
    "Continuous model improvement",
  ]

  const featuredTech = {
    Frontend: ["React", "TypeScript", "Tailwind CSS"],
    Backend: ["Node.js", "Express"],
    "AI / ML": ["Python", "Machine Learning", "Natural Language Processing"],
    Tools: ["Git", "GitHub"],
  }

  const portfolioFeatures = [
    "React 19 Component Architecture",
    "Strict-mode TypeScript Integration",
    "CSS-in-JS Tokens & Glassmorphism Theme",
    "Orchestrated Framer Motion micro-interactions",
    "Adaptive Mobile Viewports & Grid Scaling",
    "Spotlight Cursor Tracking & Interactive Bento Grid",
    "Interactive Visual Journey Timeline",
    "Live GitHub API Stats & Offline Fallbacks",
    "Dynamically Mounted Resume PDF Viewer",
    "Humanities Synthesis (Satyajit Ray Feature)",
    "Manifesto Grid & Dynamic Perspective Engine",
    "Active Progress Tracker Dashboard",
  ]

  const portfolioTech = {
    Core: ["React", "TypeScript", "Vite"],
    Styling: ["Tailwind CSS", "Framer Motion"],
    Integration: ["GitHub API", "Vercel"],
  }

  // Project elements rendered explicitly below in bento layout

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  return (
    <section id="projects" className="relative bg-background py-24 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-text/5">
      {/* Background soft glow */}
      <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-text/10 text-xs font-semibold text-accent tracking-wider uppercase"
          >
            Engineering Output
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
          >
            Featured <span className="bg-gradient-to-r from-accent via-indigo-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-base md:text-lg leading-relaxed"
          >
            Projects that reflect my journey through software engineering, problem solving, and building systems.
          </motion.p>
        </div>

        {/* Projects Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Card 1: Sentinel AI Flagship Project Card (Spans 2 columns on desktop) */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-2 relative group p-[2.5px] rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-500 via-indigo-500 via-purple-600 via-pink-500 to-cyan-400 bg-[length:200%_200%] animate-border-glow transition-all duration-500 shadow-[0_0_30px_rgba(56,189,248,0.1)] hover:shadow-[0_0_50px_rgba(56,189,248,0.25)] overflow-hidden"
            onMouseMove={handleMouseMove}
          >
            {/* Spotlight Effect Background overlay */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
              style={{
                background: `radial-gradient(800px circle at ${coords.x}px ${coords.y}px, rgba(56, 189, 248, 0.15), transparent 75%)`
              }}
            />

            {/* Animated Background Glow Sphere */}
            <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-accent/10 rounded-full blur-[90px] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

            {/* Inner Card Container */}
            <div className="relative rounded-[22px] bg-[#070b19]/98 backdrop-blur-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 text-left z-20 h-full">
              
              {/* Column 1: Title, Tagline, Problem statement */}
              <div className="space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-background font-black text-[9px] tracking-widest uppercase shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                      <Award className="w-3 h-3 animate-pulse" />
                      <span>★ FEATURED FLAGSHIP</span>
                    </span>
                  </div>

                  {/* Name & Tagline */}
                  <div className="space-y-2">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-text to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-purple-400 transition-all duration-500">
                      Sentinel AI
                    </h3>
                    <p className="text-muted text-xs sm:text-sm font-semibold leading-relaxed">
                      AI-powered code authenticity analysis and software trust platform.
                    </p>
                  </div>
                </div>

                {/* Problem Statement Card */}
                <div className="group/pillar bg-red-500/5 hover:bg-red-500/10 border border-red-500/10 hover:border-red-500/20 p-4 sm:p-5 rounded-2xl transition-all duration-300">
                  <div className="flex items-center gap-2 text-[10px] font-black text-red-400 uppercase tracking-widest mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>The Integrity Crisis</span>
                  </div>
                  <p className="text-muted group-hover/pillar:text-text/90 text-xs sm:text-sm leading-relaxed transition-colors duration-300">
                    Generative AI has blurred the lines of authorship. Academics face rampant plagiarism, hiring managers get hyper-inflated portfolios, and software companies risk license contamination from unverified third-party repositories.
                  </p>
                </div>
              </div>

              {/* Column 2: Key capabilities, Technical architecture flowchart, Stack badges */}
              <div className="space-y-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l lg:border-r border-text/5 pt-6 lg:pt-0 lg:px-6">
                
                {/* Capabilities */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase">Key Capabilities</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5 text-left">
                    {featuredFeatures.slice(0, 5).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-muted hover:text-text/90 transition-colors duration-300">
                        <span className="w-3.5 h-3.5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-[8px] font-bold text-accent mt-0.5 shrink-0">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Architecture Diagram */}
                <div className="space-y-3 pt-4 border-t border-text/5 text-left">
                  <h4 className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase">System Pipeline</h4>
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-1.5 bg-surface/50 border border-text/5 rounded-xl p-2.5 text-[8px] font-mono text-muted relative overflow-hidden">
                    <div className="flex flex-col items-center gap-0.5 group/node">
                      <span className="px-1 py-0.5 rounded bg-surface border border-text/10 text-text group-hover/node:border-accent/30 transition-all">Code</span>
                    </div>
                    <span className="text-accent/60">➔</span>
                    <div className="flex flex-col items-center gap-0.5 group/node">
                      <span className="px-1 py-0.5 rounded bg-surface border border-text/10 text-text group-hover/node:border-accent/30 transition-all">AST</span>
                    </div>
                    <span className="text-accent/60">➔</span>
                    <div className="flex flex-col items-center gap-0.5 group/node">
                      <span className="px-1 py-0.5 rounded bg-surface border border-text/10 text-text group-hover/node:border-accent/30 transition-all">NLP</span>
                    </div>
                    <span className="text-accent/60">➔</span>
                    <div className="flex flex-col items-center gap-0.5 group/node">
                      <span className="px-1 py-0.5 rounded bg-surface border border-text/10 text-text group-hover/node:border-accent/30 transition-all">Model</span>
                    </div>
                    <span className="text-accent/60">➔</span>
                    <div className="flex flex-col items-center gap-0.5 group/node">
                      <span className="px-1 py-0.5 rounded bg-accent/15 border border-accent/25 text-accent font-bold group-hover/node:scale-105 transition-all">Score</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="space-y-3 pt-4 border-t border-text/5 text-left">
                  <h4 className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase">Technology Stack</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-surface border border-text/10 text-[8px] font-mono font-semibold text-accent shrink-0 w-14 text-center">Frontend</span>
                      <div className="flex flex-wrap gap-0.5">
                        {featuredTech.Frontend.map((t) => (
                          <span key={t} className="px-1 py-0.5 rounded bg-surface/40 text-[8px] font-medium text-muted border border-text/5">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-surface border border-text/10 text-[8px] font-mono font-semibold text-indigo-400 shrink-0 w-14 text-center">Backend</span>
                      <div className="flex flex-wrap gap-0.5">
                        {featuredTech.Backend.map((t) => (
                          <span key={t} className="px-1 py-0.5 rounded bg-surface/40 text-[8px] font-medium text-muted border border-text/5">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-surface border border-text/10 text-[8px] font-mono font-semibold text-purple-400 shrink-0 w-14 text-center">AI / ML</span>
                      <div className="flex flex-wrap gap-0.5">
                        {featuredTech["AI / ML"].slice(0, 3).map((t) => (
                          <span key={t} className="px-1 py-0.5 rounded bg-surface/40 text-[8px] font-medium text-muted border border-text/5">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3: Impact, Status & Metrics dashboard, Project links */}
              <div className="space-y-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-text/5 pt-6 lg:pt-0 lg:pl-6">
                
                {/* Impact Statement Card */}
                <div className="group/pillar bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/10 hover:border-emerald-500/20 p-4 sm:p-5 rounded-2xl transition-all duration-300">
                  <div className="flex items-center gap-2 text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <Award className="w-3.5 h-3.5" />
                    <span>Ecosystem Trust</span>
                  </div>
                  <p className="text-emerald-300/90 group-hover/pillar:text-emerald-300 text-xs sm:text-sm leading-relaxed transition-colors duration-300">
                    Re-establishes trust in modern software repositories. Delivers verifiable integrity checks for academic portals, recruitment pipelines, and corporate supply chains.
                  </p>
                </div>

                {/* Status & Metrics Board */}
                <div className="space-y-3 pt-4 border-t border-text/5 text-left">
                  <h4 className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase">Project Status & Metrics</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-2 rounded-xl bg-surface/50 border border-text/5 space-y-0.5">
                      <span className="text-[7px] font-bold tracking-wider text-muted uppercase block">Dev Status</span>
                      <span className="text-[10px] font-bold text-text flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span>Active Beta</span>
                      </span>
                    </div>
                    <div className="p-2 rounded-xl bg-surface/50 border border-text/5 space-y-0.5">
                      <span className="text-[7px] font-bold tracking-wider text-muted uppercase block">Accuracy</span>
                      <span className="text-[10px] font-bold text-emerald-400">94.2% Class</span>
                    </div>
                    <div className="p-2 rounded-xl bg-surface/50 border border-text/5 col-span-2 space-y-0.5">
                      <span className="text-[7px] font-bold tracking-wider text-muted uppercase block">Future Roadmap</span>
                      <span className="text-[9px] text-muted leading-tight block">Cross-language AST checks & VSCode plugin extension</span>
                    </div>
                  </div>
                </div>

                {/* Action Link Buttons */}
                <div className="flex flex-col gap-2 pt-4 border-t border-text/5">
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/AnujMishra301/ai-code-detector"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-accent text-background font-bold text-[10px] transition-all hover:bg-accent/90 hover:scale-[1.01]"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>Repository</span>
                    </a>
                    <a
                      href="#"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-surface/80 border border-text/10 text-[10px] font-bold text-text transition-all hover:bg-surface hover:scale-[1.01]"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-accent" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                  <a
                    href="#casestudy"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-surface/30 border border-text/10 text-[10px] font-bold text-muted transition-all hover:bg-surface/50 opacity-75"
                  >
                    <span>Case Study</span>
                    <span className="text-[8px] font-mono tracking-wider bg-surface/60 border border-text/5 px-1.5 rounded uppercase text-accent ml-1.5">WIP</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: BlackBoxCV Project Card (Spans 1 column on desktop - Column 1 of Row 2) */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-1 relative overflow-hidden rounded-3xl bg-surface/35 backdrop-blur-2xl border border-blue-500/20 hover:border-blue-500/40 p-6 sm:p-8 flex flex-col justify-between text-left hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group"
          >
            {/* Soft backdrop glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-transparent pointer-events-none" />

            {/* Inner content wrapper - flex/grid */}
            <div className="flex flex-col md:flex-row gap-6 h-full justify-between">
              {/* Left Side: Header, Tagline, Problem/Solution/Impact */}
              <div className="flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  {/* Badges */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-wider bg-blue-500/10 border border-blue-500/20 text-blue-400 uppercase">
                      AI / NLP
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface border border-text/10 text-[9px] font-bold text-muted uppercase font-mono">
                      <Activity className="w-3 h-3 text-blue-400 animate-pulse" />
                      <span>Active Development</span>
                    </span>
                  </div>

                  {/* Name & Tagline */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-text tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                      BlackBoxCV
                    </h3>
                    <p className="text-muted text-xs font-semibold leading-relaxed">
                      NLP resume screening and ATS optimization platform.
                    </p>
                  </div>
                </div>

                {/* Problem, Solution, Impact Stack */}
                <div className="space-y-2.5 pt-4 border-t border-text/5">
                  {/* Problem */}
                  <div className="bg-red-500/5 border border-red-500/10 p-2.5 rounded-xl space-y-1">
                    <div className="flex items-center gap-1 px-1.5 text-[8px] font-bold text-red-400 uppercase tracking-widest">
                      <HelpCircle className="w-3 h-3 text-red-400" />
                      <span>Problem</span>
                    </div>
                    <p className="text-muted text-[10px] leading-relaxed pl-1.5">
                      Recruiter and ATS evaluation logics are opaque to job-seeking students.
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="bg-blue-500/5 border border-blue-500/10 p-2.5 rounded-xl space-y-1">
                    <div className="flex items-center gap-1 px-1.5 text-[8px] font-bold text-blue-400 uppercase tracking-widest">
                      <ToggleLeft className="w-3 h-3 text-blue-400" />
                      <span>Solution</span>
                    </div>
                    <p className="text-text/90 text-[10px] leading-relaxed pl-1.5">
                      Built an analyzer using semantic similarity and recruiter evaluation rules.
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="bg-emerald-500/5 border border-emerald-500/10 p-2.5 rounded-xl space-y-1">
                    <div className="flex items-center gap-1 px-1.5 text-[8px] font-bold text-emerald-400 uppercase tracking-widest">
                      <Award className="w-3 h-3 text-emerald-400" />
                      <span>Impact</span>
                    </div>
                    <p className="text-text/90 text-[10px] leading-relaxed font-semibold pl-1.5">
                      Provides resume feedback and optimizes semantic match scores.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: Capabilities, Tech Stack, Actions */}
              <div className="flex-1 flex flex-col justify-between space-y-4 md:border-l md:border-text/5 md:pl-6">
                {/* 2x2 Capabilities Grid */}
                <div className="space-y-2">
                  <h4 className="text-[9px] font-mono font-bold tracking-widest text-blue-400 uppercase">
                    Capabilities
                  </h4>
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="p-2 rounded-lg bg-surface/50 border border-text/5 flex items-center gap-1.5 hover:border-blue-500/20 transition-colors">
                      <FileText className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span className="text-[9px] text-muted font-medium leading-tight">Resume Analysis</span>
                    </div>
                    <div className="p-2 rounded-lg bg-surface/50 border border-text/5 flex items-center gap-1.5 hover:border-blue-500/20 transition-colors">
                      <Cpu className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span className="text-[9px] text-muted font-medium leading-tight">ATS Simulation</span>
                    </div>
                    <div className="p-2 rounded-lg bg-surface/50 border border-text/5 flex items-center gap-1.5 hover:border-blue-500/20 transition-colors">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="text-[9px] text-muted font-medium leading-tight">Semantic Match</span>
                    </div>
                    <div className="p-2 rounded-lg bg-surface/50 border border-text/5 flex items-center gap-1.5 hover:border-blue-500/20 transition-colors">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="text-[9px] text-muted font-medium leading-tight">Report Gen</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-[9px] font-mono font-bold tracking-widest text-blue-400 uppercase">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {["Python", "Streamlit", "Sentence Transformers", "NLP", "Scikit-Learn"].map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 rounded bg-surface/60 border border-text/5 text-[8px] font-semibold text-text hover:border-blue-500/30 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-1.5 pt-2 border-t border-text/5">
                  <a
                    href="https://github.com/AnujMishra301/BlackBoxCV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-surface/50 border border-text/10 text-[10px] font-bold text-text transition-all hover:bg-surface hover:border-text/20 hover:scale-[1.01]"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Repository</span>
                  </a>
                  <a
                    href="https://github.com/AnujMishra301/BlackBoxCV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-surface/30 border border-text/10 text-[10px] font-bold text-muted transition-all hover:bg-surface/50 opacity-75"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Real-Time Low Voltage Line Fault Detection System (Spans 1 column on desktop - Column 2 of Row 2) */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-1 relative overflow-hidden rounded-3xl bg-surface/35 backdrop-blur-2xl border border-emerald-500/20 hover:border-emerald-500/40 p-6 sm:p-8 flex flex-col justify-between text-left hover:scale-[1.01] hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500 group"
          >
            {/* Soft backdrop glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-green-500/5 to-transparent pointer-events-none" />

            {/* Inner content wrapper - flex/grid */}
            <div className="flex flex-col md:flex-row gap-6 h-full justify-between">
              {/* Left Side: Header, Tagline, Problem/Solution/Impact */}
              <div className="flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  {/* Badges */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-wider bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 uppercase">
                      IoT / Embedded Systems
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface border border-text/10 text-[9px] font-bold text-muted uppercase font-mono">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Completed</span>
                    </span>
                  </div>

                  {/* Name & Tagline */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-text tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
                      Fault Detection System
                    </h3>
                    <p className="text-muted text-xs font-semibold leading-relaxed">
                      Real-time low voltage power line fault detection and reporting.
                    </p>
                  </div>
                </div>

                {/* Problem, Solution, Impact Stack */}
                <div className="space-y-2.5 pt-4 border-t border-text/5">
                  {/* Problem */}
                  <div className="bg-red-500/5 border border-red-500/10 p-2.5 rounded-xl space-y-1">
                    <div className="flex items-center gap-1 px-1.5 text-[8px] font-bold text-red-400 uppercase tracking-widest">
                      <HelpCircle className="w-3 h-3 text-red-400" />
                      <span>Problem</span>
                    </div>
                    <p className="text-muted text-[10px] leading-relaxed pl-1.5">
                      Manual detection of line faults is dangerous, slow, and highly inefficient.
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="bg-blue-500/5 border border-blue-500/10 p-2.5 rounded-xl space-y-1">
                    <div className="flex items-center gap-1 px-1.5 text-[8px] font-bold text-blue-400 uppercase tracking-widest">
                      <ToggleLeft className="w-3 h-3 text-blue-400" />
                      <span>Solution</span>
                    </div>
                    <p className="text-text/90 text-[10px] leading-relaxed pl-1.5">
                      Engineered a NodeMCU IoT system that identifies and reports faults dynamically.
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="bg-emerald-500/5 border border-emerald-500/10 p-2.5 rounded-xl space-y-1">
                    <div className="flex items-center gap-1 px-1.5 text-[8px] font-bold text-emerald-400 uppercase tracking-widest">
                      <Award className="w-3 h-3 text-emerald-400" />
                      <span>Impact</span>
                    </div>
                    <p className="text-text/90 text-[10px] leading-relaxed font-semibold pl-1.5">
                      Reduced response and repair dispatch time from hours to under five seconds.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: Capabilities, Tech Stack, Actions */}
              <div className="flex-1 flex flex-col justify-between space-y-4 md:border-l md:border-text/5 md:pl-6">
                {/* 2x2 Capabilities Grid */}
                <div className="space-y-2">
                  <h4 className="text-[9px] font-mono font-bold tracking-widest text-emerald-400 uppercase">
                    Capabilities
                  </h4>
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="p-2 rounded-lg bg-surface/50 border border-text/5 flex items-center gap-1.5 hover:border-emerald-500/20 transition-colors">
                      <Activity className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="text-[9px] text-muted font-medium leading-tight">Real-Time Alert</span>
                    </div>
                    <div className="p-2 rounded-lg bg-surface/50 border border-text/5 flex items-center gap-1.5 hover:border-emerald-500/20 transition-colors">
                      <Cpu className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span className="text-[9px] text-muted font-medium leading-tight">Edge Detection</span>
                    </div>
                    <div className="p-2 rounded-lg bg-surface/50 border border-text/5 flex items-center gap-1.5 hover:border-emerald-500/20 transition-colors">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="text-[9px] text-muted font-medium leading-tight">Web Dashboard</span>
                    </div>
                    <div className="p-2 rounded-lg bg-surface/50 border border-text/5 flex items-center gap-1.5 hover:border-emerald-500/20 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span className="text-[9px] text-muted font-medium leading-tight">Auto Logging</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-[9px] font-mono font-bold tracking-widest text-emerald-400 uppercase">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {["C++", "NodeMCU", "HTML", "CSS", "JavaScript"].map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 rounded bg-surface/60 border border-text/5 text-[8px] font-semibold text-text hover:border-emerald-500/30 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-1.5 pt-2 border-t border-text/5">
                  <a
                    href="https://github.com/AnujMishra301/Fault-Detection-System-Low-Voltage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-surface/50 border border-text/10 text-[10px] font-bold text-text transition-all hover:bg-surface hover:border-text/20 hover:scale-[1.01]"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Repository</span>
                  </a>
                  <a
                    href="https://github.com/AnujMishra301/Fault-Detection-System-Low-Voltage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-surface/30 border border-text/10 text-[10px] font-bold text-muted transition-all hover:bg-surface/50 opacity-75"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Personal Portfolio Website Card (Spans 2 columns on desktop - Columns 2 & 3 of Row 2) */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-2 relative overflow-hidden rounded-3xl bg-surface/35 backdrop-blur-2xl border border-purple-500/20 hover:border-purple-500/40 p-8 sm:p-10 flex flex-col lg:flex-row gap-10 lg:gap-14 text-left hover:scale-[1.01] hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 group"
          >
            {/* Soft backdrop glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-fuchsia-500/5 to-transparent pointer-events-none" />

            {/* Left side: details, Problem/Solution, Actions */}
            <div className="flex-1 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Badges */}
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider bg-purple-500/10 border border-purple-500/20 text-purple-400 uppercase">
                    Personal Brand
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider bg-purple-500/10 border border-purple-500/20 text-purple-400 uppercase">
                    Frontend
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider bg-purple-500/10 border border-purple-500/20 text-purple-400 uppercase">
                    Design
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface border border-text/10 text-[10px] font-bold text-muted uppercase font-mono ml-auto">
                    <Activity className="w-3 h-3 text-purple-400 animate-pulse" />
                    <span>Active Development</span>
                  </span>
                </div>

                {/* Name & Tagline */}
                <div className="space-y-2">
                  <h3 className="text-3xl sm:text-4xl font-black text-text tracking-tight group-hover:text-accent transition-colors duration-300">
                    Personal Portfolio Website
                  </h3>
                  <p className="text-muted text-base font-semibold leading-relaxed">
                    High-fidelity personal branding platform and systems engineering showcase.
                  </p>
                </div>

                {/* Problem, Solution, Impact Blocks */}
                <div className="space-y-4 pt-4 border-t border-text/5">
                  {/* Problem */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-muted uppercase tracking-wider">
                      <HelpCircle className="w-3.5 h-3.5 text-red-400" />
                      <span>Problem</span>
                    </div>
                    <p className="text-muted text-sm leading-relaxed pl-5">
                      Traditional developer portfolios often isolate technical credentials, presenting code in a vacuum while decoupling an engineer's building capability from their cognitive values, systems philosophy, and broader intellectual profile.
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-muted uppercase tracking-wider">
                      <ToggleLeft className="w-3.5 h-3.5 text-accent" />
                      <span>Solution</span>
                    </div>
                    <p className="text-text text-sm leading-relaxed pl-5">
                      Engineered a high-fidelity personal branding platform and systems showcase. It synthesizes complex React architectures, strict TypeScript patterns, custom glassmorphism tokens, and cursor-aligned spotlight math with expressive storytelling panels that connect humanities (literature, cinema, history) to software engineering.
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-muted uppercase tracking-wider">
                      <Award className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Impact</span>
                    </div>
                    <p className="text-text/90 text-sm leading-relaxed font-semibold pl-5">
                      Establishes a singular professional identity. Instead of listing static assets, it demonstrates live systems integration (such as resilient API queries with cache-busting recovery and shimmer skeletons) and communicates the holistically minded builder behind the code.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-text/5">
                <a
                  href="https://github.com/AnujMishra301/anuj-new-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-surface/50 border border-text/10 text-xs font-bold transition-all duration-300 hover:bg-surface hover:border-text/20 hover:scale-[1.02]"
                >
                  <svg className="w-3.5 h-3.5 text-text fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>

                <a
                  href="/"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-surface/50 border border-text/10 text-xs font-bold transition-all duration-300 hover:bg-surface hover:border-text/20 hover:scale-[1.02] opacity-60 hover:opacity-100"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Website</span>
                </a>
              </div>
            </div>

            {/* Right side: Key Features & Technical categorization */}
            <div className="w-full lg:w-[45%] flex flex-col gap-6 justify-between border-t lg:border-t-0 lg:border-l border-text/5 pt-8 lg:pt-0 lg:pl-10 h-full">
              {/* Features List */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 text-left">
                  {portfolioFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-xs text-muted group-hover:text-text/90 transition-colors duration-300 leading-tight">
                      <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Bento categorization */}
              <div className="space-y-4 pt-6 border-t border-text/5">
                <h4 className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
                  Tech Architecture
                </h4>
                <div className="grid grid-cols-2 gap-4 text-left">
                  {Object.entries(portfolioTech).map(([category, items]) => (
                    <div key={category} className="space-y-2">
                      <span className="text-[10px] font-bold tracking-wider text-muted uppercase block">
                        {category}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {items.map((item, itemIdx) => (
                          <span 
                            key={itemIdx}
                            className="px-2 py-0.5 rounded bg-surface/60 border border-text/5 text-[10px] font-semibold text-text"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
