import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.ts";

interface YourInfo {
  name: string;
  email: string;
  phone: string;
  isInfoComplete: boolean;
}

const initialState: YourInfo = {
  name: "",
  email: "",
  phone: "",
  isInfoComplete: false,
};

export const yourInfoSlice = createSlice({
  name: "your-info",
  initialState,
  reducers: {
    setYourInfoForm: (state, action: PayloadAction<YourInfo>) => {
      const { name, email, phone, isInfoComplete } = action.payload;
      state.name = name;
      state.email = email;
      state.phone = phone;
      state.isInfoComplete = isInfoComplete;
    },
    resetInfo: () => {
      return { ...initialState };
    },
  },
});

export const { setYourInfoForm, resetInfo } = yourInfoSlice.actions;

export const selectYourInfo = (state: RootState) => state.yourInfo;

export const yourInfoReducer = yourInfoSlice.reducer;
