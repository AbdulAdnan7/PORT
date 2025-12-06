import React from 'react'

const BuildingPill = ({ text = "Building" }) => {
  return (
   <>
   <span className='inline-flex items-center gap-1 px-3 py-0.5 text-xs font-medium rounded-full bg-green-500/10 text-green-400 border border-green-500/20 animate-pulse'>
  <span className='w-2 h-2 bg-green-400 rounded-full'></span>{text}
   </span>
   </>
  )
}

export default BuildingPill