import { createSlice } from "@reduxjs/toolkit";

let initialAuthState;

if (window.localStorage.getItem("auth")) {
    initialAuthState = JSON.parse(window.localStorage.getItem("auth"));
} else {
    initialAuthState = null;
}

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        loggedInUser(state, action) {
            return { ...state, ...action.payload };
        },
        logout(state) {
            return (state = null);
        },
        connectForPayouts(state) {
            state.user.isConnectedForPayouts = true;
        },
        default(state) {
            return state;
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
