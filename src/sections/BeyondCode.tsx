import { motion } from 'framer-motion'
import { BookOpen, PenTool, Film, Clock, Scale, Cpu, Sparkles, Quote } from 'lucide-react'

interface InterestItem {
  title: string
  icon: React.ReactNode
  description: string
  accent: 'blue' | 'purple' | 'green' | 'rose' | 'amber' | 'cyan'
  glowClass: string
}

export default function BeyondCode() {
  const interests: InterestItem[] = [
    {
      title: "Literature",
      icon: <BookOpen className="w-5 h-5 text-emerald-400" />,
      accent: "green",
      glowClass: "hover:border-emerald-500/30 hover:shadow-emerald-500/5",
      description: "Diving into classic novels, translations, and moral philosophy to observe how language shapes empathy, ideas, and human complexity.",
    },
    {
      title: "Writing",
      icon: <PenTool className="w-5 h-5 text-purple-400" />,
      accent: "purple",
      glowClass: "hover:border-purple-500/30 hover:shadow-purple-500/5",
      description: "Expressing thoughts through essays, notes, and technical articles. Writing serves as a canvas to organize complex layouts of logic.",
    },
    {
      title: "Cinema",
      icon: <Film className="w-5 h-5 text-rose-400" />,
      accent: "rose",
      glowClass: "hover:border-rose-500/30 hover:shadow-rose-500/5",
      description: "Analyzing scene composition, screenwriting structures, and directorial styles. Viewing cinema as a study in observation.",
    },
    {
      title: "History",
      icon: <Clock className="w-5 h-5 text-blue-400" />,
      accent: "blue",
      glowClass: "hover:border-blue-500/30 hover:shadow-blue-500/5",
      description: "Examining historical cycles, the birth of computing systems, and institutional shifts to map how today's paradigms took shape.",
    },
    {
      title: "Politics",
      icon: <Scale className="w-5 h-5 text-amber-400" />,
      accent: "amber",
      glowClass: "hover:border-amber-500/30 hover:shadow-amber-500/5",
      description: "Understanding governing frameworks, resource structures, and the systemic laws that dictate modern societal development.",
    },
    {
      title: "Technology",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      accent: "cyan",
      glowClass: "hover:border-cyan-500/30 hover:shadow-cyan-500/5",
      description: "Interpreting technology not just as code, but as a lever of human leverage, cultural shift, and civilization-scale progress.",
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
            Ideas, stories, history, cinema and curiosity.
          </motion.p>
        </div>

        {/* Bento Grid */}
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
            className="relative overflow-hidden rounded-2xl bg-surface/30 backdrop-blur-xl border border-accent/20 hover:border-accent/40 shadow-2xl p-8 flex flex-col justify-between hover:scale-[1.01] hover:shadow-accent/5 transition-all duration-300 md:col-span-2 group"
          >
            {/* Soft backdrop glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-purple-500/5 to-transparent pointer-events-none" />

            <div className="space-y-6 relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-surface border border-accent/20 flex items-center justify-center group-hover:border-accent/35 transition-colors duration-300">
                    <Film className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold">
                      Featured Catalyst
                    </span>
                    <h3 className="text-2xl font-black text-text tracking-tight group-hover:text-accent transition-colors duration-300">
                      Satyajit Ray
                    </h3>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-text/5 group-hover:text-accent/10 transition-colors duration-300" />
              </div>

              <p className="text-muted text-base sm:text-lg leading-relaxed text-left max-w-xl">
                Filmmaker whose work shaped my appreciation for observation, simplicity and storytelling. His humanistic cinema serves as a blueprint for looking closely at the details of human interactions.
              </p>

              <div className="flex items-center gap-2 text-xs font-semibold font-mono text-accent/80 group-hover:text-accent transition-colors duration-300">
                <span>OBSERVATION // SIMPLICITY // STORYTELLING</span>
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
              className={`relative overflow-hidden rounded-2xl bg-surface/30 backdrop-blur-xl border border-text/10 p-6 flex flex-col justify-between hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 group ${item.glowClass}`}
            >
              {/* Radial Highlight Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-4 relative z-10 flex flex-col justify-between h-full">
                
                {/* Header row */}
                <div className="flex items-center gap-3 border-b border-text/5 pb-3">
                  <div className="w-9 h-9 rounded-lg bg-surface border border-text/10 flex items-center justify-center group-hover:border-accent/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-text group-hover:text-accent transition-colors duration-300 text-left">
                    {item.title}
                  </h3>
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
        <div className="pt-10 border-t border-text/5 space-y-6 max-w-4xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg font-bold text-text tracking-wider uppercase font-mono text-center md:text-left"
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
                className="px-4 py-2 rounded-xl bg-surface/40 backdrop-blur-md border border-text/10 text-sm font-semibold text-muted hover:text-accent hover:border-accent/20 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 cursor-default"
              >
                {topic}
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
