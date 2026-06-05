import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react'
import { Github, Linkedin } from './Icons'
import { github, linkedin, resume } from '../data/socialLinks'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Manifesto", href: "#manifesto" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#timeline" },
    { name: "Tech Stack", href: "#techstack" },
    { name: "Beyond Code", href: "#beyondcode" },
    { name: "Status", href: "#dashboard" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-background/60 backdrop-blur-md border-b border-text/5 py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <a href="#" className="text-text font-black tracking-tight text-lg hover:text-accent transition-colors duration-300">
          AM
        </a>
        
        {/* Navigation items (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-muted text-sm font-medium hover:text-text transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Social actions & Resume & Mobile Toggle */}
      <div className="flex items-center gap-4">
        {/* Desktop Socials */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted hover:text-text hover:bg-surface/50 transition-all duration-300"
            title="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted hover:text-[#0077b5] hover:bg-surface/50 transition-all duration-300"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Resume Button */}
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface border border-text/10 text-xs font-bold text-text transition-all duration-300 hover:bg-surface/80 hover:border-accent/30 hover:scale-[1.02]"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Resume</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-muted hover:text-text hover:bg-surface/50 border border-text/5 hover:border-text/10 transition-all duration-300"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Slide-down Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 z-40 bg-background/95 backdrop-blur-lg border-b border-text/10 shadow-2xl overflow-hidden lg:hidden flex flex-col py-6 px-6 md:px-12 space-y-6"
          >
            {/* Nav links list */}
            <div className="flex flex-col gap-4 text-left">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted text-base font-semibold hover:text-accent transition-colors duration-300 py-1.5 border-b border-text/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-30" />
                </a>
              ))}
            </div>

            {/* Mobile Actions Drawer (Resume + Social Links) */}
            <div className="flex flex-col gap-4 pt-4 border-t border-text/5">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-background font-bold text-sm transition-all duration-300 hover:bg-accent/90"
              >
                <FileText className="w-4 h-4" />
                <span>Resume PDF</span>
              </a>

              <div className="flex items-center justify-center gap-6 pt-2">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-muted hover:text-text"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-muted hover:text-[#0077b5]"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
