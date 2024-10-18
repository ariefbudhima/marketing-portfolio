// src/app/components/Sidebar.tsx
'use client';

import { usePathname } from 'next/navigation';

const Integration = () => {
  const pathname = usePathname();

  return (
    <div className="w-full py-8 md:py-30 bg-white flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 px-4 md:px-20 w-full">
        {/* Section Kiri */}
        <div className="flex flex-col justify-center items-start gap-6 md:gap-10">
          <div className="HeroHeadline flex flex-col items-start text-left gap-6 md:gap-8">
            <div className="Headline text-black text-2xl md:text-4xl font-medium leading-tight md:leading-snug">
              Integrated with diverse support tools
            </div>
            <div className="Desc text-slate-500 text-base md:text-lg font-normal leading-relaxed">
              Connected to a range of support tools, our system streamlines your workflow by effortlessly integrating with popular platforms, ensuring efficiency and enhanced productivity.
            </div>
          </div>
          <div className="CtaList flex flex-col sm:flex-row gap-4 md:gap-6">
            <div className="Button px-4 py-2 md:px-5 md:py-3.5 bg-emerald-600 rounded-lg shadow hover:bg-emerald-700 flex justify-center items-center gap-2">
              <div className="Title text-white text-sm md:text-base font-medium leading-snug">Getting started</div>
            </div>
            <div className="Button px-4 py-2 md:px-5 md:py-3.5 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100 flex justify-center items-center gap-2">
              <div className="Title text-black text-sm md:text-base font-medium leading-snug">Request demo</div>
            </div>
          </div>
        </div>
        
        {/* Section Kanan */}
        <div className="relative flex-shrink-0 w-full h-[408px] overflow-hidden">
          <img
            className="absolute top-0 left-0 h-full w-full object-cover"
            src="Frame 59.svg"
            alt="Support Tools"
          />
        </div>
      </div>
    </div>
  );
};

export default Integration;
