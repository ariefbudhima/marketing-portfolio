// src/app/components/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MarketingSolutions = () => {
	const pathname = usePathname();

	return (
		<div className="bg-gray-50 mx-5 rounded-2xl py-14">
			<div className="w-full flex justify-center">
				<div className="HeroHeadline w-full rounded-lg flex flex-col justify-center items-center gap-6">
					<div className="text-center text-black text-5xl font-medium leading-tight">
						Your all-in-one marketing solution
					</div>
					<div className="w-full  text-center text-slate-500 text-xl font-normal leading-7">
						Seamless integration of essential marketing tools in a single platform, <br /> tailored to elevate your brand's reach and impact.
					</div>
				</div>
			</div>
			<div className="Card p-6 my-6 bg-white rounded-2xl border border-gray-200 flex flex-col justify-center items-start gap-6 mx-4 md:mx-20">
				<div className="HeroHeadline flex flex-col items-start gap-5 mb-6">
					<div className="Headline text-black text-3xl font-medium leading-10">
						Details product overview
					</div>
					<div className="Desc text-gray-500 text-xl font-normal leading-7 text-center">
						Track the sales activity of your product and determine the best time for your users to make a purchase.
					</div>
				</div>
				<div className="CtaList flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
					<div className="Button px-5 py-3.5 bg-emerald-600 rounded-lg shadow flex justify-center items-center gap-2 hover:bg-emerald-700">
						<div className="Title text-center text-white text-base font-medium leading-snug">
							Getting started
						</div>
					</div>
					<div className="Button px-5 py-3.5 bg-gray-50 rounded-lg flex justify-center items-center gap-2 hover:bg-gray-100">
						<div className="Title text-center text-black text-base font-medium leading-snug">
							Request demo
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-auto">
					<img src="Card41.png" alt="Card 41" className="w-full h-auto object-cover" />
					<img src="Card42.png" alt="Card 42" className="w-full h-auto object-cover" />
				</div>

			</div>


			<div className="my-6 grid grid-cols-1 md:grid-cols-7 gap-6 md:mx-20">
				<div className="bg-white grid gap-10 p-6 rounded-xl col-span-4">
					<div>
						<div className="Headline self-stretch text-black text-3xl font-medium leading-10">Product statistic data</div>
						<div className="Desc self-stretch text-slate-500 text-xl font-normal leading-7">Valuable insights into your products' performance and customer trends with our detailed product statistic data.</div>
					</div>
					<img className="Card41 w-full object-cover rounded-2xl" src="detailproduct-2.svg" alt="Placeholder Image 1" />
				</div>
				<div className="bg-white grid gap-10 p-6 rounded-xl col-span-3">
					<div>
						<div className="Headline self-stretch text-black text-3xl font-medium leading-10">Live product assets</div>
						<div className="Desc self-stretch text-slate-500 text-xl font-normal leading-7">Real-time product assets, ensuring you're always in control of your stock levels and ready.</div>
					</div>
					<img className="Card42 w-full object-cover rounded-2xl" src="detailproduct-3.svg" alt="Placeholder Image 2" />
				</div>
			</div>

			{/* <div className="grid grid-cols-4 grid-rows-3 gap-4 p-4 bg-white rounded-lg shadow-lg max-w-4xl">
        <div className="bg-red-200 p-4 rounded-lg col-span-2 row-span-2">Content 1</div>
        <div className="bg-blue-200 p-4 rounded-lg col-span-2 row-span-1">Content 2</div>
        <div className="bg-green-200 p-4 rounded-lg col-span-1 row-span-1">Content 3</div>
        <div className="bg-yellow-200 p-4 rounded-lg col-span-1 row-span-2">Content 4</div>
        <div className="bg-purple-200 p-4 rounded-lg col-span-1 row-span-1">Content 5</div>
        <div className="bg-pink-200 p-4 rounded-lg col-span-2 row-span-1">Content 6</div>
      </div> */}
		</div>
	);
};

export default MarketingSolutions;
