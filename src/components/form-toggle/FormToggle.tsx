import { FunctionComponent } from "react";

interface IFormToggle {
  leftLabel: string;
  rightLabel: string;
  isMonthly: boolean;
  handleBillingTermChange: (flag: boolean) => void;
}

//trying different way to type a function and its props
const FormToggle: FunctionComponent<IFormToggle> = ({
  leftLabel,
  rightLabel,
  isMonthly,
  handleBillingTermChange,
}) => {
  const handleToggle = () => {
    handleBillingTermChange(!isMonthly);
  };

  const ToggleLabel = ({
    label,
    isHighlighted,
  }: {
    label: string;
    isHighlighted: boolean;
  }) => {
    return (
      <p
        className={`font-ubuntu text-sm font-medium ${
          isHighlighted ? "text-marineBlue" : "text-coolGray"
        }`}
      >
        {label}
      </p>
    );
  };

  const ToggleIndicator = ({ flag }: { flag: boolean }) => {
    return (
      <div
        className="flex cursor-pointer items-center"
        role="switch"
        onClick={handleToggle}
      >
        <div className=" h-4 w-8 rounded-xl bg-marineBlue p-1">
          <div
            key={Math.random() + "23123"}
            className={`relative h-full w-2 rounded-full bg-white transition duration-[10000] ${
              !flag && "translate-x-[200%]"
            }`} //@todo: animation not working need to find way
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="col-3 grid auto-cols-min grid-flow-col  justify-center gap-x-2 rounded bg-magnolia p-3">
      <ToggleLabel label={leftLabel} isHighlighted={isMonthly} />
      <ToggleIndicator flag={isMonthly} />
      <ToggleLabel label={rightLabel} isHighlighted={!isMonthly} />
    </div>
  );
};

export default FormToggle;
