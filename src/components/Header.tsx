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
      const headerHeight = 84; // Adjust this to your actual header height
      const offset = section.getBoundingClientRect().top - headerHeight + window.pageYOffset;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 z-20 flex justify-center w-screen bg-black">
      <div className="container flex items-center justify-between py-7 lg:py-5">
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
            <h1 className="items-center pt-2 text-3xl tracking-wider uppercase font-Arcade text-slate-200">
              DP
              <span className="pt-2 text-3xl font-extrabold tracking-widest text-transparent bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text">
                DEV
              </span>
            </h1>
          </div>
        </Link>
        <nav className="justify-center hidden font-bold text-white lg:flex">
          <a
            className="px-4 uppercase cursor-pointer"
            onClick={() => smoothScroll('cv')}
          >
            CV
          </a>
          <a
            className="px-4 uppercase cursor-pointer"
            onClick={() => smoothScroll('portfolio')}
          >
            Portfolio
          </a>
          <a
            className="px-4 uppercase cursor-pointer"
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
              <p className="mr-4">English</p>
              <input
                onChange={onToggleThemeMode}
                type="checkbox"
                className="toggle"
                checked={ischecked}
              />
            </div>
            {showModal && (
              <Modal isChecked={ischecked}>
                Sorry, for now, this site will only be available in English.
              </Modal>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
