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
    <>
      <FormStepIndicator />
      <Outlet />
    </>
  );
}

export default App;
