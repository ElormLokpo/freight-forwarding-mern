import { NextFunction, Request as ERequest, Response } from "express";
import { generateResponse } from "../../helpers/response-gen";
import jwt from "jsonwebtoken";
import { isFreightCompanyOwner } from "../../entities/freight-company/freight-company.services";

interface Request extends ERequest{
    user?:any
}

const tokenCheck = (req:Request, res:Response, next:NextFunction)=>{
    const authorization_header = req.headers?.authorization;
    const token_header = authorization_header?.split(" ")[1] as string; 
    const error_response = (message?:string)=>generateResponse<{}>(false, message || "Unauthenticated, kindly authenticate", {});


    if (!token_header ){       
        return res.status(200).json(error_response("Kindly enter token"))
    }

    jwt.verify(token_header, process.env.TOKEN_SECRET,(err:any, data:any)=>{
        if(err){
            return res.status(200).json(error_response("Invalid token"))
           
        }
        
        req.user =  data;  
        next();  
    }) 
}

export const isAuthenticatedMiddleware = (req:Request, res:Response, next:NextFunction)=>{
    tokenCheck(req,res,next);
   
}

export const isFreightCompanyOwnerMiddleware = (req:Request, res:Response, next:NextFunction)=>{
    tokenCheck(req,res,async ()=>{
        const isAuthorized = await isFreightCompanyOwner(req.user.id, req.params.id)
        if (isAuthorized){
            return next()
        }else{
            const error_resposne = generateResponse<{}>(false, "Unauthorized",{})
            return res.status(200).json(error_resposne)
        }

       
    });

    
}