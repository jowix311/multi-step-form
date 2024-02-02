import { useLocation } from "react-router-dom";
interface FormStepProps {
  stepName: string;
  stepLabelUpper?: string;
  stepLabelLower?: string;
  stepNumber: string;
}

const FormStep = ({
  stepName,
  stepNumber,
  stepLabelUpper,
  stepLabelLower,
}: FormStepProps) => {
  const location = useLocation();

  return (
    <div className="md:gap- md:grid md:grid-cols-[auto_1fr] md:items-center md:gap-x-4">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full md:row-span-2 ${
          stepName === location.pathname
            ? "bg-lightBlue"
            : "border-2 border-white"
        }`}
      >
        <span
          className={`font-ubuntu font-medium text-marineBlue ${
            stepName === location.pathname ? "text-marineBlue" : "text-white"
          }`}
        >
          {stepNumber}
        </span>
      </div>
      <p className="hidden font-ubuntu text-sm text-coolGray md:block">
        {stepLabelUpper}
      </p>
      <p className="hidden font-ubuntu text-sm font-bold uppercase tracking-wide text-white md:block">
        {stepLabelLower}
      </p>
    </div>
  );
};

export default FormStep;
