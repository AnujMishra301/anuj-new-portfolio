import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github } from './Icons'
import { Sparkles, Terminal } from 'lucide-react'
import { github } from '../data/socialLinks'

const StatsSkeleton = () => (
  <div className="w-full h-full p-6 flex flex-col justify-between space-y-3 animate-pulse bg-[#0b1329]/40">
    <div className="space-y-3">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex items-center justify-between border-b border-text/5 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded bg-text/10" />
            <div className="h-3 w-24 bg-text/10 rounded" />
          </div>
          <div className="h-3 w-12 bg-text/20 rounded" />
        </div>
      ))}
    </div>
  </div>
)

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

const LanguagesSkeleton = () => (
  <div className="w-full h-full p-6 flex flex-col justify-center space-y-3.5 animate-pulse bg-[#0b1329]/40">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="space-y-2">
        <div className="flex justify-between items-center">
          <div className="h-3 w-16 bg-text/25 rounded" />
          <div className="h-2.5 w-8 bg-text/10 rounded" />
        </div>
        <div className="h-2.5 w-full bg-text/10 rounded-full overflow-hidden">
          <div className="h-full bg-text/20 rounded-full" style={{ width: i === 0 ? '70%' : i === 1 ? '45%' : '25%' }} />
        </div>
      </div>
    ))}
  </div>
)

export default function GithubStats() {
  const [statsLoaded, setStatsLoaded] = useState(false)
  const [streakLoaded, setStreakLoaded] = useState(false)
  const [langsLoaded, setLangsLoaded] = useState(false)

  const statsUrl = "https://github-readme-stats.vercel.app/api?username=AnujMishra301&show_icons=true&theme=transparent"
  const languagesUrl = "https://github-readme-stats.vercel.app/api/top-langs/?username=AnujMishra301&layout=compact&theme=transparent"
  const streakUrl = "https://streak-stats.demolab.com?user=AnujMishra301&theme=transparent"

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
            Real-time profile statistics linked directly to my open-source profile.
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
          
          {/* Box 1: Profile Stats Card */}
          <motion.div 
            variants={itemVariants}
            className="relative overflow-hidden rounded-2xl bg-surface/30 backdrop-blur-xl border border-text/10 p-6 flex flex-col hover:border-accent/20 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between border-b border-text/5 pb-4 mb-6">
              <div className="flex items-center gap-3 text-left">
                <div className="w-9 h-9 rounded-lg bg-surface border border-text/10 flex items-center justify-center group-hover:border-accent/20 transition-colors duration-300">
                  <Github className="w-5 h-5 text-text" />
                </div>
                <div>
                  <h3 className="font-bold text-text group-hover:text-accent transition-colors duration-300">
                    Profile Stats
                  </h3>
                  <p className="text-[10px] text-muted font-mono tracking-wider uppercase">
                    AnujMishra301
                  </p>
                </div>
              </div>
            </div>

            {/* Content & Loader Container */}
            <div className="relative w-full aspect-[480/195] bg-[#0b1329]/20 rounded-xl border border-text/5 overflow-hidden">
              <img 
                src={statsUrl} 
                alt="GitHub Profile Stats" 
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 z-20 ${statsLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setStatsLoaded(true)}
              />

              {/* Show Loading Skeleton */}
              {!statsLoaded && (
                <div className="absolute inset-0 w-full h-full bg-surface/10 z-10">
                  <StatsSkeleton />
                </div>
              )}
            </div>
          </motion.div>

          {/* Box 2: Commits Streak Stats */}
          <motion.div 
            variants={itemVariants}
            className="relative overflow-hidden rounded-2xl bg-surface/30 backdrop-blur-xl border border-text/10 p-6 flex flex-col hover:border-accent/20 transition-all duration-300 group"
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
            <div className="relative w-full aspect-[480/195] bg-[#0b1329]/20 rounded-xl border border-text/5 overflow-hidden">
              <img 
                src={streakUrl} 
                alt="GitHub Commit Streak" 
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 z-20 ${streakLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setStreakLoaded(true)}
              />

              {/* Show Loading Skeleton */}
              {!streakLoaded && (
                <div className="absolute inset-0 w-full h-full bg-surface/10 z-10">
                  <StreakSkeleton />
                </div>
              )}
            </div>
          </motion.div>

          {/* Box 3: Top Languages Card (Spans full width on Desktop) */}
          <motion.div 
            variants={itemVariants}
            className="relative overflow-hidden rounded-2xl bg-surface/30 backdrop-blur-xl border border-text/10 p-6 flex flex-col hover:border-accent/20 transition-all duration-300 group lg:col-span-2 max-w-3xl mx-auto w-full"
          >
            <div className="flex items-center justify-between border-b border-text/5 pb-4 mb-6">
              <div className="flex items-center gap-3 text-left">
                <div className="w-9 h-9 rounded-lg bg-surface border border-text/10 flex items-center justify-center group-hover:border-accent/20 transition-colors duration-300">
                  <Github className="w-5 h-5 text-text" />
                </div>
                <div>
                  <h3 className="font-bold text-text group-hover:text-accent transition-colors duration-300">
                    Top Languages
                  </h3>
                  <p className="text-[10px] text-muted font-mono tracking-wider uppercase">
                    Language Distribution
                  </p>
                </div>
              </div>
            </div>

            {/* Content & Loader Container */}
            <div className="relative w-full aspect-[480/120] sm:aspect-[480/100] md:aspect-[480/80] bg-[#0b1329]/20 rounded-xl border border-text/5 overflow-hidden">
              <img 
                src={languagesUrl} 
                alt="GitHub Top Languages" 
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 z-20 ${langsLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setLangsLoaded(true)}
              />

              {/* Show Loading Skeleton */}
              {!langsLoaded && (
                <div className="absolute inset-0 w-full h-full bg-surface/10 z-10">
                  <LanguagesSkeleton />
                </div>
              )}
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
