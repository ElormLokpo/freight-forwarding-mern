import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { backend_api_route as baseUrl } from "@/constants/routes";
import { ResponseType, RequestType } from "../types";
import { WarehouseResponseType } from "./types";
import { storeAllWarehouses, storeCurrentWarehouse } from "@/services/redux/slices/warehouse";
import { WarehouseInterface } from "@/services/redux/slices/warehouse/types";

export const warehouseApi = createApi({
    reducerPath: "warehouseApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getAllWarehouses: builder.query<WarehouseResponseType[], string>({
            queryFn: async (args, {dispatch}, _extraOptions, baseQuery)=>{
                const response = await baseQuery({
                    url:`warehouse/all/${args}`,
                    method: "GET"
                })

                if(response.data){
                    const {data:warehouses} = response.data as ResponseType<WarehouseResponseType[]>
                    await dispatch(storeAllWarehouses(warehouses));

                    return {data: warehouses};
                }

                return {data: []}

            }
        }),
        getWarehouse: builder.query<WarehouseResponseType | null, string | null | undefined>({
            queryFn: async (args, {dispatch}, _extraOptions, baseQuery)=>{
                const response = await baseQuery({
                    url: `warehouse/${args}`,
                    method: "GET"
                })

                if(response.data){
                    const {data: warehouse} = response.data as ResponseType<WarehouseResponseType>;

                    await dispatch(storeCurrentWarehouse(warehouse));

                    return {data: warehouse};
                }

                return {data:null}
            }
        }),
        addWarehouse: builder.mutation<boolean, RequestType<WarehouseInterface>>({
            queryFn: async (args, {dispatch}, _extraOptions, baseQuery)=>{
                const response = await baseQuery({
                    url:"warehouse",
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




export const {useGetAllWarehousesQuery, useGetWarehouseQuery, useAddWarehouseMutation} = warehouseApi;
