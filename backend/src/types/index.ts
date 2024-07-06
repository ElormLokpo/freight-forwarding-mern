import { Request } from "express"

export interface RequestType<T> extends Request{
    payload: T | string
}

export interface ResponseType<T>{
    success: boolean,
    message: string, 
    data: T | any
}

