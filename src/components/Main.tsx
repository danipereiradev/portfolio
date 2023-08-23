import Resume from '@/components/Resume';
import { HomeBanner } from './HomeBanner';
import { Portfolio } from './Portfolio';
interface MainProps {
  ischecked: Boolean;
}
export const Main: React.FC<MainProps> = ({ ischecked }) => {
  return (
    <main className="flex-1">
      
      <HomeBanner />
      <section
        id="cv"
        className='flex flex-col items-center h-screen bg-black justify-evenly'
      >
        <Resume />
        </section>
        <section
        id="portfolio"
        className='flex flex-col items-center justify-center h-screen bg-black'
      >
        <Portfolio />
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </section>
    
      
    </main>
    
  );
};
