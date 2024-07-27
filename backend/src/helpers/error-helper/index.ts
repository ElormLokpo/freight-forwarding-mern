import { NextFunction, Response } from "express"

export const errorHelper = (success:boolean, message:string, res:Response, next:NextFunction)=>{
        res.status(200).json({
            success, 
            message,
            data:{}
        })
        next()
}