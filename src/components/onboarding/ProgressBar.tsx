interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const stepLabels = ["Auth", "Basics", "Academic", "Fun", "Flex"];

const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full mb-10">
      <div className="flex justify-between mb-3">
        {stepLabels.map((label, index) => (
          <span
            key={label}
            className={`text-xs font-medium transition-colors duration-300 ${
              index <= currentStep
                ? "text-foreground"
                : "text-muted-foreground"
            }`}
          >
            {label}
          </span>
        ))}
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
