import "./title.scss";
import "./media-queries/media-queries.scss";

export const Title = ({ subtitle, title }) => {
  return (
    <div className="title">
      <h5 className="title__subtitle">{subtitle}</h5>
      <h2 className="title__title">{title}</h2>
    </div>
  );
};
