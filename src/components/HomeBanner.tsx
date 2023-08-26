import Image from 'next/image';
import { Modal } from './Modal';
import { useState } from 'react';
import { countriesEU } from '@/data/countries';

interface HomeBannerProps {
  onToggleThemeMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ischecked: boolean;
}

const languageSelectetion = countriesEU.filter((country) => {
  return country.countryCode === 'GB' || country.countryCode === 'ES';
});

const languageOptions = languageSelectetion.map((language) => {
  const selectedDefaultLanguage = language.countryCode === 'GB';
  return (
    <option
      key={language.areaCode}
      value={language.countryCode}
      selected={selectedDefaultLanguage}
    >
      {language.flag}
    </option>
  );
});

export const HomeBanner: React.FC<HomeBannerProps> = ({
  onToggleThemeMode,
  ischecked,
}) => {
  const [showModal, setShowmodal] = useState(false);
  const [modalData, setModalData] = useState('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    if (selectedValue === 'ES') {
      setShowmodal((prevModalState) => !prevModalState);
      setModalData('Muy pronto estará disponible la versión en Español');

      setTimeout(() => {
        setShowmodal(false);
      }, 3000);
    }
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value;

    if (selectedTheme === '☀️') {
      setShowmodal((prevModalState) => !prevModalState);
      setModalData("I'm working on a lighter theme for ligher people!");
      setTimeout(() => {
        setShowmodal(false);
      }, 3000);
    }
  };

  return (
    <section className="relative flex h-screen">
      <div className="fixed right-4 top-32 z-20 text-2xl text-white md:top-48 md:right-12">
        <div className="flex flex-col items-center gap-4">
          <div className="relative flex flex-col gap-2">
            <select
              name="language"
              id="language"
              onChange={handleOptionChange}
              className="border-1 h-8 w-12 border border-slate-200 bg-black text-sm"
            >
              {languageOptions}
            </select>
            <select
              className="border-1 h-8 w-12 border border-slate-200 bg-black text-sm"
              onChange={handleThemeChange}
            >
              <option>☀️</option>
              <option selected>🌛</option>
            </select>
          </div>
        </div>

        {showModal && (
          <Modal isChecked={ischecked} className="text-xs">
            {modalData}
          </Modal>
        )}
      </div>
      <div
        style={{
          backgroundImage: `url('/desk.jpeg')`,
        }}
        className="absolute inset-0 bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-10 mx-auto flex flex-col items-center justify-center justify-items-center justify-self-center">
        <div className="lg:max-w-3/4 w-5/6 text-center">
          <h1 className="py-12 text-4xl font-extrabold text-slate-200 lg:text-6xl">
            # Front-end Software Engineer
          </h1>
          <h2 className="text-2xl font-bold text-slate-100 md:text-3xl">
            <span
              className="bg-gradient-to-r from-cyan-200
  to-teal-400 bg-clip-text text-2xl font-extrabold text-transparent md:text-3xl"
            >
              👋🏼 Howdy!
            </span>{' '}
            I am working on my new portfolio and I will be back with brand new
            styles very soon!
          </h2>
        </div>
      </div>
    </section>
  );
};
