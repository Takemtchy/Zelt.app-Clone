'use client';
import React, { useState } from 'react';
import { RiAddLine, RiSubtractLine } from '@remixicon/react';

const faqData = [
    {
        question: "Who is Zelt HR for?",
        answer: "Zelt is built for modern businesses of all sizes — from fast-growing startups to established mid-market companies. Whether you're managing a team of 10 or 1,000, Zelt provides the tools to streamline HR, payroll, IT, and people operations in one place."
    },
    {
        question: "What is HR Software?",
        answer: "HR software is a digital solution that helps businesses manage their human resources processes — from hiring and onboarding to payroll, benefits, time off, and offboarding. Zelt takes this further by combining HR with IT management in a single, intuitive platform."
    },
    {
        question: "What makes Zelt different from other HR software?",
        answer: "Unlike traditional HR tools, Zelt combines people management, payroll, IT, and device management in one unified platform. This means fewer tools, less admin, and a better experience for both HR teams and employees."
    },
    {
        question: "Is Zelt the best HR software solution on the market?",
        answer: "Zelt is consistently rated as a top HR platform by users on G2, Trustpilot, and the Xero App Store. Our customers love the all-in-one approach, intuitive design, and responsive support that sets us apart from legacy HR systems."
    },
    {
        question: "Can Zelt handle payroll and HR in one system?",
        answer: "Yes. Zelt natively integrates payroll with your HR data, so everything from timesheets and expenses to benefits and tax calculations is handled in one place. No more syncing between separate systems."
    },
    {
        question: "Is Zelt secure and GDPR-compliant?",
        answer: "Absolutely. Zelt is ISO 27001 certified, GDPR compliant, and Cyber Essentials certified. We take data security seriously and implement industry-leading practices to protect your sensitive employee information."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-[#E4E0DD] py-32 px-10 md:px-20 lg:px-40 flex flex-col items-center justify-center font-sans text-[#121718]">

            {/* Section Heading */}
            <h2 className="text-[40px] md:text-[54px] font-normal tracking-tight mb-14 text-center leading-tight">
                Frequently asked questions
            </h2>

            {/* FAQs */}
            <div className="w-full max-w-5xl mx-auto flex flex-col gap-3">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className={`bg-[#D9D5D1] rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-[#D1CDC8]' : 'hover:bg-[#D4D0CB]'}`}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center px-8 py-6 text-left cursor-pointer"
                            aria-expanded={openIndex === index}
                        >
                            <span className="text-[20px] md:text-[24px] font-normal text-[#121718] pr-8">{faq.question}</span>
                            <span className="text-[#121718]/60 shrink-0">
                                {openIndex === index ? <RiSubtractLine size={24} /> : <RiAddLine size={24} />}
                            </span>
                        </button>

                        <div
                            className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-64 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <p className="text-[#121718]/70 text-[16px] leading-[1.7] max-w-3xl">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default FAQ;
