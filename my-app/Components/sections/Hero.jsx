'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import CanvasExplosion from '../CanvasExplosion';
import { RiArrowDownLine } from '@remixicon/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);
  const path3Ref = useRef(null);
  const svgGroupRef = useRef(null);
  const arrowRef = useRef(null);
  const btnRef = useRef(null); // used to animate the CTA button

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          // REDUCED from 500 to 300: Makes the animation start and finish much faster
          end: "+=300",
          scrub: 1,
        }
      });

      // MILDER CURVE: The Q values are much closer to zero, so it doesn't fly up.
      // Line 1 edges drop slightly, center rises slightly
      tl.to(path1Ref.current, { attr: { d: "M -200 200 Q 500 -50 1200 200" }, duration: 1 }, 0);

      // Line 2 
      tl.to(path2Ref.current, { attr: { d: "M -200 280 Q 500 60 1200 280" }, duration: 1 }, 0);

      // Line 3
      tl.to(path3Ref.current, { attr: { d: "M -200 330 Q 500 150 1200 330" }, duration: 1 }, 0);

      // FADE: Removed the aggressive 'y' upward shift. Now it just fades and shrinks slightly.
      tl.to(svgGroupRef.current, {
        y: -10, // A very subtle lift instead of launching to -150
        opacity: 0,
        scale: 0.9,
        transformOrigin: "center center",
        duration: 0.6
      }, 0.2); // Starts fading earlier (at 20% scroll) so it doesn't linger too long

      // fade the button as the user scrolls
      if (btnRef.current) {
        tl.to(btnRef.current, {
          opacity: 0,
          scale: 0.5,
          duration: 0.4
        }, 0);
      }

      tl.to(arrowRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.4
      }, 0); // Arrow disappears instantly as you scroll

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className='relative' ref={sectionRef}>
      <div className=''>
        <CanvasExplosion />
        <div className='z-10 absolute top-0 left-0 w-screen pointer-events-none '>
          <div className='h-screen w-full text-black/90 flex flex-col gap-4 items-center justify-center pointer-events-auto pt-20'>

            <div className="relative w-full flex flex-col items-center justify-center pointer-events-none">
              {/* Bumped up the invisible layout text to match the new larger SVG text */}
              <h1 className='text-[8vw] leading-23 font-regular tracking-tighter opacity-0'>HR software for the<br />employee lifecycle</h1>
              <p className='text-[1.8vw] tracking-tighter font-regular opacity-0 mt-6'>Get a 360° employee view across HR, Payroll and IT</p>

              <svg viewBox="0 0 1000 500" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[40vw] overflow-visible pointer-events-none">
                <g ref={svgGroupRef}>
                  {/* Base paths adjusted to sit perfectly in the middle */}
                  <path ref={path1Ref} id="p1" d="M -200 120 Q 500 120 1200 120" fill="none" />
                  <path ref={path2Ref} id="p2" d="M -200 220 Q 500 220 1200 220" fill="none" />
                  <path ref={path3Ref} id="p3" d="M -200 290 Q 500 290 1200 290" fill="none" />

                  {/* Increased font sizes for all lines */}
                  <text fontSize="85" className="font-regular tracking-tighter" fill="currentColor" textAnchor="middle">
                    <textPath href="#p1" startOffset="50%">HR software for the</textPath>
                  </text>
                  <text fontSize="85" className="font-regular  tracking-tighter" fill="currentColor" textAnchor="middle">
                    <textPath href="#p2" startOffset="50%">employee lifecycle</textPath>
                  </text>
                  <text fontSize="20" className="font-regular tracking-tighter" fill="currentColor" textAnchor="middle">
                    <textPath href="#p3" startOffset="50%">Get a 360° employee view across HR, Payroll and IT</textPath>
                  </text>
                </g>
              </svg>
            </div>

            <button ref={btnRef} className='bg-[#fbc664] hover:bg-[#FFD687] text-sm py-3 px-5 rounded-[10px] mt-2 cursor-pointer '>Get started</button>
          </div>

          <a
            ref={arrowRef}
            href="#hero"
            aria-label="Scroll to hero section"
            className="flex h-10 w-10 -mt-20 ml-10 pointer-events-auto items-center justify-center rounded-full bg-white text-black/80 transition-colors hover:bg-gray-100 hover:text-black group"
          >
            <RiArrowDownLine size={18} className='transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0.5' />
          </a>

          <div className='h-screen w-full'></div>
          <div id='hero' className='h-screen w-full text-black/90 flex flex-col gap-4 items-center justify-center pointer-events-auto scroll-mt-20'>
            <h1 className='text-[6vw] font-medium'>Hire to retire</h1>
            <p className='text-center text-[1.6vw] leading-8 tracking-tight'>Now you can manage the whole employee lifecycle in a single<br />flexible and intuitive platform.</p>
          </div>
        </div>
      </div>
      <div className='absolute -mt-64 z-0 -mb-40 w-full text-center text-black/90 flex flex-col gap-4 items-center pointer-events-auto'>
        <div className='w-full bg-[#E4E0DD] mt-[25vh] pt-12 pb-20 '>
          <h1 className='text-[4vw] leading-[3.8vw] font-normal'>Not just the best<br />HR software</h1>
          <p className=' text-[1.6vw] leading-8 mt-6 tracking-tight'>Zelt is the modern all-in-one HR software to effortlessly<br />manage all things people.</p>
          <div className='flex gap-8 mt-4 items-center justify-center '>
            <Image src={'/images/Hero-1.webp'} alt='img' width={200} height={300} />
            <Image src={'/images/Hero-2.webp'} alt='img' width={200} height={300} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero