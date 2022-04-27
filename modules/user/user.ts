import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
    setUserId: (state: State, {payload}: PayloadAction<{ id: string }>) => {
      state.loggedInUserId = payload.id;
    },
    setInitialized: (state: State, {payload}: PayloadAction<{ isInitialized: boolean }>) => {
      state.initialized = payload.isInitialized;
    },
  }
})


export const {
  setUserId, setInitialized
} = userSlice.actions;