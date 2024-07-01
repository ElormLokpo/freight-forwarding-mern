import authApi from "@/services/api/auth";



export const rootReducer = {
    [authApi.reducerPath] : authApi.reducer,
}