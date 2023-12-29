import {configureStore} from "@reduxjs/toolkit";
import {yourInfoReducer} from "./your-info/your-info.reducer.ts";

export const store = configureStore({
    reducer: {
        yourInfo: yourInfoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;