import { motion } from 'framer-motion'
import { BookOpen, PenTool, Film, Clock, Scale, Cpu, Sparkles, Quote } from 'lucide-react'

interface InterestItem {
  index: string
  title: string
  icon: React.ReactNode
  description: string
  accent: 'emerald' | 'purple' | 'rose' | 'blue' | 'amber' | 'cyan'
  accentGlow: string
  gridClass: string
}

export default function BeyondCode() {
  const interests: InterestItem[] = [
    {
      index: "01",
      title: "Literature",
      icon: <BookOpen className="w-5 h-5 text-emerald-400" />,
      accent: "emerald",
      accentGlow: "hover:border-emerald-500/30 hover:shadow-emerald-500/5",
      gridClass: "lg:col-span-1",
      description: "An exploration of classic novels, existential philosophy, and translation theory. Delving into the written word to analyze how narratives construct human empathy, structural logic, and social codes.",
    },
    {
      index: "02",
      title: "Writing",
      icon: <PenTool className="w-5 h-5 text-purple-400" />,
      accent: "purple",
      accentGlow: "hover:border-purple-500/30 hover:shadow-purple-500/5",
      gridClass: "lg:col-span-1",
      description: "Articulating ideas through structured essays and analytical notes. Writing functions as an execution compile of complex internal states, translating scattered logic into clear, readable concepts.",
    },
    {
      index: "03",
      title: "Cinema",
      icon: <Film className="w-5 h-5 text-rose-400" />,
      accent: "rose",
      accentGlow: "hover:border-rose-500/30 hover:shadow-rose-500/5",
      gridClass: "lg:col-span-1",
      description: "An investigation of visual syntax, framing geometry, and narrative pacing. Studying screenplay architectures and scene compositions as deliberate acts of spatial and behavioral observation.",
    },
    {
      index: "04",
      title: "History",
      icon: <Clock className="w-5 h-5 text-blue-400" />,
      accent: "blue",
      accentGlow: "hover:border-blue-500/30 hover:shadow-blue-500/5",
      gridClass: "lg:col-span-1",
      description: "Tracing technological revolutions, systemic cycles, and structural evolutions. Studying the past to map how historical systems and policy networks dictate current civilization-scale pipelines.",
    },
    {
      index: "05",
      title: "Politics",
      icon: <Scale className="w-5 h-5 text-amber-400" />,
      accent: "amber",
      accentGlow: "hover:border-amber-500/30 hover:shadow-amber-500/5",
      gridClass: "lg:col-span-1",
      description: "Analyzing governance frameworks, institutional power grids, and resources distribution laws. Exploring the systemic engines that dictate cooperation, conflict, and societal infrastructure.",
    },
    {
      index: "06",
      title: "Technology",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      accent: "cyan",
      accentGlow: "hover:border-cyan-500/30 hover:shadow-cyan-500/5",
      gridClass: "lg:col-span-3",
      description: "Viewing code not merely as static logic, but as an active lever of human leverage, computational scaling, and cultural transformation that redraws the boundaries of human capacity and progress.",
    },
  ]

  const topics = [
    "Technology",
    "History",
    "Politics",
    "Civilizations",
    "Human Behaviour",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  const badgeGlows = {
    emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    purple: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    rose: "bg-rose-500/10 border-rose-500/20 text-rose-400",
    blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    amber: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  }

  return (
    <section id="beyondcode" className="relative bg-background py-24 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-text/5">
      {/* Background radial glow */}
      <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[135px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-text/10 text-xs font-semibold text-accent tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Perspectives</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
          >
            Beyond <span className="bg-gradient-to-r from-accent via-indigo-400 to-purple-400 bg-clip-text text-transparent">Code</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-base md:text-lg leading-relaxed"
          >
            Ideas, stories, history, cinema and intellectual curiosity.
          </motion.p>
        </div>

        {/* Bento Magazine Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Featured Card: Satyajit Ray */}
          <motion.div
            variants={cardVariants}
            className="relative overflow-hidden rounded-3xl bg-surface/35 backdrop-blur-2xl border border-accent/20 hover:border-accent/40 shadow-2xl p-8 sm:p-10 flex flex-col justify-between hover:scale-[1.01] hover:shadow-accent/5 transition-all duration-500 lg:col-span-2 lg:row-span-2 group min-h-[420px]"
          >
            {/* Soft backdrop glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-purple-500/5 to-transparent pointer-events-none" />

            <div className="space-y-8 relative z-10 flex flex-col h-full justify-between">
              
              {/* Header block */}
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0b1329]/90 border border-accent/20 flex items-center justify-center group-hover:border-accent/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Film className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-left space-y-0.5">
                    <span className="text-[9px] font-mono tracking-widest text-accent uppercase font-bold bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full">
                      Featured Catalyst
                    </span>
                    <h3 className="text-3xl font-black text-text tracking-tight group-hover:text-accent transition-colors duration-300 pt-1">
                      Satyajit Ray
                    </h3>
                  </div>
                </div>
                <Quote className="w-10 h-10 text-text/5 group-hover:text-accent/10 transition-colors duration-300" />
              </div>

              {/* Central cinematic quote block */}
              <div className="space-y-3 pl-4 border-l-2 border-accent/20 my-2">
                <p className="text-sm sm:text-base italic font-serif text-text/90 leading-relaxed text-left">
                  "The details of everyday life are what make a film true, what make a story breathe. Simplicity is the most difficult thing to secure."
                </p>
                <div className="text-[10px] font-mono text-muted tracking-wider text-left">
                  — SATYAJIT RAY // ON DESIGN & Restraint
                </div>
              </div>

              {/* Description statement */}
              <p className="text-muted text-sm sm:text-base leading-relaxed text-left max-w-xl">
                A legendary filmmaker, writer, and composer whose humanistic cinema shaped my outlook on observation, restraint, and composition. Ray's work acts as a system design blueprint: extracting profound meaning from raw human behavior and configuring simple layouts that prioritize storytelling clarity.
              </p>

              {/* Bottom tag indicators */}
              <div className="flex items-center gap-2 text-[10px] font-semibold font-mono tracking-widest text-accent/80 group-hover:text-accent transition-colors duration-300 uppercase">
                <span>Observation // Restraint // Simplicity</span>
              </div>
            </div>

            {/* Bottom highlight border decoration */}
            <div className="w-full h-1 bg-gradient-to-r from-accent/0 via-accent/30 to-purple-400/0 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
          </motion.div>

          {/* Render regular Interest Cards */}
          {interests.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`relative overflow-hidden rounded-3xl bg-surface/30 backdrop-blur-xl border border-text/10 p-8 flex flex-col justify-between hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 group ${item.accentGlow} ${item.gridClass}`}
            >
              {/* Radial Highlight Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Huge Background Index Number */}
              <span className="absolute bottom-2 right-4 text-7xl md:text-8xl font-black font-mono text-text/5 select-none pointer-events-none group-hover:text-accent/10 transition-colors duration-500">
                {item.index}
              </span>

              <div className="space-y-6 relative z-10 flex flex-col justify-between h-full">
                
                {/* Header row */}
                <div className="flex items-center justify-between border-b border-text/5 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0b1329]/90 border border-text/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-black text-text group-hover:text-accent transition-colors duration-300 text-left">
                      {item.title}
                    </h3>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[8px] font-mono tracking-wider border uppercase ${badgeGlows[item.accent]}`}>
                    Perspective
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed text-left flex-grow">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative highlight line */}
              <div className="w-full h-1 bg-gradient-to-r from-accent/0 via-accent/30 to-purple-400/0 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </motion.div>
          ))}
        </motion.div>

        {/* Topics I Think About section */}
        <div className="pt-12 border-t border-text/5 space-y-6 max-w-4xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-bold text-accent tracking-widest uppercase font-mono text-center md:text-left"
          >
            Topics I Think About
          </motion.h3>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-3"
          >
            {topics.map((topic, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 rounded-xl bg-surface/40 backdrop-blur-md border border-text/10 text-xs font-bold font-mono text-muted hover:text-accent hover:border-accent/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 cursor-default"
              >
                # {topic.toUpperCase()}
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
