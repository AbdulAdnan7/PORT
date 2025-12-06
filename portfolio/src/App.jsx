import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import { AnimatedBackground } from './components/AnimatedBackround'


function App() {
  return (
    <>
    <AnimatedBackground />
    <Hero />
    </>
  )
}

export default App