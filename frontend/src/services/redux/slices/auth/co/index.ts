import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthResponseDataType, AuthStateType, UserInterface } from "./types";

const initialState: AuthStateType<AuthResponseDataType, UserInterface>= {
    value:{
        tokens:{
            id: null,
            access_token:null,
            refresh_token:null
        },
        current_user:{
            _id:null, 
            firstname:null,
            othernames:null,
            lastname:null, 
            email:null,
            address:{
                country:null, 
                city:null
            },
            passwordHash:null,
            role:{
                role:null, 
                section:null
            },
            verify_email:{
                email_verfied: null,
                verification_code: null
            },
            account_recovery:{
                recovery_code:null, 
                recovery_code_verified:null
            }
        }
    }

}

const CoAuthSlice = createSlice({
   name: "CoAuthSlice",
   initialState,
   reducers:{
        storeToken : (state, action: PayloadAction<AuthResponseDataType>)=>{
            state.value.tokens = action.payload
        },
        storeCurrentUser : (state, action: PayloadAction<UserInterface>)=>{
            state.value.current_user  = action.payload
        }
   }
})


export const {storeToken, storeCurrentUser}  = CoAuthSlice.actions;
export default CoAuthSlice.reducer;