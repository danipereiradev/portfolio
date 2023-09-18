import { useState } from 'react';
import { countriesEU } from '@/data/countries';
import { Modal } from './Modal';
import OutsideClickHandler from 'react-outside-click-handler';
import { useTranslation } from 'react-i18next';

interface dropdownProps {
  onShowDropDown: (newState: boolean) => void;
}

// TO-DO SACAR ESTA FUNCIÓN A UN HELPER
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

/* const themeEmojis = [
  {
    lightIcon: <HiOutlineSun size={20} />,
  },
  {
    darkIcon: <MdDarkMode size={20} />,
  },
]; */

export const DropdownMenu: React.FC<dropdownProps> = ({ onShowDropDown }) => {
  const [showModal, setShowmodal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [modalData, setModalData] = useState('');
  const [selectedLanguage, setSelectedLenguage] = useState('GB');
  const [selectedTheme, setSelectedTheme] = useState('Dark');

  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const handleLanguageChange = (event: any) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
    handleOutsideClick();
  };

  const handleOutsideClick = () => {
    // Handle the logic to close the dropdown
    setShowDropdown(false);
    // Notify the parent component that the dropdown should be hidden
    onShowDropDown(false); // Call the passed function
  };

  //TODO SACAR FUNCION A HELPER

  //TODO SACAR FUNCION A HELPER
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

  return (
    <div className="my-dropdown absolute left-0 top-24 z-10 flex h-screen w-screen flex-col items-center justify-start  bg-black py-12  ">
      <OutsideClickHandler onOutsideClick={handleOutsideClick}>
        <div className="flex flex-col items-center">
          <nav className="my-dropdown2 flex flex-col gap-6 text-center text-2xl font-bold text-slate-200">
            <a
              className="font- w-screen cursor-pointer py-8 uppercase"
              onClick={() => {
                smoothScroll('cv');
                handleOutsideClick();
              }}
            >
              {t('menu.cv')}
            </a>
            <a
              className="font- w-screen cursor-pointer   items-center py-8 uppercase"
              onClick={() => {
                smoothScroll('portfolio');
                handleOutsideClick();
              }}
            >
              {t('menu.Portfolio')}
            </a>
            <a
              className="font- w-screen  cursor-pointer py-8 uppercase"
              onClick={() => {
                smoothScroll('contact');
                handleOutsideClick();
              }}
            >
              {t('menu.Contact')}
            </a>
          </nav>
          <div className="flex w-screen cursor-pointer items-center justify-center gap-4 py-8 py-8 uppercase">
            {showModal && (
              <Modal className="absolute top-12"> {modalData}</Modal>
            )}
            <div
              className="flex items-center
            "
            >
              <select
                name="language"
                id="language"
                onChange={handleLanguageChange}
                className="relative h-8 bg-black text-sm font-normal uppercase"
                value={i18n.language}
              >
                <option value="es">Es</option>
                <option value="gl">Gl</option>
                <option value="en">En</option>
              </select>
            </div>

            <div className="flex items-center">
              <select
                onChange={handleThemeChange}
                className=" h-8 bg-black"
                id="theme"
                name="theme"
                value={selectedTheme}
              >
                <option>Light</option>
                <option>Dark</option>
              </select>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default DropdownMenu;
