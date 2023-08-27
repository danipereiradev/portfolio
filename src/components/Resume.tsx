import React from 'react';

interface Education {
  degree: string;
  school: string;
  date: string;
}

interface WorkExperience {
  title: string;
  company: string;
  date: string;
  endDate: string;
  responsibilities: string[];
}

interface Skill {
  category: string;
  skills: string[];
  border: Boolean;
}

const education: Education[] = [
  {
    degree: 'Highschool ',
    school: 'I.E.S Do Castro (Vigo, GAL)',
    date: '2001-09-01 / 2005-06-01',
  },
];

const workExperience: WorkExperience[] = [
  {
    title: 'Frontend Software Engineer',
    company: 'Babel sistemas',
    date: '2022-07-01',
    endDate: new Date().toISOString().split('T')[0],
    responsibilities: [
      'Developed and maintained user-friendly and responsive web applications using React.js, Typescript and Vanilla Js.',
      'Collaborated closely with designers and backend developers to implement seamless user experiences.',
    ],
  },
  {
    title: 'Web Designer',
    company: 'Pg Webs',
    date: '2015-01-01',
    endDate: '2021-06-01',
    responsibilities: [
      'Designed and developed websites and e-commerce sites using WordPress and PrestaShop.',
      'Ensured cross-browser compatibility and responsiveness in site designs.',
      'Collaborated with clients to gather requirements and provide solutions for their online presence needs.',
    ],
  },
];

const skills: Skill[] = [
  {
    category: 'Technical Skills',
    skills: [
      'React.js',
      'Next.js',
      'JavaScript (ES6+)',
      'Typescript',
      'HTML5',
      'Bootstrap',
      'Tailwind',
      'CSS3 (Sass)',
      'Responsive Web Design',
      'Version Control (Git)',
      'Webpack',
      'RESTful APIs',
      'Unit Testing (Jest)',
    ],
    border: true,
  },
  {
    category: 'Soft Skills',
    skills: ['Problem Solving', 'Communication', 'Teamwork', 'Adaptability'],
    border: true,
  },
  {
    category: 'Languages',
    skills: ['Galician (Native)', 'Spanish (Native)', 'English (Fluent)'],
    border: true,
  },
  {
    category: 'Degrees & Certificates',
    skills: [
      'English IELTS (2012)',
      'Fullstack Mern bootcamp (480 hours)',
      'The Ultimate React Course 2023: React, Redux & More by Jonas Schmedtmann (160 hours)',
      'Using TypeScript with React by Dmytro Danylov',
    ],
    border: false,
  },
  {
    category: 'More about me',
    skills: [
      `Thirst for knowledge, always looking forward to work with people and sort out any kind of problems. 

      Def, I consider myself a team player.
      
      Always down for Volunteering and helping all beings.`,
    ],
    border: false,
  },
];

console.log([...skills]);

const CV: React.FC = () => {
  const calculateTotalExperience = () => {
    const totalMilliseconds = workExperience.reduce((total, job) => {
      const startDateObject = new Date(job.date);
      const endDateObject = new Date(job.endDate);

      const millisecondsDiff =
        endDateObject.getTime() - startDateObject.getTime();
      return total + millisecondsDiff;
    }, 0);

    const totalYears = totalMilliseconds / (365 * 24 * 60 * 60 * 1000);

    return totalYears;
  };

  const totalYearsOfExperience = calculateTotalExperience();

  return (
    <section
      id="cv"
      className="container mx-auto flex  w-5/6 flex-col  justify-evenly py-28"
    >
      <h2 className="text-center font-Arcade text-4xl tracking-widest ">CV</h2>
      <h3 className="mt-6 mb-2 text-lg font-bold text-slate-200">EDUCATION</h3>
      <div className="grid grid-cols-1 gap-4 text-slate-200 md:grid-cols-2">
        {education.map((educ, index) => (
          <div key={index} className="rounded-lg border-2 border-slate-900 p-4">
            <h3 className="text-md mb-2 font-semibold">
              <span className="text-lg ">{educ.degree}</span> <br></br>
              at {educ.school} <br></br>
              <span className="text-zinc-500"> {educ.date}</span>{' '}
            </h3>
          </div>
        ))}
      </div>
      <h3 className="mt-6 mb-2 text-lg font-bold text-slate-200">
        WORK EXPERIENCE{' (' + totalYearsOfExperience.toFixed(0) + ' Years)'}
      </h3>
      <div className="grid grid-cols-1 gap-4 text-slate-200 md:grid-cols-2">
        {workExperience.map((job, index) => (
          <div key={index} className="rounded-lg border-2 border-slate-900 p-4">
            <h3 className="text-md mb-2 font-semibold">
              <span className="text-lg">{job.title}</span> <br></br>at{' '}
              {job.company} <br></br>
              <span className="text-zinc-500">
                {' '}
                {job.date} / {job.endDate}
              </span>{' '}
            </h3>

            <ul className="mt-4 list-none ">
              {job.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="mt-6 mb-2 text-lg font-bold text-slate-200">SKILLS</h2>
      <div className="grid grid-cols-1 gap-4 text-slate-200 md:grid-cols-2">
        {skills.map((skillCategory, index) => (
          <div
            key={index}
            className="transform rounded-lg border-2 border-slate-900 p-4"
          >
            <h3 className="text-md mb-2 font-semibold">
              {skillCategory.category}
            </h3>
            <ul className="flex flex-wrap">
              {skillCategory.skills
                .slice() // Create a copy of the skills array
                .sort((a, b) => a.length - b.length) // Sort the skills within the array based on length
                .map((skill) => (
                  <li
                    className={
                      skillCategory.border
                        ? 'mr-4 mb-2 min-w-[3rem] list-none border border-slate-900 px-4 py-[4px] text-gray-400'
                        : 'mr-4 mb-2 list-none py-[4px] text-gray-400'
                    }
                    key={skill}
                  >
                    {skill}
                  </li>
                ))}
            </ul>
          </div>
        ))}
        {/*  <div className="flex w-100">
          <Image
            src="/js.png"
            alt="js Logo danipereira.dev"
            style={{ borderRadius: '4px' }}
            width={40}
            height={40}
            priority
          />
          <Image
            src="/ts.png"
            alt="ts Logo danipereira.dev"
            width={40}
            height={40}
            priority
          />
          <Image
            src="/python.png"
            alt="python Logo danipereira.dev"
            width={40}
            height={40}
            priority
          />
          <Image
            src="/react.png"
            alt="react Logo danipereira.dev"
            width={40}
            height={40}
            priority
          />
        </div> */}
      </div>
    </section>
  );
};

export default CV;
