import { useState } from "react";
import { ProjectCard } from "../../components/project-card/project-card";
import { Title } from "../../components/title/title";
import { AiOutlineGithub } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";

import "./portfolio.scss";
import "./media-queries/media-queries.scss";
import {
  backendProjectsData,
  designProjectsData,
  frontendProjectsData,
  fullstackProjectsData,
} from "./data/data";
import { InfoButton } from "../../components/info-button/info-button";

export const Portfolio = () => {
  const [index, setIndex] = useState(0);
  const [activeItem, setActiveItem] = useState("#frontend");

  return (
    <section id="portfolio" className="portfolio">
      <Title subtitle="Mis proyectos" title="Portfolio" />

      <div className="portfolio__container">
        <div className="portfolio__tabs">
          <div className="portfolio__tabs-list">
            <div
              className={
                activeItem === "#frontend"
                  ? "portfolio__tab-item-header--active"
                  : "portfolio__tab-item-header"
              }
              onClick={() => {
                setIndex(0);
                setActiveItem("#frontend");
              }}
              id="frontend"
            >
              Frontend
            </div>
            <div
              className={
                activeItem === "#backend"
                  ? "portfolio__tab-item-header--active"
                  : "portfolio__tab-item-header"
              }
              onClick={() => {
                setIndex(1);
                setActiveItem("#backend");
              }}
              id="backend"
            >
              Backend
            </div>
            <div
              className={
                activeItem === "#fullstack"
                  ? "portfolio__tab-item-header--active"
                  : "portfolio__tab-item-header"
              }
              onClick={() => {
                setIndex(2);
                setActiveItem("#fullstack");
              }}
              id="#fullstack"
            >
              Full Stack
            </div>
            <div
              className={
                activeItem === "#design"
                  ? "portfolio__tab-item-header--active"
                  : "portfolio__tab-item-header"
              }
              onClick={() => {
                setIndex(3);
                setActiveItem("#design");
              }}
              id="#design"
            >
              UX/UI & 3D
            </div>
          </div>

          <div className="portfolio__projects-container" hidden={index !== 0}>
            <div className="portfolio__projects">
              {frontendProjectsData.map((item) => {
                return (
                  <ProjectCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                  >
                    {item.demoButton ? (
                      <>
                        <a
                          href={item.github}
                          className="portfolio__card-button"
                          data-tooltip="Ir a Github"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AiOutlineGithub />
                        </a>
                        <a
                          href={item.demo}
                          className="portfolio__card-button"
                          data-tooltip="Ver Demo"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <BsPlayFill />
                        </a>
                      </>
                    ) : (
                      <a
                        href={item.github}
                        className="portfolio__card-button"
                        data-tooltip="Ir a Github"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiOutlineGithub />
                      </a>
                    )}
                  </ProjectCard>
                );
              })}
            </div>
          </div>

          <div className="portfolio__tabs-content" hidden={index !== 1}>
            <div className="portfolio__projects">
              {backendProjectsData.map((item) => {
                return (
                  <ProjectCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                  >
                    <a
                      href={item.github}
                      className="portfolio__card-button"
                      data-tooltip="Ir a Github"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineGithub />
                    </a>
                  </ProjectCard>
                );
              })}
            </div>
          </div>

          <div className="portfolio__tabs-content" hidden={index !== 2}>
            <div className="portfolio__projects">
              {fullstackProjectsData.map((item) => {
                return (
                  <ProjectCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                  >
                    {item.demoButton ? (
                      <>
                        <a
                          href={item.github}
                          className="portfolio__card-button"
                          data-tooltip="Ir a Github"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AiOutlineGithub />
                        </a>
                        <a
                          href={item.demo}
                          className="portfolio__card-button"
                          data-tooltip="Ver Demo"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <BsPlayFill />
                        </a>
                      </>
                    ) : (
                      <a
                        href={item.github}
                        className="portfolio__card-button"
                        data-tooltip="Ir a Github"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiOutlineGithub />
                      </a>
                    )}
                  </ProjectCard>
                );
              })}
            </div>
          </div>

          <div className="portfolio__tabs-content" hidden={index !== 3}>
            <div className="portfolio__projects">
              {designProjectsData.map((item) => {
                return (
                  <ProjectCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                  >
                    <a
                      href={item.demo}
                      className="portfolio__card-button"
                      data-tooltip="Ir al proyecto"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsLink45Deg />
                    </a>
                  </ProjectCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
