import Resume from '@/components/Resume';
import { HomeBanner } from './HomeBanner';
import { Portfolio } from './Portfolio';
import { Form } from './Form';

export const Main: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <HomeBanner />

      <Resume />

      <Portfolio />
      <Form />
    </main>
  );
};
