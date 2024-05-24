import Head from 'next/head';
import { Footer } from '@/components/organisms/Footer';
import { AppLayout } from '@/components/molecules/AppLayout';
import Image from 'next/image';
import React, { useState } from 'react';

export default function App() {
  const [ischecked, setIsChecked] = useState<boolean>(false);
  const [isMaintenance, setIsMaintenance] = useState<boolean>(true);

  return !isMaintenance ? (
    <div className='flex min-h-screen flex-col'>
      <Head>
        <title>DPEREIRA.ES</title>
        <meta name='description' content='Frontend Software Engineer' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#2dd4bf' />
        <link rel='icon' href='/code2.png' />
      </Head>

      <AppLayout />
      <Footer ischecked={ischecked} />
    </div>
  ) : (
    <>
      <section className='relative flex h-screen flex-col items-center justify-center'>
        <div className='z-20 rounded-full p-1 group-hover:bg-[#2dd4bf]'>
          <Image
            className='rounded-full'
            src='/avatar-dani.png'
            alt='icon Logo danipereira.dev'
            width={150}
            height={150}
            priority
          />
        </div>
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

        <div className=' relative z-10 mx-auto flex flex-col items-center justify-items-center justify-self-center'>
          <div id='banner-data' className='w-5/6 text-center lg:w-2/3'>
            <h1 className='animated-title py-12 text-4xl font-extrabold text-slate-200 lg:text-5xl'>
              ⚠ I&apos;m doing a colossal clean-up in my portfolio and GitHub
              account, but please don&apos;t hesitate to ask for more projects.
            </h1>
          </div>
        </div>
      </section>
      <Footer ischecked={ischecked} />
    </>
  );
}
