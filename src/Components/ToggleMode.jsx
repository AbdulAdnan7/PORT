import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { FaDesktop } from 'react-icons/fa6'

const ToggleMode = () => {
   const options = [
    { id: '1', icon: <FaSun className='text-yellow-500' /> },
    { id: '2', icon: <FaMoon /> },
    { id: '3', icon: <FaDesktop /> },
   ]

  return (
    <div className='flex items-center justify-center rounded'>
        <div className='gap-2 flex  items-center justify-center'>
       { options.map((op) => (
        <div className='hover:bg-gray-400 p-1 rounded text-2xl' key={op.id}>{op.icon}</div>
       ) ) }
        </div>
    </div>
  )
}

export default ToggleMode