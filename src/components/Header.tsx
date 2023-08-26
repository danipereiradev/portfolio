import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Modal } from './Modal';
import { useState } from 'react';

const Header: React.FC = () => {
  const [showModal, setShowmodal] = useState(false);

  const smoothScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      let headerHeight = 0; // Default header height for non-desktop screens

      // Check if the screen width is greater than a certain threshold for desktop screens
      if (window.innerWidth >= 768) {
        headerHeight = 84; // Adjust this to your actual header height for desktop screens
      }

      const offset =
        section.getBoundingClientRect().top - headerHeight + window.pageYOffset;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <header className=" fixed top-0 z-20 flex w-screen justify-center bg-black">
      <div className="container flex w-5/6 items-center justify-between py-7 lg:py-5">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              style={{ filter: 'invert(1)' }}
              src="/code.png"
              alt="icon Logo danipereira.dev"
              width={25}
              height={25}
              priority
            />
            <h1
              className=" 
              items-center bg-gradient-to-r from-cyan-200
  to-teal-400 bg-clip-text pt-2 font-Arcade text-3xl uppercase tracking-wider text-transparent "
            >
              DPDEV
            </h1>
          </div>
        </Link>
        <nav className="hidden justify-center font-bold text-slate-200 lg:flex">
          <a
            className="cursor-pointer px-4 uppercase"
            onClick={() => smoothScroll('cv')}
          >
            CV
          </a>
          <a
            className="cursor-pointer px-4 uppercase"
            onClick={() => smoothScroll('portfolio')}
          >
            Portfolio
          </a>
          <a
            className="cursor-pointer px-4 uppercase"
            onClick={() => smoothScroll('contact')}
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <div
            className="relative"
            onMouseEnter={() =>
              setShowmodal((prevModalState) => !prevModalState)
            }
            onMouseLeave={() =>
              setShowmodal((prevModalState) => !prevModalState)
            }
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
