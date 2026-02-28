import React from 'react'

const BuildingPill = ({ text }) => {

  const isCompleted = text === "Completed"

  const pillColor = isCompleted ? "bg-green-600/10 text-green-400 border-green-500/20"  : "bg-yellow-600/10 text-yellow-400 border-yellow-500/20"

  const dotColor = isCompleted ?  "bg-green-500" : "bg-yellow-500"

  return (
   <>
   <span className={`inline-flex items-center gap-1 px-3 py-0.5 text-xs font-medium rounded-full ${pillColor}  border animate-pulse`}>
  <span className={`w-2 h-2 ${dotColor} rounded-full`}></span>{text}
   </span>
   </>
  )
}

export default BuildingPill