import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import "./side-socials.scss";
import "./media-queries/media-queries.scss";

export const SideSocials = () => {
  return (
    <div className="side-socials">
      <a
        href="https://www.linkedin.com/in/guillermo-gil-vazquez-link"
        className="side-socials__link"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="side-socials__icon" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=34625440474"
        className="side-socials__link"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp className="side-socials__icon" />
      </a>
      <a
        href="https://github.com/Guillx"
        className="side-socials__link"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineGithub className="side-socials__icon" />
      </a>
    </div>
  );
};
