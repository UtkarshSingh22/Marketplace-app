import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        loggedUser(state, action) {
            return { ...state, ...action.payload };
        },
        logout(state, action) {
            return action.payload;
        },
        default(state) {
            return state;
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
