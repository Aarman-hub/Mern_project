import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogedInn: false,
    isLoading:true,
    token:null
}


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logIn(state, action){
            state.isLogedInn=true;
            state.isLoading=false;
            state.token = action.payload;
        },
        logOut(state, action){
            state.isLogedInn=false;
            state.isLoading=true;
            state.token=null;
        }
    },
    extraReducers:{}
})

export const {logIn, logOut} = authSlice.actions;
export default authSlice.reducer;