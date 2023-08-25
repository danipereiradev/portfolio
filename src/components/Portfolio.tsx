import { Loader } from './Loader';
import Image from 'next/image';
import FlipBox from './FlipBox';

export const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="container mx-auto flex w-5/6 flex-col items-center justify-center"
    >
      <h2 className="mt-6 mb-2 text-center text-lg font-bold text-slate-200">
        Portfolio coming soon...
      </h2>
      {/*  <Loader /> */}
      <div className="portfolio-container flex w-full flex-col md:flex-row md:gap-8">
        <div className="portfolio-item h-1/3 grow justify-center py-8">
          <Image
            src="/cat-desk.jpeg"
            alt="portfolio 1"
            width={600}
            height={600}
            priority
          />
          <div className="portfolio-item-container flex flex-col justify-center gap-4 py-4 text-center">
            <h3 className="text-xl">BALLOON APP</h3>
            <div className="button-container flex justify-center gap-4">
              <button className="text-xs">LIVE VIEW</button>
              <button className="text-xs">CODE</button>
            </div>
          </div>
        </div>
        <div className="portfolio-item h-1/3 grow justify-center py-8 ">
          <Image
            src="/cat-desk.jpeg"
            alt="portfolio 1"
            width={600}
            height={600}
            priority
          />
          <div className="portfolio-item-container flex flex-col justify-center gap-4 py-4 text-center">
            <h3 className="text-xl">TWITTER CLONE</h3>
            <div className="button-container flex justify-center gap-4">
              <button className="text-xs">LIVE VIEW</button>
              <button className="text-xs">CODE</button>
            </div>
          </div>
        </div>
        <div className="portfolio-item h-1/3 grow justify-center py-8 ">
          <Image
            src="/cat-desk.jpeg"
            alt="portfolio 1"
            width={600}
            height={600}
            priority
          />
          <div className="portfolio-item-container flex flex-col justify-center gap-4 py-4 text-center">
            <h3 className="text-xl">MINECRAFT UI</h3>
            <div className="button-container flex justify-center gap-4">
              <button className="text-xs">LIVE VIEW</button>
              <button className="text-xs">CODE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
