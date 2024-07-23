import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { backend_api_route as baseUrl } from "@/constants/routes";
import { RequestType, ResponseType } from "../types";
import { FreightCompanyResponseType } from "./types";
import { FreightCompanySchemaType } from "@/lib/schema/freight-company";
import { FreightCompanyInterface } from "@/services/redux/slices/freight-company/types";
import { storeAllFreightCompanies, storeCurrentFreightCompany } from "@/services/redux/slices/freight-company";


export const freightCompanyApi = createApi({
    reducerPath:"freightCompanyApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        addFreightCompany: builder.mutation<Boolean, RequestType<FreightCompanySchemaType>>({
            queryFn: async (args, {dispatch}, _extraOptions, baseQuery)=>{
                const response = await baseQuery({
                    url: "freight-company",
                    method: "POST",
                    body: args
                });

                return {data: true}
            }
        }),
        getFreightCompaniesByOnwer: builder.query<FreightCompanyInterface[] | null, string>({
          queryFn: async (args, {dispatch}, _extraOptions, baseQuery)=>{
            const response = await baseQuery({
                url: `freight-company/all/owner/${args}`,
                method: "GET",
            });

            if (response.data){
                const {data: freight_companies} = response.data as ResponseType<FreightCompanyInterface[]>
                console.log(freight_companies);
                
                await dispatch(storeAllFreightCompanies(freight_companies));
                return {data: freight_companies}
            }
        
            return {data: null}
            

          }
        }),
        getFreightCompany: builder.query<FreightCompanyInterface | null, string>({
            queryFn: async (args, {dispatch}, _extraOptions, baseQuery)=>{
                const response  = await baseQuery({
                    url:`freight-company/${args}`,
                    method: "GET"
                })

                if (response.data){
                    const {data: freight_company} = response.data as ResponseType<FreightCompanyInterface>
                    const freight_company_dispatch = await dispatch(storeCurrentFreightCompany(freight_company))

                    return {data: freight_company}
                }

                return {data: null}
            }
        }) 
        
    })
})



export const {useAddFreightCompanyMutation, useGetFreightCompaniesByOnwerQuery, useGetFreightCompanyQuery} = freightCompanyApi;