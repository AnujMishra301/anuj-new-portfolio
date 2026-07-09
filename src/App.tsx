import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Principles from './sections/Principles'
import Projects from './sections/Projects'
import Timeline from './sections/Timeline'
import TechStack from './sections/TechStack'
import BeyondCode from './sections/BeyondCode'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Principles />
      <Projects />
      <Timeline />
      <TechStack />
      <BeyondCode />
      <Contact />
      <Footer />
    </div>
  )
}
