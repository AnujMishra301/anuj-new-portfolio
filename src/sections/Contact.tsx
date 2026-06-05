import { motion } from 'framer-motion'
import { FileText, Mail, ArrowUpRight, Sparkles } from 'lucide-react'
import { Github, Linkedin } from '../components/Icons'
import { github, linkedin, resume, email } from '../data/socialLinks'

export default function Contact() {
  const contactButtons = [
    {
      label: "Email",
      description: "Direct connection",
      value: "mishraanuj301@gmail.com",
      href: email,
      icon: <Mail className="w-5 h-5 text-accent" />,
      actionLabel: "Send Mail",
      isMail: true,
    },
    {
      label: "LinkedIn",
      description: "Professional network",
      value: "Anuj Kumar Mishra",
      href: linkedin,
      icon: <Linkedin className="w-5 h-5 text-[#0077b5]" />,
      actionLabel: "Connect",
      isMail: false,
    },
    {
      label: "GitHub",
      description: "Source files & repos",
      value: "AnujMishra301",
      href: github,
      icon: <Github className="w-5 h-5 text-text" />,
      actionLabel: "Follow",
      isMail: false,
    },
    {
      label: "Resume",
      description: "Download profile PDF",
      value: "resume.pdf",
      href: resume,
      icon: <FileText className="w-5 h-5 text-emerald-400" />,
      actionLabel: "Open PDF",
      isMail: false,
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
    <section id="contact" className="relative bg-background py-24 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-text/5">
      {/* Background glow overlay */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        
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
            <span>Collaboration</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
          >
            Get In <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-base md:text-lg leading-relaxed"
          >
            Let's build something together or discuss software engineering, distributed systems, literature, and cinema.
          </motion.p>
        </div>

        {/* Buttons Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {contactButtons.map((btn, idx) => (
            <motion.a
              key={idx}
              href={btn.href}
              target={btn.isMail ? undefined : "_blank"}
              rel={btn.isMail ? undefined : "noopener noreferrer"}
              variants={cardVariants}
              className="group relative flex items-center justify-between p-6 rounded-2xl bg-surface/30 backdrop-blur-xl border border-text/10 hover:border-accent/25 hover:shadow-2xl hover:shadow-accent/5 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
            >
              {/* Corner highlights */}
              <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-accent/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center gap-4 relative z-10">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-surface border border-text/10 flex items-center justify-center shadow-md group-hover:border-accent/20 group-hover:scale-110 transition-all duration-300">
                  {btn.icon}
                </div>
                
                <div className="text-left space-y-1">
                  <h3 className="font-bold text-text group-hover:text-accent transition-colors duration-300">
                    {btn.label}
                  </h3>
                  <p className="text-xs text-muted font-mono">
                    {btn.value}
                  </p>
                </div>
              </div>

              {/* Action indicator arrow */}
              <div className="flex items-center gap-1.5 text-xs font-bold text-muted group-hover:text-accent transition-all duration-300 relative z-10 pl-4">
                <span>{btn.actionLabel}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              {/* Bottom decorative highlight line */}
              <div className="w-full h-1 bg-gradient-to-r from-accent/0 via-accent/30 to-purple-400/0 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
