import React from "react";
import { useForm } from "../hooks/useForm";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

// Esta función funciona en el manejador handleBlur
const validateForm = (form) => {
  // Por cada atributo que tengamos, debe haber una propiedad
  let errors = {};

  if (!form.name.trim()) {
    errors.name = "The field 'name' is required";
  }

  return errors;
};

const styles = {
  color: "#dc3545",
  fontWeight: "bold",
};

export default function ContactForm() {
  const {
    form,
    error,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm({ initialForm, validateForm }); // Pasa un objeto con las propiedades necesarias

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
    </div>
  );
}
