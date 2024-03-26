import { useState, useEffect } from 'react';

const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append(
  'Authorization',
  `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_KEY}`
);
headers.append('apikey', `${process.env.NEXT_PUBLIC_SUPABASE_KEY}`);

const fetchOptions = {
  method: 'GET',
  headers: new Headers(headers),
};

const UseResumeData = (fetchUrl: string[]) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    Promise.all(fetchUrl.map((url: string) => fetch(url, fetchOptions)))
      .then((responses) => {
        const errorResponses = responses.filter((response) => !response.ok);
        if (errorResponses.length > 0) {
          throw new Error('One or more network responses were not ok');
        }

        return Promise.all(responses.map((response) => response.json()));
      })
      .then((dataArray) => {
        setData(dataArray);
        console.log('Data fetched successfully:', dataArray);
      })
      .catch((error) => {
        console.error('There was a problem with your fetch operation:', error);
      });
  }, []);

  return {
    data,
  };
};

export default UseResumeData;
