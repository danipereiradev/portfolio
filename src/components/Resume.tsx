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
    school: 'I.E.S Do Castro',
    date: 'Sep 2001 - jun 2005',
  },
];

const workExperience: WorkExperience[] = [
  {
    title: 'Frontend Software Engineer',
    company: 'Babel sistemas',
    date: 'Jul 2022 - Present',
    responsibilities: [
      'Developed and maintained user-friendly and responsive web applications using React.js, Typescript and Vanilla Js.',
      'Collaborated closely with designers and backend developers to implement seamless user experiences.',
    ],
  },
  {
    title: 'Web Designer',
    company: 'Pg Webs',
    date: 'Jan 2015 - jun 2021',
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
      'English C1 degree',
      'HAB fullstack bootcamp',
      'The Ultimate React Course 2023: React, Redux & More by Jonas Schmedtmann',
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

const CV: React.FC = () => {
  return (
    <div className="container w-5/6 mx-auto">
      <h2 className="mt-6 mb-2 text-lg font-bold">Work Experience</h2>
      <div className="grid grid-cols-1 gap-4 text-white md:grid-cols-2">
        {workExperience.map((job, index) => (
          <div key={index} className="p-4 rounded-lg bg-zinc-900">
            <h3 className="mb-2 font-semibold text-md">{job.title}</h3>
            <p className="text-gray-400 underline">
              {job.company} | {job.date}
            </p>
            <ul className="list-none ">
              {job.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="mt-6 mb-2 text-lg font-bold">Skills</h2>
      <div className="grid grid-cols-1 gap-4 text-white md:grid-cols-2">
        {skills.map((skillCategory, index) => (
          <div key={index} className="p-4 transform rounded-lg bg-zinc-900">
            <h3 className="mb-2 font-semibold text-md">
              {skillCategory.category}
            </h3>
            <ul className="flex flex-wrap">
              {skillCategory.skills.map((skill) => (
                <li
                  className={
                    skillCategory.border
                      ? 'mr-4 mb-2 list-none border border-zinc-700 px-4 py-[4px] text-gray-400'
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
    </div>
  );
};

export default CV;
