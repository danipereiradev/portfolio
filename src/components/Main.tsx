import Resume from '@/components/Resume';
import { HomeBanner } from './HomeBanner';
import { Portfolio } from './Portfolio';
import { Form } from './Form';
interface MainProps {
  ischecked: boolean;
  onToggleThemeMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Main: React.FC<MainProps> = ({ ischecked, onToggleThemeMode }) => {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <HomeBanner ischecked={ischecked} onToggleThemeMode={onToggleThemeMode} />

      <Resume />

      <Portfolio />
      <Form />
    </main>
  );
};
