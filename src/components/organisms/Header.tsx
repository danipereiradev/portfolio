import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Modal } from '../molecules/Modal';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

import DropdownMenu from '../molecules/DropdownMenu';

interface HeaderProps {
  onToggleThemeMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ischecked: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleThemeMode, ischecked }) => {
  const [showModal, setShowmodal] = useState(false);
  const [showDropdown, setShowDropDown] = useState(false);
  const [modalData, setModalData] = useState('');

  const [selectedTheme, setSelectedTheme] = useState('Dark');

  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const handleLanguageChange = (event: any) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value;

    if (selectedTheme === 'Light') {
      setShowmodal((prevModalState) => !prevModalState);
      setSelectedTheme('Light');

      setModalData(t('others.modalThemeLight'));

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
    <header className=' z-20 flex w-screen items-center justify-center bg-[#00000059] px-12  py-4 lg:px-0'>
      <div className='container flex w-5/6 items-center justify-center py-7 lg:py-5'>
        <div className='flex flex-col items-center gap-2'>
          <div className='rounded-full p-1'>
            <Image
              className='rounded-full'
              src='/dpg.jpg'
              alt='icon Logo danipereira.dev'
              width={150}
              height={150}
              priority
            />
          </div>

          <div className='flex items-center justify-center gap-4'>
            <h1
              className='font-
              items-center bg-gradient-to-r from-white
  to-teal-400 bg-clip-text pt-2 font-Arcade text-3xl uppercase tracking-wider text-transparent '
            >
              pereiradev
            </h1>
            {/* <select
                name='language'
                id='language'
                onChange={handleLanguageChange}
                className=' h-8 bg-transparent text-sm font-normal uppercase'
                value={i18n.language}
              >
                <option value='en'>En</option>
                <option value='gl'>Gl</option>
                <option value='es'>Es</option>
              </select> */}
          </div>
        </div>

        {/* 
        <div className='flex flex-col items-center justify-center'>
          {!showDropdown ? (
            <GiHamburgerMenu
              size={24}
              className='cursor-pointer hover:text-slate-400 lg:hidden'
              onClick={() => setShowDropDown((prevState) => !prevState)}
            />
          ) : (
            <IoMdClose
              className='cursor-pointer hover:text-slate-400 lg:hidden'
              onClick={() => setShowDropDown((prevState) => !prevState)}
              size={30}
            />
          )}

          {showDropdown && <DropdownMenu onShowDropDown={setShowDropDown} />}

          <nav className='text-md hidden items-center justify-center font-bold text-slate-200 lg:flex'>
            <div className='mr-16 flex'>
              <a
                className='cursor-pointer px-4 uppercase'
                onClick={() => smoothScroll('cv')}
              >
                {t('menu.cv')}
              </a>
              <a
                className='cursor-pointer px-4 uppercase'
                onClick={() => smoothScroll('about')}
              >
                {t('menu.about')}
              </a>
              <a
                className='cursor-pointer px-4 uppercase'
                onClick={() => smoothScroll('portfolio')}
              >
                {t('menu.Portfolio')}
              </a>
              <a
                className='cursor-pointer px-4 uppercase'
                onClick={() => smoothScroll('contact')}
              >
                {t('menu.Contact')}
              </a>
            </div>

            <div className='relative flex flex-col items-center gap-4'>
              <div className=' flex  items-center gap-2'>
                

                {showModal && (
                  <Modal className='absolute inset-0 top-0 left-[50px]'>
                    {' '}
                    {modalData}
                  </Modal>
                )}

                <select
                  onChange={handleThemeChange}
                  className=' relative h-8  bg-black text-sm font-normal uppercase'
                  id='theme'
                  name='theme'
                  value={selectedTheme}
                >
                  <option>Light</option>
                  <option>Dark</option>
                </select>

                {showModal && (
                  <Modal className='absolute top-4'> {modalData}</Modal>
                )}
              </div>
            </div> 
          </nav>
         
        </div>
         */}
      </div>
    </header>
  );
};

export default Header;
