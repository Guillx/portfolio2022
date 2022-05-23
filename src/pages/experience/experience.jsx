import { Title } from "../../components/title/title";
import { experienceData } from "./data/data";
import { AiOutlineCalendar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdOutlineWorkOutline } from "react-icons/md";
import "./experience.scss";
import "./media-queries/media-queries.scss";
import { InfoButton } from "../../components/info-button/info-button";

export const Experience = () => {
  return (
    <section id="experience" className="experience">
      <Title subtitle="Vida laboral" title="Experiencia" />

      <div className="experience">
        <div className="experience__cards">
          {experienceData.map((item) => {
            return (
              <>
                <div className={`experience__card + ${item.className}`}>
                  <h5 className="experience__card-date">
                    <AiOutlineCalendar />
                    {item.date}
                  </h5>
                  <h6 className="experience__card-place">
                    <HiOutlineOfficeBuilding />
                    {item.place}
                  </h6>
                  <span className="experience__card-location">
                    <GoLocation />
                    {item.location}
                  </span>
                  <p className="experience__card-ocupation">
                    <MdOutlineWorkOutline />
                    {item.ocupation}
                  </p>
                  <div className={item.line}></div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="portfolio__info-btn">
        <InfoButton text="Siempre me ha gustado la cocina y he trabajado varios años en hostelería. En esos años he aprendido muchísimas cosas y he desempeñado diferentes funciones, desde cobro y atención al cliente hasta gestión de almacén y pedidos. Ahora llevo 9 meses trabajando de programador, adaptandome a este sector y aprendiendo cosas nuevas cada día." />
      </div>
    </section>
  );
};
