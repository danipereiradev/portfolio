import UseResumeData from '@/hooks/useResumeData';
import React from 'react';

const ResumeSoftSkills = () => {
  const { data } = UseResumeData(
    `https://wajrqdbpukfrgzsdqzmg.supabase.co/rest/v1/RESUME_SKILLS?select=soft_skills`
  );

  console.log('soft-skills', data);

  return (
    <>
      <div>
        {data &&
          data.map((element: any) => (
            <div
              key={element.soft_skills.id}
              className='min-h-[200px] transform rounded-lg bg-gray-900 p-4'
            >
              <h3 className='text-md w-full text-xl font-semibold uppercase text-teal-200 '>
                {element.soft_skills.category}
              </h3>
              <ul className='flex flex-wrap'>
                {element.soft_skills.skills.map((skill: string) => (
                  <li
                    key={skill}
                    className='py-2 pr-4 text-xl font-light text-slate-100 '
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </>
  );
};

export default ResumeSoftSkills;
