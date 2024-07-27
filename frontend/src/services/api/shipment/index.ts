import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { backend_api_route as baseUrl } from "@/constants/routes";
import { ResponseType, RequestType } from "../types";
import { ShipmentResponseType } from "./types";
import { storeAllShipment, storeCurrentShipment } from "@/services/redux/slices/shipment";
import { WarehouseInterface } from "@/services/redux/slices/warehouse/types";
import { ShipmentInterface } from "@/services/redux/slices/shipment/types";

export const shipmentApi = createApi({
    reducerPath: "shipmentApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getAllShipments: builder.query<ShipmentResponseType[], string>({
            queryFn: async (args, {dispatch}, _extraOptions, baseQuery)=>{
                const response = await baseQuery({
                    url:`shipment/freight/all/${args}`,
                    method: "GET"
                })

                if(response.data){
                    const {data:shipment} = response.data as ResponseType<ShipmentResponseType[]>
                    await dispatch(storeAllShipment(shipment));

                    return {data: shipment};
                }

                return {data: []}

            }
        }),
        getShipment: builder.query<ShipmentResponseType | null, string | null | undefined>({
            queryFn: async (args, {dispatch}, _extraOptions, baseQuery)=>{
                const response = await baseQuery({
                    url: `shipment/${args}`,
                    method: "GET"
                })

                if(response.data){
                    const {data: warehouse} = response.data as ResponseType<ShipmentResponseType>;

                    await dispatch(storeCurrentShipment(warehouse));

                    return {data: warehouse};
                }

                return {data:null}
            }
        }),
        addShipment: builder.mutation<boolean, RequestType<ShipmentInterface>>({
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




export const {useAddShipmentMutation, useGetAllShipmentsQuery, useGetShipmentQuery} = shipmentApi;
