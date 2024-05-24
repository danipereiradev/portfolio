import UseResumeData from '@/hooks/useResumeData';
import React from 'react';

const ResumeLang = () => {
  const { data } = UseResumeData(
    `https://wajrqdbpukfrgzsdqzmg.supabase.co/rest/v1/RESUME_LANG?select=languages`
  );

  console.log('languages', data);

  return (
    <>
      <div>
        {data &&
          data.map((element: any) => (
            <div
              key={element.languages.id}
              className='min-h-[200px] transform rounded-lg bg-gray-900 p-4'
            >
              <h3 className='text-md mb-2 text-xl font-semibold uppercase text-teal-200 '>
                {element.languages.category}
              </h3>
              <ul className='flex flex-wrap'>
                {element.languages.languages.map((skill: string) => (
                  <li
                    key={skill}
                    className='py-2 pr-4 text-xl font-light text-slate-100'
                  >
                    <p>{skill}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </>
  );
};

export default ResumeLang;
