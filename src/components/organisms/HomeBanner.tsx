import Header from './Header';
import { useState } from 'react';

export const HomeBanner: React.FC = () => {
  const [ischecked, setIsChecked] = useState(false);

  const HandletoggleThemeMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <section className='relative flex h-screen flex-col justify-start'>
      <div
        style={{
          backgroundImage: `url('/dani-desk.jpeg')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
        className='absolute inset-0 bg-cover bg-center'
      >
        <div className='absolute inset-0 bg-black opacity-60'></div>
      </div>
      <Header ischecked={ischecked} onToggleThemeMode={HandletoggleThemeMode} />
      <div className='relative z-10 mx-auto flex flex-col items-center justify-items-center justify-self-center'>
        <div id='banner-data' className='lg:max-w-3/4 w-5/6 text-center'>
          <h1 className='animated-title py-12 text-4xl font-extrabold text-slate-200 lg:text-6xl'>
            Frontend Software Developer
          </h1>
          <h2 className='animated-title m-auto text-xl font-light text-slate-100 md:max-w-[75] md:text-2xl'>
            ⚠ I&apos;m doing a colossal clean-up in my portfolio and GitHub
            account, but please don&apos;t hesitate to ask for more projects.
          </h2>
        </div>
      </div>
    </section>
  );
};
