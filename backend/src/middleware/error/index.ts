import HttpException from "exceptions/http.exception";
import {Request, Response, NextFunction} from "express";

export function errorHandlerMiddleware(err: HttpException, req:Request, res:Response, next:NextFunction){
    let status = err.status || 500;
    let message = err.message || "Internal Server Error"

    res.status(status).json({
        message
    })
    next()
}