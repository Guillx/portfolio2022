import "./project-card.scss";
import "./media-queries/media-queries.scss";

export const ProjectCard = ({ image, title, description, children }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-card__image" />

      <div className="project-card__info">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="project-card__buttons">{children}</div>
      </div>
    </div>
  );
};
