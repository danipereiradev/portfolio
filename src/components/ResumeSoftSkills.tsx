import UseResumeData from '@/hooks/useResumeData';
import React from 'react';

const ResumeSoftSkills = () => {
  const { data } = UseResumeData(
    `https://wajrqdbpukfrgzsdqzmg.supabase.co/rest/v1/RESUME_SKILLS?select=soft_skills`
  );

  console.log('soft-skills', data);

  return (
    <>
      <div className='grid grid-cols-1 gap-4 text-slate-200 md:grid-cols-2'>
        {data &&
          data.map((element: any) => (
            <div
              key={element.soft_skills.id}
              className='transform rounded-lg border-2 border-gray-700 p-4'
            >
              <h3 className='text-md mb-2 text-xl font-semibold uppercase text-teal-200 '>
                {element.soft_skills.category}
              </h3>

              {element.soft_skills.skills.map((skill: string) => (
                <div key={skill} className='flex w-full py-1'>
                  {skill}
                </div>
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default ResumeSoftSkills;
