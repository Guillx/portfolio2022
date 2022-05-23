import { Title } from "../../components/title/title";
import ContactImg from "../../assets/contact.png";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import "./contact.scss";
import { Form } from "../../components/form/form";
import "./media-queries/media-queries.scss";
import { InfoButton } from "../../components/info-button/info-button";

export const Contact = () => {
  return (
    <section id="contact" className="contact" style={{ height: "110vh" }}>
      <Title subtitle="Hora de conocerse mejor" title="Contacto" />

      <div className="contact__content">
        <div className="contact__content-top">
          <div className="contact__image">
            <img src={ContactImg} alt="" />
          </div>

          <div className="contact__form">
            <Form />
          </div>
        </div>

        <div className="contact__content-bottom">
          <div className="contact__card">
            <MdOutlineEmail className="contact__card-icon" />
            <p className="contact__card-text">Email</p>
            <a
              href="mailto:guillx.dev@gmail.com"
              className="contact__card-link"
              target="_blank"
              rel="noreferrer"
            >
              Enviar email
            </a>
          </div>
          <div className="contact__card">
            <AiFillLinkedin className="contact__card-icon" />
            <p className="contact__card-text">Linkedin</p>
            <a
              href="https://www.linkedin.com/in/guillermo-gil-vazquez-link"
              className="contact__card-link"
              target="_blank"
              rel="noreferrer"
            >
              Ir a Linkedin
            </a>
          </div>
          <div className="contact__card">
            <FaWhatsapp className="contact__card-icon" />
            <p className="contact__card-text">Whatsapp</p>
            <a
              href="https://wa.me/625440474"
              className="contact__card-link"
              target="_blank"
              rel="noreferrer"
            >
              Enviar Whatsapp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
