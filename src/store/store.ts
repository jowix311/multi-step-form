import { configureStore } from "@reduxjs/toolkit";
import { yourInfoReducer } from "./your-info/your-info.reducer.ts";
import { selectPlanReducer } from "./select-plan/select-plan.reducer.ts";
import { selectAddOnsReducer } from "./add-ons/add-ons.reducer.ts";

export const store = configureStore({
  reducer: {
    yourInfo: yourInfoReducer,
    selectPlan: selectPlanReducer,
    selectAddOns: selectAddOnsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
