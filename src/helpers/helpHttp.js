export const helpHttp = () => {
  const customFetch = (endPoint, options) => {
    const defaultHeader = {
      accept: "application/json", // Poner cualquier otro encabezado necesario.
    };

    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body; // no podemos enviar un body vacio o falso;

    console.log(options);
    setTimeout(() => controller.abort(), 3000); // cancelar la peticion si esta se demora mas de 3 segundos

    return fetch(endPoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : PROMISE.reject({
              error: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrio un error",
            })
      )
      .catch((err) => err);
  };

  const get = (url, options = {}) => customFetch(url, options);

  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    put,
    post,
    del,
  };
};
