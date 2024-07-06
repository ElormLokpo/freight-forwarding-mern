import { Request, Response } from "express";
import { RequestType, ResponseType } from "../../types";
export interface UserInterface{
    _id?:string, 
    firstname:string,
    othernames?:string,
    lastname:string, 
    email:string,
    address?:{
        country?:string, 
        city?:string
    },
    passwordHash:string,
    role?:{
        role?:string, 
        section?:string
    },
    verify_email?:{
        email_verfied?: boolean,
        verification_code?: number
    },
    account_recovery?:{
        recovery_code?:number, 
        recovery_code_verified?:boolean
    }

}


export interface UpdateUserPayload{
    id: string,
    body:{
        firstname?:string,
    othernames?:string,
    lastname?:string, 
    email?:string,
    address?:{
        country?:string, 
        city?:string
    },
    passwordHash?:string,
    role?:{
        role?:string, 
        section?:string
    },
    verify_email?:{
        email_verfied?: boolean,
        verification_code?: number
    },
    account_recovery?:{
        recovery_code?:number, 
        recovery_code_verified?:boolean
    }
    } 
    
}