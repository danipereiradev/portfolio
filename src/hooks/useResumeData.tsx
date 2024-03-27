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

const UseResumeData = (fetchUrl: string) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(fetchUrl, fetchOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log('Data fetched successfully:', data);
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
