import { RiArrowRightLine } from '@remixicon/react'
import React from 'react'
import RollingText from '../RollingText'
import {
  RiLinkedinFill,
  RiTwitterFill,
  RiInstagramLine,
  RiMediumFill
} from '@remixicon/react';
import Image from 'next/image'


const Footer = () => {
  return (
    <div className='bg-[#2F2F2F] text-white  h-screen w-screen'>
        <div className='h-full mx-40 flex flex-col gap-6'>
            <div className='h-2/5 '>
                <h1 className='text-7xl pt-10 tracking-tight'>All-in-one HR Software</h1>
                <button className='group flex items-center gap-4 mt-10 mb-10 text-sm text-black bg-[#fbc664] hover:bg-[#FFD687] px-4 rounded-lg cursor-pointer'>
                    <RollingText text={'See Zelt in action'} />
                    <div className='bg-black/50 w-[0.8px] h-12' />
                    <RiArrowRightLine size={18} className='transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0.5' />
                </button>
            </div>
            <div className='bg-white/10 h-0.5 ' />
            <div className='h-3/5 flex justify-between gap-8'>
              
                <div className="flex flex-col gap-8 mb-12 md:mb-0">
                    <h1 className="text-[42px] font-bold font-serif leading-none tracking-tight">
                    zelt
                    </h1>
                    
                    <div className="flex items-center gap-4">
                    <a href="#" aria-label="LinkedIn" className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#4f4f4f] transition-colors hover:bg-[#666666]">
                        <RiLinkedinFill size={20} className="fill-white" />
                    </a>
                    <a href="#" aria-label="Twitter" className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#4f4f4f] transition-colors hover:bg-[#666666]">
                        <RiTwitterFill size={20} className="fill-white" />
                    </a>
                    <a href="#" aria-label="Instagram" className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#4f4f4f] transition-colors hover:bg-[#666666]">
                        <RiInstagramLine size={20} className="fill-white" />
                    </a>
                    <a href="#" aria-label="Medium" className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#4f4f4f] transition-colors hover:bg-[#666666]">
                        <RiMediumFill size={20} className="fill-white" />
                    </a>
                    </div>

                </div>
                    
                <div className="flex gap-12 ">
                    
                    {/* Column 1: Product */}
                    <div className="flex flex-col">
                    <h3 className="mb-6 text-[15px] uppercase tracking-wide">Product</h3>
                    <ul className="flex flex-col gap-1 text-[15px] text-[#f0f0f0]">
                        <li><a href="#" className="hover:text-[#fbc664] transition-colors">People</a></li>
                        <li><a href="#" className="hover:text-[#fbc664] transition-colors">Time Off</a></li>
                        <li><a href="#" className="hover:text-[#fbc664] transition-colors">Reviews</a></li>
                        <li><a href="#" className="hover:text-[#fbc664] transition-colors">Goals</a></li>
                        <li><a href="#" className="hover:text-[#fbc664] transition-colors">Surveys</a></li>
                        <li><a href="#" className="hover:text-[#fbc664] transition-colors">Payroll</a></li>
                        <li><a href="#" className="hover:text-[#fbc664] transition-colors">Benefits</a></li>
                        <li><a href="#" className="hover:text-[#fbc664] transition-colors">Payments</a></li>
                        <li><a href="#" className="hover:text-[#fbc664] transition-colors">Apps</a></li>
                        <li><a href="#" className="hover:text-[#fbc664] transition-colors">Devices</a></li>
                    </ul>
                    </div>

                    {/* Column 2: Resources */}
                    <div className="flex flex-col">
                    <h3 className="mb-6 text-[15px] uppercase tracking-wide">Resources</h3>
                    <ul className="flex flex-col gap-1 text-[15px] text-[#f0f0f0]">
                        <li><a href="#" className="hover:text-[#fbc664] transition-colors">Knowledge Center</a></li>
                        <li><a href="#" className="hover:text-[#fbc664] transition-colors">Case Studies</a></li>
                        <li><a href="#" className="hover:text-[#fbc664] transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-[#fbc664] transition-colors">Pricing</a></li>
                        <li><a href="#" className="hover:text-[#fbc664] transition-colors">Blog</a></li>
                    </ul>
                    </div>

                    {/* Column 3: Legal */}
                    <div className="flex flex-col">
                    <h3 className="mb-6 text-[15px] uppercase tracking-wide">Legal</h3>
                    <ul className="flex flex-col gap-1 text-[15px] text-[#f0f0f0]">
                        <li><a href="#" className="hover:text-[#fbc664] transition-colors">Legal</a></li>
                        <li><a href="#" className="hover:text-[#fbc664] transition-colors">Security</a></li>
                    </ul>
                    </div>

                </div>
                <div className='p-3 h-full'>
                    <Image src={'/images/QR.svg'} width={100} height={100} className='bg-white/40 rounded-xl p-2' />
                    <p className='text-sm -ml-4'>Scan with phone</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer