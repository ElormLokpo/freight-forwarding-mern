import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { backend_api_route as api_endpoint } from "@/constants/routes";

export const pingApi = createApi({
    reducerPath:"pingApi",
    baseQuery: fetchBaseQuery({baseUrl:api_endpoint}),
    endpoints: (builder)=>({
        pingServer : builder.query({
            query: ()=>"ping"
        })
    })
});


export const {usePingServerQuery} = pingApi;