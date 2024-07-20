export interface ResponseType<T>{
    success: boolean, 
    message: string, 
    data: T
}

export interface RequestType<T>{
    payload: T
}