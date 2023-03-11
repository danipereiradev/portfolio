import Head from 'next/head'
import Image from 'next/image'
import Lottie from 'react-lottie';
import animationData from '../../public/animationData/animation.json';
import animationDataBlue from '../../public/animationDataBlue.json';
import Link from 'next/link'
import {useState} from 'react'





export default function Home() {
  const [ischecked, setIsChecked ] = useState(false)

  const toggleThemeMode = (e: any) => {
    setIsChecked(e.target.checked)
  }

  const lottieOptions = {
    animationData: !ischecked ? animationData : animationDataBlue,
    loop: true,
    speed: 1,
    autoplay: true,
    background: "transparent",
    style: "width:800px;height:800px",
    hover: true,
  
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>DANIPEREIRA.DEV</title>
        <meta name="description" content="Frontend Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/code2.png" />
      </Head>

      <header className={!ischecked ? 'flex bg-black place-content-center' : 'flex bg-slate-900 place-content-center'} >
        <div className="container flex items-center justify-evenly py-7 lg:justify-between ">
          
            <Link href="/">
            <div className='flex items-center gap-2'>
              <Image className=''
                src="/code2.png"
                alt="icon Logo danipereira.dev"

                width={25}
                height={25}
                priority
              />

              <h1 className='items-center pt-2 text-2xl uppercase font-Arcade text-slate-200 lg:text-3xl'>danipereira<span className='pt-2 text-xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300 lg:text-2xl '>.DEV</span></h1>

            </div>
            </Link>

          
          <input onChange={toggleThemeMode} type="checkbox" className="toggle" checked={ischecked} />

        </div>
      </header>

      <main className={!ischecked ? 'flex bg-zinc-900 flex-1' : 'flex bg-white flex-1'}>
        <div className="container flex flex-col justify-start min-h-full mx-auto lg:flex-row lg:items-center">
          <div className="flex flex-col p-7 place-self-center mb-7">
            <div className='text-center lg:p-12'>
              <h1 className={!ischecked ? 'text-slate-200 text-4xl lg:text-6xl font-extrabold py-12' : 'text-slate-900 text-4xl lg:text-6xl font-extrabold py-12'}># Front-end Software Engineer</h1>

              <h2 className={!ischecked ? 'text-slate-100 text-2xl md:text-3xl md:px-12 font-bold' : 'text-slate-600 text-2xl md:text-3xl md:px-12 font-bold'}><span className='text-2xl font-extrabold text-transparent md:text-3xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300'>Howdy!</span> I am working on my new portfolio and I will be back with brand new styles ASAP!</h2>

            </div>
            
          </div>
          <div className='relative -translate-y-12 lg:w-full lg:max-w-lg px-7'>
            
            <div className="relative">
              
            <Lottie options={lottieOptions} />
            
            </div>
            
            
            <div className='flex justify-center gap-4 pb-7'>
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

            </div>
          </div>
        </div>

       
      </main>

      <footer className={!ischecked ? 'flex py-7 lg:py-4 bg-black place-content-center' : 'flex py-7 lg:py-4 bg-slate-900 place-content-center'}>
        <div className="container">
          <div className='flex justify-center w-full gap-4 text-white lg:justify-between place-items-center '>
            <p>danipereira.dev © 2023</p>
            <div className='flex gap-4'>
              <Link href="https://github.com/danipereiracodes" target="_blank"><Image
                src="/github.png"
                alt="github Logo danipereira.dev"
                style={{ borderRadius: "4px" }}
                width={30}
                height={30}
                priority
              /></Link>

              <Link href="mailto:info.danipereira@gmail.com" target="_blank"><Image
                src="/email2.png"
                alt="envelope Logo danipereira.dev"
                style={{ borderRadius: "4px" }}
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
  )
}
