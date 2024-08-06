import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { VehicleInitialStateValueType, VehicleInterface } from "./types";

const initialState:VehicleInitialStateValueType = {
    value:{
        all_vehicle:[],
        current_vehicle:null,
    }
}

export const vehicleSlice = createSlice({
  name: "vehicleSlice",
  initialState, 
  reducers:{
    storeAllVehicle: (state, action: PayloadAction<VehicleInterface[]>)=>{
        state.value.all_vehicle = action.payload
    },
    storeCurrentVehicle: (state, action:PayloadAction<VehicleInterface>)=>{
        state.value.current_vehicle = action.payload
    }
  }  
})


export const {storeAllVehicle, storeCurrentVehicle} = vehicleSlice.actions;
export default vehicleSlice.reducer;