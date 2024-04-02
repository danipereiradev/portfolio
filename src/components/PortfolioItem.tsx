import React, { useState, type ReactNode } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faCode,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import { PortfolioItemPopup } from './PortfolioItemPopup';

interface PortfolioItemProps {
  id: number;
  title: string;
  buttonLive: string;
  buttonCode: string;
  buttonInfo: string;
  isLive: Boolean;
  imageUrl: string;
  description: string;
  status?: string;
  techLogos: string[];
  linkLive: string | undefined;
  linkCode: string;
  technologies: string[];
  popupDescription: any;
}

export const PortfolioItem: React.FC<PortfolioItemProps> = (props) => {
  const [checkLive, setCheckLive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const {
    imageUrl,
    title,
    isLive,
    buttonLive,
    buttonCode,
    buttonInfo,
    linkLive,
    linkCode,
  } = props;

  console.log(props);

  const handleCheckLiveView = () => {
    setCheckLive(!checkLive);
    setTimeout(() => {
      setCheckLive(false);
    }, 2000);
  };

  return (
    <div className='portfolio-item h-1/3 grow items-start justify-center rounded-lg  bg-gray-900 py-8'>
      <a href={linkLive} target='blank'>
        <div className='image-container relative h-full w-full rounded-lg'>
          <Image
            src={imageUrl}
            alt='portfolio 1'
            width={600}
            height={200}
            priority
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
      </a>
      <div className='portfolio-item-container flex flex-col justify-center gap-4 py-4 text-center'>
        <h3 className='text-xl uppercase text-teal-200'>{title}</h3>
        <div className='button-container flex justify-center gap-4'>
          <a
            href={!checkLive && linkLive !== '' ? linkLive : undefined}
            target='_blank'
            rel='noopener noreferrer'
            className='cursor-pointer text-xs text-white'
            onClick={() => !isLive && handleCheckLiveView()}
          >
            <div className='flex gap-1'>
              <FontAwesomeIcon icon={faGlobe} className='w-[.9rem]' />
              {buttonLive}
            </div>
          </a>

          <a
            href={linkCode}
            target='_blank'
            rel='noopener noreferrer'
            className='text-xs text-white'
          >
            <div className='flex gap-1'>
              <FontAwesomeIcon icon={faCode} className='w-[.9rem]' />
              {buttonCode}
            </div>
          </a>
          <div
            className='flex cursor-pointer gap-1 text-xs text-white'
            onClick={openPopup}
          >
            <FontAwesomeIcon icon={faCircleInfo} className='w-[.9rem]' />
            {buttonInfo}
          </div>
        </div>
      </div>
      {isOpen && <PortfolioItemPopup onClosePopup={closePopup} {...props} />}
    </div>
  );
};

export default PortfolioItem;
