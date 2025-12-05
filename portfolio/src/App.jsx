import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currentText, setCurrentText] = useState(0)

    const words = [
      { text: "freelance" },
      { text: "internships" },
      { text: "part-time" },
      { text: "full-time" },
    ]

    useEffect(() => {
      const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % words.length)
    }, 2000);
     return () => clearInterval(interval)
  }, []  )



  return (
    <>
   <div className='bg-gray-950 flex flex-col w-full h-screen justify-center items-center'>
    <div className='border border-white/10 flex justify-center bg-white/5 items-center gap-2 text-white px-4 py-2 rounded-full'>
      <p className='bg-green-500 w-2 h-2 rounded-full animate-pulse'></p>
      <p className='text-white'>Available for {words[currentText].text}</p>
    </div>
  
   <div className=''>

   <h1 className='text-6xl text-white'>Heelo</h1>
   <p className='text-white'>How are you  hope you doing fine</p>
   </div>

   </div>
    </>
  )
}

export default App
