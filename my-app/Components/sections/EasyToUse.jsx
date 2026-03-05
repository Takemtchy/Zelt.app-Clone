'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── "Why Zelt?" Section ─── 
   Contains: Easy to use, Dedicated support, Data-driven, Simple
   Matching zelt.app reference layout: alternating text-left/visual-right and text-right/visual-left
*/

const whyZeltSections = [
    {
        title: "Easy to use",
        desc: "People operations is about providing your team with the right HR software and support to get the job done. Zelt makes pay, benefits, software, hardware, time off and reviews available in a single place, as simple as drag and drop. So your team can focus on their job rather than learning internal processes and navigating HR software.",
        reverse: false,
    },
    {
        title: "Dedicated support",
        desc: "Zelt helps you automate the busy work in your day-to-day operations. And when you do need a helping hand your friendly customer success manager will respond to you in minutes.",
        reverse: true,
    },
    {
        title: "Data-driven",
        desc: "Get real-time insights into your workforce, headcount costs, device fleet security and tool stack to make better decisions. With Zelt HR you can order, configure, ship and monitor devices with a few clicks and manage access to and monitor usage of apps centrally.",
        reverse: false,
    },
    {
        title: "Simple",
        desc: "When you keep things simple, less goes wrong and there is less to maintain and get distracted by. With Zelt HR, you can use fewer tools and simpler processes to promote reliability, engagement and lots of up time.",
        reverse: true,
    },
];

/* Visual mockups for each section */
const MockupEasyToUse = () => (
    <div className="w-[420px] h-[360px] bg-white rounded-3xl shadow-xl flex flex-col pt-8 px-8 border border-zinc-200/50 relative overflow-hidden">
        <h3 className="text-xl font-medium text-[#121718] mb-2">Pending Approvals</h3>
        <p className="text-sm text-zinc-500 mb-6">You have 3 requests waiting</p>
        <div className="flex flex-col gap-3 w-full">
            {[1, 2, 3].map(i => (
                <div key={i} className="w-full h-14 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center px-4">
                    <div className="w-9 h-9 bg-zinc-200 rounded-full mr-3"></div>
                    <div className="flex-1">
                        <div className="w-20 h-2.5 bg-zinc-200 rounded mb-1.5"></div>
                        <div className="w-28 h-2 bg-zinc-100 rounded"></div>
                    </div>
                    <div className="flex gap-2">
                        <div className="px-3 py-1.5 text-xs bg-[#121718] text-white rounded-lg">Approve</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const MockupSupport = () => (
    <div className="w-[360px] h-[300px] relative">
        {/* 3D Gold Coin */}
        <div className="w-48 h-48 bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#DAA520] rounded-full shadow-2xl mx-auto flex items-center justify-center">
            <span className="text-6xl">🪙</span>
        </div>
        {/* Pay Salaries button */}
        <div className="absolute bottom-4 right-4 bg-[#121718] text-white px-6 py-3 rounded-xl text-sm font-medium shadow-lg">
            Pay Salaries
        </div>
    </div>
);

const MockupDataDriven = () => (
    <div className="w-[400px] h-[340px] bg-[#1a1a1c] rounded-3xl shadow-2xl border border-white/5 p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 text-lg">👥</div>
            <p className="text-white/80 text-sm">2 new joiners onboarding this week</p>
        </div>
        <div className="flex-1 flex items-end gap-2 px-2">
            {[40, 65, 50, 80, 55, 70, 90, 60, 75, 85].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-[#fbc664]/60 to-[#fbc664] rounded-t" style={{ height: `${h}%` }}></div>
            ))}
        </div>
        <div className="mt-3 flex justify-between text-white/30 text-[10px]">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
        </div>
    </div>
);

const MockupSimple = () => (
    <div className="w-[360px] h-[300px] flex flex-col items-center justify-center gap-4">
        <div className="grid grid-cols-3 gap-3">
            {['People', 'Payroll', 'Time Off', 'Devices', 'Reviews', 'Benefits'].map((label, i) => (
                <div key={i} className="w-24 h-20 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 flex items-center justify-center shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <span className="text-[13px] font-medium text-[#121718] text-center">{label}</span>
                </div>
            ))}
        </div>
    </div>
);

const mockups = [MockupEasyToUse, MockupSupport, MockupDataDriven, MockupSimple];

const EasyToUse = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        gsap.fromTo(
            ".why-section",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 65%',
                }
            }
        );
    }, []);

    return (
        <div className="bg-[#E4E0DD] font-sans" ref={containerRef}>
            {whyZeltSections.map((section, idx) => {
                const Mockup = mockups[idx];
                return (
                    <div
                        key={idx}
                        className={`why-section py-24 md:py-32 px-10 md:px-20 lg:px-40 flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between border-t border-black/5`}
                    >
                        {/* Text */}
                        <div className={`w-full md:w-[42%] flex flex-col items-start mb-16 md:mb-0 ${section.reverse ? 'md:pl-12' : 'md:pr-12'}`}>
                            <h2 className="text-[48px] md:text-[55px] font-normal tracking-tight text-[#121718] mb-6 leading-[1.05]">
                                {section.title}
                            </h2>
                            <p className="text-[#121718]/70 leading-[1.7] text-[17px] pr-4">
                                {section.desc}
                            </p>
                        </div>

                        {/* Visual */}
                        <div className="w-full md:w-[50%] flex justify-center items-center">
                            <Mockup />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default EasyToUse;
