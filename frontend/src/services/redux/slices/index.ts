import CoAuthSliceReducer from "./auth/co"
import FreightCompanyReducer from "./freight-company"
import WarehouseReducer from "./warehouse"
import WarehouseStaffReducer from "./warehouse-staff"
import { warehouseApi, authApi, pingApi,freightCompanyApi, userApi, warehouseStaffApi } from "@/services/api"
import VehicleReducer from "./vehicle"
import { vehicleApi } from "@/services/api/vehicle"

export const RootReducer = {
       coAuth : CoAuthSliceReducer,
       freightCompany: FreightCompanyReducer,
       warehouse: WarehouseReducer,
       vehicle: VehicleReducer,
       warehouseStaff: WarehouseStaffReducer,
       [pingApi.reducerPath] : pingApi.reducer,
       [authApi.reducerPath] : authApi.reducer,
       [userApi.reducerPath] : userApi.reducer,
       [freightCompanyApi.reducerPath] : freightCompanyApi.reducer,
       [warehouseApi.reducerPath] : warehouseApi.reducer,
       [warehouseStaffApi.reducerPath] : warehouseStaffApi.reducer,
       [vehicleApi.reducerPath] : vehicleApi.reducer

       
}

export * from "./auth/co"