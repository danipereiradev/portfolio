import UseResumeData from '@/hooks/useResumeData';
import React, { useState } from 'react';

const splitText = (text: string) => {
  return text.split('\n').map((text: string, i: number) => (
    <p key={i} className='py-2 text-xl font-light text-slate-100'>
      {text}
    </p>
  ));
};

const ResumeWorkExp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [idOpen, setIdOpen] = useState<{}>({});
  const { data } = UseResumeData(
    `https://wajrqdbpukfrgzsdqzmg.supabase.co/rest/v1/RESUME_WORK_EXPERIENCE?select="*"`
  );

  const handleToggleWorkData = (id: string) => {
    setIdOpen((prevId: any) => ({
      ...prevId,
      [id]: !prevId[id],
    }));

    console.log(idOpen);
  };

  return (
    <>
      <h3 className='mt-6 mb-2 text-2xl font-bold uppercase text-slate-200'>
        Work Experience
      </h3>

      <div className='grid grid-cols-1 gap-4 text-slate-200 md:grid-cols-2'>
        {data &&
          data.map(
            (
              element: {
                id: string | null;
                position: string;
                company_name: string;
                date_start: string;
                date_end: string | null;
                achievements: string;
              },
              index
            ) => (
              <div key={element.id} className=' rounded-lg bg-gray-900 p-4 '>
                <h3
                  className='bg-clip-text
                    pt-2 
          capitalize tracking-widest text-teal-200'
                >
                  {' '}
                  <span className='text-xl uppercase '>{element.position}</span>
                  <br></br>
                  <span className='text-lg text-white'>
                    {element.company_name}
                  </span>{' '}
                  <br></br>
                  <span className='mt-8 text-xs text-white'>
                    {' '}
                    {element.date_start} / {element.date_end}
                  </span>{' '}
                </h3>
                {/* TODO: FIX THIS ERROR */}
                <button
                  type='submit'
                  className={`border-1 mt-4 w-[100px] cursor-pointer rounded-lg border py-2 text-center text-xs  ${
                    idOpen[index]
                      ? 'border-[#2dd4bf] bg-[#2dd4bf] text-gray-900'
                      : ''
                  }`}
                  onClick={() => handleToggleWorkData(element.id || '0')}
                >
                  {idOpen[index] ? 'Close' : 'Read more'}
                </button>
                {idOpen[index] === true && (
                  <div>
                    <p className='mt-4 text-xl font-light text-slate-100'>
                      Achievements:
                    </p>
                    {splitText(element.achievements)}
                  </div>
                )}
              </div>
            )
          )}
      </div>
    </>
  );
};

export default ResumeWorkExp;
