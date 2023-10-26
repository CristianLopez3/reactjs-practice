import { useState, useEffect } from "react";

/**
 * Este hook es mas amigable para guardar datos en variables de estado.
 * @param {url} url 
 * @returns {data, error, loading} 
 */

export const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true);

      try {

        const res = await fetch(url);
        if(!res.ok){
          let err = new Error('Error en la peticion fetch');
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrio un error";
          throw err;
        }

        /**  
         * signal.aborted = significa que la peticion fetch se aborto porque no respondio la url,
         * esto a causa del objeto abortController y su variable signal.
         */

        const json = await res.json();
        if(!signal.aborted){
          setData(json);
          setError(null);
        }

      } catch (error) {
        if(!signal.aborted){
          setData(null);
          setError(error);
        }
      } finally {
        if(!signal.aborted){
          setLoading(false);
        }
      }

    }

    fetchData();

    return () => abortController.abort();
  }, [ url ]);

  return { data, error, loading};
};
