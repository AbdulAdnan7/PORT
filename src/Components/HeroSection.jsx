import React from 'react'
import Hero from '../assets/Hero.jpeg'
import { FiFileText } from 'react-icons/fi'

const HeroSection = () => {
    return (
        <div className='mt-10'>
            <div
                className='w-35 h-35'
            ><img src={Hero} className='rounded-2xl' /></div>
            <div className='ml-1'>
                <h1 className='font-poppins text-3xl mt-4'>Adnan<span className='text-rose-500 px-1 mt-2'>♠</span></h1>
                <p className='font-semibold font-poppins text-ms'>Web2 & UI/UX</p>
            </div>

            <div className="max-w-3xl ml-1">
                <p className="text-ls mt-4 md:text-ms font-poppins max-w-xl">
                    I enjoy creating interactive websites, and in my free time,  I love binge-watching anime and reading manga.
                </p>
            </div>

            <div className='flex gap-4'>
                <a href="../src/assets/AbdulAdnan.pdf" download>
                <button className='bg-linear-to-br from-rose-300 via-rose-600 to-rose-800 font-semibold hover:bg-white hover:border-rose-600 cursor-pointer flex items-center gap-2 p-3 rounded mt-4 ml-1'> <FiFileText /> Resume</button>
                </a>

                <button className='bg-linear-to-br from-emerald-700 via-emerald-800 to-emerald-300 disabled:opacity-45 disabled:cursor-not-allowed  p-3 rounded flex items-center mt-4'>

                    <span className="w-4 h-4 mr-1 bg-emerald-400 rounded-full animate-pulse"></span>

                  <h1 className=' font-semibold'>Available</h1>
                </button>
            </div>

        </div>
    )
}

export default HeroSection
