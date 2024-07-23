import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { backend_api_route as baseUrl } from "@/constants/routes";
import { ResponseType, RequestType } from "../types";
import { VehicleResponseType } from "./types";
import { storeAllVehicle, storeCurrentVehicle } from "@/services/redux/slices/vehicle";
import { WarehouseInterface } from "@/services/redux/slices/warehouse/types";
import { VehicleInterface } from "@/services/redux/slices/vehicle/types";

export const vehicleApi = createApi({
    reducerPath: "vehicleApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getAllVehicles: builder.query<VehicleResponseType[], string>({
            queryFn: async (args, {dispatch}, _extraOptions, baseQuery)=>{
                const response = await baseQuery({
                    url:`vehicle/all/${args}`,
                    method: "GET"
                })

                if(response.data){
                    const {data:warehouseStaff} = response.data as ResponseType<VehicleResponseType[]>
                    await dispatch(storeAllVehicle(warehouseStaff));

                    return {data: warehouseStaff};
                }

                return {data: []}

            }
        }),
        getVehicle: builder.query<VehicleResponseType | null, string | null | undefined>({
            queryFn: async (args, {dispatch}, _extraOptions, baseQuery)=>{
                const response = await baseQuery({
                    url: `vehicle/${args}`,
                    method: "GET"
                })

                if(response.data){
                    const {data: warehouse} = response.data as ResponseType<VehicleResponseType>;

                    await dispatch(storeCurrentVehicle(warehouse));

                    return {data: warehouse};
                }

                return {data:null}
            }
        }),
        addVehicle: builder.mutation<boolean, RequestType<VehicleInterface>>({
            queryFn: async (args, {dispatch}, _extraOptions, baseQuery)=>{
                const response = await baseQuery({
                    url:"vehcile",
                    method: "POST",
                    body: args
                })

                if(response.data){
                    return {data:true}
                }

                return {data:true}
            }
        })
 
    })
})




export const {useAddVehicleMutation, useGetAllVehiclesQuery, useGetVehicleQuery} = vehicleApi;
