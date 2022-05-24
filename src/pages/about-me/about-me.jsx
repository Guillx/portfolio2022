import { useState } from "react";
import Link from "react-scroll/modules/components/Link";
import { Title } from "../../components/title/title";
import { AiOutlineCheck } from "react-icons/ai";
import { aboutmeData } from "./data/data";
import "./about-me.scss";
import "./media-queries/media-queries.scss";

export const AboutMe = () => {
  const [showInfo, setShowInfo] = useState(false);

  function handleClick() {
    setShowInfo(!showInfo);
  }

  return (
    <section id="about-me" className="about-me">
      <Title subtitle="Cosas interesantes" title="Sobre Mí" />

      <div className="about-me__content">
        <div className="about-me__text">
          <p>
            Me llamo Guille y soy de Laxe, A Coruña. Mi carrera en el mundo del
            desarrollo web empezó a finales del año 2020, cuándo me apunté a un
            bootcamp de programación web Full Stack en remoto.
            <br />
            Unos meses después de terminar el bootcamp, encontré mi primera
            oportunidad laboral como programador web Front End en una importante
            empresa del sector, dónde he aprendido y desarrollado{" "}
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={100}
              duration={800}
            >
              diferentes habilidades
            </Link>{" "}
            trabajando en varios proyectos:
          </p>
          <div className="about-me__text-check-container">
            <div className="about-me__text-check">
              <AiOutlineCheck className="icon" />
              <p>
                Diseño UX/UI de una aplicación de estadística de ventas para una
                gran empresa de retail.
              </p>
            </div>
            <div className="about-me__text-check">
              <AiOutlineCheck className="icon" />
              <p>
                Desarrollo Front End con React de una aplicación de carga de
                configuraciones.
              </p>
            </div>
            <div className="about-me__text-check">
              <AiOutlineCheck className="icon" />
              <p>
                Desarrollo de una librería de componentes para React utilizando
                Storybook y SASS.
              </p>
            </div>
          </div>
          <p>
            Además del bootcamp, también he realizado un curso de Diseño UX y
            CRO, dónde he aprendido sobre SEO y analítica web. <br />
            Actualmente estoy buscando un trabajo como programador Front End o
            diseñador web dónde poder seguir aprendiendo y desarrollando
            habilidades.
            <br />
            Me gustaría participar en proyectos con alta carga visual, dónde la
            creatividad y la maquetación sean puntos clave en el desarrollo, ya
            que es el tipo de proyecto dónde me siento más motivado y productivo
            y dónde más puedo aportar a corto plazo.
          </p>
        </div>

        <div className="about-me__hobbies">
          {aboutmeData.map((item) => {
            return (
              <>
                <div className="about-me__hobbie-wrapper">
                  <div
                    className={`about-me__hobbie + ${item.className}`}
                    onClick={handleClick}
                  >
                    <img src={item.image} alt="" />
                  </div>
                  <div className="about-me__hobbie-text">
                    <img src={item.image} alt="" />
                    {item.text}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};
