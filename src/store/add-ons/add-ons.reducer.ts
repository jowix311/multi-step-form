import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.ts";

interface SelectAddOns {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
}

const initialState: SelectAddOns = {
  onlineService: false,
  largerStorage: false,
  customizableProfile: false,
};

export const selectAddOnsSlice = createSlice({
  name: "add-ons",
  initialState,
  reducers: {
    setAddOns: (state, action: PayloadAction<SelectAddOns>) => {
      const { onlineService, largerStorage, customizableProfile } =
        action.payload;
      console.log(action.payload);
      state.onlineService = Boolean(onlineService);
      state.largerStorage = Boolean(largerStorage);
      state.customizableProfile = Boolean(customizableProfile);
    },
  },
});

export const { setAddOns } = selectAddOnsSlice.actions;

export const selectAddOns = (state: RootState) => state.selectAddOns;

export const selectAddOnsReducer = selectAddOnsSlice.reducer;
