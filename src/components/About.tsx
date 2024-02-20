import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  const textWithLineBreaks = t('about.desc')
    .split('\n')
    .map((text: string, i: number) => (
      <p key={i} className="py-2">
        {text}
      </p>
    ));

  console.log(textWithLineBreaks);

  return (
    <section
      id="about"
      className="container mx-auto flex w-5/6 flex-col items-center justify-center gap-16 py-28 "
    >
      <h2 className="font- text-center text-2xl tracking-widest ">
        {t('about.title').toUpperCase()}
      </h2>
      <div className=" flex flex-col-reverse items-center md:flex-row-reverse md:gap-16">
        <div className=" flex flex-col gap-4 pt-16 grayscale  md:w-[50%] md:items-center">
          <Image
            className="about-image pointer-events-none z-20  rotate-12  transform transform transform rounded-full transition-transform duration-300 ease-in-out hover:rotate-6"
            src="/cropped/row-1-column-1.jpg"
            width={500}
            height={300}
            alt="about me picture"
          />
          <Image
            className="about-image pointer-events-none z-10  rounded-full opacity-80 transition-transform duration-300 ease-in-out hover:rotate-[-15deg]"
            src="/cropped/row-2-column-1.jpg"
            width={500}
            height={300}
            alt="about me picture"
          />
          <Image
            className="about-image o pointer-events-none  z-30 rotate-[12deg] rounded-full transition-transform duration-300 ease-in-out hover:rotate-[-15deg]"
            src="/cropped/row-3-column-1.jpg"
            width={500}
            height={300}
            alt="about me picture"
          />
        </div>
        <div className="flex flex-col text-center text-white  md:w-[50%]">
          {textWithLineBreaks}
        </div>
      </div>
    </section>
  );
};
