import { motion } from 'framer-motion'
import { ExternalLink, HelpCircle, ToggleLeft, Award, Activity, CheckCircle2, RefreshCw } from 'lucide-react'

interface Project {
  name: string
  category: string
  status: string
  statusType: 'active' | 'completed' | 'ongoing'
  problem: string
  solution: string
  impact: string
  techStack: string[]
  github: string
  external: string
  accent: 'blue' | 'green' | 'purple'
  accentGradients: string
}

export default function Projects() {
  const projectsList: Project[] = [
    {
      name: "BlackBoxCV",
      category: "AI / NLP",
      status: "Active Development",
      statusType: "active",
      problem: "Most students do not understand how recruiters and ATS systems evaluate resumes.",
      solution: "Built an NLP-powered resume screening analyzer using semantic similarity scoring and recruiter-style evaluation logic.",
      impact: "Provides detailed resume feedback and helps users understand resume strengths and weaknesses.",
      techStack: ["Python", "Streamlit", "Sentence Transformers", "NLP", "Scikit-Learn"],
      github: "https://github.com",
      external: "#",
      accent: "blue",
      accentGradients: "from-blue-500/10 via-cyan-500/5 to-transparent",
    },
    {
      name: "Real-Time Low Voltage Line Fault Detection System",
      category: "IoT / Embedded Systems",
      status: "Completed",
      statusType: "completed",
      problem: "Manual detection of power line faults is slow and inefficient.",
      solution: "Built a NodeMCU-based fault detection system capable of identifying faults in real time.",
      impact: "Reduced fault identification time from hours to under five seconds.",
      techStack: ["C++", "NodeMCU", "HTML", "CSS", "JavaScript"],
      github: "https://github.com",
      external: "#",
      accent: "green",
      accentGradients: "from-emerald-500/10 via-green-500/5 to-transparent",
    },
    {
      name: "Personal Portfolio Website",
      category: "Frontend Engineering",
      status: "Ongoing",
      statusType: "ongoing",
      problem: "Traditional resumes fail to communicate personality and growth.",
      solution: "Built a personal website that combines software engineering, writing, literature, cinema, and curiosity into one digital space.",
      impact: "Creates a stronger personal brand and showcases both technical and intellectual interests.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
      external: "#",
      accent: "purple",
      accentGradients: "from-purple-500/10 via-fuchsia-500/5 to-transparent",
    },
  ]

  const borderGlows = {
    blue: "hover:border-blue-500/30",
    green: "hover:border-emerald-500/30",
    purple: "hover:border-purple-500/30",
  }

  const getStatusIcon = (type: Project['statusType']) => {
    switch (type) {
      case 'active':
        return <Activity className="w-3.5 h-3.5 animate-pulse text-blue-400" />
      case 'completed':
        return <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
      case 'ongoing':
        return <RefreshCw className="w-3.5 h-3.5 text-purple-400" />
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  return (
    <section id="projects" className="relative bg-background py-24 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-text/5">
      {/* Background soft glow */}
      <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-text/10 text-xs font-semibold text-accent tracking-wider uppercase"
          >
            Engineering Output
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
          >
            Featured <span className="bg-gradient-to-r from-accent via-indigo-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-base md:text-lg leading-relaxed"
          >
            Projects that reflect my journey through software engineering, problem solving, and building systems.
          </motion.p>
        </div>

        {/* Projects Responsive Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsList.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`relative overflow-hidden rounded-2xl bg-surface/30 backdrop-blur-xl border border-text/10 p-6 flex flex-col justify-between hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 group ${borderGlows[project.accent]}`}
            >
              {/* Mesh Accent Highlights */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accentGradients} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              {/* Top Section */}
              <div className="space-y-6 relative z-10">
                {/* Meta details */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-surface border border-text/10 text-muted">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-surface border border-text/10 text-text">
                    {getStatusIcon(project.statusType)}
                    <span>{project.status}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-text tracking-tight group-hover:text-accent transition-colors duration-300">
                  {project.name}
                </h3>

                {/* Problem, Solution, Impact Blocks */}
                <div className="space-y-4 pt-2 border-t border-text/5">
                  {/* Problem */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-muted uppercase tracking-wider">
                      <HelpCircle className="w-3.5 h-3.5 text-red-400" />
                      <span>Problem</span>
                    </div>
                    <p className="text-muted text-sm leading-relaxed pl-5">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-muted uppercase tracking-wider">
                      <ToggleLeft className="w-3.5 h-3.5 text-accent" />
                      <span>Solution</span>
                    </div>
                    <p className="text-text text-sm leading-relaxed pl-5">
                      {project.solution}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-muted uppercase tracking-wider">
                      <Award className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Impact</span>
                    </div>
                    <p className="text-text/90 text-sm leading-relaxed font-semibold pl-5">
                      {project.impact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Section: Tech Stack & Actions */}
              <div className="space-y-6 pt-6 mt-6 border-t border-text/5 relative z-10">
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-0.5 rounded bg-surface text-[10px] sm:text-xs font-mono text-muted border border-text/5 hover:border-accent/10 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 w-full">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-surface/50 border border-text/10 text-xs font-bold transition-all duration-300 hover:bg-surface hover:border-text/20 hover:scale-[1.02]"
                  >
                    <svg className="w-3.5 h-3.5 text-text fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                  </a>

                  <a
                    href={project.external}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-surface/50 border border-text/10 text-xs font-bold transition-all duration-300 hover:bg-surface hover:border-text/20 hover:scale-[1.02] opacity-60 hover:opacity-100"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>

              {/* Bottom hover highlight line decoration */}
              <div className="w-full h-1 bg-gradient-to-r from-accent/0 via-accent/30 to-purple-400/0 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
