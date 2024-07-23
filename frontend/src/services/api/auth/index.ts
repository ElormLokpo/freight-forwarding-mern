import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { backend_api_route as baseUrl } from "@/constants/routes"
import { ResponseType } from "../types"
import { SignInSchemaType, SignUpSchemaType } from "@/lib/schema"
import { AuthRequestDataType, AuthResponseDataType, GetUserRequstType } from "./types"
import { storeCurrentUser, storeToken } from "@/services/redux"
import { UserInterface } from "@/services/redux/slices/auth/co/types"

export const userApi = createApi({
    reducerPath : "userApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getUser: builder.query<ResponseType<UserInterface>, string>({
            query:(userid)=>({
                url: `users/${userid}`,
                method: "GET"
            })
        })
    })
});

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        signup: builder.mutation<ResponseType<AuthResponseDataType>, AuthRequestDataType<SignUpSchemaType>>({
            queryFn: async (args, {dispatch}, _extraOptions, baseQuery)=>{
                const response = await baseQuery({
                    url:"auth/register",
                    method:"POST",
                    body: args
                })

                if (response.data){
                    const {data:payload} = response.data as ResponseType<AuthResponseDataType>
                    await dispatch(storeToken(payload))

                    const user_response =  await dispatch(userApi.endpoints.getUser.initiate(payload.id)).unwrap();
                    
                    if (user_response.data){
                        const {data: currentUser} = user_response as ResponseType<UserInterface>;
                       
                        await dispatch(storeCurrentUser(currentUser));
                        
                    }
                 
                }

                return response.data as {data: ResponseType<AuthResponseDataType>}
            }
        }),
        signin:builder.mutation<ResponseType<AuthResponseDataType>, AuthRequestDataType<SignInSchemaType>>({
            queryFn: async (args, {dispatch}, _extraOptions, baseQuery)=>{
                const response = await baseQuery({
                    url:"auth/login", 
                    method: "POST",
                    body: args
                });

                if (response.data){
                    const {data:payload} = response.data as ResponseType<AuthResponseDataType>;
                    console.log("PAYLOAD FROM LGOIN API", payload)
                    await dispatch(storeToken(payload)); 

                    const user_response = await dispatch(userApi.endpoints.getUser.initiate(payload.id));

                    if (user_response.data){
                          const {data: currentUser} = user_response.data as ResponseType<UserInterface>;
                          dispatch(storeCurrentUser(currentUser));
                    }
                  
                }

                return response.data as {data: ResponseType<AuthResponseDataType>}
            }
        })
    })
})


export const {useSignupMutation, useSigninMutation} = authApi;