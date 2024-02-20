import { useState } from 'react';
import { PortfolioItem } from './PortfolioItem';
import { useTranslation } from 'react-i18next';

export const Portfolio = () => {
  const [checkLive, setCheckLive] = useState(false);

  const { t } = useTranslation();

  const portfolioData = [
    {
      id: 1,
      title: 'AI FITNESS APP',
      buttonLive: t('portfolio.buttons.live').toUpperCase(),
      buttonCode: t('portfolio.buttons.code').toUpperCase(),
      buttonInfo: t('portfolio.buttons.info').toUpperCase(),
      isLive: false,
      imageUrl: '/fitness_construction.jpg',
      description: 'Lorem ipsum',
      techLogos: ['/js.png', '/react.png'],
      linkLive: '/',
      linkCode: 'https://github.com/danipereiracodes/fitnessapp',
      technologies: ['/ts.png', '/react.png', '/chatgpt.png'],
      popupDescription: t('portfolio.projects.fitness.description'),
    },
    {
      id: 2,
      title: 'BALLOON APP',
      buttonLive: t('portfolio.buttons.live').toUpperCase(),
      buttonCode: t('portfolio.buttons.code').toUpperCase(),
      buttonInfo: t('portfolio.buttons.info').toUpperCase(),
      isLive: true,
      imageUrl: '/balloon.png',
      description: 'Lorem ipsum',
      techLogos: ['/js.png', '/react.png'],
      linkLive: 'https://balloon.balloonapp.net/',
      linkCode: 'https://github.com/danipereiracodes/Balloon_Front',
      technologies: ['/js.png', '/react.png', '/node-logo.png'],
      popupDescription: t('portfolio.projects.balloon.description'),
    },
  ];

  const thingsToMap = portfolioData.map((data) => (
    <PortfolioItem key={data.id} {...data} />
  ));

  return (
    <section
      id='portfolio'
      className='lg:w-3/3 container mx-auto flex flex-col items-center justify-center'
    >
      <h2 className='font- text-center text-2xl tracking-widest'>
        {t('portfolio.title').toUpperCase()}
      </h2>
      <h3 className='mt-6 mb-2 text-center text-lg font-bold text-slate-200'>
        {t('portfolio.desc')}
      </h3>
      {/*  <Loader /> */}
      <div className='portfolio-container flex flex-col  p-8 md:flex-row md:gap-8'>
        {thingsToMap}
      </div>
    </section>
  );
};
