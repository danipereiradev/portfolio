export const HomeBanner: React.FC = () => {
  return (
    <section className=" relative flex h-screen flex-col">
      <div
        style={{
          backgroundImage: `url('/desk.jpeg')`,
        }}
        className="flex flex-1 flex-col items-center justify-center justify-items-center justify-self-center bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="lg:max-w-3/4 z-10 w-5/6 text-center">
          <h1 className="py-12 text-4xl font-extrabold text-slate-200 lg:text-6xl">
            # Front-end Software Engineer
          </h1>
          <h2 className="text-2xl font-bold text-slate-100 md:text-3xl">
            <span className="bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-2xl font-extrabold text-transparent md:text-3xl">
              👋🏼 Howdy!
            </span>{' '}
            I am working on my new portfolio and I will be back with brand new
            styles very soon!
          </h2>
        </div>
      </div>
    </section>
  );
};
