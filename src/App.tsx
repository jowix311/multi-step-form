import { Outlet, useNavigate } from "react-router-dom";
import FormStepIndicator from "./components/form-step-indicator/FormStepIndicator.tsx";
import { useAppSelector } from "./store/hooks.ts";
import { RoutePath } from "./main.tsx";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const state = useAppSelector((state) => state.yourInfo);

  useEffect(() => {
    if (!state.isInfoComplete) {
      navigate(RoutePath.STEP_1);
    }
  }, [navigate, state]);

  return (
    <div className="grid h-full grid-rows-[auto_1fr]">
      <FormStepIndicator />
      <Outlet />
    </div>
  );
}

export default App;
