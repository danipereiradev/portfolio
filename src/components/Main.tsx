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
        className={`${
          !ischecked ? 'bg-black' : 'bg-white'
        } flex flex-col items-center justify-evenly`}
      >
        <Resume />
        {/* Your content here */}
      </section>
      <section
        id="portfolio"
        className={`${
          !ischecked ? 'bg-black' : 'bg-white'
        } flex h-screen items-center justify-center`}
      >
        <h2 className="text-2xl font-bold text-slate-100 md:text-3xl">
          PORTFOLIO SECTION
        </h2>
        {/* Your content here */}
      </section>
      <section
        id="form"
        className={`${
          !ischecked ? 'bg-black' : 'bg-white'
        } flex h-screen items-center justify-center`}
      >
        <h2 className="text-2xl font-bold text-slate-100 md:text-3xl">
          FORM SECTION
        </h2>
        {/* Your content here */}
      </section>
    </main>
  );
};
