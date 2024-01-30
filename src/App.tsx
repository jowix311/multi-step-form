import { Outlet } from "react-router-dom";
import FormStepIndicator from "./components/form-step-indicator/FormStepIndicator.tsx";

/**
 * Your Info
 * Select Plan
 * Add-ons
 * Summary
 * */

function App() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr]">
      <FormStepIndicator />
      <Outlet />
    </div>
  );
}

export default App;
