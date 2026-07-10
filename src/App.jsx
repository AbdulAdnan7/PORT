import { useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import { AnimatedBackground } from './components/AnimatedBackround'
import SkillSet from './components/SkillSet'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import  JourneyMap  from './components/Journey'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
    
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    
    window.history.replaceState(null, null, ' ')
    
  
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }, [])

  return (
    <>
      <div className='relative'>
        <AnimatedBackground variant='mixed' density='medium' />
        <div className='relative z-10'>
          <Navbar />
          <Hero />
          <SkillSet />
          <Projects />
          <AboutMe />
          <JourneyMap />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App