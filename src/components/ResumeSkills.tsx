import UseResumeData from '@/hooks/useResumeData';
import React from 'react';

const ResumeSkills = () => {
  const { data } = UseResumeData(
    `https://wajrqdbpukfrgzsdqzmg.supabase.co/rest/v1/RESUME_SKILLS?select=tech_skills`
  );

  return (
    <>
      <div>
        {data &&
          data.map((element: any) => (
            <div
              key={element.tech_skills.id}
              className=' min-h-[200px] transform rounded-lg bg-gray-900 p-4'
            >
              <h3 className='text-md mb-2 text-xl font-semibold uppercase text-teal-200 '>
                {element.tech_skills.category}
              </h3>
              <ul className='flex flex-wrap '>
                {element.tech_skills.skills.map((skill: string) => (
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

export default ResumeSkills;
