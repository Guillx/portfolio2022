import Link from "react-scroll/modules/components/Link";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <p>
          ¡Muchas gracias por visitar mi página! <br /> Para cualquier duda,
          sugerencia o interés, puedes ponerte en contacto conmigo en el
          formulario de{" "}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={100}
            duration={800}
          >
            contacto
          </Link>{" "}
          o, preferiblemente, a través de las redes sociales, whatsapp o email.
          También te invito a visitar mi GitHub y mi Figma para ver más
          proyectos.
        </p>
        <div className="footer__left-icons">
          <a
            href="https://www.linkedin.com/in/guillermo-gil-vazquez-link"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="footer__icon" />
          </a>

          <a href="https://wa.me/625440474" target="_blank" rel="noreferrer">
            <FaWhatsapp className="footer__icon" />
          </a>

          <a href="https://github.com/Guillx" target="_blank" rel="noreferrer">
            <AiOutlineGithub className="footer__icon" />
          </a>
          <a
            href="https://www.figma.com/files/recent?fuid=985000805678181058"
            target="_blank"
            rel="noreferrer"
          >
            <FiFigma className="footer__icon" />
          </a>
        </div>
      </div>
      <div className="footer__center">
        <Link to="home" spy={true} smooth={true} offset={0} duration={800}>
          Inicio
        </Link>

        <Link to="about-me" spy={true} smooth={true} offset={0} duration={800}>
          Sobre mí
        </Link>

        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={50}
          duration={800}
        >
          Experiencia
        </Link>

        <Link to="skills" spy={true} smooth={true} offset={50} duration={800}>
          Habilidades
        </Link>

        <Link to="portfolio" spy={true} smooth={true} offset={0} duration={800}>
          Portfolio
        </Link>

        <Link to="contact" spy={true} smooth={true} offset={0} duration={800}>
          Contacto
        </Link>
      </div>
    </div>
  );
};
