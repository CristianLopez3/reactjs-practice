import { useState } from "react";
import { helpHttp } from "../helper/helpHttp";

/**
 * Logica para nuestro formulario, lo que nos sirve para separar y automatizar todo el proceso.
 * @return {form, error, loading, response, handleChange, handleBlur, handleSubmit}
 */

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setError(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateForm(form));
    if (Object.keys(error).length === 0) {
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/cristian.c.lopez.m@gmail.com", {
          body: form, // Data a enviar
          headers: {
            // Contenido que vamos a enviar
            "Content-type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false); // desactivamos el loading
          setResponse(true); // Activamos el mensaje
          setForm(initialForm);
          setTimeout(() => setResponse(false), 5000); // Desactivamos el mensaje
        });
    } else {
      return;
    }
  };

  return {
    form,
    error,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
