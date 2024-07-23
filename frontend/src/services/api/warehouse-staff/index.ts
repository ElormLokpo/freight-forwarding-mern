import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { backend_api_route as baseUrl } from "@/constants/routes";
import { ResponseType, RequestType } from "../types";
import { WarehouseStaffResponseType } from "./types";
import { storeAllWarehouseStaff, storeCurrentWarehouseStaff } from "@/services/redux/slices/warehouse-staff";
import { WarehouseInterface } from "@/services/redux/slices/warehouse/types";
import { WarehouseStaffInterface } from "@/services/redux/slices/warehouse-staff/types";

export const warehouseStaffApi = createApi({
    reducerPath: "warehouseStaffApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getAllWarehouseStaff: builder.query<WarehouseStaffResponseType[], string>({
            queryFn: async (args, {dispatch}, _extraOptions, baseQuery)=>{
                const response = await baseQuery({
                    url:`warehouse-staff/all/freight/${args}`,
                    method: "GET"
                })

                if(response.data){
                    const {data:warehouseStaff} = response.data as ResponseType<WarehouseStaffResponseType[]>
                    await dispatch(storeAllWarehouseStaff(warehouseStaff));

                    return {data: warehouseStaff};
                }

                return {data: []}

            }
        }),
        getWarehouseStaff: builder.query<WarehouseStaffResponseType | null, string | null | undefined>({
            queryFn: async (args, {dispatch}, _extraOptions, baseQuery)=>{
                const response = await baseQuery({
                    url: `warehouse/${args}`,
                    method: "GET"
                })

                if(response.data){
                    const {data: warehouse} = response.data as ResponseType<WarehouseStaffResponseType>;

                    await dispatch(storeCurrentWarehouseStaff(warehouse));

                    return {data: warehouse};
                }

                return {data:null}
            }
        }),
        addWarehouseStaff: builder.mutation<boolean, RequestType<WarehouseStaffInterface>>({
            queryFn: async (args, {dispatch}, _extraOptions, baseQuery)=>{
                const response = await baseQuery({
                    url:"warehouse-staff",
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




export const {useAddWarehouseStaffMutation, useGetAllWarehouseStaffQuery, useGetWarehouseStaffQuery} = warehouseStaffApi;
