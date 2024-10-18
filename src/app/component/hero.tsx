// src/app/components/Hero.tsx
'use client';
import React, { useState } from 'react';


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CTA from './CTA';

const Hero = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="HeroSection relative w-full bg-white">
      {/* Running Campaign Section */}
      <div className="RunningCampaign w-full bg-emerald-800 flex justify-center items-center gap-2">
        <div className="text-xs font-normal leading-none">🔥</div>
        <div className="WeReThrilledToShareThatOurLatestFeatureIsNowAccessibleForYouExploreLeverage">
          <span className="text-white text-xs font-normal leading-none">We’re thrilled to share that our </span>
          <span className="text-white text-xs font-semibold underline leading-none">Latest feature</span>
          <span className="text-white text-xs font-normal leading-none"> is now accessible for you explore & leverage!</span>
        </div>
      </div>

      {/* Header Section */}
      <div className="Header bg-white py-4 flex flex-col md:flex-row justify-between items-center mx-5 md:mx-20">
        <a className='Logomark flex items-center justify-center gap-1.5' href="/chat">
          <img src="Logomark.png" alt="logo" className="h-8 md:h-auto" />
          <img src="Logotype.png" alt="" className="w-full h-full object-contain" />
        </a>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-4 md:mt-0">
          <div className="flex items-center gap-0.5 md:hidden">
            <button onClick={toggleDropdown} className="Desc text-center text-black text-base font-medium leading-snug">
              ☰
            </button>
          </div>
          <div className={`flex flex-col gap-2 mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'} md:flex md:flex-row md:gap-5`}>
            <a href="#" className="Desc text-center text-black text-base font-medium leading-snug">Solutions</a>
            <a href="#" className="Desc text-center text-black text-base font-medium leading-snug">Industries</a>
            <a href="#" className="Desc text-center text-black text-base font-medium leading-snug">Pricing</a>
            <a href="#" className="Desc text-center text-black text-base font-medium leading-snug">Companies</a>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 mt-4 md:mt-0">
          <a className="Button px-5 py-3.5 rounded-xl border flex items-center justify-center gap-2 hover:bg-slate-200" href=''>
            <div className="Title text-center text-black text-base font-medium leading-snug">Sign in</div>
          </a>
          <a className="Button px-5 py-3.5 bg-emerald-600 rounded-lg flex items-center justify-center gap-2 hover:bg-emerald-800" href=''>
            <div className="Title text-center text-white text-base font-medium leading-snug">Contact sales</div>
          </a>
        </div>
      </div>


      <CTA/>
      {/* Hero Headline Section */}
      {/* <div className="HeroHeadline flex flex-col justify-start items-center gap-6 mt-20">
        <div className="Headline text-center text-black text-6xl font-medium">Boost your sales through <br />email marketing</div>
        <div className="Desc text-center text-slate-500 text-xl font-normal">Acquire customers through SEO, elevate your business with digital <br /> marketing, and generate sales leads</div>
      </div> */}

      {/* Call to Action Buttons */}
      {/* <div className="CtaList flex flex-col md:flex-row justify-center items-center gap-4 pt-10">
        <a className="Button px-5 py-3.5 bg-emerald-600 rounded-lg shadow flex items-center justify-center gap-2 hover:bg-emerald-800" href="/chat">
          <div className="Title text-center text-white text-base font-medium leading-snug">Getting started</div>
        </a>
        <a className="Button px-5 py-3.5 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center gap-2 hover:bg-slate-200" href='/chat'>
          <div className="Title text-center text-black text-base font-medium leading-snug">Request demo</div>
        </a>
      </div> */}

      {/* Hero Image Section */}
      <div className="flex justify-center mt-10 mx-20">
        <img className="Frame1 w-full rounded-tl-2xl rounded-tr-2xl border border-zinc-200" src="hero-img.svg" alt="Placeholder Image" />
      </div>

    </div>
  );
};

export default Hero;
