import { authApi, userApi } from "@/services/api/auth"
import CoAuthSliceReducer from "./auth/co"
import { pingApi } from "@/services/api/ping"

export const RootReducer = {
       coAuth : CoAuthSliceReducer,
       [pingApi.reducerPath] : pingApi.reducer,
       [authApi.reducerPath] : authApi.reducer,
       [userApi.reducerPath] : userApi.reducer
}

export * from "./auth/co"