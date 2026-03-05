'use client';
import React, { useRef } from 'react';
import { RiHeartFill } from '@remixicon/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AllInOne = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        gsap.fromTo(
            ".all-in-one-element",
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                }
            }
        );
    }, []);

    return (
        <div className="bg-[#E4E0DD] py-32 px-10 md:px-20 lg:px-40 flex flex-col md:flex-row items-center font-sans" ref={containerRef}>
            {/* Left Text Content */}
            <div className="w-full md:w-[45%] flex flex-col items-start md:pr-12 mb-16 md:mb-0 all-in-one-element">
                <h2 className="text-[48px] md:text-[55px] font-normal tracking-tight text-[#121718] mb-6 leading-[1.05]">
                    All in One
                </h2>
                <p className="text-[#121718]/70 mb-8 leading-[1.7] text-[17px] pr-4">
                    Create a better employee experience by building your HR software and processes around your people. With self-service and seamless approvals, your team does not have to jump through hoops to get the resources they need like with other HR software.
                </p>
            </div>

            {/* Right Mockup */}
            <div className="w-full md:w-[55%] flex justify-center items-center relative h-[500px]">
                {/* Main Mockup Container - Glassmorphic Dark */}
                <div className="w-[380px] h-[420px] bg-[#1a1a1c] border border-white/5 shadow-2xl rounded-3xl p-6 relative flex flex-col items-center pt-8 all-in-one-element z-10">
                    {/* Chat Window Style */}
                    <div className="flex items-center gap-2 mb-4 self-start">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                    </div>

                    {/* 3D-like Calendar Icon */}
                    <div className="w-16 h-16 bg-gradient-to-b from-[#FFB347] to-[#FF6700] rounded-2xl mb-6 flex items-center justify-center text-white text-2xl shadow-lg">
                        📅
                    </div>

                    {/* Chat Messages */}
                    <div className="w-full flex flex-col gap-3 flex-1">
                        <div className="bg-[#2a2a2c] rounded-2xl px-4 py-3">
                            <p className="text-white/90 text-sm">Welcome to Acme Company!</p>
                            <p className="text-white/50 text-xs mt-1">Tell us what you need for a great start</p>
                        </div>
                        <div className="bg-[#383838] rounded-2xl rounded-tl-sm px-4 py-3 self-start max-w-[80%]">
                            <p className="text-white/80 text-sm">Type here...</p>
                        </div>
                    </div>
                </div>

                {/* Floating "Hey!" Speech Bubble */}
                <div className="absolute top-8 left-[15%] md:left-[10%] all-in-one-element z-20">
                    <div className="bg-[#FF8C42] text-white px-5 py-3 rounded-2xl rounded-bl-sm text-lg font-semibold shadow-lg">
                        Hey!
                    </div>
                </div>

                {/* Floating Hello Linda Bubble */}
                <div className="absolute top-28 right-2 md:-right-4 bg-white px-5 py-3 rounded-2xl shadow-xl all-in-one-element z-20">
                    <p className="text-[14px] text-[#121718]">👋 Hello Linda!</p>
                </div>
            </div>
        </div>
    );
};

export default AllInOne;
