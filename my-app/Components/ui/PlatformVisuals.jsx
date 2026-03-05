"use client";
import React, { useRef } from 'react';
import { RiArrowRightUpLine, RiPulseLine, RiCheckLine, RiMacbookLine, RiCalendarCheckLine, RiStarFill, RiBarChartBoxLine, RiTeamLine, RiTimeLine } from '@remixicon/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const PlatformVisuals = ({ activeId }) => {
    const containerRef = useRef(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        // Kill existing animations
        gsap.killTweensOf(containerRef.current.children);
        gsap.killTweensOf(".visual-element");

        // Base container cross-fade
        gsap.fromTo(containerRef.current.children,
            { opacity: 0, scale: 0.98 },
            { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }
        );

        // Staggered slide up for internal elements
        gsap.fromTo(".visual-element",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, delay: 0.1, ease: 'power3.out' }
        );

    }, [activeId]);

    const renderVisual = () => {
        switch (activeId) {
            case 'payroll':
                return (
                    <div className='relative h-[400px] w-[380px]'>
                        {/* Main Dark List Card */}
                        <div className='absolute top-16 left-0 w-[300px] bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden visual-element'>
                            {/* Window Dots */}
                            <div className='flex gap-1.5 p-4 border-b border-white/5'>
                                <div className='h-2 w-2 rounded-full bg-white/10' />
                                <div className='h-2 w-2 rounded-full bg-white/10' />
                                <div className='h-2 w-2 rounded-full bg-white/10' />
                            </div>

                            {/* List items */}
                            <div className='flex flex-col'>
                                <div className='flex justify-between items-center py-3 px-5 border-b border-white/5'>
                                    <span className='text-white text-sm flex items-center gap-3'>
                                        <div className='w-6 h-6 rounded-full bg-zinc-700 text-[10px] flex items-center justify-center'>Al</div>
                                        Alex
                                    </span>
                                    <span className='flex items-center gap-1.5 text-white/90 text-xs'>
                                        <RiArrowRightUpLine size={14} color='#73CF8C' />+ £1,000.00
                                    </span>
                                </div>
                                <div className='flex justify-between items-center py-3 px-5 bg-white/5'>
                                    <span className='text-white text-sm flex items-center gap-3'>
                                        <div className='w-6 h-6 rounded-full bg-zinc-600 text-[10px] flex items-center justify-center'>To</div>
                                        Tom
                                    </span>
                                    <span className='flex items-center gap-1.5 text-white/90 text-xs'>
                                        <RiArrowRightUpLine size={14} color='#73CF8C' />+ £800.00
                                    </span>
                                </div>
                                <div className='flex justify-between items-center py-3 px-5 border-b border-white/5'>
                                    <span className='text-white text-sm flex items-center gap-3'>
                                        <div className='w-6 h-6 rounded-full bg-zinc-700 text-[10px] flex items-center justify-center'>Li</div>
                                        Linda
                                    </span>
                                </div>
                                <div className='flex justify-between items-center py-3 px-5 border-b border-white/5'>
                                    <span className='text-white text-sm flex items-center gap-3'>
                                        <div className='w-6 h-6 rounded-full bg-zinc-600 text-[10px] flex items-center justify-center'>An</div>
                                        Anna
                                    </span>
                                    <span className='flex items-center gap-1.5 text-white/90 text-xs'>
                                        <RiArrowRightUpLine size={14} color='#73CF8C' />+ £500.00
                                    </span>
                                </div>
                                <div className='flex justify-between items-center py-3 px-5'>
                                    <span className='text-white text-sm flex items-center gap-3'>
                                        <div className='w-6 h-6 rounded-full bg-zinc-700 text-[10px] flex items-center justify-center'>Jo</div>
                                        John
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Top floating popup */}
                        <div className='absolute -top-4 right-10 flex items-center gap-3 bg-[#F9F9F9] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-3 px-4 border border-zinc-100 z-10 visual-element'>
                            <div className='flex relative ml-1'>
                                <div className='w-8 h-8 rounded-full bg-zinc-300 border-2 border-white flex items-center justify-center text-zinc-600 text-[11px] font-medium'>To</div>
                                <div className='w-6 h-6 rounded-full bg-[#73CF8C] flex items-center justify-center absolute -right-2 top-1 border-2 border-white text-white font-medium text-[9px]'>£</div>
                            </div>
                            <p className='text-[13px] font-medium text-zinc-800 leading-[1.2] ml-2 w-[110px]'>Tom's take home increased by £800</p>
                        </div>

                        {/* Bottom floating details card */}
                        <div className='absolute bottom-10 -right-6 w-[140px] bg-[#2F2F2F] border border-white/5 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] p-4 flex flex-col z-10 visual-element'>
                            <div className='flex flex-col gap-0.5 items-end mb-2'>
                                <div className='h-0.5 w-0.5 bg-gray-500 rounded-full' />
                                <div className='h-0.5 w-0.5 bg-gray-500 rounded-full' />
                            </div>

                            <div className="w-full flex flex-col items-center justify-center mb-6 mt-1">
                                <div className="relative w-20 h-20 flex items-center justify-center">
                                    <svg width="80" height="80" viewBox="0 0 100 100" className="transform -rotate-90 absolute">
                                        <circle cx="50" cy="50" r="42" fill="none" stroke="#FFBD44" strokeWidth="6" strokeDasharray="30 282.74" strokeLinecap="round" />
                                        <circle cx="50" cy="50" r="42" fill="none" stroke="#73CF8C" strokeWidth="6" strokeDasharray="140 282.74" strokeDashoffset="-40" strokeLinecap="round" />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center text-white text-[13px] font-medium z-10">
                                        + £800
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 text-[10px] text-gray-400 font-medium px-1">
                                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#73CF8C]"></div> Bonus</span>
                                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#FFBD44]"></div> Cycle to work</span>
                                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div> Taxes</span>
                            </div>
                        </div>
                    </div>
                );

            case 'benefits':
                return (
                    <div className='relative h-[400px] w-[400px] flex items-center'>
                        {/* Main Dark Card (Pension) */}
                        <div className='bg-[#2A2A2A] shadow-2xl p-6 text-white rounded-[16px] w-[220px] z-10 visual-element'>
                            <div className='w-10 h-10 bg-[#e8772e]/20 border border-[#e8772e]/30 rounded-[10px] flex items-center justify-center mb-10'>
                                <span className="text-[#e8772e] text-[10px] font-bold tracking-tighter">nest</span>
                            </div>
                            <h1 className='text-[28px] tracking-tight font-medium mb-5'>Pension</h1>

                            <div className='border border-white/5 flex items-center justify-between py-2.5 px-3 rounded-[8px] bg-[#333333] mb-2'>
                                <p className="text-[12px] text-white/70">Employer</p>
                                <p className="text-[13px] font-medium">3%</p>
                            </div>
                            <div className='border border-white/5 flex items-center justify-between py-2.5 px-3 rounded-[8px] bg-[#333333]'>
                                <p className="text-[12px] text-white/70">Employee</p>
                                <div className='flex items-center gap-2 bg-[#404040] px-2 py-0.5 rounded-[6px]'>
                                    <span className='text-[10px] text-white/40'>-</span>
                                    <span className="text-[13px] font-medium">7%</span>
                                    <span className='text-[10px] text-white/40'>+</span>
                                </div>
                            </div>
                        </div>

                        {/* Top Right Logos Grid */}
                        <div className='absolute top-10 right-0 bg-[#F9F9F9] rounded-[16px] p-3 shadow-lg grid grid-cols-2 gap-2 visual-element border border-zinc-100'>
                            <div className="w-[45px] h-[45px] bg-white rounded-lg flex items-center justify-center shadow-sm text-blue-600 font-bold text-xs">AXA</div>
                            <div className="w-[45px] h-[45px] bg-[#FDF2F4] rounded-lg flex items-center justify-center shadow-sm text-pink-600 font-bold text-[9px]">Vitality</div>
                            <div className="w-[45px] h-[45px] bg-[#F0F8FA] rounded-lg flex items-center justify-center shadow-sm text-blue-400 font-bold text-[10px]">Bupa</div>
                            <div className="w-[45px] h-[45px] bg-[#EFF7F3] rounded-lg flex items-center justify-center shadow-sm text-green-600 font-bold text-[8px] text-center leading-tight">WPA</div>
                        </div>

                        {/* Middle Right Mini Card */}
                        <div className='absolute top-[140px] right-2 bg-[#2A2A2A] text-white p-5 rounded-[12px] w-[130px] shadow-2xl visual-element'>
                            <div className='w-8 h-8 border border-white/10 rounded-lg bg-white/5 flex items-center justify-center mb-6'>
                                <RiPulseLine size={16} className="text-white/80" />
                            </div>
                            <p className='font-medium text-[15px] leading-tight text-white/90'>Health<br />Insurance</p>
                        </div>

                        {/* Bottom Providers Strip */}
                        <div className='absolute bottom-12 left-10 bg-white rounded-[12px] p-2.5 shadow-xl flex gap-2 visual-element border border-zinc-100'>
                            <div className="w-8 h-8 bg-orange-50 rounded-md flex items-center justify-center text-orange-500 font-bold text-[7px]">nest</div>
                            <div className="w-8 h-8 bg-blue-50 rounded-md flex items-center justify-center text-blue-800 font-bold text-[8px]">G</div>
                            <div className="w-8 h-8 bg-teal-50 rounded-md flex items-center justify-center text-teal-600 font-bold text-[6px]">peoples</div>
                            <div className="w-8 h-8 bg-yellow-50 rounded-md flex items-center justify-center text-black font-bold text-[7px]">NOW:</div>
                            <div className="w-8 h-8 bg-blue-50 rounded-md flex items-center justify-center text-blue-500 font-bold text-[7px]">AVIVA</div>
                        </div>
                    </div>
                );

            case 'payments':
                return (
                    <div className='relative h-[340px] w-[340px] bg-[#1e1e1e] rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 border border-white/5 flex flex-col justify-between visual-element'>
                        <div>
                            <p className="text-white/50 text-[13px] font-medium mb-1">Total Paid</p>
                            <h2 className="text-[40px] font-medium text-white tracking-tight leading-none">$42,500.00</h2>
                        </div>
                        <div className="flex flex-col gap-3 mt-8">
                            <div className="visual-element flex items-center justify-between p-3.5 rounded-xl bg-[#2a2a2a] border border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-medium text-xs">Ac</div>
                                    <span className="text-[14px] font-medium text-white">Acme Corp</span>
                                </div>
                                <span className="text-[14px] font-medium text-white">-$12,000</span>
                            </div>
                            <div className="visual-element flex items-center justify-between p-3.5 rounded-xl bg-[#2a2a2a] border border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-medium text-xs">Gl</div>
                                    <span className="text-[14px] font-medium text-white">Global Tech</span>
                                </div>
                                <span className="text-[14px] font-medium text-white">-$8,500</span>
                            </div>
                        </div>
                        <div className='absolute -top-6 -right-6 bg-[#333] text-white rounded-xl shadow-xl p-3.5 flex items-center gap-3 visual-element border border-white/10'>
                            <div className='w-7 h-7 rounded-md bg-[#73CF8C]/20 flex items-center justify-center'>
                                <RiCheckLine size={16} color="#73CF8C" />
                            </div>
                            <p className='text-[13px] font-medium pr-2'>Payments sent</p>
                        </div>
                    </div>
                );

            case 'timeoff':
                return (
                    <div className='relative h-[340px] w-[340px] bg-[#2A2A2A] rounded-[20px] shadow-2xl p-7 visual-element'>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                                <RiCalendarCheckLine size={20} />
                            </div>
                            <h2 className="text-xl font-medium text-white tracking-tight">Time Off</h2>
                        </div>

                        <div className="visual-element flex flex-col items-center justify-center bg-[#333333] rounded-[16px] py-8 mb-6 border border-white/5">
                            <span className="text-[52px] font-medium text-[#FFBD44] tracking-tight leading-none">24</span>
                            <span className="text-[13px] text-white/50 mt-2 font-medium">Days remaining</span>
                        </div>

                        <div className="visual-element flex items-center justify-between px-4 py-3 bg-[#333333] rounded-xl border-l-[3px] border-[#73CF8C]">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-white text-[14px] font-medium leading-tight">Summer Holiday</span>
                                <span className="text-[11px] text-white/50">Aug 12 - Aug 20</span>
                            </div>
                            <span className="text-[11px] font-medium text-[#73CF8C] bg-[#73CF8C]/10 px-2.5 py-1 rounded-md">Approved</span>
                        </div>
                    </div>
                );

            case 'apps':
                return (
                    <div className='relative h-[360px] w-[360px] bg-[#1e1e1e] rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 flex flex-col justify-center items-center visual-element'>
                        <div className="grid grid-cols-3 gap-5 relative">
                            {/* Lines connecting center */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-px bg-white/10 z-0" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-px bg-white/10 z-0" />

                            {/* Icons Grid */}
                            <div className="visual-element w-14 h-14 rounded-[14px] bg-[#2a2a2a] border border-white/5 z-10 flex items-center justify-center text-blue-400 font-bold">G</div>
                            <div className="visual-element w-14 h-14 rounded-[14px] bg-[#2a2a2a] border border-white/5 z-10 flex items-center justify-center text-white font-bold tracking-tighter">Github</div>
                            <div className="visual-element w-14 h-14 rounded-[14px] bg-[#2a2a2a] border border-white/5 z-10 flex items-center justify-center text-green-400 font-bold">N</div>

                            <div className="visual-element w-14 h-14 rounded-[14px] bg-[#2a2a2a] border border-white/5 z-10 flex items-center justify-center text-blue-500 font-bold">Z</div>

                            <div className="visual-element w-[60px] h-[60px] rounded-[16px] bg-black shadow-lg z-20 flex items-center justify-center text-white font-bold text-2xl tracking-tighter relative border border-white/10">
                                zelt
                                <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#73CF8C] rounded-full border-2 border-[#1e1e1e]"></span>
                            </div>

                            <div className="visual-element w-14 h-14 rounded-[14px] bg-[#2a2a2a] border border-white/5 z-10 flex items-center justify-center text-red-500 font-bold">As</div>

                            <div className="visual-element w-14 h-14 rounded-[14px] bg-[#2a2a2a] border border-white/5 z-10 flex items-center justify-center text-pink-400 font-bold">F</div>
                            <div className="visual-element w-14 h-14 rounded-[14px] bg-[#2a2a2a] border border-white/5 z-10 flex items-center justify-center text-blue-400 font-bold">J</div>
                            <div className="visual-element w-14 h-14 rounded-[14px] bg-[#2a2a2a] border border-white/5 z-10 flex items-center justify-center text-purple-400 font-bold">M</div>
                        </div>

                        {/* Floating Action Box */}
                        <div className="absolute -bottom-6 right-6 bg-[#333] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-3 border border-white/10 flex items-center gap-3 visual-element">
                            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold text-xs">G</div>
                            <div className="flex flex-col pr-8">
                                <span className="text-[12px] font-medium text-white">Google Workspace</span>
                                <span className="text-[10px] text-white/50">Requesting access</span>
                            </div>
                            <button className="bg-[#73CF8C] text-black text-[10px] px-3 py-1.5 rounded-md font-bold">Approve</button>
                        </div>
                    </div>
                );

            case 'devices':
                return (
                    <div className='relative h-[360px] w-[340px] bg-[#2A2A2A] rounded-[20px] shadow-2xl p-6 visual-element'>
                        <div className="visual-element w-full h-[160px] bg-[#333333] rounded-xl border border-white/5 flex items-center justify-center mb-6 relative overflow-hidden">
                            <RiMacbookLine size={90} className="text-white/20" />
                            <div className="absolute bottom-3 left-3 bg-[#1e1e1e]/60 px-3 py-1 rounded-md border border-white/10 text-[11px] text-white/90 font-medium backdrop-blur-md">
                                MacBook Pro 14"
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="visual-element flex justify-between items-center bg-[#333333] p-3.5 rounded-xl">
                                <span className="text-white/50 text-[13px]">Assigned to</span>
                                <span className="text-white text-[13px] font-medium flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[9px]">T</div>
                                    Tom
                                </span>
                            </div>
                            <div className="visual-element flex justify-between items-center bg-[#333333] p-3.5 rounded-xl">
                                <span className="text-white/50 text-[13px]">Status</span>
                                <span className="text-[#73CF8C] text-[12px] font-medium flex items-center gap-1.5 bg-[#73CF8C]/10 px-2 py-1 rounded-md">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#73CF8C]" />
                                    Healthy
                                </span>
                            </div>
                        </div>
                    </div>
                );

            case 'surveys':
                return (
                    <div className='relative h-[340px] w-[340px] bg-[#1e1e1e] rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 border border-white/5 flex flex-col items-center justify-center visual-element'>
                        <h3 className="text-white/50 font-medium mb-8 text-[14px]">Employee NPS (eNPS)</h3>
                        <div className="relative w-44 h-44 flex items-center justify-center mb-6 visual-element">
                            <svg width="176" height="176" viewBox="0 0 100 100" className="transform -rotate-90">
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#333" strokeWidth="8" />
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#73CF8C" strokeWidth="8" strokeDasharray="210 282.74" strokeLinecap="round" />
                            </svg>
                            <div className="absolute flex flex-col items-center justify-center">
                                <span className="text-[56px] font-medium text-white tracking-tight leading-none">72</span>
                                <span className="text-[12px] text-[#73CF8C] font-semibold mt-1 flex items-center"><RiArrowRightUpLine size={14} /> +4 pts</span>
                            </div>
                        </div>
                        <p className="visual-element text-[12px] font-medium text-white/70 bg-[#333] px-4 py-1.5 rounded-full border border-white/5">Top 10% in Technology</p>
                    </div>
                );

            case 'reviews':
                return (
                    <div className='relative w-[360px] bg-[#2A2A2A] rounded-[20px] shadow-2xl p-8 visual-element'>
                        <div className="flex space-x-1 mb-6 visual-element">
                            {[1, 2, 3, 4, 5].map(i => (
                                <RiStarFill key={i} size={20} className="text-[#FFBD44]" />
                            ))}
                        </div>
                        <p className="text-white text-[16px] font-medium leading-[1.6] mb-8 visual-element">
                            "Alex is purely phenomenal to work with. Highly skilled, great communication, and always ready to help the team out."
                        </p>
                        <div className="flex items-center gap-4 pt-5 border-t border-white/10 visual-element">
                            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium text-sm">
                                L
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <p className="text-white text-[14px] font-medium">Linda</p>
                                <p className="text-white/50 text-[12px]">Product Manager</p>
                            </div>
                        </div>
                    </div>
                );

            case 'goals':
                return (
                    <div className='relative h-[360px] w-[360px] bg-[#1e1e1e] rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-7 border border-white/5 visual-element'>
                        <div className="flex items-center gap-3 mb-8 visual-element">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                                <RiBarChartBoxLine size={20} />
                            </div>
                            <h2 className="text-[18px] font-medium text-white">Q3 Company OKRs</h2>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="visual-element flex flex-col gap-2.5">
                                <div className="flex justify-between text-[13px]">
                                    <span className="font-medium text-white">Launch New Product</span>
                                    <span className="font-medium text-purple-400">100%</span>
                                </div>
                                <div className="w-full h-2.5 bg-[#333] rounded-full overflow-hidden">
                                    <div className="h-full bg-purple-500 w-full rounded-full"></div>
                                </div>
                            </div>
                            <div className="visual-element flex flex-col gap-2.5">
                                <div className="flex justify-between text-[13px]">
                                    <span className="font-medium text-white">Increase Revenue by 20%</span>
                                    <span className="font-medium text-blue-400">75%</span>
                                </div>
                                <div className="w-full h-2.5 bg-[#333] rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[75%] rounded-full"></div>
                                </div>
                            </div>
                            <div className="visual-element flex flex-col gap-2.5">
                                <div className="flex justify-between text-[13px]">
                                    <span className="font-medium text-white">Hire 5 Engineers</span>
                                    <span className="font-medium text-[#FFBD44]">40%</span>
                                </div>
                                <div className="w-full h-2.5 bg-[#333] rounded-full overflow-hidden">
                                    <div className="h-full bg-[#FFBD44] w-[40%] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'scheduling':
                return (
                    <div className='relative h-[340px] w-[340px] bg-[#2A2A2A] rounded-[20px] shadow-2xl p-7 visual-element'>
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 visual-element">
                            <h2 className="text-white font-medium text-[15px]">May 12, Friday</h2>
                        </div>

                        <div className="flex flex-col gap-6 relative before:content-[''] before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-px before:bg-white/10">
                            <div className="visual-element flex gap-5 relative">
                                <div className="w-9 h-9 rounded-full bg-[#404040] border-[4px] border-[#2A2A2A] flex items-center justify-center text-[10px] text-white z-10 shrink-0">Al</div>
                                <div className="bg-[#333333] border border-white/5 rounded-xl p-3.5 w-full">
                                    <p className="text-white text-[13px] font-medium leading-tight mb-1">09:00 - 17:00</p>
                                    <p className="text-blue-400 text-[11px]">Morning Shift</p>
                                </div>
                            </div>
                            <div className="visual-element flex gap-5 relative">
                                <div className="w-9 h-9 rounded-full bg-[#404040] border-[4px] border-[#2A2A2A] flex items-center justify-center text-[10px] text-white z-10 shrink-0">Jo</div>
                                <div className="bg-[#333333] border border-white/5 rounded-xl p-3.5 w-full">
                                    <p className="text-white text-[13px] font-medium leading-tight mb-1">13:00 - 21:00</p>
                                    <p className="text-[#FFBD44] text-[11px]">Evening Shift</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'people':
                return (
                    <div className='relative h-[340px] w-[340px] bg-[#1e1e1e] rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 border border-white/5 flex flex-col items-center text-center visual-element'>
                        <div className="visual-element w-24 h-24 rounded-full bg-gradient-to-tr from-blue-400 to-[#73CF8C] p-[3px] mb-5">
                            <div className="w-full h-full rounded-full bg-[#1e1e1e] flex items-center justify-center text-[32px] font-medium text-white">
                                Al
                            </div>
                        </div>
                        <h2 className="visual-element text-[22px] font-medium text-white mb-1">Alex Stanton</h2>
                        <p className="visual-element text-white/50 text-[13px] font-medium mb-8">Senior Frontend Engineer</p>

                        <div className="visual-element w-full grid grid-cols-2 gap-3">
                            <div className="bg-[#2a2a2a] rounded-xl p-3 border border-white/5 flex flex-col items-center">
                                <RiTeamLine size={18} className="text-white/50 mb-1" />
                                <span className="text-[12px] font-medium text-white">Engineering</span>
                            </div>
                            <div className="bg-[#2a2a2a] rounded-xl p-3 border border-white/5 flex flex-col items-center">
                                <RiTimeLine size={18} className="text-white/50 mb-1" />
                                <span className="text-[12px] font-medium text-white">London, UK</span>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className='relative w-full h-[500px] flex items-center justify-center' ref={containerRef}>
            {renderVisual()}
        </div>
    );
};

export default PlatformVisuals;