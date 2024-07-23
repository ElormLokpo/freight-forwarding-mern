import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { WarehouseStaffInitialStateValueType, WarehouseStaffInterface } from "./types";

const initialState:WarehouseStaffInitialStateValueType = {
    value:{
        all_warehousestaff:[],
        current_warehousestaff:null,
    }
}

export const warehouseStaffSlice = createSlice({
  name: "warehouseStaffSlice",
  initialState, 
  reducers:{
    storeAllWarehouseStaff: (state, action: PayloadAction<WarehouseStaffInterface[]>)=>{
        state.value.all_warehousestaff = action.payload
    },
    storeCurrentWarehouseStaff: (state, action:PayloadAction<WarehouseStaffInterface>)=>{
        state.value.current_warehousestaff = action.payload
    }
  }  
})


export const {storeAllWarehouseStaff, storeCurrentWarehouseStaff} = warehouseStaffSlice.actions;
export default warehouseStaffSlice.reducer;