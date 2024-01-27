import { FunctionComponent } from "react";

interface IFormToggle {
  leftLabel: string;
  rightLabel: string;
  flag: boolean;
  handleBillingTermChange: (flag: boolean) => void;
}

//trying different way to type a function and its props
const FormToggle: FunctionComponent<IFormToggle> = ({
  leftLabel,
  rightLabel,
  flag,
  handleBillingTermChange,
}) => {
  const handleToggle = () => {
    handleBillingTermChange(!flag);
  };

  const ToggleLabel = ({ label }: { label: string }) => {
    return (
      <p className="font-ubuntu text-sm font-medium text-marineBlue">{label}</p>
    );
  };

  const ToggleIndicator = () => {
    return (
      <div className="flex items-center" role="switch" onClick={handleToggle}>
        <div className=" h-4 w-8 rounded-xl bg-marineBlue p-1">
          <div
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
      <ToggleLabel label={leftLabel} />
      <ToggleIndicator />
      <ToggleLabel label={rightLabel} />
    </div>
  );
};

export default FormToggle;
