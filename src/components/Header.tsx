import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Modal } from './Modal';
import { useState, useEffect } from 'react';
import { countriesEU } from '@/data/countries';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { HiOutlineSun } from 'react-icons/hi';
import { MdDarkMode } from 'react-icons/md';

import DropdownMenu from './DropdownMenu';

interface HeaderProps {
  onToggleThemeMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ischecked: boolean;
}

const themeEmojis = [
  {
    lightIcon: <HiOutlineSun size={20} />,
  },
  {
    darkIcon: <MdDarkMode size={20} />,
  },
];

const Header: React.FC<HeaderProps> = ({ onToggleThemeMode, ischecked }) => {
  const [showModal, setShowmodal] = useState(false);
  const [showDropdown, setShowDropDown] = useState(false);
  const [modalData, setModalData] = useState('');
  const [selectedLanguage, setSelectedLenguage] = useState('GB');
  const [selectedTheme, setSelectedTheme] = useState('Dark');

  const languageSelectetion = countriesEU.filter((country) => {
    return country.countryCode === 'GB' || country.countryCode === 'ES';
  });

  console.log(languageSelectetion);

  const languageOptions = languageSelectetion.map((language) => {
    return (
      <option key={language.areaCode} value={language.countryCode}>
        {language.language}
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

    if (selectedTheme === 'Light') {
      setShowmodal((prevModalState) => !prevModalState);
      setSelectedTheme('Light');

      setModalData("I'm working on a lighter theme for ligher people!");

      setTimeout(() => {
        setShowmodal(false);
        setSelectedTheme('Dark');
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

  useEffect(() => {
    if (showDropdown) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [showDropdown]);

  return (
    <header className="fixed top-0 z-20 flex w-screen items-center justify-center bg-black px-12 lg:px-0">
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

          <nav className="hidden items-center justify-center font-bold text-slate-200 lg:flex">
            <div className="mr-16 flex">
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
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="relative flex  items-center gap-2">
                <select
                  name="language"
                  id="language"
                  onChange={handleOptionChange}
                  className="relative h-8 bg-black text-sm font-normal"
                  value={selectedLanguage}
                >
                  {languageOptions}
                </select>
                <div className="icon-container">
                  {selectedLanguage === 'ES' ? '🇪🇸' : '🇬🇧'}
                </div>
                {showModal && (
                  <Modal className="absolute top-4"> {modalData}</Modal>
                )}

                <select
                  onChange={handleThemeChange}
                  className=" relative h-8  bg-black text-sm font-normal"
                  id="theme"
                  name="theme"
                  value={selectedTheme}
                >
                  <option>Light</option>
                  <option>Dark</option>
                </select>
                <div className="icon-container">
                  {selectedTheme === 'Light'
                    ? themeEmojis[0].lightIcon
                    : themeEmojis[1].darkIcon}
                </div>
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
