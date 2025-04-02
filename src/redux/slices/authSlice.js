"use client"
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: false,
        token: null,
        error: null,
    },
    reducers: {
        loginRequest(state) {
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state, action) {
            state.user = action.payload;
            state.loading = false;
        },
        loginFailed(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
        logout(state) {
                localStorage.removeItem("token");
            state.user = null;
        },
        },
})


export const { loginRequest, loginFailed, loginSuccess, logout } = authSlice.actions
export default authSlice.reducer;  // export reducer to store.js file

