import { Loader } from './Loader';
import Image from 'next/image';
import FlipBox from './FlipBox';
import { useState } from 'react';
import { PortfolioItem } from './PortfolioItem';

const portfolioData = [
  {
    id: 1,
    title: 'BALLOON APP',
    buttonLive: 'LIVE VIEW',
    buttonCode: 'CODE',
    isLive: true,
    imageUrl: '/balloon.png',
    description: 'Lorem ipsum',
    techLogos: ['/js.png', '/react.png'],
    linkLive: 'https://balloon.balloonapp.net/',
    linkCode: 'https://github.com/danipereiracodes/Balloon_Front',
  },
  {
    id: 2,
    title: 'FEEDBACK BOX',
    buttonLive: 'LIVE VIEW',
    buttonCode: 'CODE',
    isLive: false,
    imageUrl: '/feedback.png',
    description: 'Lorem ipsum',
    techLogos: ['/js.png', '/react.png'],
    linkLive: '',
    linkCode: 'https://github.com/danipereiracodes/feedback-box',
  },
  {
    id: 3,
    title: 'SHOPPING CART',
    buttonLive: 'LIVE VIEW',
    buttonCode: 'CODE',
    isLive: false,
    imageUrl: '/shopping.png',
    description: 'Lorem ipsum',
    techLogos: ['/js.png', '/react.png'],
    linkLive: '',
    linkCode: 'https://github.com/danipereiracodes/shopping-cart',
  },
];

export const Portfolio = () => {
  const [checkLive, setCheckLive] = useState(false);

  const thingsToMap = portfolioData.map((data) => (
    <PortfolioItem key={data.id} {...data} />
  ));

  return (
    <section
      id="portfolio"
      className="container mx-auto flex w-5/6 flex-col items-center justify-center"
    >
      <h2 className="text-center text-3xl tracking-widest">PORTFOLIO</h2>
      <h3 className="mt-6 mb-2 text-center text-lg font-bold text-slate-200">
        More projects coming soon...
      </h3>
      {/*  <Loader /> */}
      <div className="portfolio-container flex w-full flex-col md:flex-row md:gap-8">
        {thingsToMap}
      </div>
    </section>
  );
};
