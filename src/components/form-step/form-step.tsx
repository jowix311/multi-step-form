import { useLocation } from "react-router-dom";
interface FormStepProps {
  stepName: string;
  stepLabelUpper?: string;
  stepLabelLower?: string;
  stepNumber: string;
}

const FormStep = ({ stepName, stepNumber }: FormStepProps) => {
  const location = useLocation();

  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-full ${
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
  );
};

export default FormStep;
