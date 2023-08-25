import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';

interface PortfolioItemProps {
  id: number;
  title: string;
  buttonLive: string;
  buttonCode: string;
  isLive: Boolean;
  imageUrl: string;
  description: string;
  techLogos: string[];
  linkLive: string | undefined;
  linkCode: string;
}

export const PortfolioItem: React.FC<PortfolioItemProps> = (props) => {
  const [checkLive, setCheckLive] = useState(false);

  const {
    imageUrl,
    title,
    isLive,
    buttonLive,
    buttonCode,
    linkLive,
    linkCode,
  } = props;

  const handleCheckLiveView = () => {
    setCheckLive(!checkLive);
    setTimeout(() => {
      setCheckLive(false);
    }, 2000);
  };

  return (
    <div className="portfolio-item h-1/3 grow justify-center rounded-lg border-2 border-slate-900 py-8">
      <div className="image-container relative h-full w-full">
        <Image
          src={imageUrl}
          alt="portfolio 1"
          width={600}
          height={200}
          priority
          className="object-cover"
        />
        <div
          className={`popup absolute inset-0 flex items-center justify-center opacity-80  ${
            checkLive && !isLive
              ? 'pointer-events-auto bg-black opacity-80'
              : 'pointer-events-none opacity-0'
          }`}
        >
          {checkLive && !isLive && <h1>No live view yet :(</h1>}
        </div>
      </div>

      <div className="portfolio-item-container flex flex-col justify-center gap-4 py-4 text-center">
        <h3 className="text-xl">{title}</h3>
        <div className="button-container flex justify-center gap-4">
          <a
            href={!checkLive && linkLive !== '' ? linkLive : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-xs"
            onClick={() => !isLive && handleCheckLiveView()}
          >
            <div className="flex gap-1">
              <FontAwesomeIcon icon={faGlobe} className="w-[.9rem]" />
              {buttonLive}
            </div>
          </a>

          <a
            href={linkCode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs"
          >
            <div className="flex gap-1">
              <FontAwesomeIcon icon={faCode} className="w-[.9rem]" />
              {buttonCode}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
