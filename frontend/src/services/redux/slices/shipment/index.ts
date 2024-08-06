import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { ShipmentInitialStateValueType, ShipmentInterface } from "./types";

const initialState:ShipmentInitialStateValueType = {
    value:{
        all_shipment:[],
        current_shipment:null,
    }
}

export const shipmentSlice = createSlice({
  name: "shipmentSlice",
  initialState, 
  reducers:{
    storeAllShipment: (state, action: PayloadAction<ShipmentInterface[]>)=>{
        state.value.all_shipment = action.payload
    },
    storeCurrentShipment: (state, action:PayloadAction<ShipmentInterface>)=>{
        state.value.current_shipment = action.payload
    }
  }  
})


export const {storeAllShipment, storeCurrentShipment} = shipmentSlice.actions;
export default shipmentSlice.reducer;