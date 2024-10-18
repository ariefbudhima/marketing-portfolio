// src/app/components/CTA.tsx
'use client';

import React from 'react';
import Button from './reusable/Button';

const CTA = () => {
  return (
    <div className="Cta w-full px-4 md:px-20 py-14 bg-white flex flex-col justify-center items-center gap-6">
      {/* Hero Headline Section */}
      <div className="HeroHeadline flex flex-col justify-center items-center gap-6">
        <div className="Headline text-center text-black text-6xl font-medium">
          Boost your sales through <br /> email marketing
        </div>
        <div className="Desc text-center text-slate-500 text-xl font-normal">
          Acquire customers through SEO, elevate your business with digital <br /> marketing, and generate sales leads
        </div>
      </div>

      {/* Call to Action Buttons */}
      <div className="CtaList flex justify-center items-center gap-4 w-full pt-10">
        <Button
          className="bg-emerald-600 hover:bg-emerald-700 shadow"
        >
          <div className="Title text-center text-white text-base font-medium leading-snug">
            Getting started
          </div>
        </Button>
        <Button
          title="Request demo"
          className="bg-slate-50 border border-slate-100 hover:bg-slate-200"
          textColor="text-black" // Mengatur warna teks tombol ini menjadi hitam
        />
      </div>
    </div>
  );
};

export default CTA;