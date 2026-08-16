import { useEffect, useState } from 'react'
import { Wand2, Briefcase, GraduationCap, Clock, DownloadCloud, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import SkillSet from './SkillSet'
import { AnimatedBackground } from './AnimatedBackround'
import AbdulAdnan from '/src/assets/abduladnan.jpeg'


function Hero() {
    const [currentText, setCurrentText] = useState(0)

    const words = [
        { text: "freelance", icon: Wand2 },
        { text: "internships", icon: GraduationCap },
        { text: "part-time", icon: Clock },
        { text: "full-time", icon: Briefcase },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % words.length)
        }, 6000);
        return () => clearInterval(interval)
    }, [])

    const CurrentIcons = words[currentText].icon



    return (
        <>
            <section className='relative  flex flex-col items-center bg-bg justify-start px-6 text-text-primary  pt-20 md:pt-36' id='hero'>
                <div className='w-full max-w-3xl mx-auto flex flex-col items-center gap-6'>

                    {/* Pill — always at top */}
                    <div className='border border-border bg-surface flex w-fit max-w-[90vw] items-center gap-1.5 px-2.5 py-1 rounded-full text-xs md:text-sm mb-6 overflow-visible'>
                        <p className='bg-green-500 w-2 h-2 rounded-full animate-pulse'></p>
                        <div className='flex items-center gap-1'>
                            Available for {" "}
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentText}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="inline-flex items-center gap-1.5 font-medium"
                                >
                                    <span className='font-semibold flex items-center gap-1 ml-1'>
                                        <CurrentIcons className='w-4 h-4' /> {words[currentText].text}
                                    </span>
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className='w-full max-w-5xl mx-auto flex flex-row items-start gap-4 md:gap-4'>

                        {/* Left — Image */}
                        <div className='w-1/3 md:w-1/2 flex flex-col  gap-3 justify-center'>
                            <img
                                src={AbdulAdnan}
                                className='w-24 h-24 md:w-40 md:h-40 object-cover rounded-2xl' />
                            {/* Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className='flex gap-3 md:hidden'
                            >
                                <div className='flex flex-col sm gap-2 md:gap-3 '>
                                    <a href="/AbdulAdnan.pdf" download={true}>
                                        <button className="border border-border bg-surface rounded-full flex items-center gap-1 md:gap-2 px-3 md:px-6 py-1.5 md:py-2 text-sm font-medium transition-all duration-300 hover:scale-105">
                                            <DownloadCloud className='w-4 h-4' /> Resume
                                        </button>
                                    </a>
                                    <a
                                        href="mailto:peerabduladnan@gmail.com"
                                        className="bg-accent text-bg rounded-full flex items-center gap-1 md:gap-2 px-3 md:px-6 py-1.5 md:py-2 text-sm font-medium hover:opacity-90 hover:scale-105"
                                    >
                                        <Briefcase className='w-4 h-4' /> <span>Hire Me</span>
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right — Text */}
                        <div className='w-2/3 md:w-2/3 flex flex-col items-start gap-3 md:gap-4'>



                            {/* Heading */}
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.15 }}
                                className="text-3xl sm:text-5xl md:text-6xl font-semibold"
                            >
                                Hey, I'm Adnan
                            </motion.h1>

                            {/* Bio */}
                            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                                I create minimal websites. In my free time, I watch anime and listen to music.
                                I'm <span className="border border-green-500/30 bg-green-500/15 backdrop-blur-md text-green-400 px-2 py-1 rounded-full">open to work</span> — check my socials below.
                            </p>

                            {/* Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className='flex gap-3 hidden md:block '
                            >
                                <div className='flex  sm gap-2 md:gap-3 '>
                                    <a href="/AbdulAdnan.pdf" download={true}>
                                        <button className="border border-border bg-surface rounded-full flex items-center gap-1 md:gap-2 px-3 md:px-6 py-1.5 md:py-2 text-sm font-medium transition-all duration-300 hover:scale-105">
                                            <DownloadCloud className='w-4 h-4' /> Resume
                                        </button>
                                    </a>
                                    <a
                                        href="mailto:peerabduladnan@gmail.com"
                                        className="bg-accent text-bg rounded-full flex items-center gap-1 md:gap-2 px-3 md:px-6 py-1.5 md:py-2 text-sm font-medium hover:opacity-90 hover:scale-105"
                                    >
                                        <Briefcase className='w-4 h-4' /> <span className='hidden md:inline'>Hire Me</span>
                                    </a>
                                </div>
                            </motion.div>



                            {/* Socials */}
                            <div className="flex gap-4">
                                <a href="https://github.com/AbdulAdnan7" target="_blank" rel="noopener noreferrer">
                                    <Github className="w-6 h-6 text-text-secondary hover:text-text-primary hover:scale-110 transition-all duration-300" />
                                </a>
                                <a href="https://x.com/peerabduladnan" target="_blank" rel="noopener noreferrer">
                                    <Twitter className="w-6 h-6 text-text-secondary hover:text-text-primary hover:scale-110 transition-all duration-300" />
                                </a>
                                <a href="https://instagram.com/peerabduladnan" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="w-6 h-6 text-text-secondary hover:text-text-primary hover:scale-110 transition-all duration-300" />
                                </a>
                                <a href="https://linkedin.com/in/peerabduladnan" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="w-6 h-6 text-text-secondary hover:text-text-primary hover:scale-110 transition-all duration-300" />
                                </a>
                            </div>

                        </div>
                    </div >

                    {/* Scroll Down 
                    < div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center" >
                        <p className="text-text-secondary text-sm">Scroll Down</p>
                        <div className="mt-2 animate-bounce text-text-secondary">
                            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                    </div > */}
                </div>

            </section >
        </>
    )
}

export default Hero