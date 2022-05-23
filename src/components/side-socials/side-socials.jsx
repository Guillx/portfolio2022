import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
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
        href="https://wa.me/625440474"
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
      <a
        href="https://www.figma.com/files/recent?fuid=985000805678181058"
        className="side-socials__link"
        target="_blank"
        rel="noreferrer"
      >
        <FiFigma className="side-socials__icon" />
      </a>
    </div>
  );
};
