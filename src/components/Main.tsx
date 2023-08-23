import Resume from '@/components/Resume';
import { HomeBanner } from './HomeBanner';
interface MainProps {
  ischecked: Boolean;
}
export const Main: React.FC<MainProps> = ({ ischecked }) => {
  return (
    <main className="flex-1">
      
      <HomeBanner />
      <section
        id="cv"
        className='flex flex-col items-center bg-black justify-evenly'
      >
        <Resume />
        </section>
        {/* Your content here */}
    
      
    </main>
    
  );
};
