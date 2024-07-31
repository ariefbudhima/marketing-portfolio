// src/app/components/Sidebar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Title self-stretch p-6 bg-slate-50 rounded-xl border border-slate-100 flex-col justify-center items-start gap-2 flex">
      <div
        className="Frame1941 self-stretch justify-between items-center gap-2.5 inline-flex cursor-pointer"
        onClick={toggleFAQ}
      >
        <div className="Headline grow shrink basis-0 text-neutral-900 text-xl font-medium leading-7">{question}</div>
        <div className="Frame w-6 h-6 p-1 justify-center items-center flex">
          {isOpen ? <FaMinus color="black" /> : <FaPlus color="black" />}
        </div>
      </div>
      <div
        className={`Headline self-stretch text-slate-500 text-lg font-normal leading-relaxed mt-2 transition-max-height duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        {answer}
      </div>
    </div>
  );
};

const FAQ = () => {
  const pathname = usePathname();

  const faqs = [
    {
      question: 'How can it benefit my business?',
      answer: 'It can benefit your business by helping you reach a targeted audience, increase brand awareness, drive sales, and foster customer relationships.',
    },
    {
      question: 'How does your email marketing service work?',
      answer: 'Our email marketing service involves creating personalized email campaigns to engage your audience and promote your brand.',
    },
    {
      question: 'Is Nietzsche compatible with other software?',
      answer: 'Yes, our software is designed to be compatible with a variety of platforms and can integrate seamlessly with other tools you may use.',
    },
    {
      question: 'Support that we offer to help you get started',
      answer: 'We offer comprehensive support including tutorials, webinars, and a dedicated support team to help you get started.',
    },
    {
      question: 'How to ensure my email campaigns comply with regulations?',
      answer: 'We provide guidelines and best practices to ensure your email campaigns comply with all relevant regulations, including GDPR.',
    },
    {
      question: 'Analytics and reporting tools are available to track',
      answer: 'Our platform includes powerful analytics and reporting tools to help you track the performance of your campaigns and optimize them for better results.',
    },
  ];

  return (
    <div className="Companies w-full px-4 md:px-20 py-10 md:py-28 bg-white flex-col justify-center items-center gap-12 inline-flex">
      <div className="HeroHeadline self-stretch flex-col justify-start md:justify-between items-center gap-6 flex">
        <div className="Headline self-stretch text-center text-black text-3xl md:text-5xl font-medium leading-tight sm:leading-9 md:leading-10">
          Frequently asked questions
        </div>
        <div className="Desc w-full max-w-2xl text-center text-slate-500 text-lg md:text-xl font-normal leading-7">
          Can’t find what you’re looking for? Feel free to reach out to our dedicated support team for assistance.
        </div>
      </div>

      <div className="List w-full flex flex-col md:flex-row justify-start items-start gap-6">
        <div className="Feature w-full md:w-1/2 flex-col justify-start items-start gap-6 inline-flex">
          {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className="Feature w-full md:w-1/2 flex-col justify-start items-start gap-6 inline-flex">
          {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
