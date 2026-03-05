"use client";
import React, { useState, useRef, useEffect } from 'react';
import { RiArrowRightLine } from '@remixicon/react';
import PlatformVisuals from '../ui/PlatformVisuals';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const featuresData = [
  { id: 'payroll', label: 'Payroll', title: 'Payroll', desc: 'Automate payroll within a single unified system. Zelt Payroll Software natively integrates with your people data, bridging the gap between timesheets, expenses, benefits and payouts. Built-in compliance and smart automation ensures accuracy, transparency and less manual effort every pay cycle.' },
  { id: 'benefits', label: 'Benefits', title: 'Benefits', desc: 'Automate the admin of adding and removing employees to pension and healthcare. Give your team better visibility into their benefits and empower them to make choices themselves without having to worry about reconciling payroll deductions.' },
  { id: 'payments', label: 'Payments', title: 'Payments', desc: 'After approving payroll and contractor invoices in Zelt, make local salary and global contractor payments in one go.' },
  { id: 'timeoff', label: 'Time Off', title: 'Time Off', desc: 'Request, approve and keep track of time and attendance seamlessly, whether it relates to holiday, sick days, work from home or parental leave.' },
  { id: 'apps', label: 'Apps', title: 'Apps', desc: 'Manage access to your business apps centrally, empowering IT to enforce strict security policies and managing employee accounts automatically when on and offboarding.' },
  { id: 'devices', label: 'Devices', title: 'Devices', desc: 'Embed device as a service directly into your people processes, providing a secure, affordable and better alternative to complicated MDM tools.' },
  { id: 'surveys', label: 'Surveys', title: 'Surveys', desc: 'Launch surveys in a matter of minutes to gather feedback and sentiment. Understand employee\'s onboarding experience, engagement or run regular check-ins.' },
  { id: 'reviews', label: 'Reviews', title: 'Reviews', desc: 'Streamline reviews with automated timelines, built-in anonymity, and full manager visibility.' },
  { id: 'goals', label: 'Goals', title: 'Goals', desc: 'Set clear, measurable goals across teams and individuals to align priorities, define key results, and track overall progress.' },
  { id: 'scheduling', label: 'Scheduling', title: 'Scheduling', desc: 'Our rota software helps you automate your rota and shift scheduling to simply processes from planning to payroll.' },
  { id: 'people', label: 'People', title: 'People', desc: 'Unify employee records, workflows, and insights into one flexible and intuitive system.' },
];

const Features = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const containerRef = useRef(null);
  const activeFeature = featuresData[activeFeatureIndex];

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${featuresData.length * 400}`, // Adjust scroll duration per item
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(
            Math.max(0, Math.floor(progress * featuresData.length)),
            featuresData.length - 1
          );
          setActiveFeatureIndex(index);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#E4E0DD] min-h-screen py-24 px-10 md:px-20 lg:px-40 flex flex-col md:flex-row items-center font-sans text-[#121718] overflow-hidden">
      {/* Left Sidebar List */}
      <div className="w-full md:w-[25%] mb-12 md:mb-0 md:pr-10 h-full flex items-center">
        <ul className="space-y-4">
          {featuresData.map((feature, idx) => (
            <li
              key={feature.id}
              onClick={() => {
                // Clicking could optionally scroll to the exact point, but for now just update state
                setActiveFeatureIndex(idx);
                // Also scroll window to the correct position based on the trigger
                const scrollPos = containerRef.current.offsetTop + (idx * 400);
                window.scrollTo({ top: scrollPos, behavior: 'smooth' });
              }}
              className={`cursor-pointer flex items-center transition-all duration-300 ${activeFeatureIndex === idx ? 'text-[#121718] font-medium' : 'text-[#121718]/40 hover:text-[#121718]/60'}`}
            >
              <span className="w-6 flex justify-center">
                {activeFeatureIndex === idx && <span className="w-[6px] h-[6px] rounded-full bg-[#121718] block" />}
              </span>
              <span className="text-[17px]">
                {feature.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Middle Section (PlatformVisuals) */}
      <div className="w-full md:w-[45%] flex justify-center items-center h-[500px]">
        {/* Creating a Mac OS style window container for the mockups to make it look like one app */}
        <div className="w-full h-full bg-[#121212] rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col relative">
          {/* Mac Window Header */}
          <div className="h-10 bg-[#1c1c1c] border-b border-white/5 flex items-center px-4 w-full top-0 absolute z-50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            </div>
          </div>
          <div className="flex-1 mt-10 p-4">
            <PlatformVisuals activeId={activeFeature.id} />
          </div>
        </div>
      </div>

      {/* Right Details Section */}
      <div className="w-full md:w-[30%] mt-12 md:mt-0 flex flex-col items-start pl-12 h-full justify-center">
        <h2 className="text-[55px] md:text-[70px] font-normal tracking-tight text-[#121718] mb-6 leading-none min-h-[60px]">{activeFeature.title}</h2>
        <p className="text-[#121718]/80 mb-8 leading-[1.6] text-[18px] pr-4 whitespace-pre-wrap min-h-[160px]">
          {activeFeature.desc}
        </p>
        <button className="bg-[#121718] hover:bg-black transition-colors text-white text-[15px] font-medium px-6 py-3.5 rounded-[12px] flex items-center gap-2">
          Find out more
          <RiArrowRightLine size={18} color="#ffffff" className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Features;