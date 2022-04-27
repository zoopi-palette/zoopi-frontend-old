import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./user/user";

const reducers = {
  user: userSlice.reducer,
}

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;