import { useEffect, useState } from 'react'
import { Wand2, Briefcase, GraduationCap, Clock, DownloadCloud, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import SkillSet from './SkillSet'
import { AnimatedBackground } from './AnimatedBackround'


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
            <section className='bg-gray-950 flex flex-col w-full items-center py-40' id='hero'>
                <AnimatedBackground />
                
                <div className='border border-white/10  flex justify-center self-center bg-white/5 items-center gap-2 text-white px-4 py-2 rounded-full'>
                    <p className='bg-green-500 w-2 h-2 rounded-full animate-pulse'></p>

                    <div className='text-white flex items-center gap-1'>
                        Available for {" "}
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentText}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="inline-flex items-center gap-1.5 font-medium dark:text-white"
                            >

                                <span className='font-semibold flex items-center gap-1 ml-1'>
                                    <CurrentIcons className='w-4 h-4' /> {words[currentText].text}
                                </span>
                            </motion.span>
                        </AnimatePresence>

                    </div>
                </div>

                <div className="py-16 px-4 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="px-4 flex flex-col items-center"
                    >
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-white text-center">
                            Hey, I'm Adnan
                        </h1>
                        <p className="text-sm sm:text-base md:text-sm text-white mt-8 text-center max-w-full sm:max-w-md mx-auto leading-relaxed">
                            I create minimal websites. In my free time, I watch anime and listen to music.
                            I'm <span className="border border-white/20 px-2 py-1 rounded-full bg-white/5">open to work</span> — check my socials below.
                        </p>
                    </motion.div>
                </div>

                <div className='flex'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='flex justify-center gap-3'
                    >
                        <a href="/AbdulAdnan.pdf
                    " download={true}>

                            <button className="text-white border border-white/20 bg-white/5 rounded-full flex items-center gap-2 px-6 py-2 font-medium transition-all duration-300 hover:bg-white/10 hover:scale-105">
                                <span><DownloadCloud /></span>    Resume
                            </button>
                        </a>
                        <a
                            href="mailto:peerabduladnan@gmail.com"
                            className="text-white border border-white/20 bg-green-500/10 rounded-full flex items-center gap-2 px-6 py-2 font-medium hover:bg-green-500/20 hover:scale-105"
                        >
                            <Briefcase /> Hire Me
                        </a>

                    </motion.div>
                </div>

            <div className="mt-16 flex gap-4">

  <a 
    href="https://github.com/AbdulAdnan7"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github className="w-6 h-6 text-white/70 hover:text-white hover:scale-110 transition-all duration-300" />
  </a>

  <a 
    href="https://x.com/peerabduladnan"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Twitter className="w-6 h-6 text-white/70 hover:text-white hover:scale-110 transition-all duration-300" />
  </a>

  <a 
    href="https://instagram.com/peerabduladnan"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Instagram className="w-6 h-6 text-white/70 hover:text-white hover:scale-110 transition-all duration-300" />
  </a>

  <a 
    href="https://linkedin.com/in/peerabduladnan"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin className="w-6 h-6 text-white/70 hover:text-white hover:scale-110 transition-all duration-300" />
  </a>

</div>

<div className='mt-10'>
    <div className="flex flex-col items-center mt-10">
  <p className="text-gray-400 text-sm">Scroll Down</p>
  
  <div className="mt-2 animate-bounce">
    <svg
      width="28"
      height="28"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  </div>
</div>

</div>




            </section>
        </>
    )
}

export default Hero
