export type ApiErrorResponseType = {
    message:string | Record<string, string>
}

export type ApiResponseType<T> ={
    status:boolean, 
    code:number,
    data:T,
    error?: ApiErrorResponseType,
    message?:string ,
    reason?: string
}