import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
        setUserId: (state: State, action: PayloadAction<{ id: string }>) => {
            const loggedInUser = state.find(user => user.id === action.payload.id);
            if (loggedInUser) loggedInUser.id = action.payload.id;
        },
        setInitialized: (state: State, action: PayloadAction<{ isInitialized: boolean }>) => {
            const loggedInUser = state.find(user => user.id === action.payload.id);
            if (loggedInUser) loggedInUser.initialized = action.payload.isInitialized;
        },
    }
})


export const {
    setUserId, setInitialized
} = userSlice.actions;