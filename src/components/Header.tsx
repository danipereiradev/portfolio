import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Modal } from './Modal';
import { useState } from 'react';

interface HeaderProps {
  onToggleThemeMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ischecked: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleThemeMode, ischecked }) => {
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
            <h1 className="items-center pt-2 font-Arcade text-3xl uppercase tracking-wider text-slate-200">
              DP
              <span className="bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text pt-2 text-3xl font-extrabold tracking-widest text-transparent">
                DEV
              </span>
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
            onClick={() => smoothScroll('form')}
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
          >
            <div className="flex items-center">
              <Image
                src="/uk.jpeg"
                alt="English language"
                width={15}
                height={15}
                priority
                className="mr-2 cursor-pointer"
              />
              <button className="mr-4 text-white">English</button>
              {/* <input
                onChange={onToggleThemeMode}
                type="checkbox"
                className="toggle sm:hidden"
                checked={ischecked}
              /> */}
            </div>
            {showModal && (
              <Modal isChecked={ischecked}>
                Sorry, for now, this site will only be available in English with
                dark theme.
              </Modal>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
