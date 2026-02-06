const stepLabels = ["Auth", "Basics", "Academic", "Fun", "Flex"];

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="progress-bar">
      <div className="progress-bar__labels">
        {stepLabels.map((label, index) => (
          <span
            key={label}
            className={`progress-bar__label ${
              index <= currentStep ? "progress-bar__label--active" : ""
            }`}
          >
            {label}
          </span>
        ))}
      </div>
      <div className="progress-bar__track">
        <div
          className="progress-bar__fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
