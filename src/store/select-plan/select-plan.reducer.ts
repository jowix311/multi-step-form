import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.ts";

export interface SelectPlan {
  plan: string;
  isMonthly: boolean;
  price: number;
}

const initialState: SelectPlan = {
  plan: "arcade", //@todo place on an enum
  isMonthly: true,
  price: 9,
};

export const selectPlanSlice = createSlice({
  name: "select-plan",
  initialState,
  reducers: {
    setPlan: (state, action: PayloadAction<SelectPlan>) => {
      const { plan, isMonthly, price } = action.payload;
      state.plan = plan;
      state.isMonthly = isMonthly;
      state.price = price;
    },
  },
});

export const { setPlan } = selectPlanSlice.actions;

export const selectPlan = (state: RootState) => state.selectPlan;

export const selectPlanReducer = selectPlanSlice.reducer;
