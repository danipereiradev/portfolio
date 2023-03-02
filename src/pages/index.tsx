import Head from 'next/head'
import Image from 'next/image'
import Lottie from 'react-lottie';
import animationData from '../../public/animationData/animation.json';


const lottieOptions = {
  animationData: animationData,
  loop: true,
  speed:1,
  autoplay: true,
  background:"transparent",
  style: "width:800px;height:800px",
  hover:true,

};


export default function Home() {
  return (
    <>
      <Head>
        <title>Danipereira.dev</title>
        <meta name="description" content="Frontend Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <header className='flex flex-col items-center py-4 md:py-7 bg-slate-900 w-full'>
        <div className="flex flex-col-reverse md:max-w-6xl md:flex-row w-full justify-between items-center px-7">
          <div className='flex items-center justify-evenly w-full py-4 '>
          <Image className=''
                src="/code2.png"
                alt="Vercel Logo"
                
                width={35}
                height={35}
                priority
              />
            
              <p className='font-extrabold tracking-widest text-slate-200 text-2xl md:text-3xl '>DANIPEREIRA<span className=' italic font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300'>.DEV</span></p>
              {/* <Image className='rotate-180'
                src="/bracket1.png"
                alt="Vercel Logo"
                
                width={35}
                height={35}
                priority
              /> */}
          </div>
         
            
              
              
             
            
          
        </div>
        </header>
        
        <main className='h-screen flex flex-col justify-start bg-black'>
          <div className='md:max-w-xxl text-center'>
          <h1 className='text-slate-200 text-4xl font-extrabold py-12'>Frontend Software Engineer</h1>
          <div className='flex justify-center gap-4 pb-7'>
         <Image
                src="/js.png"
                alt="Vercel Logo"
                style={{borderRadius:"4px"}}
                width={40}
                height={40}
                priority
              />
              <Image
                src="/ts.png"
                alt="Vercel Logo"
                
                width={40}
                height={40}
                priority
              />
              <Image
                src="/react.png"
                alt="Vercel Logo"
                
                width={40}
                height={40}
                priority
              />
          
         </div>
          <h2 className='text-slate-100 text-xl px-7'>I am working on my new Portfolio! I will Be right Back with new fresh style ASAP!</h2>

          </div>
          <div className=' md:w-full md:max-w-xl pt-8'>
          <Lottie options={lottieOptions} />
          </div>
          
        </main>

        <footer className='flex py-7 md:py-12 bg-slate-900'>
          
          <div className='flex justify-evenly text-white w-full place-items-center cursor-pointer'>
          <p>danipereira.dev © 2023</p>
               <Image
                src="/github.png"
                alt="Vercel Logo"
                style={{borderRadius:"4px"}}
                width={30}
                height={30}
                priority
              />
               <Image
                src="/email2.png"
                alt="Vercel Logo"
                style={{borderRadius:"4px"}}
                width={30}
                height={30}
                priority
              />
          </div>
        </footer>







        
      
    </>
  )
}
