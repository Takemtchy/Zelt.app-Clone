import React from 'react'
import Image from 'next/image';
import CanvasExplosion from '../CanvasExplosion'

const Hero = () => {
  return (
    <div className='relative'>
      <div className=''> 
        <CanvasExplosion />
        <div className='z-10 absolute top-0 left-0 w-screen pointer-events-none '>
            <div className='h-screen w-full text-black/90 flex flex-col gap-6 items-center justify-center pointer-events-auto'>
                <h1 className='text-[7vw] leading-23  font-regular tracking-tighter'>HR software for the<br/>employee lifecycle</h1>
                <p className='text-[1.6vw] tracking-tighter font-regular'>Get a 360° employee view across HR, Payroll and IT</p>
                <button className='bg-[#fbc664] hover:bg-[#FFD687] text-sm py-3 px-5 rounded-[10px] mt-6 cursor-pointer '>Get started</button>
            </div>
            <div className='h-screen w-full'></div>
            <div className='h-screen w-full text-black/90 flex flex-col gap-4 items-center justify-center pointer-events-auto'>
              <h1 className='text-[6vw] font-medium'>Hire to retire</h1>
              <p className='text-center text-[1.6vw] leading-8 tracking-tight'>Now you can manage the whole employee lifecycle in a single<br/>flexible and intuitive platform.</p>
            </div>
      </div>
    </div>
      <div className='absolute -mt-64 z-0 -mb-40 w-full text-center text-black/90 flex flex-col gap-4 items-center pointer-events-auto'>
      <div className='w-full bg-[#E4E0DD] mt-[25vh] pt-12 pb-20 '>
        <h1 className='text-[4vw] leading-[3.8vw] font-normal'>Not just the best<br />HR software</h1>
        <p className=' text-[1.6vw] leading-8 tracking-tight'>Zelt is the modern all-in-one HR software to effortlessly<br />manage all things people.</p>
        <div className='flex gap-8 mt-4 items-center justify-center '>
          <Image src={'/images/Hero-1.webp'} alt='img'  width={200} height={300}  />
          <Image src={'/images/Hero-2.webp'} alt='img'  width={200} height={300}  />
        </div>
      </div>
      </div>  

    </div>
  )
}

export default Hero