import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegFilePdf } from 'react-icons/fa6';

const CV: React.FC = () => {
  const { t } = useTranslation();

  interface Education {
    degree: string;
    school: string;
    date: string;
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

  const education: Education[] = [
    {
      degree: t('cv.university'),
      school: 'Universidad de León',
      date: '2015-06-19',
    },
    {
      degree: t('cv.highschool'),
      school: 'I.E.S Do Castro (Vigo, GAL)',
      date: '2001-09-01 / 2005-06-01',
    },
  ];

  const workExperience: WorkExperience[] = [
    {
      title: t('cv.workExperience.title1'),
      company: 'Babel Sistemas de Información',
      date: '2022-07-01',
      endDate: '2024-01-12',
      responsibilities: t('cv.workExperience.desc1'),
      responsibilities2: t('cv.workExperience.desc1-2'),
      link: 'https://www.babelgroup.com/',
    },
    {
      title: t('cv.workExperience.title2'),
      company: 'Grupo Reprogalicia',
      date: '2022-03-01',
      endDate: '2022-06-01',
      responsibilities: t('cv.workExperience.desc2'),
      responsibilities2: t('cv.workExperience.desc2-2'),
      link: 'https://www.linkedin.com/company/grupo-reprogalicia/about/',
    },
    {
      title: t('cv.workExperience.title3'),
      company: 'Pg Webs',
      date: '2015-01-01',
      endDate: '2021-06-01',
      responsibilities: t('cv.workExperience.desc3'),
      responsibilities2: t('cv.workExperience.desc3-2'),
    },
  ];

  const skills: Skill[] = [
    {
      category: t('cv.skills.subtitle1.title'),
      skills: [
        'React.js',
        'Next.js',
        'JavaScript (ES6+)',
        'Typescript',
        'HTML5',
        'Bootstrap',
        'Tailwind',
        'CSS3 (Sass)',
        t('cv.skills.subtitle1.responsive'),
        t('cv.skills.subtitle1.git'),
        'Webpack',
        'RESTful APIs',
        t('cv.skills.subtitle1.test'),
      ],
      border: true,
    },
    {
      category: t('cv.skills.subtitle2.title'),
      skills: [
        t('cv.skills.subtitle2.skill1'),
        t('cv.skills.subtitle2.skill2'),
        t('cv.skills.subtitle2.skill4'),
        t('cv.skills.subtitle2.skill3'),
      ],
      border: true,
    },
    {
      category: t('cv.languages.title'),
      skills: [
        t('cv.languages.lang1'),
        t('cv.languages.lang2'),
        t('cv.languages.lang3'),
      ],
      border: true,
    },
    {
      category: t('cv.degrees.title'),
      skills: [
        t('cv.degrees.subtitle1'),
        t('cv.degrees.subtitle2'),
        t('cv.degrees.subtitle3'),
        t('cv.degrees.subtitle4'),
      ],
      border: false,
    },
    {
      category: t('cv.about.title'),
      skills: [t('cv.about.desc1')],
      border: false,
    },
  ];

  const calculateTotalExperience = () => {
    const totalMilliseconds = workExperience.reduce((total, job) => {
      const startDateObject = new Date(job.date);
      const endDateObject = new Date(job.endDate);

      const millisecondsDiff =
        endDateObject.getTime() - startDateObject.getTime();
      return total + millisecondsDiff;
    }, 0);

    const totalYears = totalMilliseconds / (365 * 24 * 60 * 60 * 1000);

    return totalYears;
  };

  const totalYearsOfExperience = calculateTotalExperience();

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
      <h3 className='mt-6 mb-2 text-2xl font-bold uppercase text-slate-200'>
        {t('cv.education')}
      </h3>
      <div className='grid grid-cols-1 gap-4 text-slate-200 md:grid-cols-2'>
        {education.map((educ, index) => (
          <div key={index} className='rounded-lg border-2 border-gray-700 p-4'>
            <h3
              className='bg-clip-text
                    pt-2 uppercase

          tracking-widest text-teal-200 '
            >
              <span className='text-lg '>{educ.degree}</span> <br></br>
              {educ.school} <br></br>
              <span className='text-zinc-500'> {educ.date}</span>{' '}
            </h3>
          </div>
        ))}
      </div>
      <h3 className='mt-6 mb-2 text-2xl font-bold uppercase text-slate-200'>
        {t('cv.workExperienceTitle')}
        {' (' +
          totalYearsOfExperience.toFixed(0) +
          ' ' +
          t('others.years') +
          ')'}
      </h3>
      <div className='grid grid-cols-1 gap-4 text-slate-200 md:grid-cols-2'>
        {workExperience.map((job, index) => (
          <div key={index} className='rounded-lg border-2 border-gray-700 p-4'>
            <h3
              className='bg-clip-text
                    pt-2 uppercase
          tracking-widest text-teal-200 '
            >
              {' '}
              <span className='text-lg'>{job.title}</span>
              <br></br>
              <a
                href={job.link}
                target='blank'
                className='hover:text-[#2dd4bf]'
              >
                {job.company}{' '}
              </a>
              <br></br>
              <span className='text-zinc-500'>
                {' '}
                {job.date} / {job.endDate}
              </span>{' '}
            </h3>

            <p className='mt-4 list-none '>{job.responsibilities}</p>
            <p className='mt-4 list-none '>{job.responsibilities2}</p>
          </div>
        ))}
      </div>
      <h2 className='mt-6 mb-2 text-2xl font-bold uppercase text-slate-200'>
        {t('cv.skills.title')}
      </h2>
      <div className='grid grid-cols-1 gap-4 text-slate-200 md:grid-cols-2'>
        {skills.map((skillCategory, index) => (
          <div
            key={index}
            className='transform rounded-lg border-2 border-gray-700 p-4'
          >
            <h3 className='text-md mb-2 text-xl font-semibold uppercase text-teal-200 '>
              {skillCategory.category}
            </h3>
            <ul className='flex flex-wrap'>
              {skillCategory.skills
                .slice()
                .sort((a, b) => a.length - b.length)
                .map((skill) => (
                  <li
                    className={`mr-[1rem] pt-2
                     
          tracking-widest text-slate-200
                      ${skillCategory.border}
                        ? 'text-gray-400' : ' text-gray-400' mb-2 mb-2 min-w-[3rem] list-none
                        list-none border-0
                    `}
                    key={skill}
                  >
                    {skill}
                  </li>
                ))}
            </ul>
          </div>
        ))}
        {/*  <div className="flex w-100">
          <Image
            src="/js.png"
            alt="js Logo danipereira.dev"
            style={{ borderRadius: '4px' }}
            width={40}
            height={40}
            priority
          />
          <Image
            src="/ts.png"
            alt="ts Logo danipereira.dev"
            width={40}
            height={40}
            priority
          />
          <Image
            src="/python.png"
            alt="python Logo danipereira.dev"
            width={40}
            height={40}
            priority
          />
          <Image
            src="/react.png"
            alt="react Logo danipereira.dev"
            width={40}
            height={40}
            priority
          />
        </div> */}
      </div>
    </section>
  );
};

export default CV;
