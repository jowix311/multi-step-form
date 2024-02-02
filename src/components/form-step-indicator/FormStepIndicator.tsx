import sidebarMobile from "../../assets/bg-sidebar-mobile.svg";
import sidebarDesktop from "../../assets/bg-sidebar-desktop.svg";
import { RoutePath } from "../../main.tsx";
import FormStep from "../form-step/FormStep.tsx";

const FormStepIndicator = () => {
  return (
    <div className="border-1 relative border-red-50">
      <picture>
        <source media="(min-width:720px)" srcSet={sidebarDesktop} />
        <img
          src={sidebarMobile}
          alt="step indicator banner"
          className="w-full"
        />
      </picture>
      <div className="top absolute inset-x-0 top-0 z-10">
        <div className="md flex justify-center gap-4 pt-4 md:flex-col md:gap-6 md:p-8">
          <FormStep
            stepName={RoutePath.STEP_1}
            stepNumber="1"
            stepLabelUpper="Step 1"
            stepLabelLower="Your Info"
          />
          <FormStep
            stepName={RoutePath.STEP_2}
            stepNumber="2"
            stepLabelUpper="Step 2"
            stepLabelLower="Select Plan"
          />
          <FormStep
            stepName={RoutePath.STEP_3}
            stepNumber="3"
            stepLabelUpper="Step 3"
            stepLabelLower="Add-ons"
          />
          <FormStep
            stepName={RoutePath.STEP_4}
            stepNumber="4"
            stepLabelUpper="Step 4"
            stepLabelLower="Summary"
          />
        </div>
      </div>
    </div>
  );
};

export default FormStepIndicator;
