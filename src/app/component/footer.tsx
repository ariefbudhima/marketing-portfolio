// src/app/components/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className="Footer w-full px-4 sm:px-8 md:px-20 pt-10 md:pt-14 pb-6 md:pb-10 bg-black flex flex-col gap-6 md:gap-14">
      <div className="NavigationMenu grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
        <div className="Contents flex flex-col gap-4">
          <div className="Headline text-white text-lg md:text-xl font-medium">Company</div>
          <div className="Frame1942 flex flex-col gap-2">
            <a href="#" className="HeadlineLink">
              <div className="Headline text-gray-500 text-base md:text-lg">About us</div>
            </a>
            <a href="#" className="HeadlineLink">
              <div className="Headline text-gray-500 text-base md:text-lg">Products</div>
            </a>
            <a href="#" className="HeadlineLink">
              <div className="Headline text-gray-500 text-base md:text-lg">Career</div>
            </a>
          </div>
        </div>

        <div className="Contents flex flex-col gap-4">
          <div className="Headline text-white text-lg md:text-xl font-medium">Use cases</div>
          <div className="Frame1942 flex flex-col gap-2">
            <a href="#" className="HeadlineLink">
              <div className="Headline text-gray-500 text-base md:text-lg">Enterprise</div>
            </a>
            <a href="#" className="HeadlineLink">
              <div className="Headline text-gray-500 text-base md:text-lg">Start-up</div>
            </a>
            <a href="#" className="HeadlineLink">
              <div className="Headline text-gray-500 text-base md:text-lg">Creator</div>
            </a>
          </div>
        </div>

        <div className="Contents flex flex-col gap-4">
          <div className="Headline text-white text-lg md:text-xl font-medium">Resources</div>
          <div className="Frame1942 flex flex-col gap-2">
            <a href="#" className="HeadlineLink">
              <div className="Headline text-gray-500 text-base md:text-lg">Documentation</div>
            </a>
            <a href="#" className="HeadlineLink">
              <div className="Headline text-gray-500 text-base md:text-lg">Media & blog</div>
            </a>
            <a href="#" className="HeadlineLink">
              <div className="Headline text-gray-500 text-base md:text-lg">Community</div>
            </a>
          </div>
        </div>

        <div className="Contents flex flex-col gap-4">
          <div className="Headline text-white text-lg md:text-xl font-medium">Support</div>
          <div className="Frame1942 flex flex-col gap-2">
            <a href="#" className="HeadlineLink">
              <div className="Headline text-gray-500 text-base md:text-lg">Contact center</div>
            </a>
            <a href="#" className="HeadlineLink">
              <div className="Headline text-gray-500 text-base md:text-lg">Trial & demo</div>
            </a>
            <a href="#" className="HeadlineLink">
              <div className="Headline text-gray-500 text-base md:text-lg">FAQs</div>
            </a>
          </div>
        </div>

        <div className="Contents flex flex-col gap-4">
          <div className="Headline text-white text-lg md:text-xl font-medium">Social</div>
          <div className="Frame1942 flex flex-col gap-2">
            <a href="#" className="HeadlineLink">
              <div className="Headline text-gray-500 text-base md:text-lg">Instagram</div>
            </a>
            <a href="#" className="HeadlineLink">
              <div className="Headline text-gray-500 text-base md:text-lg">Twitter</div>
            </a>
            <a href="#" className="HeadlineLink">
              <div className="Headline text-gray-500 text-base md:text-lg">Tiktok</div>
            </a>
          </div>
        </div>

      </div>
      <div className="Frame16 border-t border-zinc-900 pt-6 md:pt-10 flex flex-col items-center gap-4 md:gap-10">
        <div className="NavigationMenu flex flex-col md:flex-row items-center justify-between w-full">
          <div className="Menu text-white text-sm md:text-base font-normal">2024 Nietzsche. All rights reserved.</div>
          <div className="Frame11 flex gap-4 md:gap-12">
            <a href="#">
              <div className="Menu text-white text-sm md:text-base font-normal">Terms of service</div>
            </a>
            <a href="#">
              <div className="Menu text-white text-sm md:text-base font-normal">Privacy policy</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
