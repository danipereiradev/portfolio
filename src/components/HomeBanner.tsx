import { useTranslation } from 'react-i18next';

export const HomeBanner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative flex h-screen">
      <div
        style={{
          backgroundImage: `url('/desk.jpeg')`,
        }}
        className="absolute inset-0 bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-10 mx-auto flex flex-col items-center justify-center justify-items-center justify-self-center">
        <div className="lg:max-w-3/4 w-5/6 text-center">
          <h1 className="animated-title py-12 text-4xl font-extrabold text-slate-200 lg:text-6xl">
            {t('homeBanner.title')}
          </h1>
          <h2 className="animated-title text-2xl font-bold text-slate-100 md:text-3xl">
            {t('homeBanner.description')}
          </h2>
        </div>
      </div>
    </section>
  );
};
