import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { BookOpen, PenTool, Film, Clock, Compass, Anchor, X } from 'lucide-react'

interface Book {
  id: string
  title: string
  subtitle: string
  why: string
  learned: string
  quote?: string
  readYear?: string
  heightClass: string // height visual variations
  widthClass: string  // spine thickness
  colorClass: string  // gradient backdrop styling
  titleColor: string
  symbol: string      // embossed gold icon symbol
  fontSizeStyle: string // font sizing adjust
  tilt: number        // visual tilt angle
}

interface Philosophy {
  title: string
  explanation: string
}

interface JournalPage {
  title: string
  content: string
}

export default function BeyondCode() {
  const shouldReduceMotion = useReducedMotion()
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [hoveredPhilosophy, setHoveredPhilosophy] = useState<string | null>(null)
  
  // Found Pages State
  const [foundPageOpen, setFoundPageOpen] = useState(false)
  const [foundPageIndex, setFoundPageIndex] = useState(0)

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (shouldReduceMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) / 60,
        y: (e.clientY - window.innerHeight / 2) / 60,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [shouldReduceMotion])

  const books: Book[] = [
    {
      id: "gunahon-ka-devta",
      title: "Gunahon Ka Devta",
      subtitle: "Dharamvir Bharati",
      why: "A tragic Hindi classic exploring moral philosophy, social barriers, and deep human suffering.",
      learned: "Taught me the nuances of emotional vocabulary, standard societal pressures, and human vulnerabilities.",
      quote: "वह प्रेम जो वासना से ऊपर उठकर आत्मा की पुकार बन जाता है, वही शाश्वत है।",
      readYear: "2023",
      heightClass: "h-40 sm:h-48",
      widthClass: "w-9 sm:w-13",
      colorClass: "bg-gradient-to-r from-[#2d0a0a] via-[#5c1313] to-[#2d0a0a]",
      titleColor: "text-op-gold/90",
      symbol: "★",
      fontSizeStyle: "text-[7.5px] sm:text-[9.5px]",
      tilt: -2
    },
    {
      id: "splendid-suns",
      title: "A Thousand Splendid Suns",
      subtitle: "Khaled Hosseini",
      why: "A powerful account of resilience, institutional violence, and female solidarity in Afghanistan.",
      learned: "Broadened my understanding of structural empathy, geopolitical suffering, and human resilience under extreme pressure.",
      quote: "One could not count the moons that shimmer on her roofs, or the thousand splendid suns that hide behind her walls.",
      readYear: "2022",
      heightClass: "h-36 sm:h-44",
      widthClass: "w-8 sm:w-11",
      colorClass: "bg-gradient-to-r from-[#0d2116] via-[#1a422d] to-[#0d2116]",
      titleColor: "text-op-gold/85",
      symbol: "◆",
      fontSizeStyle: "text-[6.5px] sm:text-[8px]",
      tilt: 1.5
    },
    {
      id: "harry-potter",
      title: "Harry Potter Series",
      subtitle: "J.K. Rowling",
      why: "An epic journey mapping friendship, courage, systemic prejudice, and institutional choices.",
      learned: "Sparked my initial creative curiosity and showed how complex lore and worldbuilding scale over time.",
      quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
      readYear: "2018",
      heightClass: "h-44 sm:h-52",
      widthClass: "w-12 sm:w-16",
      colorClass: "bg-gradient-to-r from-[#091524] via-[#142d4c] to-[#091524]",
      titleColor: "text-op-gold/90",
      symbol: "♛",
      fontSizeStyle: "text-[9px] sm:text-[11px]",
      tilt: -1
    },
    {
      id: "ram-chandra",
      title: "Ram Chandra Series",
      subtitle: "Amish Tripathi",
      why: "A retelling of Indian mythology exploring leadership structural logic and institutional laws.",
      learned: "Learned to view ancient values through systems thinking, institutional balance, and long-term policies.",
      quote: "A leader must be ready to suffer for his code, for a code that costs nothing is worth nothing.",
      readYear: "2021",
      heightClass: "h-38 sm:h-46",
      widthClass: "w-10 sm:w-14",
      colorClass: "bg-gradient-to-r from-[#1c1109] via-[#3d2616] to-[#1c1109]",
      titleColor: "text-op-gold/90",
      symbol: "▲",
      fontSizeStyle: "text-[8px] sm:text-[10px]",
      tilt: 2
    }
  ]

  const philosophies: Philosophy[] = [
    { title: "Stay Curious", explanation: "Never stop asking how system parameters operate under the hood." },
    { title: "Learn Deeply", explanation: "Avoid superficial abstractions; map the compiler stack and internal details." },
    { title: "Build With Purpose", explanation: "Ensure every line of code addresses real-world human requirements." },
    { title: "Think Long-Term", explanation: "Draft architectures that scale gracefully over years, not weeks." },
    { title: "Simplicity Scales", explanation: "Write minimalistic logic; complexity introduces bugs and latency." }
  ]

  const journalCollection: JournalPage[] = [
    {
      title: "मुस्कुराहट",
      content: "उमर लगा देते हैं दो पल मुस्कुराने में लोग,\nन जाने हमारे यूं मुस्कुराने की वजह क्या है।"
    },
    {
      title: "निहारना",
      content: "कैसे समझाएं कि समंदर हैं उनकी आंखें,\nघूरने वाले क्या जानें, निहारने का मज़ा क्या है।"
    },
    {
      title: "सफ़र",
      content: "चांद तारे तोड़कर तो कभी न ला सकूंगा शायद,\nजो इन्हें निहारते हुए जिंदगी बितानी हो तो बता।"
    },
    {
      title: "आदत",
      content: "खालीपन में वो आते थे हमसे बातें करने,\nउनकी बातों को हमने आदत बना लिया।"
    },
    {
      title: "रिश्ता",
      content: "वो इरादा लेके आए थे कुछ वक्त बिताने का,\nनादान इस दिल ने उनसे रिश्ता बना लिया।"
    },
    {
      title: "बद्र",
      content: "आज चाँद कुछ यूँ ख़फ़ा-सा लगा,\nबद्र की रात थी और हम तुझे निहारते रहे।"
    },
    {
      title: "नज़र",
      content: "मैंने जानी ख़ूबसूरती तेरी आंखों की,\nजब ज़माना तेरी नजरों से जाना।"
    },
    {
      title: "ग़ज़ल",
      content: "मैं तो गुज़र ही रहा था, झलक भर देखकर,\nग़ज़ल बन गई कलम, तूने मुस्कुरा कर देखा।"
    },
    {
      title: "मोहब्बत",
      content: "ये किस्से, ये बातें, मोहब्बत की रातें,\nतुम्हारी भी तो होंगी, मेरी भी रही हैं।"
    }
  ]

  // Triggers the hidden Journal overlay with random selection
  const triggerFoundPage = () => {
    const randomIndex = Math.floor(Math.random() * journalCollection.length)
    setFoundPageIndex(randomIndex)
    setFoundPageOpen(true)
    window.dispatchEvent(new CustomEvent('journal-opened'))
  }

  // Procedural distressing layout helpers based on page index
  const renderDistressEffect = (idx: number) => {
    const type = idx % 4
    if (type === 0) {
      // Sketched compass rose
      return (
        <div className="absolute bottom-6 right-6 w-16 h-16 pointer-events-none opacity-[0.08] text-op-navy">
          <svg viewBox="0 0 100 100" fill="none" className="stroke-current" strokeWidth="1">
            <circle cx="50" cy="50" r="45" />
            <line x1="50" y1="5" x2="50" y2="95" />
            <line x1="5" y1="50" x2="95" y2="50" />
            <polygon points="50,15 45,50 50,55" fill="currentColor" />
            <polygon points="50,15 55,50 50,55" fill="currentColor" className="opacity-50" />
          </svg>
          <span className="text-[8px] block font-mono text-center mt-1 text-op-navy">32°14'S, 115°42'W</span>
        </div>
      )
    } else if (type === 1) {
      // Wax seal SVG
      return (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none opacity-60">
          <svg viewBox="0 0 40 40" className="w-10 h-10 text-op-red fill-current">
            <path d="M 20,2 C 10,2 2,10 2,20 C 2,30 10,38 20,38 C 30,38 38,30 38,20 C 38,10 30,2 Z M 20,6 C 27.7,6 34,12.3 34,20 C 34,27.7 27.7,34 20,34 C 12.3,34 6,27.7 6,20 C 6,12.3 12.3,6 20,6 Z" />
            <path d="M20,12 C15.6,12 12,15.6 12,20 C12,24.4 15.6,28 20,28 C24.4,28 28,24.4 28,20 C28,15.6 24.4,12 20,12 Z" className="opacity-95" />
          </svg>
          <span className="text-[8px] font-mono mt-1 text-op-navy/60">12°04'N, 80°15'E</span>
        </div>
      )
    } else if (type === 2) {
      // Coffee ring stain
      return (
        <div className="absolute top-12 left-6 w-20 h-20 pointer-events-none opacity-[0.06] text-op-brown">
          <svg viewBox="0 0 100 100" fill="none" className="stroke-current" strokeWidth="2.5">
            <circle cx="50" cy="50" r="42" />
            <circle cx="52" cy="48" r="40" strokeDasharray="10 5" />
          </svg>
          <span className="text-[8px] block font-mono text-center mt-1 text-op-navy">5°12'S, 142°08'E</span>
        </div>
      )
    } else {
      // Ink splatters
      return (
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-16 right-16 w-3 h-3 rounded-full bg-op-navy/65 filter blur-[0.3px]" />
          <div className="absolute top-20 right-14 w-1.5 h-1.5 rounded-full bg-op-navy/65" />
          <div className="absolute bottom-16 left-12 w-2 h-2 rounded-full bg-op-navy/65" />
          <span className="absolute bottom-6 right-6 text-[8px] font-mono text-op-navy/60">41°24'N, 2°10'E</span>
        </div>
      )
    }
  }

  return (
    <section id="beyondcode" className="relative bg-background py-24 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-text/5">
      
      {/* Background Soft Glow */}
      <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-op-ocean/5 rounded-full blur-[135px] pointer-events-none" />

      {/* Decorative Study Map Watermark */}
      <motion.div
        style={{
          x: shouldReduceMotion ? 0 : mousePos.x * -0.4,
          y: shouldReduceMotion ? 0 : mousePos.y * -0.4,
        }}
        className="absolute inset-0 pointer-events-none opacity-[0.05] md:opacity-[0.08] z-0 flex items-center justify-center"
      >
        <svg viewBox="0 0 1000 800" className="w-full h-full stroke-op-navy" fill="none" strokeWidth="1">
          <circle cx="500" cy="400" r="300" strokeDasharray="3 3" />
          <line x1="500" y1="0" x2="500" y2="800" />
          <line x1="0" y1="400" x2="1000" y2="400" />
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-surface/50 border border-op-gold/30 text-xs font-bold text-op-gold tracking-widest uppercase font-sans shadow-sm backdrop-blur-md"
          >
            Perspectives // Log
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-widest font-cinzel text-op-parchment uppercase"
          >
            Beyond <span className="bg-gradient-to-b from-op-parchment via-op-gold to-op-brown bg-clip-text text-transparent filter drop-shadow-md">Code</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-base md:text-lg leading-relaxed font-sans"
          >
            Step inside my explorer's study. These notebooks, scripts, and logs chronicle how humanities shape my backend engineering thinking.
          </motion.p>

          <div className="flex items-center justify-center gap-4 py-1">
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent to-op-brown/30" />
            <Anchor className="w-4 h-4 text-op-brown/50" />
            <div className="w-16 h-[1.5px] bg-gradient-to-l from-transparent to-op-brown/30" />
          </div>
        </div>

        {/* Explorer Study Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1 & 2: Bookshelf & Inline Details Note */}
          <div className="lg:col-span-2 space-y-6 flex flex-col justify-between">
            
            {/* Shelf container */}
            <div className="relative rounded-3xl bg-[#fffcf5] border-2 border-op-brown/40 p-6 flex flex-col justify-end min-h-[300px] shadow-sm select-none">
              
              {/* Corner chest-like brackets inside */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-op-brown/30 pointer-events-none" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-op-brown/30 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-op-brown/30 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-op-brown/30 pointer-events-none" />

              <h3 className="absolute top-5 left-6 font-cinzel text-xs font-bold tracking-widest text-op-navy/60 uppercase">
                Literature Bookshelf
              </h3>

              {/* Books Array standing side-by-side */}
              <div className="flex items-end justify-center gap-2 sm:gap-4 px-2 sm:px-6 relative pb-1">
                {books.map((book) => {
                  const isSelected = selectedBook?.id === book.id
                  
                  return (
                    <motion.button
                      key={book.id}
                      onClick={() => {
                        setSelectedBook(book)
                        window.dispatchEvent(new CustomEvent('book-opened', { detail: { id: book.id } }))
                      }}
                      whileHover={
                        shouldReduceMotion 
                          ? {} 
                          : { y: -20, rotate: book.tilt * 1.5, boxShadow: "0 12px 28px rgba(0,0,0,0.55)" }
                      }
                      animate={
                        isSelected && !shouldReduceMotion
                          ? { y: -16, rotate: book.tilt, boxShadow: "0 8px 20px rgba(0,0,0,0.45)" }
                          : { y: 0, rotate: 0, boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }
                      }
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className={`relative rounded-t-lg flex flex-col items-center cursor-pointer border border-[#fffcf5]/10 select-none group shrink-0 ${book.colorClass} ${book.heightClass} ${book.widthClass}`}
                    >
                      {/* Fine cloth/leather texture overlay */}
                      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)] bg-[size:3px_3px] opacity-[0.12] pointer-events-none mix-blend-overlay" />
                      
                      {/* Cylindrical spine highlights & shadows */}
                      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/25 to-transparent pointer-events-none" />
                      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/25 to-transparent pointer-events-none" />
                      
                      {/* Soft center glow that intensifies on hover */}
                      <div className="absolute inset-y-0 left-1/4 right-1/4 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-40 group-hover:via-white/12 transition-all duration-300 pointer-events-none" />

                      {/* Spine Decorative Structure */}
                      <div className="h-full w-full py-4 flex flex-col items-center justify-between pointer-events-none relative z-10 px-1">
                        
                        {/* Top gold foil band */}
                        <div className="w-full border-t border-b border-op-gold/30 my-0.5 opacity-80" />
                        
                        {/* Embossed symbol */}
                        <span className="text-[7px] sm:text-[9px] text-op-gold/60 font-serif my-0.5">
                          {book.symbol}
                        </span>
                        
                        {/* Title rotated 90 degrees */}
                        <div className="flex-1 flex items-center justify-center overflow-hidden my-3">
                          <span 
                            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                            className={`font-cinzel tracking-widest font-black uppercase text-center block ${book.titleColor} ${book.fontSizeStyle} drop-shadow-[0_1px_1.5px_rgba(247,201,72,0.3)] group-hover:text-white transition-colors duration-300`}
                          >
                            {book.title}
                          </span>
                        </div>

                        {/* Bottom gold foil band */}
                        <div className="w-full border-t border-b border-op-gold/30 my-0.5 opacity-80 mt-auto" />
                      </div>
                    </motion.button>
                  )
                })}

                {/* SIGNATURE FEATURE: Hidden Folded Journal Parchment tab */}
                <button
                  onClick={triggerFoundPage}
                  className="w-4 h-24 bg-[#eae0cd] border border-dashed border-op-brown/40 hover:bg-op-gold/20 rounded-t cursor-pointer shadow-sm relative group flex items-center justify-center transition-colors shrink-0"
                  aria-label="Investigate folded paper"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-op-brown/10 to-transparent pointer-events-none" />
                  <span className="text-[6px] tracking-widest uppercase font-mono text-op-navy/40 font-black vertical-text select-none group-hover:text-op-gold transition-colors">
                    LOG
                  </span>
                </button>
              </div>

              {/* Horizontal Wooden Shelf Board */}
              <div className="w-full h-4 rounded bg-op-brown border border-op-brown/30 shadow-[0_4px_10px_rgba(0,0,0,0.25)] relative">
                {/* Board grain */}
                <div className="absolute inset-x-0 top-0.5 h-[1.5px] bg-[#fffcf5]/15 opacity-60" />
              </div>
            </div>

            {/* Inline handwritten note expanding under books */}
            <div className="min-h-[160px] flex items-stretch">
              <AnimatePresence mode="wait">
                {selectedBook ? (
                  <motion.div
                    key={selectedBook.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.35 }}
                    className="relative w-full rounded-2xl bg-[#fffefc] border border-op-brown/30 p-6 sm:p-8 text-op-navy text-left shadow-sm flex flex-col justify-between"
                  >
                    {/* Brackets */}
                    <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-op-brown/20 pointer-events-none" />
                    <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-op-brown/20 pointer-events-none" />
                    <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-op-brown/20 pointer-events-none" />
                    <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-op-brown/20 pointer-events-none" />

                    <div className="space-y-4">
                      {/* Meta header */}
                      <div className="flex flex-wrap items-center justify-between border-b border-op-brown/10 pb-3 gap-2">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-op-ocean" />
                          <h4 className="font-cinzel text-sm sm:text-base font-bold uppercase tracking-wider text-op-navy">
                            {selectedBook.title}
                          </h4>
                          <span className="text-[10px] text-op-navy/60 font-sans font-medium">— {selectedBook.subtitle}</span>
                        </div>
                        {selectedBook.readYear && (
                          <span className="text-[9px] font-mono font-bold bg-op-brown/10 border border-op-brown/20 px-2 py-0.5 rounded text-op-brown">
                            Logged: {selectedBook.readYear}
                          </span>
                        )}
                      </div>

                      {/* Content grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm font-sans leading-relaxed text-op-navy/85">
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-bold tracking-wider text-op-navy/40 uppercase block">Why it influenced me</span>
                          <p className="font-medium">{selectedBook.why}</p>
                        </div>
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-bold tracking-wider text-op-navy/40 uppercase block">What I learned</span>
                          <p className="font-medium">{selectedBook.learned}</p>
                        </div>
                      </div>

                      {selectedBook.quote && (
                        <div className="border-t border-op-brown/10 pt-3 italic font-cinzel text-[10px] sm:text-xs text-op-gold uppercase tracking-wider text-center">
                          "{selectedBook.quote}"
                        </div>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <div className="w-full flex items-center justify-center border border-dashed border-op-brown/20 rounded-2xl p-8 bg-[#fffcf5]/20">
                    <span className="text-xs font-sans text-op-parchment/60 font-medium">Click a cataloged book above to read my notes...</span>
                  </div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Column 3: Cinema & History logs */}
          <div className="space-y-6 flex flex-col justify-between">
            
            {/* Cinema container */}
            <div className="relative rounded-3xl bg-[#fffcf5] border-2 border-op-brown/40 p-6 flex flex-col justify-between min-h-[220px] shadow-sm text-op-navy text-left hover:border-op-gold transition-colors duration-300">
              
              {/* Corner chest-like brackets inside */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-op-brown/30 pointer-events-none" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-op-brown/30 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-op-brown/30 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-op-brown/30 pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-op-brown/15 pb-2.5">
                  <Film className="w-4.5 h-4.5 text-op-red" />
                  <h3 className="font-cinzel text-xs font-bold tracking-widest text-op-navy uppercase">
                    Cinema
                  </h3>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-op-navy/85 font-sans font-medium">
                  Studying cinematic syntax and pacing teaches me observation, pacing structure, and spatial constraints. Screencraft is a system design engine: prioritizing structural focus, selecting simple framing, and editing out irrelevant complexity.
                </p>
              </div>

              <div className="flex items-center gap-1.5 pt-4 text-[9px] font-mono font-bold tracking-wider text-op-navy/40 uppercase">
                <span>visual pacing // attention to detail</span>
              </div>
            </div>

            {/* History container */}
            <div className="relative rounded-3xl bg-[#fffcf5] border-2 border-op-brown/40 p-6 flex flex-col justify-between min-h-[220px] shadow-sm text-op-navy text-left hover:border-op-gold transition-colors duration-300">
              
              {/* Corner chest-like brackets inside */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-op-brown/30 pointer-events-none" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-op-brown/30 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-op-brown/30 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-op-brown/30 pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-op-brown/15 pb-2.5">
                  <Clock className="w-4.5 h-4.5 text-op-ocean" />
                  <h3 className="font-cinzel text-xs font-bold tracking-widest text-op-navy uppercase">
                    History
                  </h3>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-op-navy/85 font-sans font-medium">
                  Exploring historical institutions and systemic collapses maps out structural cycles. Examining how past resource pipelines scaled and failed informs my engineering approach to architecture longevity and load mitigation.
                </p>
              </div>

              <div className="flex items-center gap-1.5 pt-4 text-[9px] font-mono font-bold tracking-wider text-op-navy/40 uppercase">
                <span>systems evolution // long-term balance</span>
              </div>
            </div>

          </div>
        </div>

        {/* Calligraphy Writing center block & Pinned Philosophy pinboard */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Calligraphy Writing (3/5 width) */}
          <div className="lg:col-span-3 relative rounded-3xl bg-gradient-to-b from-[#1b344d]/30 to-[#0a1829]/70 border-2 border-op-gold/20 p-8 sm:p-12 flex flex-col justify-between shadow-sm min-h-[300px] text-left">
            {/* Sun rays overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(247,201,72,0.06),transparent_60%)] pointer-events-none" />
            
            {/* Brackets */}
            <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-op-brown/30 pointer-events-none" />
            <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-op-brown/30 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-op-brown/30 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-op-brown/30 pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-2 border-b border-[#fffcf5]/10 pb-3">
                <PenTool className="w-4.5 h-4.5 text-op-gold" />
                <h3 className="font-cinzel text-xs font-bold tracking-widest text-op-parchment uppercase">
                  Writing
                </h3>
              </div>
              
              <p className="text-xs sm:text-sm leading-relaxed text-op-parchment/80 font-sans font-medium">
                Drafting poetry and prose requires observation, semantic accuracy, and empathy. The act of translating complex human dynamics into concise words mirrors the process of composing strict server API structures.
              </p>
            </div>

            {/* Centerpiece Quote Calligraphy */}
            <div className="py-8 relative z-10 text-center max-w-lg mx-auto">
              <h4 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-black text-op-gold uppercase tracking-wider leading-snug filter drop-shadow-md">
                "Words help me understand people. <br />
                Code helps me solve their problems."
              </h4>
              <span className="text-[8px] font-mono tracking-widest text-op-gold/50 uppercase mt-4 block">
                — SCATTERED MANUSCRIPT FRAGMENTS // ANUJ MISHRA
              </span>
            </div>

            <div className="text-[9px] font-mono font-bold tracking-widest text-op-gold/60 uppercase relative z-10">
              <span>empathy // observation // structural writing</span>
            </div>
          </div>

          {/* Philosophy pinboard (2/5 width) */}
          <div className="lg:col-span-2 relative rounded-3xl bg-[#fffcf5] border-2 border-op-brown/40 p-6 flex flex-col justify-between shadow-sm min-h-[300px] text-op-navy text-left hover:border-op-gold transition-colors duration-300">
            
            {/* Corner chest-like brackets inside */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-op-brown/30 pointer-events-none" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-op-brown/30 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-op-brown/30 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-op-brown/30 pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-op-brown/15 pb-2.5">
                <Compass className="w-4.5 h-4.5 text-op-gold animate-spin-slow" />
                <h3 className="font-cinzel text-xs font-bold tracking-widest text-op-navy uppercase">
                  Personal Philosophy
                </h3>
              </div>

              {/* Pin note links */}
              <div className="space-y-2.5 font-sans">
                {philosophies.map((p) => {
                  const isHovered = hoveredPhilosophy === p.title
                  return (
                    <div 
                      key={p.title}
                      onMouseEnter={() => setHoveredPhilosophy(p.title)}
                      onMouseLeave={() => setHoveredPhilosophy(null)}
                      className={`relative border rounded-xl p-3 select-none transition-all duration-300 ${
                        isHovered 
                          ? "bg-op-gold/5 border-op-gold/40 shadow-sm" 
                          : "bg-op-brown/5 border-op-brown/20 hover:border-op-gold/25"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-op-navy">{p.title}</span>
                        {/* Little red pin head representation */}
                        <div className="w-1.5 h-1.5 rounded-full bg-op-red shadow-sm shrink-0" />
                      </div>

                      {/* Sliding sub-content summary */}
                      <AnimatePresence initial={false}>
                        {isHovered && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden mt-1.5 border-t border-op-brown/10 pt-1"
                          >
                            <p className="text-[10px] text-op-navy/70 leading-relaxed font-medium">
                              {p.explanation}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="text-[9px] font-mono font-bold tracking-widest text-op-navy/40 uppercase pt-4">
              <span>5 Navigator principles</span>
            </div>
          </div>

        </div>

      </div>

      {/* --- Found Pages Signature Unfolding Journal overlay --- */}
      <AnimatePresence>
        {foundPageOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop dark focus overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFoundPageOpen(false)}
              className="absolute inset-0 bg-op-navy/75 backdrop-blur-md cursor-pointer"
            />

            {/* Lantern light aura glow behind paper */}
            <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(247,201,72,0.25),transparent_70%)] blur-2xl pointer-events-none" />

            {/* Folded paper parchment modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 4 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md bg-[#fffcf5] border-2 border-op-brown text-op-navy rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-8 sm:p-10 text-left overflow-hidden z-10 flex flex-col justify-between min-h-[340px]"
            >
              {/* Procedural distressed graphics background based on selected page */}
              {renderDistressEffect(foundPageIndex)}

              {/* Deck margins and corner folds */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-op-brown/30" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-op-brown/30" />
              
              {/* Close trigger button */}
              <button
                onClick={() => setFoundPageOpen(false)}
                className="absolute top-4 right-4 w-7 h-7 rounded-full border border-op-brown/40 flex items-center justify-center hover:text-op-red hover:border-op-red transition-all cursor-pointer shadow-sm relative group z-20"
                aria-label="Close page"
              >
                <div className="absolute inset-0.5 rounded-full border border-dashed border-op-brown/10 group-hover:rotate-90 transition-transform duration-500" />
                <X className="w-3.5 h-3.5 relative z-10" />
              </button>

              <div className="space-y-6 pt-4 flex-1 flex flex-col justify-between">
                
                {/* Journal entry text */}
                <div className="space-y-4">
                  <span className="font-mono text-[8px] font-bold text-op-brown/50 uppercase tracking-widest block">
                    Expedition Log // Page #{foundPageIndex + 1}
                  </span>
                  
                  {/* Handwritten Title */}
                  <h4 className="font-cinzel text-xl font-bold tracking-widest text-op-navy border-b border-op-brown/15 pb-2 uppercase">
                    {journalCollection[foundPageIndex].title}
                  </h4>

                  {/* Hindi/Devanagari prose text */}
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-lg leading-relaxed text-op-navy/90 font-serif italic whitespace-pre-line pt-2"
                  >
                    {journalCollection[foundPageIndex].content}
                  </motion.p>
                </div>

                {/* Signature footer */}
                <div className="border-t border-op-brown/15 pt-4 space-y-1 mt-6">
                  <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-op-navy block">
                    — Anuj Mishra
                  </span>
                  <span className="font-mono text-[8px] tracking-widest text-op-gold uppercase block">
                    "Found somewhere on the Grand Line."
                  </span>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  )
}
