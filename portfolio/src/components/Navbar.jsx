import React, { useEffect, useState } from 'react'
import { Home, User, Briefcase, Mail, Clock } from 'lucide-react'

const Navbar = () => {

    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            const formatted = now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            })
            setTime(formatted)
        }

        updateTime()

        const interval = setInterval(updateTime, 1000)


        return () => clearInterval(interval)
    })

    return (
        <>
            <nav className='fixed inset-x-0 top-12 z-50'>
                <div className=' hidden md:flex w-full justify-center'>
                    <div className='flex items-center gap-8 px-10 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-lg'>
                        <a href="#home" className='gap-2 flex text-white hover:text-gray-300 items-center'> <Home /> Home</a>
                        <a href="#project" className='flex gap-2 text-white hover:text-gray-300 items-center'><Briefcase /> Projects</a>
                        <a href='#aboutMe' className='flex gap-2 text-white hover:text-gray-300 items-center'><User /> About</a>
                        <a href='#contact' className='flex gap-2 text-white hover:text-gray-300 items-center'><Mail /> Contact</a>
                   
                        <span className='text-gray-200 font-medium px-3 py-1 flex  gap-2 rounded-full'> <Clock /> {time}</span>
                    </div>
                </div>

  
                <div className='md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50'>
                    <div className='flex items-center justify-between gap-6 px-6 py-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-xl shadow-lg text-white'>
                        <a href="#home"><Home className="w-6 h-6" /></a>
                        <a href="#projects" className='w-6 h-6'><Briefcase /></a>
                        <span className='flex gap-2'><Clock/>{time}</span>
                        <a href="#aboutMe" className='w-6 h-6'><User /></a>
                        <a href="#contact" className='w-6 h-6'><Mail /></a>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
