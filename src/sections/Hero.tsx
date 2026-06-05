import { motion } from 'framer-motion'
import { FileText, ArrowUpRight, Terminal, Code, Cpu, Sparkles } from 'lucide-react'
import { Github, Linkedin } from '../components/Icons'
import { github, linkedin, resume } from '../data/socialLinks'

export default function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-4 sm:px-6 md:px-12 py-16">
      
      {/* Background Grid - Linear/Vercel inspired */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      {/* Flowing Mesh Gradients - Stripe inspired */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sky blue accent sphere */}
        <motion.div
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -70, 50, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] left-[15%] w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] bg-accent/15 rounded-full blur-[90px]"
        />
        {/* Purple/Indigo sphere */}
        <motion.div
          animate={{
            x: [0, -80, 50, 0],
            y: [0, 80, -60, 0],
            scale: [1, 0.85, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[15%] right-[15%] w-[380px] h-[380px] sm:w-[450px] sm:h-[450px] bg-purple-600/10 rounded-full blur-[110px]"
        />
        {/* Deep blue/royal indigo sphere */}
        <motion.div
          animate={{
            x: [0, 40, -50, 0],
            y: [0, 50, -40, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[40%] right-[30%] w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] bg-blue-600/10 rounded-full blur-[100px]"
        />
      </div>

      {/* Main Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
      >
        {/* Left Column: Name, Headline, description, and actions */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8">
          
          {/* Status pill badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface border border-text/10 shadow-xl text-xs font-semibold text-accent"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Systems & Software Engineer</span>
          </motion.div>

          {/* Typography headers */}
          <div className="space-y-4">
            <motion.span
              variants={itemVariants}
              className="block text-sm md:text-base font-bold tracking-[0.2em] text-muted uppercase"
            >
              Anuj Mishra
            </motion.span>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15]"
            >
              <span className="block text-text">I build software.</span>
              <span className="block bg-gradient-to-r from-accent via-blue-400 to-purple-400 bg-clip-text text-transparent">I study systems.</span>
              <span className="block text-muted/80 text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 font-serif italic">
                I write when code isn't enough.
              </span>
            </motion.h1>
          </div>

          {/* Description Subtext */}
          <motion.p
            variants={itemVariants}
            className="max-w-lg text-muted text-base md:text-lg leading-relaxed"
          >
            Computer Science student exploring backend engineering, algorithms, AI, literature, cinema, and ideas.
          </motion.p>

          {/* Buttons: Resume, GitHub, LinkedIn */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full"
          >
            {/* Resume Button */}
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-background font-bold transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.02]"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* GitHub Button */}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface/50 backdrop-blur-md border border-text/10 font-bold transition-all duration-300 hover:bg-surface hover:border-text/20 hover:scale-[1.02]"
            >
              <Github className="w-4 h-4 text-text" />
              <span>GitHub</span>
            </a>

            {/* LinkedIn Button */}
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface/50 backdrop-blur-md border border-text/10 font-bold transition-all duration-300 hover:bg-surface hover:border-text/20 hover:scale-[1.02]"
            >
              <Linkedin className="w-4 h-4 text-[#0077b5]" />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Premium Terminal / Dashboard Mockup */}
        <motion.div
          variants={itemVariants}
          className="flex-1 w-full max-w-md lg:max-w-none"
        >
          <div className="relative w-full aspect-[4/3] rounded-2xl bg-surface/30 backdrop-blur-xl border border-text/10 shadow-2xl p-6 overflow-hidden group hover:border-accent/25 transition-colors duration-500">
            {/* Top Window Buttons */}
            <div className="flex items-center justify-between pb-4 border-b border-text/5">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted font-mono">
                <Terminal className="w-3.5 h-3.5 text-accent" />
                <span>anuj@systems-core ~ v4.0.0</span>
              </div>
            </div>

            {/* Simulated Live Console */}
            <div className="pt-5 font-mono text-xs md:text-sm space-y-4 text-left overflow-y-auto max-h-[85%] scrollbar-none">
              <div className="flex gap-2">
                <span className="text-accent">&gt;</span>
                <span className="text-text font-semibold">init profile</span>
              </div>
              <div className="text-muted flex items-start gap-2 pl-4">
                <Code className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                <span>Focus: Backend Systems, Low-level Optimization, Distributed Algorithms.</span>
              </div>
              <div className="flex gap-2">
                <span className="text-accent">&gt;</span>
                <span className="text-text font-semibold">inspect dependencies</span>
              </div>
              <div className="text-muted flex items-start gap-2 pl-4">
                <Cpu className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                <span>Go, Python, C++, React, TypeScript, Postgres, Docker, PyTorch.</span>
              </div>
              <div className="flex gap-2">
                <span className="text-accent">&gt;</span>
                <span className="text-text font-semibold">check system_status</span>
              </div>
              <div className="text-emerald-400 flex items-center gap-1.5 pl-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Operational. Ready to deploy software.</span>
              </div>
            </div>

            {/* Glowing Corner Gradients */}
            <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-accent/20 rounded-full blur-[50px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 w-[100px] h-[100px] bg-purple-500/20 rounded-full blur-[50px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
