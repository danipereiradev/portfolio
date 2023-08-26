import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Modal } from './Modal';
import { useState } from 'react';
import { countriesEU } from '@/data/countries';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

import DropdownMenu from './DropdownMenu';
import { TestDropdown } from './testDropDown';

interface HeaderProps {
  onToggleThemeMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ischecked: boolean;
}

const themeEmojis = [
  {
    lightIcon: '☀️',
  },
  {
    darkIcon: '🌛',
  },
];

const Header: React.FC<HeaderProps> = ({ onToggleThemeMode, ischecked }) => {
  const [showModal, setShowmodal] = useState(false);
  const [showDropdown, setShowDropDown] = useState(false);
  const [modalData, setModalData] = useState('');
  const [selectedLanguage, setSelectedLenguage] = useState('GB');
  const [selectedTheme, setSelectedTheme] = useState(themeEmojis[0].darkIcon);

  const languageSelectetion = countriesEU.filter((country) => {
    return country.countryCode === 'GB' || country.countryCode === 'ES';
  });

  const languageOptions = languageSelectetion.map((language) => {
    return (
      <option key={language.areaCode} value={language.countryCode}>
        {language.flag}
      </option>
    );
  });

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    if (selectedValue === 'ES') {
      setSelectedLenguage('ES');
      setShowmodal((prevModalState) => !prevModalState);
      setModalData('Muy pronto estará disponible la versión en Español');

      setTimeout(() => {
        setShowmodal(false);
        setSelectedLenguage('GB');
      }, 3000);
    }
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value;

    if (selectedTheme === themeEmojis[0].lightIcon) {
      setShowmodal((prevModalState) => !prevModalState);
      setSelectedTheme(themeEmojis[0].lightIcon);

      setModalData("I'm working on a lighter theme for ligher people!");

      setTimeout(() => {
        setShowmodal(false);
        setSelectedTheme(themeEmojis[1].darkIcon);
      }, 3000);
    }
  };

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
    <header className="fixed  top-0 z-20 flex w-screen items-center justify-center bg-black px-12 lg:px-0">
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
              items-center bg-gradient-to-r from-white
  to-teal-400 bg-clip-text pt-2 font-Arcade text-3xl uppercase tracking-wider text-transparent "
            >
              DPDEV
            </h1>
          </div>
        </Link>

        <div className="flex flex-col items-center justify-center">
          {!showDropdown ? (
            <GiHamburgerMenu
              size={24}
              className="cursor-pointer hover:text-slate-400 lg:hidden"
              onClick={() => setShowDropDown((prevState) => !prevState)}
            />
          ) : (
            <IoMdClose
              className="cursor-pointer hover:text-slate-400 lg:hidden"
              onClick={() => setShowDropDown((prevState) => !prevState)}
              size={30}
            />
          )}

          {showDropdown && <DropdownMenu onShowDropDown={setShowDropDown} />}
          {/* {showDropdown && <TestDropdown />} */}

          <nav className="hidden items-center justify-center font-bold text-slate-200 lg:flex">
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

            <div className="flex flex-col items-center gap-4">
              <div className="relative flex  gap-2">
                <select
                  name="language"
                  id="language"
                  onChange={handleOptionChange}
                  className="relative h-8 w-12 bg-black"
                  value={selectedLanguage}
                >
                  {languageOptions}
                </select>
                {showModal && (
                  <Modal className="absolute top-4"> {modalData}</Modal>
                )}
                <select
                  onChange={handleThemeChange}
                  className=" relative h-8 w-12 bg-black"
                  id="theme"
                  name="theme"
                  value={selectedTheme}
                >
                  <option>☀️</option>
                  <option>🌛</option>
                </select>
                {showModal && (
                  <Modal className="absolute top-4"> {modalData}</Modal>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
