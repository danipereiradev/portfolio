import React from 'react';
import UseResumeData from '@/hooks/useResumeData';

import { useTranslation } from 'react-i18next';

export const About = () => {
  const { data } = UseResumeData(
    `https://wajrqdbpukfrgzsdqzmg.supabase.co/rest/v1/ABOUT_TABLE?select="*"`
  );

  const { t } = useTranslation();

  const splitText = (text: string) => {
    return text.split('\n').map((text: string, i: number) => (
      <p key={i} className='py-2 text-xl font-light text-slate-100'>
        {text}
      </p>
    ));
  };

  return (
    <section
      id='about'
      className='container mx-auto flex h-auto w-5/6 flex-col items-center justify-center gap-16 py-28 '
    >
      <h2
        className='items-center bg-gradient-to-r from-white
              to-teal-400 bg-clip-text pt-2
  text-center font-Arcade  text-4xl uppercase tracking-widest tracking-wider text-transparent '
      >
        {t('about.title').toUpperCase()}
      </h2>
      <div className=' flex flex-col items-center md:flex-row-reverse  md:justify-center md:gap-16'>
        {
          <div className='flex flex-col text-center text-white md:max-w-[75%]'>
            {data &&
              data.map((element: { id: number | null; text_data: string }) => (
                <div key={element.id}>{splitText(element.text_data)}</div>
              ))}
          </div>
        }
      </div>
    </section>
  );
};
