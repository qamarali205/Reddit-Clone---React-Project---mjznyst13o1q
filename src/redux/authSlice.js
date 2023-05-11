import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userAuthStatus : localStorage.getItem("isUserLoggedIn") || false,
    forReRender: false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        authStatus : (state, action) =>{
            state.userAuthStatus = action.payload;
        },
        pageReRender: (state, action) =>{
            state.forReRender = action.payload;
        }

    }
})

// / Action creators are generated for each case reducer function
export const { authStatus, pageReRender} = authSlice.actions;

export default authSlice.reducer;