import React from 'react';
import UseResumeData from '@/hooks/useResumeData';

const ResumeEducation = () => {
  const { data } = UseResumeData(
    `https://wajrqdbpukfrgzsdqzmg.supabase.co/rest/v1/RESUME_EDUCATION?select="*"`
  );
  return (
    <>
      <h3 className='mt-6 mb-2 text-2xl font-bold uppercase text-slate-200'>
        Education
      </h3>

      <div className='grid grid-cols-1 gap-4 text-slate-200 md:grid-cols-2'>
        {data &&
          data.map(
            (element: {
              id: number | null;
              degree: string;
              place: string;
              year: string | null;
            }) => (
              <div
                key={element.id}
                className='rounded-lg border-2 border-gray-700 p-4'
              >
                <h3
                  className='bg-clip-text
                    pt-2 

          tracking-widest text-teal-200 '
                >
                  <span className='text-lg '>{element.degree}</span> <br></br>
                  {element.place} <br></br>
                  <span className='text-zinc-500'> {element.year}</span>{' '}
                </h3>
              </div>
            )
          )}
      </div>
    </>
  );
};

export default ResumeEducation;
