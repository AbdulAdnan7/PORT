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
    }, [])

    
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    return (
        <>
            <nav className='fixed inset-x-0 top-12 z-50'>
                <div className='hidden md:flex w-full justify-center'>
                    <div className='flex items-center gap-8 px-10 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-lg'>
                        <button 
                            onClick={() => scrollToSection('hero')}
                            className='gap-2 flex text-white hover:text-gray-300 items-center'
                        >
                            <Home /> Home
                        </button>
                        <button 
                            onClick={() => scrollToSection('projects')}
                            className='flex gap-2 text-white hover:text-gray-300 items-center'
                        >
                            <Briefcase /> Projects
                        </button>
                      
                        <button 
                            onClick={() => scrollToSection('about')}
                            className='flex gap-2 text-white hover:text-gray-300 items-center'
                        >
                            <User /> About
                        </button>
                        <button 
                            onClick={() => scrollToSection('contact')}
                            className='flex gap-2 text-white hover:text-gray-300 items-center'
                        >
                            <Mail /> Contact
                        </button>

                        <span className='text-gray-200 font-medium px-3 py-1 flex gap-2 rounded-full'>
                            <Clock /> {time}
                        </span>
                    </div>
                </div>

                <div className='md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50'>
                    <div className='flex items-center justify-between gap-6 px-6 py-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-xl shadow-lg'>
                        <button 
                            onClick={() => scrollToSection('hero')}
                            className='text-white'
                        >
                            <Home className="w-6 h-6" />
                        </button>
                        <button 
                            onClick={() => scrollToSection('projects')}
                            className='text-white'
                        >
                            <Briefcase className="w-6 h-6" />
                        </button>
                        <span className='flex gap-2 text-white'>
                            <Clock />{time}
                        </span>
                        <button 
                            onClick={() => scrollToSection('about')}
                            className='text-white'
                        >
                            <User className="w-6 h-6" />
                        </button>
                        <button 
                            onClick={() => scrollToSection('contact')}
                            className='text-white'
                        >
                            <Mail className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar