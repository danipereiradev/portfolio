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
      <h2 className='font- text-center text-2xl tracking-widest '>
        {t('about.title').toUpperCase()}
      </h2>
      <div className=' flex flex-col items-center  md:flex-row-reverse md:gap-16'>
        <div className=' mb-8 flex flex-col gap-4  rounded md:w-[30%] md:items-center'>
          <Image
            className='about-image cover pointer-events-none z-20 scale-x-[-1] transform object-cover  opacity-70'
            src='/dani-bob-falla3.png'
            width={500}
            height={300}
            alt='dani pereira picture'
          />
        </div>
        <div className='flex flex-col text-center text-white  md:w-[70%]'>
          {textWithLineBreaks}
        </div>
      </div>
    </section>
  );
};
