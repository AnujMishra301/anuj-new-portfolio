import { motion } from 'framer-motion'
import { FileText, ArrowUpRight, Code, Cpu, Sparkles } from 'lucide-react'
import { Github, Linkedin } from '../components/Icons'
import { github, linkedin, resume } from '../data/socialLinks'

export default function Hero() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-4 sm:px-6 md:px-12 py-24 sm:py-32">
      
      {/* Background Grid - Linear/Vercel inspired */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-60 pointer-events-none" />

      {/* Floating Ambient Gradients - Stripe inspired */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sky blue accent sphere */}
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.12, 0.92, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[12%] left-[10%] w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] bg-accent/10 rounded-full blur-[110px]"
        />
        {/* Purple/Indigo sphere */}
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-purple-600/10 rounded-full blur-[120px]"
        />
        {/* Deep blue/royal indigo sphere */}
        <motion.div
          animate={{
            x: [0, 30, -40, 0],
            y: [0, 40, -30, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[35%] right-[25%] w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] bg-blue-600/10 rounded-full blur-[100px]"
        />
      </div>

      {/* Main Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center space-y-12 sm:space-y-16"
      >
        <div className="space-y-6 sm:space-y-8 flex flex-col items-center">
          {/* Status pill badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/50 border border-text/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-md text-xs font-semibold text-accent"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>Systems & Software</span>
          </motion.div>

          {/* Typography Headline & Subheadline */}
          <div className="space-y-6">
            <motion.h1
              variants={itemVariants}
              className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-none bg-gradient-to-b from-white via-white to-text/30 bg-clip-text text-transparent filter drop-shadow-sm pb-2"
            >
              Anuj Mishra
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center text-lg sm:text-xl md:text-2xl font-medium text-muted/90"
            >
              <div className="flex items-center gap-2.5 group hover:text-accent transition-colors duration-300 cursor-default">
                <Code className="w-5 h-5 text-accent shrink-0" />
                <span className="whitespace-nowrap">I build software.</span>
              </div>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-text/15" />
              <div className="flex items-center gap-2.5 group hover:text-indigo-400 transition-colors duration-300 cursor-default">
                <Cpu className="w-5 h-5 text-indigo-400 shrink-0" />
                <span className="whitespace-nowrap">I study systems.</span>
              </div>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-text/15" />
              <div className="flex items-center gap-2.5 group hover:text-pink-400 transition-colors duration-300 cursor-default">
                <Sparkles className="w-5 h-5 text-pink-400 shrink-0" />
                <span className="font-serif italic whitespace-nowrap">I write when code isn't enough.</span>
              </div>
            </motion.div>
          </div>

          {/* Elegant short bio */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-muted text-base sm:text-lg md:text-xl leading-relaxed font-normal px-4"
          >
            A computer science student synthesizing performant backend engineering, low-level compilation, algorithms, classic literature, and historical ideas.
          </motion.p>
        </div>

        {/* Buttons: Resume, GitHub, LinkedIn */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 w-full"
        >
          {/* Resume Button */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-background font-bold text-sm transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:scale-[1.02]"
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
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-surface/50 backdrop-blur-md border border-text/10 font-bold text-sm transition-all duration-300 hover:bg-surface hover:border-text/25 hover:scale-[1.02]"
          >
            <Github className="w-4 h-4 text-text" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn Button */}
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-surface/50 backdrop-blur-md border border-text/10 font-bold text-sm transition-all duration-300 hover:bg-surface hover:border-text/25 hover:scale-[1.02]"
          >
            <Linkedin className="w-4 h-4 text-[#0077b5]" />
            <span>LinkedIn</span>
          </a>
        </motion.div>

        {/* Showcase Bento Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-16 border-t border-text/5"
        >
          {/* Card 1: Software */}
          <div className="group relative rounded-2xl bg-surface/20 hover:bg-surface/35 border border-text/5 hover:border-accent/20 p-8 flex flex-col justify-between hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(56,189,248,0.04)] transition-all duration-500 text-left">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/15 flex items-center justify-center text-accent group-hover:bg-accent/10 transition-colors duration-300">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors duration-300">Software Engine</h3>
              <p className="text-sm text-muted leading-relaxed">
                Designing resilient backend architectures, compiler utilities, and responsive user interfaces. Focus on clean code design patterns and robust APIs.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-text/5 flex flex-wrap gap-1.5">
              {['Go', 'Node.js', 'Postgres', 'Docker'].map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 rounded bg-surface/50 text-[10px] font-mono text-muted border border-text/5">{tech}</span>
              ))}
            </div>
          </div>

          {/* Card 2: Systems */}
          <div className="group relative rounded-2xl bg-surface/20 hover:bg-surface/35 border border-text/5 hover:border-purple-500/20 p-8 flex flex-col justify-between hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(168,85,247,0.04)] transition-all duration-500 text-left">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/5 border border-purple-500/15 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/10 transition-colors duration-300">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-text group-hover:text-purple-400 transition-colors duration-300">Systems Core</h3>
              <p className="text-sm text-muted leading-relaxed">
                Exploring compiler internals, Abstract Syntax Trees (ASTs), logic models, and algorithms. Focus on high-fidelity computing internals and performance.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-text/5 flex flex-wrap gap-1.5">
              {['C++', 'Python', 'AST Parsers', 'NLP'].map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 rounded bg-surface/50 text-[10px] font-mono text-muted border border-text/5">{tech}</span>
              ))}
            </div>
          </div>

          {/* Card 3: Writing */}
          <div className="group relative rounded-2xl bg-surface/20 hover:bg-surface/35 border border-text/5 hover:border-pink-500/20 p-8 flex flex-col justify-between hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(236,72,153,0.04)] transition-all duration-500 text-left">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-pink-500/5 border border-pink-500/15 flex items-center justify-center text-pink-400 group-hover:bg-pink-500/10 transition-colors duration-300">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-text group-hover:text-pink-400 transition-colors duration-300">Creative Synthesis</h3>
              <p className="text-sm text-muted leading-relaxed">
                Synthesizing technical engineering with prose, modern classics, cinematic theory, history, and politics. Exploring the synthesis of code and humanities.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-text/5 flex flex-wrap gap-1.5">
              {['Prose', 'Literature', 'Cinema', 'History'].map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 rounded bg-surface/50 text-[10px] font-mono text-muted border border-text/5">{tech}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
