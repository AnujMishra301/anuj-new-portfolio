import { motion } from 'framer-motion'

interface ManifestoItem {
  index: string
  statement: string
  subtext: string
  color: string
}

export default function Manifesto() {
  const items: ManifestoItem[] = [
    {
      index: "01",
      statement: "Algorithms teach precision.",
      subtext: "Code demands absolute logical rigor. Writing algorithms molds the mind to think structurally, optimize resources, and respect edge cases.",
      color: "from-sky-500/10 via-blue-500/5 to-transparent",
    },
    {
      index: "02",
      statement: "Literature teaches empathy.",
      subtext: "To read widely is to step into foreign lives. Literature expands our internal maps, teaching us to understand conflicting human motivations.",
      color: "from-emerald-500/10 via-teal-500/5 to-transparent",
    },
    {
      index: "03",
      statement: "Cinema teaches observation.",
      subtext: "Frames and cuts capture texture, sound, and stillness. Cinema refines the eye to look closely, find details, and appreciate visual composition.",
      color: "from-rose-500/10 via-red-500/5 to-transparent",
    },
    {
      index: "04",
      statement: "History teaches perspective.",
      subtext: "Everything is a continuation. History maps the rise and fall of systems, reminding us that present paradigms are fluid, not fixed.",
      color: "from-indigo-500/10 via-purple-500/5 to-transparent",
    },
    {
      index: "05",
      statement: "Curiosity compounds.",
      subtext: "Knowledge is a network, not a set of buckets. Interest in diverse topics feeds back into engineering, creating non-linear breakthroughs.",
      color: "from-yellow-500/10 via-amber-500/5 to-transparent",
    },
    {
      index: "06",
      statement: "Great software comes from understanding people.",
      subtext: "Systems are operated by, built for, and engineered by humans. High-performance logic is only useful if it solves real human challenges.",
      color: "from-purple-500/10 via-fuchsia-500/5 to-transparent",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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
    <section id="manifesto" className="relative bg-background py-24 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-text/5">
      {/* Background Radial Glow */}
      <div className="absolute bottom-[10%] right-[30%] w-[500px] h-[300px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-text/10 text-xs font-semibold text-accent tracking-wider uppercase"
          >
            Philosophy
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
          >
            The <span className="bg-gradient-to-r from-accent via-indigo-400 to-purple-400 bg-clip-text text-transparent">Manifesto</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-base md:text-lg leading-relaxed"
          >
            A set of tenets guiding how I solve problems, learn technologies, and contextualize software systems.
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
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-2xl bg-surface/30 backdrop-blur-xl border border-text/10 p-8 flex flex-col justify-between hover:border-accent/25 hover:shadow-2xl hover:shadow-accent/5 hover:scale-[1.02] transition-all duration-300 group`}
            >
              {/* Radial Highlight Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="space-y-6 relative z-10 flex flex-col justify-between h-full">
                
                {/* Header Row: Index number */}
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs font-bold tracking-wider text-accent group-hover:text-text transition-colors duration-300">
                    MANIFESTO // {item.index}
                  </span>
                  <span className="text-3xl font-black font-mono text-text/5 group-hover:text-accent/10 transition-colors duration-300">
                    {item.index}
                  </span>
                </div>

                {/* Tenet Statement */}
                <h3 className="text-xl sm:text-2xl font-black text-text tracking-tight group-hover:text-accent transition-colors duration-300">
                  {item.statement}
                </h3>

                {/* Tenet Subtext description */}
                <p className="text-muted text-sm sm:text-base leading-relaxed">
                  {item.subtext}
                </p>
              </div>

              {/* Bottom decorative highlight line */}
              <div className="w-full h-1 bg-gradient-to-r from-accent/0 via-accent/30 to-purple-400/0 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
