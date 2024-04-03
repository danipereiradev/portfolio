import { useTranslation } from 'react-i18next';
import Image from 'next/image';

interface PortfolioItemPopupProps {
  onClosePopup: () => void;
  title: string;
  imageUrl: string;
  technologies: string[];
  popupDescription: any;
}

export const PortfolioItemPopup = ({
  onClosePopup,
  title,
  imageUrl,
  technologies,
  popupDescription,
}: PortfolioItemPopupProps) => {
  const { t } = useTranslation();
  const mappedTechnologies = technologies.map((tech, i) => {
    return (
      <li key={i}>
        <Image src={tech} width={50} height={50} alt={tech} />
      </li>
    );
  });

  const textWithLineBreaks = popupDescription
    ?.split('\n')
    .map((text: string, i: number) => (
      <p key={i} className='py-2'>
        {text}
      </p>
    ));

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div
        className='absolute inset-0 cursor-pointer bg-black opacity-50'
        onClick={onClosePopup}
      ></div>
      <div className='fixed flex h-[90vh] w-[90vw] flex-col items-center justify-start gap-4 overflow-y-auto rounded-lg border border-gray-200 bg-black p-16 p-4 text-center shadow-lg lg:p-4'>
        {/* Your popup content goes here */}
        <div className='flex w-full flex-col items-center justify-evenly gap-8 '>
          <h1 className='text-3xl'>{title}</h1>
          <Image src={imageUrl} alt={title} width={500} height={500} />
          <ul className='flex gap-8'>{mappedTechnologies}</ul>
          <div className='lg:max-w-[50%]'>{textWithLineBreaks}</div>
        </div>

        <div className='py-4'>
          <button
            onClick={onClosePopup}
            className='border py-2 px-8 hover:bg-slate-200 hover:text-black'
          >
            {t('portfolio.buttons.close')}
          </button>
        </div>
      </div>
    </div>
  );
};
