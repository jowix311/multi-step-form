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
    <div className="grid h-full grid-rows-[auto_1fr] md:m-auto md:h-auto md:w-[648px] md:grid-cols-[auto_1fr] md:grid-rows-none md:items-center md:rounded-lg md:bg-white md:p-4 md:shadow-md lg:w-[1024px] lg:gap-x-24">
      <FormStepIndicator />
      <Outlet />
    </div>
  );
}

export default App;
