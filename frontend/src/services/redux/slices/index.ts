import { authApi, userApi } from "@/services/api/auth"
import CoAuthSliceReducer from "./auth/co"
import { pingApi } from "@/services/api/ping"
import { freightCompanyApi } from "@/services/api/freight-company"
import FreightCompanyReducer from "./freight-company"

export const RootReducer = {
       coAuth : CoAuthSliceReducer,
       freightCompany: FreightCompanyReducer,
       [pingApi.reducerPath] : pingApi.reducer,
       [authApi.reducerPath] : authApi.reducer,
       [userApi.reducerPath] : userApi.reducer,
       [freightCompanyApi.reducerPath] : freightCompanyApi.reducer
}

export * from "./auth/co"