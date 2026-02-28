'use client'

import { React, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RiArrowDownSLine } from "@remixicon/react";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {

  const [productHovered, setProductHovered] = useState(false)
  const [resourcesHovered, setResourcesHovered] = useState(false)

  const productMenuRef = useRef(null)
  const resourcesMenuRef = useRef(null)

  const productTl = useRef(null) 
  const resourcesTl = useRef(null)


useGSAP(() => {
    productTl.current = gsap.timeline({ paused: true })
      .fromTo(productMenuRef.current, 
        { opacity: 0, scale: 0.95, y: 10, xPercent: -50, display: 'none' }, 
        { opacity: 1, scale: 1, y: 0, display: 'flex', duration: 0.3, ease: "power4.out" }
      )

    resourcesTl.current = gsap.timeline({ paused: true })
      .fromTo(resourcesMenuRef.current, 
        { opacity: 0, scale: 0.95, y: 10, xPercent: -50, display: 'none' }, 
        { opacity: 1, scale: 1, y: 0, display: 'flex', duration: 0.3, ease: "power4.out" }
      )
  })

  useGSAP(() => {
    if (productHovered) productTl.current.play()
    else productTl.current.reverse()
  }, [productHovered])

  useGSAP(() => {
    if (resourcesHovered) resourcesTl.current.play()
    else resourcesTl.current.reverse()
  }, [resourcesHovered])


  return (
    <nav className='z-50 fixed top-4 left-1/2 -translate-x-1/2 w-[44%] man-w-5xl rounded-[15px] bg-white/40 pl-6 pr-1.5 py-1.5 backdrop-blur-md border border-white/40 flex justify-between items-center'>
      <div>
        <Image src={'/images/logo.svg'} alt='logo' width={50} height={40} />
      </div>

      <div className='flex items-center relative' onMouseEnter={() => setProductHovered(true)} onMouseLeave={() => setProductHovered(false)}>
        <span className='text-sm cursor-pointer'>
          Product
        </span>
        <RiArrowDownSLine 
          size={18} className={`transition-transform cursor-pointer duration-300 ${productHovered ? 'rotate-180' : 'rotate-0'}`} 
          /> 
          
            <div ref={productMenuRef} className='absolute top-full left-1/2 -translate-x-1/2 mt-8  w-[900px] bg-white rounded-[30px] border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)] pl-6 pr-12 py-12 flex gap-8  opacity-0'>
                <div className='absolute -top-8 left-0 w-full h-10 bg-transparent'></div>
                <div className='flex flex-col gap-6'>
                  <div>
                    <h1 className='text-sm font-medium'>People</h1>
                    <p className='text-[12px] text-gray-600'>Employee system of record</p>
                  </div>
                  <div className='flex flex-col gap-2 text-black/90'>
                    <h1 className='text-sm font-medium hover:text-[#595C5D] cursor-pointer'>People</h1>
                    <h1 className='text-sm font-medium hover:text-[#595C5D] cursor-pointer'>Time off</h1>
                    <h1 className='text-sm font-medium hover:text-[#595C5D] cursor-pointer'>Scheduling</h1>
                  </div>
                </div> 

                <div className='flex flex-col gap-6'>
                  <div>
                    <h1 className='text-sm font-medium'>Growth</h1>
                    <p className='text-[12px] text-gray-600'>Excel at performance and engagement</p>
                  </div>
                  <div className='flex flex-col gap-2 text-black/90'>
                    <h1 className='text-sm font-medium hover:text-[#595C5D] cursor-pointer'>Reviews</h1>
                    <h1 className='text-sm font-medium hover:text-[#595C5D] cursor-pointer'>Surveys</h1>
                    <h1 className='text-sm font-medium hover:text-[#595C5D] cursor-pointer'>Goal</h1>
                  </div>
                </div>

                <div className='flex flex-col gap-6'>
                  <div>
                    <h1 className='text-sm font-medium'>Money</h1>
                    <p className='text-[12px] text-gray-600'>Get employees and contractors paid</p>
                  </div>
                  <div className='flex flex-col gap-2 text-black/90'>
                    <h1 className='text-sm font-medium hover:text-[#595C5D] cursor-pointer'>Benifits</h1>
                    <h1 className='text-sm font-medium hover:text-[#595C5D] cursor-pointer'>Payroll</h1>
                    <h1 className='text-sm font-medium hover:text-[#595C5D] cursor-pointer'>Payments</h1>
                  </div>
                </div>

                <div className='flex flex-col gap-6'>
                  <div>
                    <h1 className='text-sm font-medium'>Tech</h1>
                    <p className='text-[12px] text-gray-600'>Manage equipment and accounts</p>
                  </div>
                  <div className='flex flex-col gap-2 text-black/90'>
                    <h1 className='text-sm font-medium hover:text-[#595C5D] cursor-pointer'>Apps</h1>
                    <h1 className='text-sm font-medium hover:text-[#595C5D] cursor-pointer'>Devices</h1>               </div>
                </div>

            </div>
          
      </div>

      <div className='flex items-center relative' onMouseEnter={() => setResourcesHovered(true)} onMouseLeave={() => setResourcesHovered(false)}>
        <span className='text-sm cursor-pointer'>
          Resources
        </span>
         <RiArrowDownSLine 
          size={18} className={`transition-transform duration-300 cursor-pointer ${resourcesHovered ? 'rotate-180' : 'rotate-0'}`} 
          />         
            <div ref={resourcesMenuRef} className='absolute top-full left-1/2 -translate-x-1/2 mt-8  w-[650px] bg-white rounded-[30px] border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)] pl-6 pr-12 py-12 flex justify-between opacity-0 '>
                <div className='absolute -top-8 left-0 w-full h-10 bg-transparent'></div>
                  <div className='flex flex-col gap-2 text-black/80'>
                    <h1 className='text-md font-medium hover:text-[#595C5D] cursor-pointer'>Knowledge Center</h1>
                    <h1 className='text-md font-medium hover:text-[#595C5D] cursor-pointer'>Case Studies</h1>
                    <h1 className='text-md font-medium hover:text-[#595C5D] cursor-pointer'>About Us</h1>
                    <h1 className='text-md font-medium hover:text-[#595C5D] cursor-pointer'>Careers</h1>
                    <h1 className='text-md font-medium hover:text-[#595C5D] cursor-pointer'>Blog</h1>
                  </div>
                  <div className=' -mt-5'>
                    <h3 className='text-gray-600 text-sm '>Featured</h3>
                    <div className='pt-2 flex gap-4 cursor-pointer hover:opacity-60'>
                      <Image src={'/images/resource1.webp'} alt='img1' width={120} height={100} className='rounded-[15px]' />
                      <div className='flex flex-col'>
                        <h4 className='text-sm text-gray-600'>Case Studies</h4>
                        <p className='text-[14px]'>Former Revolut execs choose<br />Zelt for Deblock</p>
                      </div>
                    </div>
                    <div className='pt-2 flex gap-4 cursor-pointer hover:opacity-60'>
                      <Image src={'/images/resource2.webp'} alt='img1' width={120} height={100} className='rounded-[15px]' />
                      <div className='flex flex-col'>
                        <h4 className='text-sm text-gray-600'>Case Studies</h4>
                        <p className='text-[14px]'>Private equity backed OneDome<br />consolidates HR and payroll<br /> across group</p>
                      </div>
                    </div>
                  </div>



            </div>
      </div>

      <div className='cursor-pointer'>
        <h1 className='text-sm'>Pricing</h1>
      </div>

      <div className='cursor-pointer'>
        <h1 className='text-sm'>Login</h1>
      </div>

      <button className='bg-[#fbc664] hover:bg-[#FFD687] text-sm py-3 px-5 rounded-[10px] cursor-pointer '>See demo</button>

    </nav>
  )
}

export default Navbar