export interface AuthResponseDataType{
    id: string,
    access_token: string, 
    refresh_token: string
}

export interface AuthRequestDataType<T>{
    payload: T
}

export interface GetUserRequstType{
    payload:string
}

