import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append(
  'Authorization',
  `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_KEY}`
);
headers.append('apikey', `${process.env.NEXT_PUBLIC_SUPABASE_KEY}`);

const fetchOptions = {
  method: 'GET',
  headers: new Headers(headers),
};

console.log(process.env.NEXT_PUBLIC_SUPABASE_KEY);

export const About = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      'https://wajrqdbpukfrgzsdqzmg.supabase.co/rest/v1/ABOUT_TABLE?select="*"',
      fetchOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log('Data fetched successfully:', data);
      })
      .catch((error) => {
        console.error('There was a problem with your fetch operation:', error);
      });
  }, []);

  const { t } = useTranslation();

  const splitText = (text: string) => {
    return text.split('\n').map((text: string, i: number) => (
      <p key={i} className='py-2'>
        {text}
      </p>
    ));
  };

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
          {data &&
            data.map((element) => (
              <div key={element.id}>
                {splitText(element.text_data.description)}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
