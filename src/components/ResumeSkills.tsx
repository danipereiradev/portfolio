import UseResumeData from '@/hooks/useResumeData';
import React from 'react';

const ResumeSkills = () => {
  const { data } = UseResumeData(
    `https://wajrqdbpukfrgzsdqzmg.supabase.co/rest/v1/RESUME_SKILLS?select=tech_skills`
  );

  return (
    <>
      <div className='grid grid-cols-1 gap-4 text-slate-200 md:grid-cols-2'>
        {data &&
          data.map((element: any) => (
            <div
              key={element.tech_skills.id}
              className='transform rounded-lg border-2 border-gray-700 p-4'
            >
              <h3 className='text-md mb-2 text-xl font-semibold uppercase text-teal-200 '>
                {element.tech_skills.category}
              </h3>

              {element.tech_skills.skills.map((skill: string) => (
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

export default ResumeSkills;
