import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";

export type State = {
  loggedInUserId: string | null,
  initialized: boolean,
}

export const initialState: State = {
  loggedInUserId: null,
  initialized: false,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SET_USER_ID: (state: State, {payload}: PayloadAction<{ id: string }>) => {
      state.loggedInUserId = payload.id;
    },
    SET_INITIALIZED: (state: State, {payload}: PayloadAction<{ isInitialized: boolean }>) => {
      state.initialized = payload.isInitialized;
    },
  },
  extraReducers: {
    [HYDRATE]: (state: State, {payload}: PayloadAction) => payload,
  }
})

export const {
  SET_USER_ID, SET_INITIALIZED
} = userSlice.actions;

export default userSlice.reducer;