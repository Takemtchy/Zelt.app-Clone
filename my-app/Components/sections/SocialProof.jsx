'use client';
import React from 'react';
import { RiStarFill, RiShieldCheckLine, RiCheckboxCircleLine, RiCustomerService2Line, RiTimeLine } from '@remixicon/react';

const badges = [
    { text: "Leader", subtext: "Winter 2024" },
    { text: "Best Support", subtext: "Mid-Market" },
    { text: "High Performer", subtext: "Enterprise" },
    { text: "Momentum Leader", subtext: "Winter 2024" },
    { text: "Easiest Admin", subtext: "Small Business" }
];

const SocialProof = () => {
    return (
        <div className="w-full bg-[#E4E0DD] pt-16 pb-20 flex flex-col items-center justify-center border-t border-black/5">

            {/* As Seen On Section */}
            <div className="flex items-center gap-8 mb-16 opacity-40">
                <span className="text-sm uppercase tracking-wider text-[#121718]/60 font-medium mr-4">As seen on</span>
                {['TechCrunch', 'Forbes', 'Bloomberg', 'WIRED', 'Sifted'].map((name, i) => (
                    <span key={i} className="text-[#121718] font-semibold text-[18px] tracking-tight">{name}</span>
                ))}
            </div>

            {/* G2 Badges */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 px-10 mb-16">
                {badges.map((badge, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 w-[140px] h-[160px] bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform duration-300"
                    >
                        <div className="text-[#FF492C] font-black text-4xl mb-2 tracking-tighter">
                            G2
                        </div>
                        <div className="text-center font-bold text-[#121718] text-sm leading-tight uppercase font-sans tracking-wide">
                            {badge.text}
                        </div>
                        <div className="text-center text-[#121718]/60 text-[10px] mt-2 uppercase tracking-wider font-semibold">
                            {badge.subtext}
                        </div>
                    </div>
                ))}
            </div>

            {/* Trust Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center text-[#121718]/70 text-sm">
                <div className="flex items-center gap-2">
                    <RiCustomerService2Line size={18} />
                    <span className="font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                    <RiTimeLine size={18} />
                    <span className="font-medium">99.99% uptime</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <RiStarFill size={16} className="text-[#FFBD2E]" />
                    <span className="font-medium">4.7 G2</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <RiStarFill size={16} className="text-[#00B67A]" />
                    <span className="font-medium">4.7 Trustpilot</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <RiStarFill size={16} className="text-[#13B5EA]" />
                    <span className="font-medium">5.0 Xero App Store</span>
                </div>
                <div className="flex items-center gap-2">
                    <RiShieldCheckLine size={18} />
                    <span className="font-medium">ISO 27001</span>
                </div>
                <div className="flex items-center gap-2">
                    <RiCheckboxCircleLine size={18} />
                    <span className="font-medium">GDPR compliant</span>
                </div>
            </div>
        </div>
    );
};

export default SocialProof;
