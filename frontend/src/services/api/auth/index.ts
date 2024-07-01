import { baseUrl } from "@/constants";
import { AuthSignInType, AuthSignUpType } from "@/lib";
import { storeToken } from "@/redux/slices/auth";
import { ApiErrorResponseType, ApiResponseType, AuthResponseType } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




const authApi = createApi({
  reducerPath:"authApi",
  baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
  endpoints: (builder)=>({
    register: builder.mutation<ApiResponseType<AuthResponseType>, AuthSignUpType>({
      queryFn: async (arg, { dispatch }, _extraOptions, baseQuery)=>{
          let res = await baseQuery({
            url: "auth/register",
            method: "POST",
            body: arg
          });

          if(res.data){
              let tokens = res.data;
              dispatch(storeToken(tokens));
          } 

          return res as {data: ApiResponseType<AuthResponseType>};

      }
    }),
    login: builder.mutation<ApiResponseType<AuthResponseType>, AuthSignInType>({
      queryFn: async (arg, {dispatch}, _extraOptions, baseQuery)=>{
          let res = await baseQuery({
            url: "auth/login",
            method: "POST",
            body: arg
          })

          if (res.data){
            let tokens = res.data 
            dispatch(storeToken(tokens));
            
          }
          if(res.error){
            
          }

          return res as {data: ApiResponseType<AuthResponseType>}
      }
    })
  })
})

export default authApi;

export const {useRegisterMutation, useLoginMutation} = authApi;