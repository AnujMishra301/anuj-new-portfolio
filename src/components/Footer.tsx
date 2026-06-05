import { Github, Linkedin } from './Icons'
import { github, linkedin, resume, email } from '../data/socialLinks'
import { FileText, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-background border-t border-text/5 pt-16 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4 text-left">
            <a href="#" className="text-text font-black tracking-tight text-xl hover:text-accent transition-colors duration-300">
              AM
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Systems engineer exploring backend, algorithms, literature, cinema, history, and ideas. Building with logical precision and human empathy.
            </p>
          </div>

          {/* Column 2: Sections */}
          <div className="space-y-4 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-accent">
              Core Directory
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="text-muted text-sm hover:text-text transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#manifesto" className="text-muted text-sm hover:text-text transition-colors duration-300">
                  Manifesto
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted text-sm hover:text-text transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-muted text-sm hover:text-text transition-colors duration-300">
                  Journey
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="space-y-4 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-accent">
              Capabilities
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#techstack" className="text-muted text-sm hover:text-text transition-colors duration-300">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#beyondcode" className="text-muted text-sm hover:text-text transition-colors duration-300">
                  Beyond Code
                </a>
              </li>
              <li>
                <a href="#dashboard" className="text-muted text-sm hover:text-text transition-colors duration-300">
                  Current Status
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted text-sm hover:text-text transition-colors duration-300">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Links / Connect */}
          <div className="space-y-4 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-accent">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted text-sm hover:text-text transition-colors duration-300 group">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted text-sm hover:text-[#0077b5] transition-colors duration-300 group">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href={email} className="flex items-center gap-2 text-muted text-sm hover:text-accent transition-colors duration-300 group">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a href={resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted text-sm hover:text-emerald-400 transition-colors duration-300 group">
                  <FileText className="w-4 h-4" />
                  <span>Resume PDF</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Block */}
        <div className="pt-10 border-t border-text/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted">
          {/* Humanist Quote block */}
          <div className="text-left font-serif italic text-xs max-w-md border-l border-accent/20 pl-4 py-0.5 text-muted/70 hover:text-muted transition-colors duration-300">
            "Observation, simplicity, and storytelling." — Inspired by Satyajit Ray's cinema.
          </div>
          
          {/* Copyright notice */}
          <div className="flex flex-col md:items-end gap-1.5 text-xs">
            <span>
              &copy; {currentYear} Anuj Mishra. All rights reserved.
            </span>
            <span className="flex items-center justify-center md:justify-end gap-1 text-[10px] tracking-wider uppercase opacity-60">
              Crafted with <Heart className="w-2.5 h-2.5 text-rose-500 fill-current" /> using React, TypeScript & Tailwind
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}
