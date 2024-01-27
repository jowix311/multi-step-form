import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.ts";

interface SelectPlan {
  plan: string;
  isMonthly: boolean;
}

const initialState: SelectPlan = {
  plan: "arcade", //@todo place on an enum
  isMonthly: true,
};

export const selectPlanSlice = createSlice({
  name: "select-plan",
  initialState,
  reducers: {
    setPlan: (state, action: PayloadAction<SelectPlan>) => {
      const { plan, isMonthly } = action.payload;
      state.plan = plan;
      state.isMonthly = isMonthly;
    },
  },
});

export const { setPlan } = selectPlanSlice.actions;

export const selectPlan = (state: RootState) => state.selectPlan;

export const selectPlanReducer = selectPlanSlice.reducer;
