import { countriesEU } from '@/data/countries';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

export const Form = () => {
  const [state, handleSubmit] = useForm('xjvqwpde');
  const [showSuccess, setShowSuccess] = useState(true);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

  const { t } = useTranslation();

  const handlePrivacyCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsPrivacyChecked(e.target.checked); // Update checkbox state
  };

  const handleSubmitForm = (e: any) => {
    e.preventDefault();

    handleSubmit(e);

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  if (state.succeeded && showSuccess) {
    return (
      <section className='container mx-auto flex w-5/6 flex-col justify-center py-28'>
        <h2 className='text-center text-2xl tracking-widest'>
          Thanks! Your message was sent successfully
        </h2>
        <h3 className='mt-6 mb-2 text-center text-lg font-bold text-slate-200'>
          I will get back to you as soon as possible.
        </h3>
      </section>
    );
  } else if (state.errors) {
    <section className='container mx-auto flex w-5/6 flex-col justify-center py-28'>
      <h2 className='text-center text-3xl tracking-widest'>
        There was an error, please try again in a few minutes.
      </h2>
    </section>;
  }

  return (
    <section
      id='contact'
      className='container mx-auto flex w-5/6 flex-col justify-center py-28 text-center'
    >
      <h2
        className='items-center bg-gradient-to-r from-white
              to-teal-400 bg-clip-text pt-2
  text-center font-Arcade  text-4xl uppercase tracking-widest text-transparent'
      >
        {t('contact.title').toUpperCase()}
      </h2>
      <h2 className=' m-auto text-xl font-light text-slate-100 md:max-w-[75] md:text-2xl'>
        Fill the form below and I will get back to you ASAP.
      </h2>
      <div className='form-container py-8 '>
        <form
          onSubmit={handleSubmitForm}
          className=' justify-center-center container flex flex-1 flex-col items-center  gap-4 '
        >
          <div className='name flex w-full grow flex-col  text-center md:w-4/6'>
            <input
              id='name'
              name='name'
              type='text'
              className=' border border-gray-800 bg-gray-900 py-4 px-2 text-white placeholder-white'
              placeholder={t('contact.form.name')}
              required
            />
            <ValidationError prefix='name' field='name' errors={state.errors} />
          </div>
          <div className='tel flex w-full grow flex-col  text-center md:w-4/6'>
            <div
              className='
           flex'
            >
              <select
                className='w-[10%] appearance-none border border-gray-800 bg-gray-900 py-4 px-2 text-white placeholder-white'
                name='areaCode'
                required
                defaultValue={countriesEU.findIndex(
                  (country) => country.countryCode === 'ES'
                )}
              >
                {countriesEU.map((country) => (
                  <option key={uuidv4()} value={country.areaCode}>
                    {country.flag + ' '}
                    {country.countryCode}
                    {country.areaCode}
                  </option>
                ))}
              </select>
              <input
                id='phone'
                name='phone'
                type='tel'
                className='border border-gray-800 bg-gray-900 py-4 px-2 text-white placeholder-white md:w-[90%]'
                placeholder={t('contact.form.phone')}
                required
              />
            </div>
            <ValidationError
              prefix='phone'
              field='phone'
              errors={state.errors}
            />
          </div>
          <div className='email flex w-full grow flex-col text-center md:w-4/6'>
            <input
              id='email'
              name='email'
              className='border border-gray-800 bg-gray-900 py-4 px-2 text-white placeholder-white'
              type='email'
              placeholder={t('contact.form.mail')}
              required
            />
            <ValidationError
              prefix='email'
              field='email'
              errors={state.errors}
            />
          </div>
          <div className='message flex w-full grow flex-col text-center md:w-4/6'>
            <textarea
              className='border border-gray-800 bg-gray-900 py-4 px-2 text-white placeholder-white'
              rows={4}
              cols={50}
              placeholder={t('contact.form.message')}
              id='message'
              name='message'
              required
            ></textarea>
            <ValidationError
              prefix='message'
              field='message'
              errors={state.errors}
            />
          </div>
          <div className='policy flex'>
            <input
              type='checkbox'
              id='privacyPolicy'
              name='privacyPolicy'
              className='mr-2'
              required
              onChange={handlePrivacyCheckboxChange}
            />

            <label htmlFor='privacyPolicy' className='text-slate-200'>
              {t('contact.form.privacy') + ' '}
              <span
                className='text-slate-600
'
              >
                {!isPrivacyChecked && '*'}
              </span>
            </label>
          </div>

          <button
            className={`${
              !isPrivacyChecked ? 'line-through' : ''
            } border border-gray-900 bg-slate-900 py-4 px-8 hover:bg-slate-200 hover:text-slate-900`}
            disabled={!isPrivacyChecked}
            type='submit'
          >
            {t('contact.form.send')}
          </button>
        </form>
      </div>
    </section>
  );
};
