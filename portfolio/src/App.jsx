import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import { AnimatedBackground } from './components/AnimatedBackround'
import SkillSet from './components/SkillSet'
import Projects from './components/Projects'


function App() {
  return (
    <>
      <div className='relative'>
        <AnimatedBackground variant='mixed' density='medium' />
        <div className='relative z-10'>
          <Hero />
          <SkillSet />
          <Projects />
        </div>

      </div>

    </>
  )
}

export default App