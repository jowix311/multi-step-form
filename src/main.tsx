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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/your-info",
        element: <FormYourInfo />,
      },
      {
        path: "/select-plan",
        element: <FormSelectPlan />,
      },
      { path: "/add-ons", element: <FormAddOns /> },
      {
        path: "/summary",
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
  </React.StrictMode>
);
