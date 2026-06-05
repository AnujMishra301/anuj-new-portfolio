import { motion } from 'framer-motion'
import { Terminal, Lightbulb, BookOpen, PenTool, Film, Landmark } from 'lucide-react'

interface CardItem {
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
  color: string
}

export default function About() {
  const cards: CardItem[] = [
    {
      icon: <Terminal className="w-6 h-6 text-accent" />,
      title: "Engineering Mindset",
      subtitle: "Systems & Optimization",
      description: "Obsessed with latency, design patterns, and low-level performance. Approaching software as a structural discipline where architecture, scale, and safety dictate the developer's duty.",
      color: "from-sky-500/10 to-blue-500/5",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
      title: "Inexhaustible Curiosity",
      subtitle: "Continuous Discovery",
      description: "Driven by the 'why' of complex configurations. Investigating machine learning mechanics, compiler internals, cryptography protocols, and structural algorithm limits.",
      color: "from-yellow-500/10 to-amber-500/5",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-emerald-400" />,
      title: "World Literature",
      subtitle: "The Anatomy of Narrative",
      description: "Drawn to the deep prose of classic Russian realism, moral philosophy essays, and global fiction. Analyzing how authors script complexity, characters, and human values.",
      color: "from-emerald-500/10 to-teal-500/5",
    },
    {
      icon: <PenTool className="w-6 h-6 text-purple-400" />,
      title: "Reflective Writing",
      subtitle: "Beyond Source Files",
      description: "Penning essays and explanations where pure code fails to articulate. Writing helps debug thought patterns, archive technical milestones, and catalog philosophies.",
      color: "from-purple-500/10 to-indigo-500/5",
    },
    {
      icon: <Film className="w-6 h-6 text-rose-400" />,
      title: "Cinema & Vision",
      subtitle: "Visual Storytelling",
      description: "Fascinated by auteur directors, visual pacing, screen composition, and screenplay motifs. Appreciating how visual motifs frame scale and atmosphere.",
      color: "from-rose-500/10 to-red-500/5",
    },
    {
      icon: <Landmark className="w-6 h-6 text-indigo-400" />,
      title: "History of Ideas",
      subtitle: "Chronicle of Systems",
      description: "Exploring history to examine how past technology shifts, political institutions, and systemic structures evolved to shape today's engineering platforms.",
      color: "from-indigo-500/10 to-blue-500/5",
    },
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
    <section id="about" className="relative bg-background py-24 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-text/5">
      {/* Subtle glow layer */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
          >
            More Than <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">A Developer</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted text-base md:text-lg leading-relaxed"
          >
            Building software is a trade, but exploring the human and systemic models behind it is a lifetime pursuit. Here are the lenses through which I see the world.
          </motion.p>
        </div>

        {/* Cards Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`relative overflow-hidden rounded-2xl bg-surface/30 backdrop-blur-xl border border-text/10 p-6 flex flex-col justify-between hover:border-accent/25 hover:shadow-2xl hover:shadow-accent/5 hover:scale-[1.02] transition-all duration-300 group`}
            >
              {/* Highlight background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="space-y-4 relative z-10">
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-surface border border-text/10 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-accent/20 transition-all duration-300">
                  {card.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors duration-300">
                    {card.title}
                  </h3>
                  <div className="text-xs font-semibold text-muted uppercase tracking-wider">
                    {card.subtitle}
                  </div>
                </div>

                <p className="text-muted text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Action decoration */}
              <div className="w-full h-1 bg-gradient-to-r from-accent/0 via-accent/30 to-purple-400/0 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
