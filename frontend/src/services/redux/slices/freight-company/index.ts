import { FreightCompanyInterface, FreightInitialStateValueType } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: FreightInitialStateValueType = {
    value:{
        all_freight_companies: [],
        current_freight_company: null,
    }
}


export const FreihgtcompanySlice = createSlice({
    name:"FreightCompanySlice",
    initialState,
    reducers:{
        storeAllFreightCompanies:(state, action:PayloadAction<FreightCompanyInterface[]>)=>{
            state.value.all_freight_companies =  action.payload  
        },
        storeCurrentFreightCompany:(state, action: PayloadAction<FreightCompanyInterface>)=>{
            state.value.current_freight_company = action.payload
        }
    }
})


export const {storeAllFreightCompanies, storeCurrentFreightCompany} = FreihgtcompanySlice.actions;
export default FreihgtcompanySlice.reducer;