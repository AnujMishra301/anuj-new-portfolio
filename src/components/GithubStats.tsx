import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github } from './Icons'
import { Sparkles, Terminal, Code2 } from 'lucide-react'
import { github } from '../data/socialLinks'

const StreakSkeleton = () => (
  <div className="w-full h-full p-6 flex items-center justify-around space-x-4 animate-pulse bg-[#0b1329]/40">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="flex flex-col items-center space-y-2">
        <div className="h-2 w-16 bg-text/10 rounded" />
        <div className="h-6 w-12 bg-text/25 rounded" />
        <div className="h-2 w-20 bg-text/10 rounded" />
      </div>
    ))}
  </div>
)

export default function GithubStats() {
  const [streakLoaded, setStreakLoaded] = useState(false)
  const [streakError, setStreakError] = useState(false)

  const streakUrl = "https://streak-stats.demolab.com?user=AnujMishra301&theme=transparent"

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!streakLoaded) {
        setStreakError(true)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [streakLoaded])

  if (streakError) {
    return null
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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
    <section id="githubstats" className="relative bg-background py-24 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-text/5">
      {/* Background soft glow */}
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
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Open Source Metrics</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
          >
            GitHub <span className="bg-gradient-to-r from-accent via-indigo-400 to-purple-400 bg-clip-text text-transparent">Activity</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-base md:text-lg leading-relaxed"
          >
            Core technologies and development stream linked directly to my open-source profile.
          </motion.p>
        </div>

        {/* Dashboard Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          
          {/* Card 1: Commits Streak Stats */}
          <motion.div 
            variants={itemVariants}
            className="relative overflow-hidden rounded-2xl bg-surface/30 backdrop-blur-xl border border-text/10 p-6 flex flex-col hover:border-accent/20 transition-all duration-300 group lg:col-span-1 w-full"
          >
            <div className="flex items-center justify-between border-b border-text/5 pb-4 mb-6">
              <div className="flex items-center gap-3 text-left">
                <div className="w-9 h-9 rounded-lg bg-surface border border-text/10 flex items-center justify-center group-hover:border-accent/20 transition-colors duration-300">
                  <Terminal className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-text group-hover:text-accent transition-colors duration-300">
                    Commit Streak
                  </h3>
                  <p className="text-[10px] text-muted font-mono tracking-wider uppercase">
                    Active Pipeline
                  </p>
                </div>
              </div>
            </div>

            {/* Content & Loader Container */}
            <div className="relative w-full aspect-[480/195] bg-[#0b1329]/20 rounded-xl border border-text/5 overflow-hidden flex items-center justify-center">
              <img 
                src={streakUrl} 
                alt="GitHub Commit Streak" 
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 z-20 ${streakLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setStreakLoaded(true)}
                onError={() => setStreakError(true)}
              />

              {/* Show Loading Skeleton */}
              {!streakLoaded && (
                <div className="absolute inset-0 w-full h-full bg-surface/10 z-10">
                  <StreakSkeleton />
                </div>
              )}
            </div>
          </motion.div>

          {/* Card 2: Core Technologies Card */}
          <motion.div 
            variants={itemVariants}
            className="relative overflow-hidden rounded-2xl bg-surface/30 backdrop-blur-xl border border-text/10 p-6 flex flex-col hover:border-accent/20 transition-all duration-300 group lg:col-span-1 w-full"
          >
            <div className="flex items-center justify-between border-b border-text/5 pb-4 mb-6">
              <div className="flex items-center gap-3 text-left">
                <div className="w-9 h-9 rounded-lg bg-surface border border-text/10 flex items-center justify-center group-hover:border-accent/20 transition-colors duration-300">
                  <Code2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-text group-hover:text-accent transition-colors duration-300">
                    Core Technologies
                  </h3>
                  <p className="text-[10px] text-muted font-mono tracking-wider uppercase">
                    Primary Stack & Frameworks
                  </p>
                </div>
              </div>
            </div>

            {/* Badges Container */}
            <div className="flex flex-wrap gap-2.5 justify-center py-4 my-auto">
              {[
                { name: "Java", color: "from-red-500/10 to-orange-500/5", border: "border-red-500/20 hover:border-red-500/40", text: "text-red-400" },
                { name: "Python", color: "from-blue-500/10 to-cyan-500/5", border: "border-blue-500/20 hover:border-blue-500/40", text: "text-blue-400" },
                { name: "JavaScript", color: "from-yellow-500/10 to-amber-500/5", border: "border-yellow-500/20 hover:border-yellow-500/40", text: "text-yellow-400" },
                { name: "TypeScript", color: "from-blue-600/10 to-indigo-500/5", border: "border-blue-600/20 hover:border-blue-600/40", text: "text-blue-400" },
                { name: "React", color: "from-cyan-500/10 to-blue-500/5", border: "border-cyan-500/20 hover:border-cyan-500/40", text: "text-cyan-400" },
                { name: "Node.js", color: "from-green-500/10 to-emerald-500/5", border: "border-green-500/20 hover:border-green-500/40", text: "text-green-400" },
                { name: "MySQL", color: "from-orange-500/10 to-yellow-500/5", border: "border-orange-500/20 hover:border-orange-500/40", text: "text-orange-400" }
              ].map((tech) => (
                <span 
                  key={tech.name}
                  className={`px-3.5 py-1.5 rounded-xl bg-gradient-to-br ${tech.color} border ${tech.border} ${tech.text} text-xs font-semibold tracking-wide hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </motion.div>

        </motion.div>

        {/* Footer profile connection label */}
        <div className="text-center pt-8">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-accent hover:scale-[1.01] transition-all duration-300"
          >
            <span>Visit @AnujMishra301 on GitHub</span>
            <Github className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  )
}
