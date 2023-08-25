export const Form = () => {
  return (
    <section
      id="portfolio"
      className="container mx-auto flex w-5/6 flex-col justify-center py-28"
    >
      <h2 className="mt-6 mb-2 text-center text-lg font-bold text-slate-200">
        Fill the above form and I will get back to you as soon as possible.
      </h2>
      <div className="form-container py-8 ">
        <form className=" justify-center-center container flex flex-1 flex-col items-center  gap-4 ">
          <div className="name flex w-full grow flex-col  text-center md:w-4/6">
            <input
              type="text"
              className=" border border-slate-900 bg-black py-4 px-2 placeholder-gray-700"
              placeholder="Your name"
            />
          </div>
          <div className="tel flex w-full grow flex-col  text-center md:w-4/6">
            <input
              type="number"
              className="border border-slate-900 bg-black py-4 px-2 placeholder-slate-700"
              placeholder="Your phone"
            />
          </div>
          <div className="email flex w-full grow flex-col text-center md:w-4/6">
            <input
              className="border border-slate-900 bg-black py-4 px-2 placeholder-slate-700"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="message flex w-full grow flex-col text-center md:w-4/6">
            <textarea
              className="border border-slate-900 bg-black py-4 px-2 placeholder-slate-700"
              rows={4}
              cols={50}
              placeholder="Write your message"
            ></textarea>
          </div>
          <button
            className="border border-slate-900 bg-slate-900 py-4 px-8"
            onClick={(e) => e.preventDefault()}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
