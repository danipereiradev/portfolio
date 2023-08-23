export const HomeBanner: React.FC = () => {
  return (
    <section
      className="flex flex-col h-screen"
    >
      <div
        style={{
          backgroundImage: `url('/desk.jpeg')`,
        }}
        className="absolute inset-0 flex flex-col items-center justify-center flex-1 bg-center bg-cover justify-items-center justify-self-center"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="z-10 w-5/6 text-center lg:max-w-3/4">
          <h1 className="py-12 text-4xl font-extrabold text-slate-200 lg:text-6xl">
            # Front-end Software Engineer
          </h1>
          <h2 className="text-2xl font-bold text-slate-100 md:text-3xl">
            <span className="text-2xl font-extrabold text-transparent bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text md:text-3xl">
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
