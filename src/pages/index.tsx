import Head from 'next/head';
import Image from 'next/image';
import Lottie from 'react-lottie';
import animationData from '../../public/animationData/animation.json';
import animationDataBlue from '../../public/animationDataBlue.json';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [ischecked, setIsChecked] = useState(false);

  const toggleThemeMode = (e: any) => {
    setIsChecked(e.target.checked);
  };

  const lottieOptions = {
    animationData: !ischecked ? animationData : animationDataBlue,
    loop: true,
    speed: 1,
    autoplay: true,
    background: 'transparent',
    style: 'width:800px;height:800px',
    hover: true,
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>DANIPEREIRA.DEV</title>
        <meta name="description" content="Frontend Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/code2.png" />
      </Head>

      <header
        className={
          !ischecked
            ? 'flex place-content-center bg-black'
            : 'flex place-content-center bg-slate-900'
        }
      >
        <div className="container flex items-center justify-evenly px-7 py-7 lg:justify-between ">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                className=""
                src="/code2.png"
                alt="icon Logo danipereira.dev"
                width={25}
                height={25}
                priority
              />

              <h1 className="items-center pt-2 font-Arcade text-2xl uppercase text-slate-200 lg:text-3xl">
                DP
                <span className="bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text pt-2 text-xl font-extrabold tracking-widest text-transparent lg:text-3xl ">
                  DEV
                </span>
              </h1>
            </div>
          </Link>

          <input
            onChange={toggleThemeMode}
            type="checkbox"
            className="toggle"
            checked={ischecked}
          />
        </div>
      </header>

      <main
        className={
          !ischecked ? 'flex flex-1 bg-zinc-900' : 'flex flex-1 bg-white'
        }
      >
        <div className="container mx-auto flex min-h-full flex-col justify-start px-7 lg:flex-row lg:items-center">
          <div className="mb-7 flex flex-col place-self-center p-7">
            <div className="text-center lg:p-12">
              <h1
                className={
                  !ischecked
                    ? 'py-12 text-4xl font-extrabold text-slate-200 lg:text-6xl'
                    : 'py-12 text-4xl font-extrabold text-slate-900 lg:text-6xl'
                }
              >
                # Front-end Software Engineer
              </h1>

              <h2
                className={
                  !ischecked
                    ? 'text-2xl font-bold text-slate-100 md:px-12 md:text-3xl'
                    : 'text-2xl font-bold text-slate-600 md:px-12 md:text-3xl'
                }
              >
                <span className="bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-2xl font-extrabold text-transparent md:text-3xl">
                  Howdy!
                </span>{' '}
                I am working on my new portfolio and I will be back with brand
                new styles ASAP!
              </h2>
            </div>
          </div>
          <div className="relative -translate-y-12 px-7 lg:w-full lg:max-w-lg">
            <div className="relative">
              <Lottie options={lottieOptions} />
            </div>

            {/* <div className='flex justify-center gap-4 pb-7'>
              <Image
              
                src="/js.png"
                alt="js Logo danipereira.dev"
                style={{ borderRadius: "4px" }}
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
      </main>

      <footer
        className={
          !ischecked
            ? 'flex place-content-center bg-black py-7 md:px-4 lg:py-4'
            : 'flex place-content-center bg-slate-900 py-7 lg:py-4'
        }
      >
        <div className="container px-7">
          <div className="flex w-full place-items-center justify-center gap-4 text-white lg:justify-between ">
            <p>danipereira.dev © 2023</p>
            <div className="flex gap-4">
              <Link href="https://github.com/danipereiracodes" target="_blank">
                <Image
                  src="/github.png"
                  alt="github Logo danipereira.dev"
                  style={{ borderRadius: '4px' }}
                  width={30}
                  height={30}
                  priority
                />
              </Link>

              <Link href="mailto:info.danipereira@gmail.com" target="_blank">
                <Image
                  src="/email2.png"
                  alt="envelope Logo danipereira.dev"
                  style={{ borderRadius: '4px' }}
                  width={30}
                  height={30}
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
