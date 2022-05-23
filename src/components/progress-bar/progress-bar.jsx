import "./progress-bar.scss";

export const ProgressBar = ({ icon, label, width, value }) => {
  return (
    <div className="progress-bar">
      <span className="progress-bar__label">
        {icon}
        {label}
      </span>
      <div className="progress-bar__line">
        <div className="progress-bar__progress" style={{ width: width }}>
          <span className="progress-bar__value">{value}</span>
        </div>
      </div>
    </div>
  );
};
