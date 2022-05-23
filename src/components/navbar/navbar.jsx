import { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosGitNetwork } from "react-icons/io";
import { MdComputer } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import "./navbar.scss";
import "./media-queries/media-queries.scss";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li
          className={click ? "navbar__menu-item--active" : "navbar__menu-item"}
        >
          <Link to="home" spy={true} smooth={true} offset={0} duration={800}>
            <AiOutlineHome className="navbar__menu-icon" />
          </Link>
        </li>

        <li className="navbar__menu-item">
          <Link
            to="about-me"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
          >
            <AiOutlineUser className="navbar__menu-icon" />
          </Link>
        </li>

        <li className="navbar__menu-item">
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={50}
            duration={800}
          >
            <IoIosGitNetwork className="navbar__menu-icon" />
          </Link>
        </li>

        <li className="navbar__menu-item">
          <Link to="skills" spy={true} smooth={true} offset={50} duration={800}>
            <MdComputer className="navbar__menu-icon" />
          </Link>
        </li>

        <li className="navbar__menu-item">
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
          >
            <MdWorkOutline className="navbar__menu-icon" />
          </Link>
        </li>

        <li className="navbar__menu-item">
          <Link to="contact" spy={true} smooth={true} offset={0} duration={800}>
            <AiOutlinePhone className="navbar__menu-icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
