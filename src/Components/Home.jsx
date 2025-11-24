import React from 'react'
import ToggleMode from './ToggleMode'
import { Link } from 'react-router'
import HeroSection from './HeroSection'


const Home = () => {
    return (
  <div className="min-h-screen max-w-4xl text-white mx-auto ">
  <header className="p-4 flex justify-between">
   <Link to={'/'}>
    <h1 className="text-3xl font-bold font-corpta">ADN<span className='text-red-600'>A</span>N</h1>
   </Link>
   { /**  <ToggleMode /> */ }
  </header>
  <div className='px-4'> 
    <HeroSection />
  </div>
</div>

    )
}

export default Home
