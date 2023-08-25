import Resume from '@/components/Resume';
import { HomeBanner } from './HomeBanner';
import { Portfolio } from './Portfolio';
import { Form } from './Form';
interface MainProps {
  ischecked: Boolean;
}
export const Main: React.FC<MainProps> = ({ ischecked }) => {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <HomeBanner />

      <Resume />

      <Portfolio />
      <Form />
    </main>
  );
};
