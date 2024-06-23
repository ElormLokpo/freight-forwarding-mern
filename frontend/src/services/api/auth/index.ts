import { baseUrl } from "@/constants";
import { AuthSignUpType } from "@/lib";
import { ApiResponseType, UserType } from "@/types";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder)=>({
      login: builder.mutation<AuthSignUpType, ApiResponseType<UserType>>({
        queryFn: async (arg, {dispatch}, _extraOptions, baseQuery)=>{
            const res = await baseQuery({
              url: "auth/registers",
              method: "POST",
              body: arg
            })

            
            
        }
      })
  })

})
