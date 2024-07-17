import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "../slices";
import { pingApi } from "@/services/api/ping";
import { authApi, userApi } from "@/services/api/auth";

export const store = configureStore({
    reducer: RootReducer,
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(pingApi.middleware, authApi.middleware, userApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;