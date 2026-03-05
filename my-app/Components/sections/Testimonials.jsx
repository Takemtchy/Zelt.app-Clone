'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        quote: "Implementing Zelt has been the best project we've ever run.",
        name: "Charlotte Cowan",
        role: "HR Director",
        company: "Shakespeare's Globe",
        initials: "CC"
    },
    {
        quote: "The contract management feature is a game changer because it reduces email admin and having to set up Docusigns when sending offers and contracts.",
        name: "Zara Baker",
        role: "HR Lead",
        company: "OneDome",
        initials: "ZB"
    },
    {
        quote: "They are 10x better than more known systems like HiBob or Payfit and offer better and more competitive service. They listen to feedback and improve the product all the time which is amazing!",
        name: "Adriana Restrepo",
        role: "COO",
        company: "Deblock",
        initials: "AR"
    },
    {
        quote: "Zelt has been great for us to automate all of our HR workflows in one place – onboarding, payroll, benefits, holidays, hardware, offboarding. It reduces the need for us to have a big HR team. Exceptional customer service too.",
        name: "Bhavin Bhatt",
        role: "COO",
        company: "Tabeo",
        initials: "BB"
    },
    {
        quote: "Zelt helps automate all the manual HR work rather than just digitally pushing paper from one desk to another.",
        name: "Felix Leuschner",
        role: "CEO",
        company: "Drover",
        initials: "FL"
    },
    {
        quote: "After many years as a startup founder and using a lot of different tools, I am now building my new ventures on Zelt. It helps us stay lean and reduce distraction from administration.",
        name: "Eamon Jubbawy",
        role: "Founder",
        company: "Onfido, Isometric",
        initials: "EJ"
    },
    {
        quote: "The logistics of running a business still belong to a different era. There's an enormous amount of manual workflows that still needs to be digitised, and Zelt is here for the rescue.",
        name: "Daniel Hegarty",
        role: "Founder",
        company: "Habito",
        initials: "DH"
    },
    {
        quote: "What I like about Zelt is that it manages the whole process of getting new starters up and running. You don't actually realise how much time and pain you spend getting people set up until you use Zelt.",
        name: "Richard White",
        role: "Founder",
        company: "Goodlord, Pickles",
        initials: "RW"
    },
    {
        quote: "Coming from Citrus HR, you could tell that Zelt was designed by UX designers rather than an IT specialist. The UX design felt thoughtful.",
        name: "Dave Burpitt",
        role: "CEO",
        company: "Landmark",
        initials: "DB"
    },
    {
        quote: "Our CSM helped move all of our data over from Bright HR, was extremely hands on, and offered us a lot of helpful resources.",
        name: "Charisse Fallaria",
        role: "HR Lead",
        company: "ELN",
        initials: "CF"
    },
];

const Testimonials = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        if (!containerRef.current) return;
        gsap.fromTo(
            ".testimonial-card",
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                }
            }
        );
    }, []);

    return (
        <div className="bg-[#E4E0DD] pt-32 pb-20 px-10 md:px-20 lg:px-32 font-sans text-[#121718]" ref={containerRef}>

            {/* Grid of testimonials */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-5 max-w-6xl mx-auto">
                {testimonials.map((t, idx) => (
                    <div
                        key={idx}
                        className="testimonial-card break-inside-avoid mb-5 bg-[#D9D5D1] rounded-2xl p-7 flex flex-col"
                    >
                        <p className="text-[16px] leading-[1.65] text-[#121718]/85 mb-6 flex-1">
                            &ldquo;{t.quote}&rdquo;
                        </p>
                        <div className="flex items-center gap-3 mt-auto">
                            <div className="w-10 h-10 rounded-full bg-[#C5C0BB] flex items-center justify-center text-[#121718]/70 font-semibold text-sm">
                                {t.initials}
                            </div>
                            <div>
                                <h4 className="text-[14px] font-medium text-[#121718]">{t.name}</h4>
                                <p className="text-[12px] text-[#121718]/50">{t.role}, {t.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
