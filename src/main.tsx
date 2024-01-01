import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import PageNotFound from "./components/page-not-found/PageNotFound.tsx";
import FormYourInfo from "./components/form-your-info/FormYourInfo.tsx";
import FormSummary from "./components/form-summary/form-summary.tsx";
import FormAddOns from "./components/form-add-ons/FormAddOns.tsx";
import FormSelectPlan from "./components/form-select-plan/FormSelectPlan.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import "./index.css";

export enum RoutePath {
  STEP_1 = "/your-info",
  STEP_2 = "/select-plan",
  STEP_3 = "/add-ons",
  STEP_4 = "/summary",
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: RoutePath.STEP_1,
        element: <FormYourInfo />,
      },
      {
        path: RoutePath.STEP_2,
        element: <FormSelectPlan />,
      },
      { path: RoutePath.STEP_3, element: <FormAddOns /> },
      {
        path: RoutePath.STEP_4,
        element: <FormSummary />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
