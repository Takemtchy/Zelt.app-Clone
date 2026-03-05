import Footer from '@/Components/layout/Footer'
import Navbar from '@/Components/layout/Navbar'
import Features from '@/Components/sections/Features'
import Hero from '@/Components/sections/Hero'
import SocialProof from '@/Components/sections/SocialProof'
import AllInOne from '@/Components/sections/AllInOne'
import EasyToUse from '@/Components/sections/EasyToUse'
import Testimonials from '@/Components/sections/Testimonials'
import FAQ from '@/Components/sections/FAQ'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen bg-[#E4E0DD] overflow-x-hidden'>
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <AllInOne />
      <EasyToUse />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default page