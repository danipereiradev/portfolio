import Head from 'next/head'
import Image from 'next/image'
import Lottie from 'react-lottie';
import animationData from '../../public/animationData/animation.json';
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";


const lottieOptions = {
  animationData: animationData,
  loop: true,
  speed: 1,
  autoplay: true,
  background: "transparent",
  style: "width:800px;height:800px",
  hover: true,

};


export default function Home() {
  return (
    <>
      <Head>
        <title>DANIPEREIRA.DEV</title>
        <meta name="description" content="Frontend Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/code2.png" />
      </Head>

      <header className='flex bg-black place-content-center' >
        <div className="container flex justify-evenly items-center py-7 lg:justify-between ">
          <div className="">
            <div className='flex gap-2 items-center'>
              <Image className=''
                src="/code2.png"
                alt="icon Logo danipereira.dev"

                width={35}
                height={35}
                priority
              />

              <p className='font-extrabold tracking-widest text-slate-200 text-xl lg:text-lg '>DANIPEREIRA<span className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300'>.DEV</span></p>

            </div>

          </div>
          <div>
            <GiHamburgerMenu className='lg:hidden text-gray-200 text-4xl mx-auto' />
            <ul className='hidden lg:flex text-gray-200 gap-7 font-bold text-md uppercase'>
              <li> <Link href="#">About me</Link></li>
              <li><Link href="#">Projects</Link></li>
              <li><Link href="#">Cv</Link></li>
            </ul>

          </div>

        </div>
      </header>

      <main className='flex bg-zinc-900'>
        <div className="flex flex-col lg:flex-row min-h-screen lg:items-center container mx-auto justify-start">
          <div className="p-7 flex place-self-center mb-7">
            <div className='lg:p-12 text-center'>
              <h1 className='text-slate-200 text-4xl lg:text-6xl font-extrabold py-12'># Front-end Software Engineer</h1>

              <h2 className='text-slate-100 text-xl md:px-12'><span className='font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300'>Howdy!</span> I am working on my new portfolio and I will be back with brand new styles ASAP!</h2>

            </div>
          </div>
          <div className='lg:w-full lg:max-w-lg px-7 -translate-y-12 relative'>
            
            <div className="relative">
            <Lottie options={lottieOptions} />
            </div>
            <Image className='glasses'
              src="/lentes.png"
              alt="js Logo danipereira.dev"
              
              width={100}
              height={100}
              priority
            />
            <div className='flex justify-center gap-4 pb-7 lg:-translate-y-20 -translate-y-20'>
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

      <footer className='flex py-7 lg:py-4 bg-black place-content-center'>
        <div className="container">
          <div className='flex lg:justify-between justify-center gap-4 text-white w-full place-items-center '>
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









    </>
  )
}
