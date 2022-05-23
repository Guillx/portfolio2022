import { ProgressBar } from "../../components/progress-bar/progress-bar";
import { Title } from "../../components/title/title";
import { languagesData, skillsData } from "./data/data";
import "./skills.scss";
import "./media-queries/media-queries.scss";
import { InfoButton } from "../../components/info-button/info-button";

export const Skills = () => {
  return (
    <section id="skills" className="skills">
      <Title subtitle="Conocimientos sobre la materia" title="Habilidades" />
      <div className="skills__content">
        {skillsData.map((item) => {
          return (
            <ProgressBar
              icon={item.icon}
              label={item.label}
              width={item.value}
              value={item.value}
            />
          );
        })}
      </div>

      <div className="skills__cards">
        {languagesData.map((item) => {
          return (
            <>
              <div className="skills__card-wrapper">
                <div className="skills__card">
                  <img src={item.image} alt="" />
                </div>
                <div className="skills__card-text">
                  <ProgressBar
                    label={item.progressLabel}
                    width={item.progressValue}
                    value={item.progressValue}
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="portfolio__info-btn">
        <InfoButton text="Con HTML y CSS me manejo bastante bien y me siento cómodo trabajando con ellos. Con JavaScript y React también me siento cómodo y tengo conocimientos como para realizar varios tipos de tareas, aunque aún me faltan muchas cosas por aprender, sobre todo de la parte lógica. De Backend y Bases de Datos tengo conocimientos básicos." />
      </div>
    </section>
  );
};
