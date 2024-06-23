import { AuthInitialStateType, TokenType, UserType } from "@/types/auth";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: AuthInitialStateType = {
    user: null, 
    access_token: null
}


export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers:{
        storeUser:(state, action: PayloadAction<UserType>)=>{
            state.user = action.payload;
        },
        storeToken:(state, action: PayloadAction<TokenType>)=>{
            state.access_token = action.payload;
        }
    }  
});


export const {storeUser, storeToken} = authSlice.actions;
export default authSlice.reducer; 