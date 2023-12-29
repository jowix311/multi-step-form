import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.ts";

interface YourInfo {
  name: string;
  email: string;
  phone: string;
}

const initialState: YourInfo = {
  name: "",
  email: "",
  phone: "",
};

export const yourInfoSlice = createSlice({
  name: "your-info",
  initialState,
  reducers: {
    setYourInfoForm: (state, action: PayloadAction<YourInfo>) => {
      const { name, email, phone } = action.payload;
      state.name = name;
      state.email = email;
      state.phone = phone;
    },
  },
});

export const { setYourInfoForm } = yourInfoSlice.actions;

export const selectYourInfo = (state: RootState) => state.yourInfo;

export const yourInfoReducer = yourInfoSlice.reducer;
