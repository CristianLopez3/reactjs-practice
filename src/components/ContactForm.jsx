import React from "react";
import { useForm } from "../hooks/useForm";
import { Loader } from "./Loader";
import { Message } from "./Message";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

/**
 * Validaciones de nuestro formulario
 * @param {*} form 
 * @returns 
 */
const validateForm = (form) => {
  // Por cada atributo que tengamos, debe haber una propiedad
  let errors = {};
  // Expresiones regulares para validar el formulario
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "The field 'name' is required";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "The field 'name' only accept letters and white spaces";
  }

  if (!form.email.trim()) {
    errors.email = "The field 'email' is required";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.name = "The field 'email' is incorrect";
  }

  if (!form.subject.trim()) {
    errors.subject = "The field 'subject' is required";
  }

  if (!form.comments.trim()) {
    errors.comments = "The field 'comments' is required";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.name =
      "The field 'comments' only accept 255 character as its maximun  ";
  }

  return errors;
};

const styles = {
  color: "#dc3545",
  fontWeight: "bold",
};


/**
 * UI para nuestro formulario
 * @returns html-code
 */

export default function ContactForm() {
  const {
    form,
    error,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validateForm); // Pasa un objeto con las propiedades necesarias

  return (
    <div>
      <h2>Contact form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Write your name"
          value={form.name}
          onBlur={handleBlur}
          onChange={handleChange}
          required
        />
        {error.name && <p style={styles}>{error.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Write your email"
          value={form.email}
          onBlur={handleBlur}
          onChange={handleChange}
          required
        />
        {error.email && <p style={styles}>{error.email}</p>}

        <input
          type="text"
          name="subject"
          placeholder="Write your subject"
          value={form.subject}
          onBlur={handleBlur}
          onChange={handleChange}
          required
        />
        {error.subject && <p style={styles}>{error.subject}</p>}

        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Write your comments"
          value={form.comments}
          onBlur={handleBlur}
          onChange={handleChange}
          required
        ></textarea>
        {error.comments && <p style={styles}>{error.comments}</p>}

        <input type="submit" value="Send" />
      </form>

      {loading && <Loader /> /* Para cuando es cargando el formulario */}
      {
        response && (
          <Message msg="Data correctly send" bgColor="#198754" />
        ) /* Mensaje de exito para el envio del formulario  */
      }
    </div>
  );
}
