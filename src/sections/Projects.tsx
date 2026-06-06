import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, HelpCircle, ToggleLeft, Award, Activity, CheckCircle2, RefreshCw } from 'lucide-react'

interface Project {
  name: string
  category: string
  status: string
  statusType: 'active' | 'completed' | 'ongoing'
  problem: string
  solution: string
  impact: string
  techStack: string[]
  github: string
  external: string
  accent: 'blue' | 'green' | 'purple'
  accentGradients: string
}

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

  const projectsList: Project[] = [
    {
      name: "BlackBoxCV",
      category: "AI / NLP",
      status: "Active Development",
      statusType: "active",
      problem: "Most students do not understand how recruiters and ATS systems evaluate resumes.",
      solution: "Built an NLP-powered resume screening analyzer using semantic similarity scoring and recruiter-style evaluation logic.",
      impact: "Provides detailed resume feedback and helps users understand resume strengths and weaknesses.",
      techStack: ["Python", "Streamlit", "Sentence Transformers", "NLP", "Scikit-Learn"],
      github: "https://github.com/AnujMishra301/BlackBoxCV",
      external: "https://github.com/AnujMishra301/BlackBoxCV",
      accent: "blue",
      accentGradients: "from-blue-500/10 via-cyan-500/5 to-transparent",
    },
    {
      name: "Real-Time Low Voltage Line Fault Detection System",
      category: "IoT / Embedded Systems",
      status: "Completed",
      statusType: "completed",
      problem: "Manual detection of power line faults is slow and inefficient.",
      solution: "Built a NodeMCU-based fault detection system capable of identifying faults in real time.",
      impact: "Reduced fault identification time from hours to under five seconds.",
      techStack: ["C++", "NodeMCU", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/AnujMishra301/Fault-Detection-System-Low-Voltage",
      external: "https://github.com/AnujMishra301/Fault-Detection-System-Low-Voltage",
      accent: "green",
      accentGradients: "from-emerald-500/10 via-green-500/5 to-transparent",
    },
  ]

  const borderGlows = {
    blue: "hover:border-blue-500/30",
    green: "hover:border-emerald-500/30",
    purple: "hover:border-purple-500/30",
  }

  const getStatusIcon = (type: Project['statusType']) => {
    switch (type) {
      case 'active':
        return <Activity className="w-3.5 h-3.5 animate-pulse text-blue-400" />
      case 'completed':
        return <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
      case 'ongoing':
        return <RefreshCw className="w-3.5 h-3.5 text-purple-400" />
    }
  }

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
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
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
            <div className="relative rounded-[22px] bg-[#070b19]/98 backdrop-blur-2xl p-8 sm:p-10 flex flex-col lg:flex-row gap-10 lg:gap-14 text-left z-20 h-full">
              {/* Left side: Flagship details, Problem/Solution, Actions */}
              <div className="flex-1 space-y-6 flex flex-col justify-between">
                <div className="space-y-6">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-background font-black text-[10px] tracking-widest uppercase shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                      <Award className="w-3.5 h-3.5 animate-pulse" />
                      <span>★ FEATURED FLAGSHIP PROJECT</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-text/10 text-[10px] font-bold text-muted uppercase font-mono">
                      <Activity className="w-3.5 h-3.5 text-accent animate-pulse" />
                      <span>Active Development</span>
                    </span>
                  </div>

                  {/* Name & Tagline */}
                  <div className="space-y-3">
                    <h3 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-white via-text to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-purple-400 transition-all duration-500">
                      Sentinel AI
                    </h3>
                    <p className="text-muted text-lg sm:text-xl font-medium leading-relaxed">
                      AI-powered code authenticity analysis and software trust platform.
                    </p>
                  </div>

                  {/* Problem, Solution, Impact Blocks */}
                  <div className="space-y-5 pt-6 border-t border-text/5">
                    {/* Problem */}
                    <div className="group/pillar bg-red-500/5 hover:bg-red-500/10 border border-red-500/10 hover:border-red-500/20 p-5 rounded-2xl transition-all duration-300">
                      <div className="flex items-center gap-2 text-xs font-black text-red-400 uppercase tracking-widest mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                        <HelpCircle className="w-4 h-4" />
                        <span>The Author Integrity Crisis</span>
                      </div>
                      <p className="text-muted group-hover/pillar:text-text/90 text-sm sm:text-base leading-relaxed transition-colors duration-300">
                        The proliferation of generative AI has democratized coding but introduces an existential challenge: the erosion of code authorship verification. Academic institutions struggle with undetected plagiarism, recruiters face candidates with hyper-inflated technical portfolios, and software enterprises risk compliance violations, intellectual property contamination, and code license leakage.
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="group/pillar bg-accent/5 hover:bg-accent/10 border border-accent/10 hover:border-accent/20 p-5 rounded-2xl transition-all duration-300">
                      <div className="flex items-center gap-2 text-xs font-black text-accent uppercase tracking-widest mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                        <ToggleLeft className="w-4 h-4" />
                        <span>Ast-Driven Trust Engine</span>
                      </div>
                      <p className="text-text/95 group-hover/pillar:text-white text-sm sm:text-base leading-relaxed transition-colors duration-300">
                        Developed <span className="text-accent font-semibold">Sentinel AI</span>, a developer trust platform designed to verify code authenticity. Utilizing structural Abstract Syntax Tree (AST) comparisons, language model probability scoring, and advanced NLP classifiers, it maps code syntax entropy, token frequency anomalies, and lexical fingerprints to generate a granular authenticity index.
                      </p>
                    </div>

                    {/* Impact */}
                    <div className="group/pillar bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/10 hover:border-emerald-500/20 p-5 rounded-2xl transition-all duration-300">
                      <div className="flex items-center gap-2 text-xs font-black text-emerald-400 uppercase tracking-widest mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <Award className="w-4 h-4" />
                        <span>Verifiable Ecosystem Trust</span>
                      </div>
                      <p className="text-emerald-300/90 group-hover/pillar:text-emerald-300 text-sm sm:text-base leading-relaxed font-semibold transition-colors duration-300">
                        Re-establishes trust in the software ecosystem. It provides universities with verifiable academic integrity metrics, enables talent acquisition teams to run high-fidelity credential screens, and offers enterprises an automated compliance sentinel that guarantees clean code provenance and mitigates commercial IP liabilities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-text/5">
                  <a
                    href="https://github.com/AnujMishra301/ai-code-detector"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-background font-bold text-xs transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/10 hover:scale-[1.02]"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub Repository</span>
                  </a>
                  <a
                    href="#"
                    className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-surface/80 border border-text/10 text-xs font-bold text-text transition-all duration-300 hover:bg-surface hover:border-text/20 hover:scale-[1.02]"
                  >
                    <ExternalLink className="w-4 h-4 text-accent" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href="#casestudy"
                    className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-surface/40 border border-text/10 text-xs font-bold text-muted transition-all duration-300 hover:bg-surface/60 hover:text-text hover:scale-[1.02] opacity-75"
                  >
                    <span>Case Study</span>
                    <span className="text-[9px] font-mono tracking-wider bg-surface/80 border border-text/5 px-1.5 rounded uppercase text-accent ml-1.5">WIP</span>
                  </a>
                </div>
              </div>

              {/* Right side: Key Features & Technical categorization */}
              <div className="w-full lg:w-[45%] flex flex-col gap-6 justify-between border-t lg:border-t-0 lg:border-l border-text/5 pt-8 lg:pt-0 lg:pl-10 h-full">
                {/* Features List */}
                <div className="space-y-4">
                  <h4 className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
                    Key Capabilities
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 text-left">
                    {featuredFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted group-hover:text-text/90 transition-colors duration-300">
                        <span className="w-4 h-4 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-[9px] font-bold text-accent mt-0.5 shrink-0">
                          ✓
                        </span>
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
                    {Object.entries(featuredTech).map(([category, items]) => (
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
            </div>
          </motion.div>

          {/* Mapped standard projects (BlackBoxCV and Fault Detection System - Column 3 of Row 1 and Column 1 of Row 2) */}
          {projectsList.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`relative overflow-hidden rounded-2xl bg-surface/30 backdrop-blur-xl border border-text/10 p-6 flex flex-col justify-between hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 group ${borderGlows[project.accent]}`}
            >
              {/* Mesh Accent Highlights */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accentGradients} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              {/* Top Section */}
              <div className="space-y-6 relative z-10 text-left">
                {/* Meta details */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-surface border border-text/10 text-muted">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-surface border border-text/10 text-text">
                    {getStatusIcon(project.statusType)}
                    <span>{project.status}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-text tracking-tight group-hover:text-accent transition-colors duration-300">
                  {project.name}
                </h3>

                {/* Problem, Solution, Impact Blocks */}
                <div className="space-y-4 pt-2 border-t border-text/5">
                  {/* Problem */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-muted uppercase tracking-wider">
                      <HelpCircle className="w-3.5 h-3.5 text-red-400" />
                      <span>Problem</span>
                    </div>
                    <p className="text-muted text-sm leading-relaxed pl-5">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-muted uppercase tracking-wider">
                      <ToggleLeft className="w-3.5 h-3.5 text-accent" />
                      <span>Solution</span>
                    </div>
                    <p className="text-text text-sm leading-relaxed pl-5">
                      {project.solution}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-muted uppercase tracking-wider">
                      <Award className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Impact</span>
                    </div>
                    <p className="text-text/90 text-sm leading-relaxed font-semibold pl-5">
                      {project.impact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Section: Tech Stack & Actions */}
              <div className="space-y-6 pt-6 mt-6 border-t border-text/5 relative z-10 text-left">
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-0.5 rounded bg-surface text-[10px] sm:text-xs font-mono text-muted border border-text/5 hover:border-accent/10 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 w-full">
                  <a
                    href={project.github}
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
                    href={project.external}
                    target={project.external.startsWith('http') ? '_blank' : undefined}
                    rel={project.external.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-surface/50 border border-text/10 text-xs font-bold transition-all duration-300 hover:bg-surface hover:border-text/20 hover:scale-[1.02] opacity-60 hover:opacity-100"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{project.name === "Personal Portfolio Website" ? "Live Website" : "Demo"}</span>
                  </a>
                </div>
              </div>

              {/* Bottom hover highlight line decoration */}
              <div className="w-full h-1 bg-gradient-to-r from-accent/0 via-accent/30 to-purple-400/0 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </motion.div>
          ))}

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
