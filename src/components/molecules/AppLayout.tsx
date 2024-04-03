import Resume from '@/components/organisms/Resume';
import { HomeBanner } from '../organisms/HomeBanner';
import { Portfolio } from '../organisms/Portfolio';
import { Contact } from '../organisms/Contact';
import { About } from '../organisms/About';

export const AppLayout: React.FC = () => {
  return (
    <main className='flex min-h-screen flex-col bg-black'>
      <HomeBanner />
      <About />
      <Resume />

      <Portfolio />
      <Contact />
    </main>
  );
};
