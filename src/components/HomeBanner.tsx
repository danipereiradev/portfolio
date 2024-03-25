import { useTranslation } from 'react-i18next';
import Header from './Header';
import { useEffect, useState } from 'react';

const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append(
  'Authorization',
  `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_KEY}`
);
headers.append('apikey', `${process.env.NEXT_PUBLIC_SUPABASE_KEY}`);

const fetchOptions = {
  method: 'GET',
  headers: new Headers(headers),
};

console.log(process.env.NEXT_PUBLIC_SUPABASE_KEY);

export const HomeBanner: React.FC = () => {
  const [ischecked, setIsChecked] = useState(false);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      'https://wajrqdbpukfrgzsdqzmg.supabase.co/rest/v1/HERO_SECTION?select=*',
      fetchOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log('Data fetched successfully:', data);
      })
      .catch((error) => {
        console.error('There was a problem with your fetch operation:', error);
      });
  }, []);

  const HandletoggleThemeMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };
  const { t } = useTranslation();

  return (
    <section className='relative flex h-screen flex-col justify-start'>
      <div
        style={{
          backgroundImage: `url('/dani-desk.jpeg')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
        className='absolute inset-0 bg-cover bg-center'
      >
        <div className='absolute inset-0 bg-black opacity-60'></div>
      </div>
      <Header ischecked={ischecked} onToggleThemeMode={HandletoggleThemeMode} />
      <div className='relative z-10 mx-auto flex flex-col items-center justify-items-center justify-self-center'>
        {data &&
          data.map((element) => {
            return (
              <div key={element.id} className='lg:max-w-3/4 w-5/6 text-center'>
                <h1 className='animated-title py-12 text-4xl font-extrabold text-slate-200 lg:text-6xl'>
                  {element.heading}
                </h1>
                <h2 className='animated-title text-2xl font-bold text-slate-100 md:text-3xl'>
                  {element.paragraph}
                </h2>
              </div>
            );
          })}
      </div>
    </section>
  );
};
