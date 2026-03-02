import { RiArrowRightUpLine } from '@remixicon/react'
import Image from 'next/image'
import React from 'react'

const PlatformVisuals = () => {
    return (
        <div className='relative h-125 flex items-center justify-center '>
            <div>
                <div className='relative h-90 w-85 bg-[#222222] rounded-xl shadow-2xl p-6 border border-white/5'>
                    <div className='flex gap-2 mb-6'>
                        <div className='h-2.5 w-2.5 rounded-full bg-white/20 hover:bg-[#FF605C] cursor-pointer ' />
                        <div className='h-2.5 w-2.5 rounded-full bg-white/20 hover:bg-[#FFBD44] cursor-pointer ' />
                        <div className='h-2.5 w-2.5 rounded-full bg-white/20 hover:bg-[#00CA4E] cursor-pointer ' />
                    </div>

                    <div className='flex flex-col gap-3 pt-2 -mx-6 '>
                        <div className=' flex gap-12 items-center py-1.5  pl-8'> <span className='text-white text-sm flex items-center gap-5'><Image src={'/images/platform/payroll/1.png'} alt='img1' width={30} height={30} />Alex</span> <span className='flex items-center gap-2 text-white/90 text-xs'><RiArrowRightUpLine size={18} color='#72CF8C' />+ £1,000.00</span> </div>
                        <div className=' flex gap-12 items-center py-1.5 pl-8 bg-white/12 cursor-pointer '> <span className='text-white text-sm flex items-center gap-5'><Image src={'/images/platform/payroll/2.png'} alt='img1' width={30} height={30} />Tom</span> <span className='flex items-center gap-2 text-white/90 text-xs'><RiArrowRightUpLine size={18} color='#72CF8C' />+ £1,000.00</span> </div>
                        <div className=' flex gap-12 items-center py-1.5 pl-8'> <span className='text-white text-sm flex items-center gap-5'><Image src={'/images/platform/payroll/3.png'} alt='img1' width={30} height={30} />Linda</span>  </div>
                        <div className=' flex gap-12 items-center py-1.5 pl-8'> <span className='text-white text-sm flex items-center gap-5'><Image src={'/images/platform/payroll/4.png'} alt='img1' width={30} height={30} />Anna</span> <span className='flex items-center gap-2 text-white/90 text-xs'><RiArrowRightUpLine size={18} color='#72CF8C' />+ £1,000.00</span> </div>
                        <div className=' flex gap-12 items-center py-1.5 pl-8'> <span className='text-white text-sm flex items-center gap-5'><Image src={'/images/platform/payroll/5.png'} alt='img1' width={30} height={30} />John</span>  </div>
                    </div>

                    <div className=' absolute -top-10 -right-20 w-60 flex items-center  bg-white rounded-xl shadow-2xl p-4'>
                        <div className='flex w-32'>
                            <Image src={'/images/platform/payroll/2-1.png'} alt='img2-1' width={32} height={32} />
                            <div className='w-8 h-8 rounded-full bg-[#73CF8C] flex items-center justify-center relative -left-2 text-white'>£</div>
                        </div>
                        <p className='text-sm'>Tom' stake home increased by £800</p>
                    </div>

                    <div className=' absolute -bottom-10 -right-20 w-40 h-55 text-gray-400 bg-[#2F2F2F] border border-white/20 rounded-xl text-sm flex flex-col'>
                        <div className='flex flex-col gap-1 relative top-4 -right-36 '>
                            <div className='h-0.5 w-0.5 bg-gray-500 rounded-full' />
                            <div className='h-0.5 w-0.5 bg-gray-500 rounded-full' />
                        </div>

                        <div className="  w-full h-full flex flex-col gap-4 items-center justify-center">
                            <div className="relative w-24 h-24">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg
                                        width="96"
                                        height="96"
                                        viewBox="0 0 100 100"
                                        className="transform -rotate-90"
                                    >
                                        {/* yellow arc (5%) positioned first so it sits underneath */}
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="45"
                                            fill="none"
                                            stroke="#FFBD44"
                                            strokeWidth="10"
                                            strokeDasharray="14.14 282.74"
                                            strokeDashoffset="-212.05"
                                            strokeLinecap="round"
                                        />
                                        {/* green arc (75%) rendered last to sit on top */}
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="45"
                                            fill="none"
                                            stroke="#73CF8C"
                                            strokeWidth="10"
                                            strokeDasharray="212.05 282.74"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="absolute inset-3 rounded-full bg-[#2F2F2F]" />
                                <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-semibold">
                                    + £800
                                </div>
                            </div>
                            <div className="w-full flex flex-col pl-12 items-start justify-center gap-2 text-[10px] text-gray-400">
                                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> Bonus</span>
                                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div> Cycle to work</span>
                                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div> Taxes</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PlatformVisuals