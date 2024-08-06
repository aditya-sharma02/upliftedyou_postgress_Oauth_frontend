import { createSlice } from "@reduxjs/toolkit"

const loggingSlice = createSlice({
    name: "load",
    initialState: {
        isloggedin: false
    },
    reducers: {
        login(state) {
            state.isloggedin = true;
        },
        logout(state) {
            localStorage.removeItem("userId");
            localStorage.removeItem("userEmail");
            state.isloggedin = false;
        }
    }
})

export const { login, logout } = loggingSlice.actions;
export default loggingSlice.reducer;