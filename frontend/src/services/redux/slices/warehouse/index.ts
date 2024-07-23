import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { WarehouseInitialStateValueType, WarehouseInterface } from "./types";

const initialState:WarehouseInitialStateValueType = {
    value:{
        all_warehouses:[],
        current_warehouse:null,
    }
}

export const warehouseSlice = createSlice({
  name: "warehouseSlice",
  initialState, 
  reducers:{
    storeAllWarehouses: (state, action: PayloadAction<WarehouseInterface[]>)=>{
        state.value.all_warehouses = action.payload
    },
    storeCurrentWarehouse: (state, action:PayloadAction<WarehouseInterface>)=>{
        state.value.current_warehouse = action.payload
    }
  }  
})


export const {storeAllWarehouses, storeCurrentWarehouse} = warehouseSlice.actions;
export default warehouseSlice.reducer;