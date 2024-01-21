import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.ts";

interface SelectPlan {
  plan: string;
}

const initialState: SelectPlan = {
  plan: "",
};

export const selectPlanSlice = createSlice({
  name: "select-plan",
  initialState,
  reducers: {
    setPlan: (state, action: PayloadAction<SelectPlan>) => {
      const { plan } = action.payload;
      state.plan = plan;
    },
  },
});

export const { setPlan } = selectPlanSlice.actions;

export const selectPlan = (state: RootState) => state.selectPlan;

export const selectPlanReducer = selectPlanSlice.reducer;
