import { configureStore } from "@reduxjs/toolkit";
import { yourInfoReducer } from "./your-info/your-info.reducer.ts";
import { selectPlanReducer } from "./select-plan/select-plan.reducer.ts";

export const store = configureStore({
  reducer: {
    yourInfo: yourInfoReducer,
    selectPlan: selectPlanReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
