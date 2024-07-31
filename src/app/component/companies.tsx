// src/app/components/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Companies = () => {
  const pathname = usePathname();

  return (
    <div className="w-full bg-white flex-col justify-center items-center  inline-flex">
      <img src="Companies.svg" alt="company logo" />
    </div>
  );
};

export default Companies;


