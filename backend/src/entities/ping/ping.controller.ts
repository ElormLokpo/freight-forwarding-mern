import { isAuthenticatedMiddleware } from "../../middleware/authorization";
import Controller from "../../interfaces/controllers.interface";
import {Router, Request, Response, NextFunction} from "express";


class PingController implements Controller{

    public path ="/ping";
    public router = Router();

    constructor(){
        this.initializeRoute()
    }

    initializeRoute(){
        this.router.get(`${this.path}`, isAuthenticatedMiddleware, this.ping)
    }
    

    private async ping(req:Request, res:Response, next:NextFunction){

        res.status(200).json({message:"Ping successful"});
    }   
}

export default PingController;