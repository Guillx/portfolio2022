import Spline from "@splinetool/react-spline";
import Link from "react-scroll/modules/components/Link";
import { Button } from "../../components/button/button";
import { SideSocials } from "../../components/side-socials/side-socials";
import { IoIosArrowDown } from "react-icons/io";
import Planet1 from "../../assets/planet1.png";
import Planet2 from "../../assets/planet2.png";
import "./home.scss";
import "./media-queries/media-queries.scss";
import { InfoButton } from "../../components/info-button/info-button";

export const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__title-container">
        <h4 className="home__pretitle">¡Bienvenidx a mi portfolio!</h4>
        <h1 className="home__title">Me llamo Guille</h1>
        <h5 className="home__subtitle">y soy programador & diseñador web</h5>
      </div>

      <div className="home__buttons">
        <Button
          path="portfolio"
          label="Ver proyectos"
          type="secondary"
          offset={0}
        />
        <Button path="contact" label="Contacto" type="primary" offset={0} />
      </div>

      <div className="home__image">
        <Spline scene="https://prod.spline.design/nJ6n2JsTaNIThS2D/scene.splinecode" />{" "}
      </div>

      <div className="home__side-socials">
        <SideSocials />
      </div>

      <div className="home__scroll-down">
        <Link to="contact" spy={true} smooth={true} offset={0} duration={800}>
          <IoIosArrowDown className="home__scroll-down-icon" />
        </Link>
      </div>

      <div className="home__image1">
        <img src={Planet1} alt="" />
      </div>
      <div className="home__image2">
        <img src={Planet2} alt="" />
      </div>
    </section>
  );
};
