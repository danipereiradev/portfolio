import { useState } from 'react';
import { countriesEU } from '@/data/countries';
import { Modal } from './Modal';
import OutsideClickHandler from 'react-outside-click-handler';
import { HiOutlineSun } from 'react-icons/hi';
import { MdDarkMode } from 'react-icons/md';

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

const themeEmojis = [
  {
    lightIcon: <HiOutlineSun size={20} />,
  },
  {
    darkIcon: <MdDarkMode size={20} />,
  },
];

export const DropdownMenu: React.FC<dropdownProps> = ({ onShowDropDown }) => {
  const [showModal, setShowmodal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [modalData, setModalData] = useState('');
  const [selectedLanguage, setSelectedLenguage] = useState('GB');
  const [selectedTheme, setSelectedTheme] = useState('Dark');

  const handleOutsideClick = () => {
    // Handle the logic to close the dropdown
    setShowDropdown(false);
    // Notify the parent component that the dropdown should be hidden
    onShowDropDown(false); // Call the passed function
  };

  const languageSelectetion = countriesEU.filter((country) => {
    return country.countryCode === 'GB' || country.countryCode === 'ES';
  });

  const languageOptions = languageSelectetion.map((language) => {
    return (
      <option key={language.areaCode} value={language.countryCode}>
        {language.language}
      </option>
    );
  });
  //TODO SACAR FUNCION A HELPER
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
  //TODO SACAR FUNCION A HELPER
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

  return (
    <div className="my-dropdown absolute left-0 top-24 z-10 flex h-screen w-screen flex-col items-center justify-start  bg-black py-12  ">
      <OutsideClickHandler onOutsideClick={handleOutsideClick}>
        <div className="flex flex-col items-center">
          <nav className="my-dropdown2 flex flex-col gap-6 text-center text-2xl font-bold text-slate-200">
            <a
              className="w-screen cursor-pointer border-b-2 border-t-2  border-slate-900 py-8 font-Arcade uppercase"
              onClick={() => {
                smoothScroll('cv');
                handleOutsideClick();
              }}
            >
              CV
            </a>
            <a
              className="w-screen cursor-pointer items-center border-b-2 border-slate-900 py-8 font-Arcade uppercase"
              onClick={() => {
                smoothScroll('portfolio');
                handleOutsideClick();
              }}
            >
              Portfolio
            </a>
            <a
              className="w-screen cursor-pointer border-b-2 border-slate-900 py-8 font-Arcade uppercase"
              onClick={() => {
                smoothScroll('contact');
                handleOutsideClick();
              }}
            >
              Contact
            </a>
          </nav>
          <div className="flex w-screen cursor-pointer items-center justify-center gap-4 border-b-2 border-slate-900 py-8 py-8 uppercase">
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
                onChange={handleOptionChange}
                className=" h-8 bg-black"
                value={selectedLanguage}
              >
                {languageOptions}
              </select>
              <div className="icon-container">
                {selectedLanguage === 'ES' ? '🇪🇸' : '🇬🇧'}
              </div>
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
              <div className="icon-container">
                {selectedTheme === 'Light'
                  ? themeEmojis[0].lightIcon
                  : themeEmojis[1].darkIcon}
              </div>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default DropdownMenu;
