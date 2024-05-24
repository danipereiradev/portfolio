import { PortfolioItem } from '../molecules/PortfolioItem';
import { useTranslation } from 'react-i18next';

export const Portfolio = () => {
  const { t } = useTranslation();

  const portfolioData = [
    {
      id: 2,
      title: 'EL VIAJE DE LOS ELEFANTES',
      buttonLive: t('portfolio.buttons.live').toUpperCase(),
      buttonCode: t('portfolio.buttons.code').toUpperCase(),
      buttonInfo: t('portfolio.buttons.info').toUpperCase(),
      isLive: true,
      imageUrl: '/elefantes.png',
      description: 'Lorem ipsum',
      techLogos: ['/js.png', '/node-logo.png', '/css.png', '/html.png'],
      linkLive: 'https://elviajedeloselefantesbeta.com/',
      linkCode: '#',
      technologies: ['/js.png', '/php.png', '/node-logo.png'],
      popupDescription: t('portfolio.projects.elefantes.description'),
    },
    {
      id: 3,
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
      <h2
        className='items-center bg-gradient-to-r from-white
              to-teal-400 bg-clip-text pt-2
  text-center font-Arcade  text-4xl uppercase tracking-widest text-transparent'
      >
        {t('portfolio.title').toUpperCase()}
      </h2>
      <p className='text-center text-xl font-light text-slate-100'>
        These are my latest projects
      </p>

      {/*  <Loader /> */}
      <div className='portfolio-container flex flex-col gap-8 p-8 md:flex-row'>
        {thingsToMap}
      </div>
    </section>
  );
};
