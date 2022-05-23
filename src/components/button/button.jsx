import Link from "react-scroll/modules/components/Link";
import "./button.scss";
import "./media-queries/media-queries.scss";

export const Button = ({ path, label, type, offset }) => {
  return (
    <div>
      <Link
        className={`button ${
          type === "primary" ? "button--primary" : "button-secondary"
        } ${type === "secondary" ? "button--secondary" : ""}`}
        to={path}
        spy={true}
        smooth={true}
        offset={offset}
        duration={800}
      >
        {label}
      </Link>
    </div>
  );
};
