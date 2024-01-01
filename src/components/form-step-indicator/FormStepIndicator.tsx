import sidebarMobile from "../../assets/bg-sidebar-mobile.svg";
import { RoutePath } from "../../main.tsx";
import FormStep from "../form-step/form-step.tsx";

const FormStepIndicator = () => {
  return (
    <div className="relative">
      <picture className="absolute">
        <img src={sidebarMobile} alt="mobile banner" />
      </picture>
      <div className="relative z-10 flex justify-center gap-4 pt-4">
        <FormStep stepName={RoutePath.STEP_1} stepNumber="1" />
        <FormStep stepName={RoutePath.STEP_2} stepNumber="2" />
        <FormStep stepName={RoutePath.STEP_3} stepNumber="3" />
        <FormStep stepName={RoutePath.STEP_4} stepNumber="4" />
      </div>
    </div>
  );
};

export default FormStepIndicator;
