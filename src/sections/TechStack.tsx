import { motion } from 'framer-motion'
import { Code, Monitor, Server, Database, Wrench, Sparkles } from 'lucide-react'

interface TechItem {
  name: string
  color: string
}

interface TechCategory {
  title: string
  icon: React.ReactNode
  accent: 'blue' | 'emerald' | 'purple' | 'rose' | 'amber' | 'cyan'
  accentGlow: string
  items: TechItem[]
}

export default function TechStack() {
  const categories: TechCategory[] = [
    {
      title: "Languages",
      icon: <Code className="w-5 h-5 text-blue-400" />,
      accent: "blue",
      accentGlow: "hover:border-blue-500/30 hover:shadow-blue-500/5",
      items: [
        { name: "Java", color: "bg-[#f89820]" },
        { name: "Python", color: "bg-[#3776ab]" },
        { name: "C", color: "bg-[#a8b9cc]" },
      ],
    },
    {
      title: "Frontend",
      icon: <Monitor className="w-5 h-5 text-emerald-400" />,
      accent: "emerald",
      accentGlow: "hover:border-emerald-500/30 hover:shadow-emerald-500/5",
      items: [
        { name: "HTML", color: "bg-[#e34f26]" },
        { name: "CSS", color: "bg-[#1572b6]" },
        { name: "JavaScript", color: "bg-[#f7df1e]" },
        { name: "React", color: "bg-[#61dafb]" },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5 text-purple-400" />,
      accent: "purple",
      accentGlow: "hover:border-purple-500/30 hover:shadow-purple-500/5",
      items: [
        { name: "Node.js", color: "bg-[#339933]" },
        { name: "Express", color: "bg-[#000000]" },
      ],
    },
    {
      title: "Database",
      icon: <Database className="w-5 h-5 text-rose-400" />,
      accent: "rose",
      accentGlow: "hover:border-rose-500/30 hover:shadow-rose-500/5",
      items: [
        { name: "MySQL", color: "bg-[#4479a1]" },
        { name: "MongoDB", color: "bg-[#47a248]" },
      ],
    },
    {
      title: "Tools",
      icon: <Wrench className="w-5 h-5 text-amber-400" />,
      accent: "amber",
      accentGlow: "hover:border-amber-500/30 hover:shadow-amber-500/5",
      items: [
        { name: "Git", color: "bg-[#f05032]" },
        { name: "GitHub", color: "bg-[#181717]" },
        { name: "VS Code", color: "bg-[#007acc]" },
        { name: "IntelliJ", color: "bg-[#000000]" },
      ],
    },
    {
      title: "Learning",
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
      accent: "cyan",
      accentGlow: "hover:border-cyan-500/30 hover:shadow-cyan-500/5",
      items: [
        { name: "Spring Boot", color: "bg-[#6db33f]" },
        { name: "Docker", color: "bg-[#2496ed]" },
        { name: "System Design", color: "bg-[#38bdf8]" },
        { name: "Machine Learning", color: "bg-[#ff6f61]" },
      ],
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
    <section id="techstack" className="relative bg-background py-24 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-text/5">
      {/* Background Radial Glow */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[130px] pointer-events-none" />

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
            Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
          >
            Tech <span className="bg-gradient-to-r from-accent via-indigo-400 to-purple-400 bg-clip-text text-transparent">Stack</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-base md:text-lg leading-relaxed"
          >
            Technologies I use and technologies I am currently learning.
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
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`relative overflow-hidden rounded-2xl bg-surface/30 backdrop-blur-xl border border-text/10 p-6 flex flex-col hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 group ${cat.accentGlow}`}
            >
              {/* Overlay highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-6 relative z-10 flex flex-col h-full justify-between">
                
                {/* Card Title Header */}
                <div className="flex items-center gap-3 border-b border-text/5 pb-3">
                  <div className="w-9 h-9 rounded-lg bg-surface border border-text/10 flex items-center justify-center group-hover:border-accent/20 transition-colors duration-300">
                    {cat.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-text group-hover:text-accent transition-colors duration-300">
                      {cat.title}
                    </h3>
                    <p className="text-[10px] text-muted tracking-wider uppercase font-mono">
                      {cat.items.length} Items
                    </p>
                  </div>
                </div>

                {/* Sub-grid of Technology Chips */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {cat.items.map((tech, techIdx) => (
                    <div
                      key={techIdx}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface/50 border border-text/5 hover:border-accent/20 hover:bg-surface transition-all duration-300 group/chip"
                    >
                      {/* Indicator dot */}
                      <span className={`w-2 h-2 rounded-full ${tech.color} shrink-0 group-hover/chip:scale-120 transition-transform duration-300`} />
                      <span className="text-sm font-semibold text-muted group-hover/chip:text-text transition-colors duration-300 truncate">
                        {tech.name}
                      </span>
                    </div>
                  ))}
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
