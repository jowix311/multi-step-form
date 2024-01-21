import sidebarMobile from "../../assets/bg-sidebar-mobile.svg";
import { RoutePath } from "../../main.tsx";
import FormStep from "../form-step/form-step.tsx";

const FormStepIndicator = () => {
  return (
    <div className="relative">
      <picture>
        <img src={sidebarMobile} alt="mobile banner" />
      </picture>
      <div className="top absolute inset-x-0 top-0 z-10 ">
        <div className="flex justify-center gap-4 pt-4">
          <FormStep stepName={RoutePath.STEP_1} stepNumber="1" />
          <FormStep stepName={RoutePath.STEP_2} stepNumber="2" />
          <FormStep stepName={RoutePath.STEP_3} stepNumber="3" />
          <FormStep stepName={RoutePath.STEP_4} stepNumber="4" />
        </div>
      </div>
    </div>
  );
};

export default FormStepIndicator;
