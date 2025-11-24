import { useState } from 'react'
import { Route, Routes, Link } from 'react-router'
import './App.css'
import Home from './Components/Home'

function App() {

  return (
    <div className='dark:bg-linear-to-br dark:from-slate-900 dark:via-indigo-900 dark:to-black '>
     <Routes>
      <Route path='/' element={<Home />} />
     </Routes>
    </div>
  )
}

export default App
