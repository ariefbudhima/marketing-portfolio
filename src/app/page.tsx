// src/app/chat/page.tsx
'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import SmoothScroll from 'smooth-scroll';
import Hero from "./component/hero";
import Companies from "./component/companies";
import MarketingSolutions from "./component/marketing_solutions";
import Integration from "./component/integration";
import Companies2 from "./component/companies2";
import CTA from "./component/CTA";
import Footer from "./component/footer";

// Dinamis import FAQ
const FAQ = dynamic(() => import('./component/FAQ'), { ssr: false });

const Home = () => {

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="LandingPages w-full relative bg-white">
        <div><Hero /></div>
        <div><Companies /></div>
        <div><MarketingSolutions /></div>
        <div><Integration /></div>
        <div><Companies2 /></div>
        <div><FAQ /></div>
        <div><CTA /></div>
        <div><Footer /></div>
      </div>
    </main>
  );
};

export default Home;
