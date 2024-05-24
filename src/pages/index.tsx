import Head from 'next/head';
import { Footer } from '@/components/organisms/Footer';
import { AppLayout } from '@/components/molecules/AppLayout';

import React, { useState } from 'react';

export default function App() {
  const [ischecked, setIsChecked] = useState<boolean>(false);

  return (
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
  );
}
