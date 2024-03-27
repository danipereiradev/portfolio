import UseResumeData from '@/hooks/useResumeData';
import React from 'react';

const splitText = (text: string) => {
  return text.split('\n').map((text: string, i: number) => (
    <p key={i} className='py-2'>
      {text}
    </p>
  ));
};

const ResumeWorkExp = () => {
  const { data } = UseResumeData(
    `https://wajrqdbpukfrgzsdqzmg.supabase.co/rest/v1/RESUME_WORK_EXPERIENCE?select="*"`
  );
  return (
    <>
      <h3 className='mt-6 mb-2 text-2xl font-bold uppercase text-slate-200'>
        Work Experience
      </h3>

      <div className='grid grid-cols-1 gap-4 text-slate-200 md:grid-cols-2'>
        {data &&
          data.map(
            (element: {
              id: number | null;
              position: string;
              company_name: string;
              date_start: string;
              date_end: string | null;
              achievements: string;
            }) => (
              <div
                key={element.id}
                className='rounded-lg border-2 border-gray-700 p-4 '
              >
                <h3
                  className='bg-clip-text
                    pt-2 
          capitalize tracking-widest text-teal-200'
                >
                  {' '}
                  <span className='text-lg capitalize'>{element.position}</span>
                  <br></br>
                  {element.company_name} <br></br>
                  <span className='mt-8 text-zinc-500'>
                    {' '}
                    {element.date_start} / {element.date_end}
                  </span>{' '}
                </h3>

                <h3 className='text-teal-200'>Achievements:</h3>
                {splitText(element.achievements)}
              </div>
            )
          )}
      </div>
    </>
  );
};

export default ResumeWorkExp;
