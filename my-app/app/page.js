import Navbar from '@/Components/layout/Navbar'
import Hero from '@/Components/sections/Hero'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen bg-[#E4E0DD]'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default page