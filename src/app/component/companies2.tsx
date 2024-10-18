'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Companies2 = () => {
  const pathname = usePathname();

  return (
    <div className="w-full bg-white px-6 md:px-12 lg:px-20 py-10 md:py-[60px] gap-6 md:gap-12 flex flex-col justify-start">
      <div className="HeroHeadline flex flex-col justify-center items-center gap-6">
        <div className="Headline text-center text-black text-2xl md:text-4xl lg:text-5xl font-medium leading-tight md:leading-snug">
          We help to accelerate your business
        </div>
        <div className="Desc text-center text-slate-500 text-lg md:text-xl font-medium leading-tight md:leading-snug">
          Our strategies and innovative solutions are designed to propel your <br className="hidden md:block" /> business forward, unlocking new opportunities.
        </div>
      </div>

      <div className="grid grid-cols-1 h-full md:grid-cols-2 gap-6 w-full">
        <div className="Frame w-full h-full col-span-1 md:col-span-1">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/wrNuyquAxfI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="grid grid-cols-1 gap-6 col-span-1 w-full">
          <div className="Frame w-full rounded-lg relative">
            <img src="smiley.png" alt="smile" className="w-full h-full object-cover rounded-lg" />
            <div className="Details absolute bottom-0 left-0 p-4 w-full text-white z-10 bg-gradient-to-t from-black to-transparent">
              <div className="Desc text-white/70 text-sm md:text-lg font-normal font-medium leading-tight md:leading-snug">
                I'm thoroughly impressed! It's so user-friendly and convenient. Creating ads, paying bills, and even managing my stocks has never been easier. Thank you for making it a breeze!
              </div>
              <div className="Frame1944 flex justify-between items-center mt-4">
                <div className="AnaiahWhitten text-white text-lg md:text-xl font-medium leading-loose">
                  Anaiah Whitten
                </div>
                <div className="StarRate flex items-center gap-1.5">
                  <img src="star.png" alt="star" />
                  <img src="star.png" alt="star" />
                  <img src="star.png" alt="star" />
                  <img src="star.png" alt="star" />
                  <img src="star.png" alt="star" />
                </div>
              </div>
            </div>
          </div>

          <div className="Frame w-full rounded-lg relative">
            <img src="bg-fictional-company.png" alt="smiley" className="w-full h-full object-cover rounded-lg" />
            <div className="Details absolute top-0 left-0 p-4 w-full text-black z-10 bg-gradient-to-b from-white to-transparent">
              <div className="Frame1947 h-16 flex justify-between items-center relative">
                <div className="text-black text-lg md:text-5xl font-medium leading-10">
                  150+
                </div>
                <div className="Frame1945 flex justify-end items-center relative">
                  <div className="DisplayRoundLogo w-12 h-12 md:w-16 md:h-16 p-4 bg-white rounded-full border border-slate-100 flex items-center justify-center relative">
                    <img src="logos/mailchimp.png" alt="" />
                  </div>
                  <div className="DisplayRoundLogo w-12 h-12 md:w-16 md:h-16 p-4 bg-white rounded-full border border-slate-100 flex items-center justify-center relative -ml-6">
                    <img src="logos/skyscanner.png" alt="" />
                  </div>
                  <div className="DisplayRoundLogo w-12 h-12 md:w-16 md:h-16 p-4 bg-white rounded-full border border-slate-100 flex items-center justify-center relative -ml-6">
                    <img src="logos/instachart.png" alt="" />
                  </div>
                  <div className="DisplayRoundLogo w-12 h-12 md:w-16 md:h-16 p-4 bg-white rounded-full border border-slate-100 flex items-center justify-center relative -ml-6">
                    <img src="logos/delivero.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="Desc text-slate-500 text-lg md:text-2xl font-medium leading-loose">Companies</div>
            </div>
            <div className="Details absolute bottom-0 left-0 p-4 w-full text-black z-10 bg-gradient-to-t from-white to-transparent">
              <div className="StarRate flex items-center gap-1.5">
                <img src="star.png" alt="star" />
                <img src="star.png" alt="star" />
                <img src="star.png" alt="star" />
                <img src="star.png" alt="star" />
                <img src="star.png" alt="star" />
              </div>
              <div className="Desc text-black/70 text-sm md:text-lg font-medium leading-7">
                Trusted by more than 150 companies & already using our marketing services.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies2;


