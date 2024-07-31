// src/app/components/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CTA = () => {
  const pathname = usePathname();

  return (
    <div className="Cta w-full px-4 md:px-20 py-14 bg-black flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
      <div className="HeroHeadline w-full md:w-1/2 flex flex-col justify-start items-start gap-6">
        <div className="Headline text-white text-2xl sm:text-3xl md:text-5xl font-medium  leading-tight sm:leading-9 md:leading-10">
          Boost your sales through email marketing
        </div>
        <div className="Desc text-gray-500 text-base sm:text-lg md:text-xl font-normal">
          Acquire customers through SEO, elevate your business with digital marketing, and generate sales leads.
        </div>
      </div>

      <div className="CtaList flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-4 w-full md:w-auto">
        <div className="Button px-4 py-3 bg-zinc-900 hover:bg-zinc-800 rounded-lg border flex justify-center items-center">
          <div className="Title text-center text-white text-sm sm:text-base font-medium leading-snug">
            Request demo
          </div>
        </div>
        <div className="Button px-4 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow flex justify-center items-center">
          <div className="Title text-center text-white text-sm sm:text-base font-medium leading-snug">
            Getting started
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
