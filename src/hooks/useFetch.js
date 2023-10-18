import { useState, useEffect } from 'react';

export function useFetch(url){
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const getData = async (url) => {
      const res = await fetch(url);
      
      try {

        if(!res.ok){
          throw{
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrio un error" : res.statusText
          }
        }

        const data = await res.json();
        setData(data);
        setIsPending(false);
        setError({err: false});

      } catch (err) {
        setIsPending(true);
        setError(err);
      }

    }

    getData(url);

  }, [ url ])

  return {data, isPending, error};

}