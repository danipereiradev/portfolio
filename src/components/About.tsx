import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  const textWithLineBreaks = t('about.desc')
    .split('\n')
    .map((text: string, i: number) => (
      <p key={i} className='py-2'>
        {text}
      </p>
    ));

  console.log(textWithLineBreaks);

  return (
    <section
      id='about'
      className='container mx-auto flex w-5/6 flex-col items-center justify-center gap-16 py-28 '
    >
      <h2
        className='items-center bg-gradient-to-r from-white
              to-teal-400 bg-clip-text pt-2
  text-center font-Arcade  text-4xl uppercase tracking-widest tracking-wider text-transparent '
      >
        {t('about.title').toUpperCase()}
      </h2>
      <div className=' flex flex-col items-center md:flex-row-reverse  md:justify-center md:gap-16'>
        <div className='flex flex-col text-center text-white md:max-w-[75%]'>
          {textWithLineBreaks}
        </div>
      </div>
    </section>
  );
};
