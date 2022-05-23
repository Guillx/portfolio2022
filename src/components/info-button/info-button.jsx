import { BsInfoLg } from "react-icons/bs";
import "./info-button.scss";
import "./media-queries/media-queries.scss";

export const InfoButton = ({ text }) => {
  return (
    <div className="info-button" data-tooltip={text}>
      <div style={{ position: "relative" }}></div>
      <BsInfoLg className="info-button__icon" />
    </div>
  );
};
