import { motion } from 'framer-motion'
import { Brain, Cpu, Sparkles, BookOpen, PenTool, GitBranch } from 'lucide-react'

interface DashboardCard {
  title: string
  progress: number
  description: string
  icon: React.ReactNode
  status: string
  accent: 'blue' | 'emerald' | 'purple' | 'rose' | 'amber' | 'cyan'
  accentGlow: string
  barColor: string
}

export default function Dashboard() {
  const cards: DashboardCard[] = [
    {
      title: "Data Structures & Algorithms",
      progress: 85,
      description: "Solving complex algorithmic problems, optimizing execution complexities, and solidifying backend foundations.",
      icon: <Brain className="w-5 h-5 text-blue-400" />,
      status: "Active Practice",
      accent: "blue",
      accentGlow: "hover:border-blue-500/30 hover:shadow-blue-500/5",
      barColor: "bg-blue-500",
    },
    {
      title: "Backend Development",
      progress: 70,
      description: "Deep diving into Go scripting, database indexing, low-latency API architecture, and microservices.",
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      status: "Primary Focus",
      accent: "emerald",
      accentGlow: "hover:border-emerald-500/30 hover:shadow-emerald-500/5",
      barColor: "bg-emerald-500",
    },
    {
      title: "AI / ML Learning",
      progress: 50,
      description: "Studying PyTorch framework, sentence embedding transformers, NLP structures, and model validation.",
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      status: "Deep Exploration",
      accent: "purple",
      accentGlow: "hover:border-purple-500/30 hover:shadow-purple-500/5",
      barColor: "bg-purple-500",
    },
    {
      title: "Reading",
      progress: 60,
      description: "Engaging with classic world literature, Russian realism, systems papers, and political philosophy.",
      icon: <BookOpen className="w-5 h-5 text-rose-400" />,
      status: "Ongoing Pursuit",
      accent: "rose",
      accentGlow: "hover:border-rose-500/30 hover:shadow-rose-500/5",
      barColor: "bg-rose-500",
    },
    {
      title: "Writing",
      progress: 40,
      description: "Penning personal explainers, software architecture notes, and reflective essays on literature.",
      icon: <PenTool className="w-5 h-5 text-amber-400" />,
      status: "Archiving Milestones",
      accent: "amber",
      accentGlow: "hover:border-amber-500/30 hover:shadow-amber-500/5",
      barColor: "bg-amber-500",
    },
    {
      title: "Open Source",
      progress: 30,
      description: "Contributing to developer utilities, exploring repositories, and preparing for GSoC pipelines.",
      icon: <GitBranch className="w-5 h-5 text-cyan-400" />,
      status: "Initial Pipeline",
      accent: "cyan",
      accentGlow: "hover:border-cyan-500/30 hover:shadow-cyan-500/5",
      barColor: "bg-cyan-500",
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
    <section id="dashboard" className="relative bg-background py-24 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-text/5">
      {/* Background Radial Glow */}
      <div className="absolute top-[30%] left-[30%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[130px] pointer-events-none" />

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
            Metrics
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
          >
            Current <span className="bg-gradient-to-r from-accent via-indigo-400 to-purple-400 bg-clip-text text-transparent">Status</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-base md:text-lg leading-relaxed"
          >
            Areas I am actively working on.
          </motion.p>
        </div>

        {/* Bento Dashboard Grid */}
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
              className={`relative overflow-hidden rounded-2xl bg-surface/30 backdrop-blur-xl border border-text/10 p-6 flex flex-col justify-between hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 group ${card.accentGlow}`}
            >
              {/* Radial Highlight Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-6 relative z-10 flex flex-col h-full justify-between">
                
                {/* Header Row */}
                <div className="flex items-center justify-between border-b border-text/5 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-surface border border-text/10 flex items-center justify-center group-hover:border-accent/20 transition-colors duration-300">
                      {card.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-text group-hover:text-accent transition-colors duration-300 text-left">
                        {card.title}
                      </h3>
                      <p className="text-[10px] text-muted font-mono tracking-wider uppercase text-left">
                        {card.status}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed text-left flex-grow">
                  {card.description}
                </p>

                {/* Progress Indicators & Custom Animated Bar */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-text">
                    <span className="text-muted uppercase">Commitment</span>
                    <span className="text-accent">{card.progress}%</span>
                  </div>

                  {/* Progress Bar Track */}
                  <div className="w-full h-2 rounded-full bg-surface border border-text/10 overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${card.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className={`h-full rounded-full ${card.barColor} relative`}
                    >
                      {/* Bar pulse highlight overlay */}
                      <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_infinite]" />
                    </motion.div>
                  </div>
                </div>

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
