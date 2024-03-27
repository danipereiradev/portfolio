import UseResumeData from '@/hooks/useResumeData';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegFilePdf } from 'react-icons/fa6';
import ResumeEducation from './ResumeEducation';
import ResumeWorkExp from './ResumeWorkExp';
import ResumeSkills from './ResumeSkills';
import ResumeSoftSkills from './ResumeSoftSkills';

const CV: React.FC = () => {
  const { t } = useTranslation();

  // TODO: EXTRACT MODELS

  interface Education {
    degree: string;
    place: string;
    year: string;
  }

  interface WorkExperience {
    title: string;
    company: string;
    date: string;
    endDate: string;
    responsibilities: string;
    responsibilities2?: string;
    link?: string;
  }

  interface Skill {
    category: string;
    skills: string[];
    border: Boolean;
  }

  return (
    <section
      id='cv'
      className='container mx-auto flex  w-5/6  flex-col justify-evenly  py-28 text-white'
    >
      {' '}
      <h2
        className='items-center bg-gradient-to-r from-white
              to-teal-400 bg-clip-text pt-2
  text-center font-Arcade  text-4xl uppercase tracking-widest text-transparent '
      >
        {t('cv.title').toUpperCase()}
      </h2>
      <div>
        <a
          className='flex items-center justify-center gap-2 text-white underline'
          href='/DANI_CV_2024.pdf'
          download
        >
          <FaRegFilePdf /> Download
        </a>
      </div>
      <ResumeEducation />
      <ResumeWorkExp />
      {/*TODO:  FIX STYLES HERE */}
      <article className='flex flex-col gap-4'>
        <h3 className='mt-6 mb-2 text-2xl font-bold uppercase text-slate-200'>
          Skills
        </h3>
        <ResumeSkills />
        <ResumeSoftSkills />
      </article>
    </section>
  );
};

export default CV;
