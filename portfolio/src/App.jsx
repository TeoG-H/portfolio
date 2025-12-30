import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'

const App = () => {
  return (
    <div className='min-h-scren bg-black'>
      <Navbar/>
      <main>
        <Hero/>
      </main>
    </div>
  )
}

export default App