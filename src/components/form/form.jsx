import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./form.scss";
import "./media-queries/media-queries.scss";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_m5buaic",
      "template_rzrb4xo",
      form.current,
      "rZTVotFVEHG3eQmzZ"
    );

    e.target.reset();

    if (emailjs.sendForm === 1) {
      console.log("ok");
    }
  };

  return (
    <form className="form" ref={form} onSubmit={sendEmail} autoComplete="off">
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        required
        className="form__input"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="form__input"
      />
      <textarea
        name="message"
        rows="7"
        placeholder="Escribe aquí tu mensaje"
        required
        className="form__textarea"
      />
      <div className="form__button-container">
        <button type="submit" className="form__button">
          Enviar mensaje
        </button>
      </div>
    </form>
  );
};
