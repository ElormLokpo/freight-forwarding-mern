import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "../slices";
import { pingApi } from "@/services/api/ping";
import { authApi, userApi } from "@/services/api/auth";
import { freightCompanyApi } from "@/services/api/freight-company";
import { shipmentApi, warehouseApi, warehouseStaffApi } from "@/services/api";
import { vehicleApi } from "@/services/api/vehicle";

export const store = configureStore({
    reducer: RootReducer,
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(pingApi.middleware, authApi.middleware, userApi.middleware, freightCompanyApi.middleware, warehouseApi.middleware, warehouseStaffApi.middleware, vehicleApi.middleware, shipmentApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;