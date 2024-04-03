import UseResumeData from '@/hooks/useResumeData';
import React from 'react';

const ResumeDegrees = () => {
  const { data } = UseResumeData(
    `https://wajrqdbpukfrgzsdqzmg.supabase.co/rest/v1/RESUME_DEGREES?select=degrees`
  );

  console.log('Degrees', data);

  return (
    <>
      <div>
        {data &&
          data.map((element: any) => (
            <div
              key={element.degrees.id}
              className='min-h-[200px] transform rounded-lg  bg-gray-900 p-4'
            >
              <h3 className='text-md mb-2 text-xl font-semibold uppercase text-teal-200 '>
                {element.degrees.category}
              </h3>
              <ul className='flex flex-wrap'>
                {element.degrees.degrees.map((element: string) => (
                  <li
                    key={element}
                    className='py-2 pr-4 text-xl font-light text-slate-100'
                  >
                    <p> {element}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </>
  );
};

export default ResumeDegrees;
