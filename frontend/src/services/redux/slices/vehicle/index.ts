import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { VehicleInitialStateValueType, VehicleInterface } from "./types";

const initialState:VehicleInitialStateValueType = {
    value:{
        all_warehousestaff:[],
        current_warehousestaff:null,
    }
}

export const vehicleSlice = createSlice({
  name: "warehouseStaffSlice",
  initialState, 
  reducers:{
    storeAllVehicle: (state, action: PayloadAction<VehicleInterface[]>)=>{
        state.value.all_warehousestaff = action.payload
    },
    storeCurrentVehicle: (state, action:PayloadAction<VehicleInterface>)=>{
        state.value.current_warehousestaff = action.payload
    }
  }  
})


export const {storeAllVehicle, storeCurrentVehicle} = vehicleSlice.actions;
export default vehicleSlice.reducer;