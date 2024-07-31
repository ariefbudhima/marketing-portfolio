// src/app/components/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-full bg-gray-800 text-white w-1/4 px-4 py-8">
      <ul>
        <li className={`mb-2 ${pathname === '/' ? 'bg-gray-700' : ''}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`mb-2 ${pathname === '/chat' ? 'bg-gray-700' : ''}`}>
          <Link href="/chat">Chat</Link>
        </li>
        <li className={`mb-2 ${pathname === '/services' ? 'bg-gray-700' : ''}`}>
          <Link href="/services">Services</Link>
        </li>
        <li className={`mb-2 ${pathname === '/contact' ? 'bg-gray-700' : ''}`}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
