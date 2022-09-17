import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogedIn:false,
    token:null,
};

const userslice = createSlice({
    name:"users",
    initialState,
    reducers:{
        logIn: (state, action)=>{
            state.isLogedIn = true;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        logOut: (state, action)=>{
            state.isLogedIn = false;
            state.token = null;
        },
    }
});

export const {logIn, logOut} = userslice.actions;
export default userslice.reducer;
