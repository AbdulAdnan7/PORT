import React, { useEffect, useState } from 'react'
import { Home, User, Briefcase, Mail, Clock } from 'lucide-react'
import Logo from '../assets/Logo.svg?react'
const Navbar = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            const formatted = now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
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
            {/* Desktop Logo — fixed left */}
            <div className='hidden md:block fixed top-6 left-1/5 z-50 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full'>
                <Logo className="h-5 w-auto max-w-[140px]" />
            </div>

            {/* Desktop Clock — fixed right */}
            <div className='hidden md:flex fixed top-6 right-1/4 z-50 items-center gap-1.5 text-sm text-gray-200 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full'>
                <Clock className='w-4 h-4' /> {time}
            </div>

            {/* Desktop Pill — centered */}
            <nav className='hidden md:flex fixed inset-x-0 top-6 z-50 justify-center'>
                <div className='flex items-center gap-5 px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-lg text-sm'>
                    <button onClick={() => scrollToSection('hero')} className='gap-1.5 flex hover:text-gray-300 items-center'>
                        <Home className='w-4 h-4' /> Home
                    </button>
                    <button onClick={() => scrollToSection('projects')} className='flex gap-1.5 hover:text-gray-300 items-center'>
                        <Briefcase className='w-4 h-4' /> Projects
                    </button>
                    <button onClick={() => scrollToSection('about')} className='flex gap-1.5 hover:text-gray-300 items-center'>
                        <User className='w-4 h-4' /> About
                    </button>
                    <button onClick={() => scrollToSection('contact')} className='flex gap-1.5 hover:text-gray-300 items-center'>
                        <Mail className='w-4 h-4' /> Contact
                    </button>
                </div>
            </nav>

            {/* Mobile Logo — fixed top left */}
            <div className='md:hidden fixed top-6 left-6 z-50 bg-white/10 backdrop-blur-xl border border-white/20 px-3 py-1.5 rounded-full w-fit'>
                <Logo className="h-5 w-auto max-w-[140px]" />
            </div>

            {/* Mobile Nav — fixed bottom */}
            <div className='md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50'>
                <div className='flex items-center gap-6 px-6 py-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-xl shadow-lg'>
                    <button onClick={() => scrollToSection('hero')}><Home className="w-5 h-5" /></button>
                    <button onClick={() => scrollToSection('projects')}><Briefcase className="w-5 h-5" /></button>
                    <span className='flex gap-1.5 items-center text-sm'><Clock className='w-4 h-4' />{time}</span>
                    <button onClick={() => scrollToSection('about')}><User className="w-5 h-5" /></button>
                    <button onClick={() => scrollToSection('contact')}><Mail className="w-5 h-5" /></button>
                </div>
            </div>
        </>
    )
}

export default Navbar


