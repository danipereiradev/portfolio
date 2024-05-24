import UseResumeData from '@/hooks/useResumeData';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
('use client');

const ResumeSkills = () => {
  const [isOpen, setIsOpen] = useState(false);
  const itemToScroll = useRef<HTMLDivElement | null>(null);

  const { data } = UseResumeData(
    `https://wajrqdbpukfrgzsdqzmg.supabase.co/rest/v1/RESUME_SKILLS?select=tech_skills`
  );

  const imageUrl = [
    { image: '/react.png' },
    { image: '/php.png' },
    { image: '/ts.png' },
  ];

  /*   const handleToggleWorkData = () => {
    setIsOpen(!isOpen);
  }; */

  /*   const moveElement = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    let newX;
    let newY;
    const element = itemToScroll.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      if (e.keyCode === 125) {
        newY = rect.y - 10;
      } else if (e.keyCode === 126) {
        newY = rect.y + 10;
      }

      element.style.position = 'absolute';
      element.style.left = `${newX}px`;
      element.style.bottom = `${newY}px`; 

      e.preventDefault();

     
    }
  }; */

  return (
    <>
      <div>
        {data &&
          data.map((element: any) => (
            <div
              key={element.tech_skills.id}
              className='relative  min-h-[200px] transform rounded-lg bg-gray-900 p-4'
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
