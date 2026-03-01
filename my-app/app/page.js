import Footer from '@/Components/layout/Footer'
import Navbar from '@/Components/layout/Navbar'
import Features from '@/Components/sections/Features'
import Hero from '@/Components/sections/Hero'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen bg-[#E4E0DD]'>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default page