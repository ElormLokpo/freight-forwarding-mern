import CoAuthSliceReducer from "./auth/co"
import FreightCompanyReducer from "./freight-company"
import WarehouseReducer from "./warehouse"
import WarehouseStaffReducer from "./warehouse-staff"
import { warehouseApi,vehicleApi, authApi, pingApi,freightCompanyApi, userApi, warehouseStaffApi, shipmentApi } from "@/services/api"
import VehicleReducer from "./vehicle"

import ShipmentReducer from "./shipment"

export const RootReducer = {
       coAuth : CoAuthSliceReducer,
       freightCompany: FreightCompanyReducer,
       warehouse: WarehouseReducer,
       vehicle: VehicleReducer,
       warehouseStaff: WarehouseStaffReducer,
       shipment: ShipmentReducer,
       [pingApi.reducerPath] : pingApi.reducer,
       [authApi.reducerPath] : authApi.reducer,
       [userApi.reducerPath] : userApi.reducer,
       [freightCompanyApi.reducerPath] : freightCompanyApi.reducer,
       [warehouseApi.reducerPath] : warehouseApi.reducer,
       [warehouseStaffApi.reducerPath] : warehouseStaffApi.reducer,
       [vehicleApi.reducerPath] : vehicleApi.reducer,
       [shipmentApi.reducerPath] : shipmentApi.reducer

       
}

export * from "./auth/co"