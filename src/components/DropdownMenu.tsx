import { useState } from 'react';
import { countriesEU } from '@/data/countries';
import { Modal } from './Modal';
import OutsideClickHandler from 'react-outside-click-handler';

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
    lightIcon: '☀️',
  },
  {
    darkIcon: '🌛',
  },
];

export const DropdownMenu: React.FC<dropdownProps> = ({ onShowDropDown }) => {
  const [showModal, setShowmodal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(true);

  const handleOutsideClick = () => {
    // Handle the logic to close the dropdown
    setShowDropdown(false);
    // Notify the parent component that the dropdown should be hidden
    onShowDropDown(false); // Call the passed function
  };

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

  return (
    <div
      className={`right-[calc(1rem - 10px)] dropdown absolute top-12 flex flex flex-1 flex-col rounded-lg bg-black text-slate-200 lg:hidden ${
        showDropdown ? 'open' : ''
      }`}
    >
      <OutsideClickHandler onOutsideClick={handleOutsideClick}>
        <div className="">
          <nav className="flex flex-col text-left font-bold text-slate-200">
            <a
              className="w-full cursor-pointer p-8 text-center uppercase"
              onClick={() => smoothScroll('cv')}
            >
              CV
            </a>
            <a
              className="w-full cursor-pointer px-4 py-4 text-center uppercase"
              onClick={() => smoothScroll('portfolio')}
            >
              Portfolio
            </a>
            <a
              className="p-8text-center w-full  cursor-pointer p-8 uppercase"
              onClick={() => smoothScroll('contact')}
            >
              Contact
            </a>

            <div className="flex flex-col items-center gap-4">
              <div className=" w-full cursor-pointer p-8 text-center uppercase">
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
      </OutsideClickHandler>
    </div>
  );
};

export default DropdownMenu;
