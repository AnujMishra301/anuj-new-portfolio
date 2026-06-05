import { FileText } from 'lucide-react'
import { Github, Linkedin } from './Icons'
import { github, linkedin, resume } from '../data/socialLinks'

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-background/60 backdrop-blur-md border-b border-text/5 py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <a href="#" className="text-text font-black tracking-tight text-lg hover:text-accent transition-colors duration-300">
          AM
        </a>
        
        {/* Navigation items */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-muted text-sm font-medium hover:text-text transition-colors duration-300">
            About
          </a>
          <a href="#manifesto" className="text-muted text-sm font-medium hover:text-text transition-colors duration-300">
            Manifesto
          </a>
          <a href="#projects" className="text-muted text-sm font-medium hover:text-text transition-colors duration-300">
            Projects
          </a>
          <a href="#contact" className="text-muted text-sm font-medium hover:text-text transition-colors duration-300">
            Contact
          </a>
        </div>
      </div>

      {/* Social actions & Resume */}
      <div className="flex items-center gap-4">
        {/* GitHub link */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-muted hover:text-text hover:bg-surface/50 transition-all duration-300"
          title="GitHub Profile"
        >
          <Github className="w-5 h-5" />
        </a>

        {/* LinkedIn link */}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-muted hover:text-[#0077b5] hover:bg-surface/50 transition-all duration-300"
          title="LinkedIn Profile"
        >
          <Linkedin className="w-5 h-5" />
        </a>

        {/* Resume Button */}
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface border border-text/10 text-xs font-bold text-text transition-all duration-300 hover:bg-surface/80 hover:border-accent/30 hover:scale-[1.02]"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Resume</span>
        </a>
      </div>
    </nav>
  )
}
