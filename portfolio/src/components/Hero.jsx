import { useEffect, useState } from 'react'
import { Wand2, Briefcase, GraduationCap, Clock } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'


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
        }, 2000);
        return () => clearInterval(interval)
    }, [])

    const CurrentIcons = words[currentText].icon



    return (
        <>
            <div className='bg-gray-950 flex flex-col w-full h-screen items-center py-40'>
                <div className='border border-white/10  flex justify-center self-center bg-white/5 items-center gap-2 text-white px-4 py-2 rounded-full'>
                    <p className='bg-green-500 w-2 h-2 rounded-full animate-pulse'></p>

                    <div className='text-white flex items-center gap-1'>
                        Available for {" "}
                    <span className='font-semibold flex items-center gap-1 ml-1'>
                                    <CurrentIcons className='w-4 h-4' /> {words[currentText].text}
                                </span>

                    </div>
                </div>


                <div className='py-30 flex flex-col items-center'>

                    <h1 className='text-6xl text-white'>Hey. i'm Adnan</h1>
                    <p className='text-white'>How are you  hope you doing fine</p>
                </div>

            </div>
        </>
    )
}

export default Hero
