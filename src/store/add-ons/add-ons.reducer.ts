import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.ts";

interface SelectAddOns {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
  onlineServicePrice: number;
  largerStoragePrice: number;
  customizableProfilePrice: number;
}

const initialState: SelectAddOns = {
  onlineService: false,
  largerStorage: false,
  customizableProfile: false,
  onlineServicePrice: 0,
  largerStoragePrice: 0,
  customizableProfilePrice: 0,
};

export const selectAddOnsSlice = createSlice({
  name: "add-ons",
  initialState,
  reducers: {
    setAddOns: (state, action: PayloadAction<SelectAddOns>) => {
      const {
        onlineService,
        largerStorage,
        customizableProfile,
        onlineServicePrice,
        largerStoragePrice,
        customizableProfilePrice,
      } = action.payload;
      state.onlineService = Boolean(onlineService);
      state.largerStorage = Boolean(largerStorage);
      state.customizableProfile = Boolean(customizableProfile);
      state.onlineServicePrice = onlineServicePrice;
      state.largerStoragePrice = largerStoragePrice;
      state.customizableProfilePrice = customizableProfilePrice;
    },
    resetAddOns: () => {
      return { ...initialState };
    },
  },
});

export const { setAddOns, resetAddOns } = selectAddOnsSlice.actions;

export const selectAddOns = (state: RootState) => state.selectAddOns;

export const selectAddOnsReducer = selectAddOnsSlice.reducer;
