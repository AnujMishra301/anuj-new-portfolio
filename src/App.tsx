import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Manifesto from './sections/Manifesto'
import Projects from './sections/Projects'
import Timeline from './sections/Timeline'
import TechStack from './sections/TechStack'
import BeyondCode from './sections/BeyondCode'
import Dashboard from './sections/Dashboard'
import GithubStats from './components/GithubStats'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Manifesto />
      <Projects />
      <Timeline />
      <TechStack />
      <BeyondCode />
      <Dashboard />
      <GithubStats />
      <Contact />
      <Footer />
    </div>
  )
}
