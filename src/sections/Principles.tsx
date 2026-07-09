import { motion } from 'framer-motion'
import { Anchor, Compass } from 'lucide-react'

interface Principle {
  num: string
  title: string
  annotation: string
}

export default function Principles() {
  const principles: Principle[] = [
    {
      num: "I",
      title: "Build before optimizing.",
      annotation: "Establish absolute logical correctness first. Rely on benchmark metrics and profiling telemetry to identify bottleneck variables before complicating your code."
    },
    {
      num: "II",
      title: "Understand systems, not just frameworks.",
      annotation: "Framework syntaxes are ephemeral. Deeply analyze underlying compilers, database storage layouts, socket connections, and memory allocation structures."
    },
    {
      num: "III",
      title: "Code is for people.",
      annotation: "Systems are designed, written, and read by humans. Performance logic is futile if your architectures are incomprehensible to other developers."
    },
    {
      num: "IV",
      title: "Curiosity compounds.",
      annotation: "Engineering does not exist in isolation. Studying cinema pacing, history pipelines, and literature characters sparks creative problem-solving routes."
    },
    {
      num: "V",
      title: "Learn deeply.",
      annotation: "Avoid copying abstract snippets blindly. Take time to trace dependencies down to the source file and learn the design heuristics."
    },
    {
      num: "VI",
      title: "Leave every project better than you found it.",
      annotation: "Fix warnings, refactor stale classes, add coverage validation scripts, and trace coordinate bugs for the next voyager who drops anchor here."
    }
  ]

  return (
    <section id="principles" className="relative bg-background py-24 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-text/5">
      
      {/* Background Soft Glow */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-op-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-surface/50 border border-op-gold/30 text-xs font-bold text-op-gold tracking-widest uppercase font-sans shadow-sm backdrop-blur-md"
          >
            Engineering Tenets // Rules of the Sea
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-widest font-cinzel text-op-parchment uppercase"
          >
            Engineering <span className="bg-gradient-to-b from-op-parchment via-op-gold to-op-brown bg-clip-text text-transparent filter drop-shadow-md">Principles</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-base md:text-lg leading-relaxed font-sans"
          >
            A set of tenets pinned to my navigation desk, guiding how I solve algorithmic logic, deploy server instances, and build software.
          </motion.p>

          <div className="flex items-center justify-center gap-4 py-1">
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent to-op-brown/30" />
            <Anchor className="w-4 h-4 text-op-brown/50" />
            <div className="w-16 h-[1.5px] bg-gradient-to-l from-transparent to-op-brown/30" />
          </div>
        </div>

        {/* Captain's Navigation Table Frame */}
        <div className="relative bg-gradient-to-b from-[#23170e] via-[#3d2616] to-[#23170e] border-4 border-op-brown rounded-3xl p-6 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Wood grain pattern watermark overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.25)_1px,transparent_1px)] bg-[size:10px_10px] opacity-15 pointer-events-none rounded-2xl" />

          {/* Compass rose chart logo in corner of desk */}
          <div className="absolute right-4 bottom-4 w-28 h-28 pointer-events-none opacity-[0.05] text-op-gold">
            <Compass className="w-full h-full" />
          </div>

          {/* Notebook Pinned Parchment sheet */}
          <motion.div
            initial={{ opacity: 0, rotate: -1.5, scale: 0.98 }}
            whileInView={{ opacity: 1, rotate: -0.5, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-[#fffefb] border border-op-brown/30 text-op-navy rounded-2xl p-8 sm:p-10 shadow-2xl flex flex-col gap-8 text-left overflow-hidden min-h-[500px]"
          >
            {/* Fine notebook grid line patterns */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(198,134,66,0.04)_1px,transparent_1px)] bg-[size:100%_2.2rem] pointer-events-none pt-2" />

            {/* Brass Pins holding sheet */}
            <div className="absolute top-4 left-6 w-4 h-4 rounded-full bg-gradient-to-br from-[#ffd700] via-[#c5a059] to-[#8c6b2d] border border-[#b8860b] shadow-[0_2px_5px_rgba(0,0,0,0.4)] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-black/35" />
            </div>
            <div className="absolute top-4 right-6 w-4 h-4 rounded-full bg-gradient-to-br from-[#ffd700] via-[#c5a059] to-[#8c6b2d] border border-[#b8860b] shadow-[0_2px_5px_rgba(0,0,0,0.4)] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-black/35" />
            </div>

            {/* Pinned notes header */}
            <div className="border-b border-op-brown/15 pb-4 mb-2 flex items-center justify-between font-sans">
              <span className="font-mono text-[9px] font-black text-op-brown/60 uppercase tracking-widest">
                Logbook Sheet // Captain's Desk
              </span>
              <span className="text-[9px] font-mono font-medium text-op-navy/55">
                Log Coordinate: 20°12'S, 148°44'W
              </span>
            </div>

            {/* Principles entries */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 relative z-10 font-sans">
              {principles.map((pr) => (
                <div key={pr.num} className="space-y-2 group">
                  
                  {/* Principle Title statement */}
                  <div className="flex gap-2 items-start">
                    <span className="font-cinzel text-xs font-black text-op-gold/80 block select-none mt-0.5 shrink-0">
                      {pr.num}.
                    </span>
                    <h3 className="font-cinzel text-sm sm:text-base font-black uppercase tracking-wider text-op-navy group-hover:text-op-ocean transition-colors duration-300">
                      {pr.title}
                    </h3>
                  </div>

                  {/* Personal handwritten annotation */}
                  <div className="pl-5 relative">
                    {/* Scribbled line margin */}
                    <div className="absolute left-1.5 top-0 bottom-0 w-[1.5px] bg-op-brown/15" />
                    
                    <p className="font-serif italic text-xs leading-relaxed text-op-brown font-medium pl-2.5">
                      {pr.annotation}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            {/* Bottom table markers */}
            <div className="border-t border-op-brown/15 pt-6 mt-6 flex justify-between items-center text-[9px] font-mono text-op-brown/50">
              <span>Principles log // verified</span>
              <span>Anuj Mishra</span>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  )
}
