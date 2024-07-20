import Controller from "../../../interfaces/controllers.interface";
import { NextFunction, Request, Response, Router } from "express";
import { RequestType, ResponseType } from "../../../types";
import { DropOffInterface, UpdateDropOffRequestType } from "./dropoff.types";
import { getAllDropOffs, getDropOff, addDropOff, getDropOffByName } from "./dropoff.service";
import { DropOffModel } from "./dropoff.model";



class DropOffController implements Controller{
    public path = "/dropoff";
    public router = Router();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get(`${this.path}/all`, this.getAllDropOffs);
        this.router.post(`${this.path}`, this.addDropOff)
        this.router.get(`${this.path}/id`, this.getDropOff);
        this.router.get(`${this.path}/name`, this.getDropOffByName);
        this.router.patch(`${this.path}`, this.updateDropOff);
        this.router.delete(`${this.path}`, this.deleteDropOff);
       }

       private async getAllDropOffs(req:RequestType<string>, res: Response, next:NextFunction){
        const dropoff_query:DropOffInterface[] = await getAllDropOffs(req.body.payload);

        const response:ResponseType<DropOffInterface[]>  =
        {
            success:true, 
            message:"DropOff query successful",
            data: dropoff_query
        } 
        res.status(200).json(response);
        
    }

    private async getDropOff(req:RequestType<string>, res: Response, next:NextFunction){
        const dropoff_query:DropOffInterface = await getDropOff(req.body.payload);

        const response:ResponseType<DropOffInterface>  =
        {
            success:true, 
            message:"DropOff query successful",
            data: dropoff_query
        } 
        res.status(200).json(response);
        
    }

    private async getDropOffByName(req:RequestType<string>, res: Response, next:NextFunction){
        const dropoff_query:DropOffInterface = await getDropOffByName(req.body.payload);

        const response:ResponseType<DropOffInterface>  =
        {
            success:true, 
            message:"DropOff query successful",
            data: dropoff_query
        } 
        res.status(200).json(response);
        
    }

    private async addDropOff(req: RequestType<DropOffInterface>, res: Response, next:NextFunction){
        const dropoff_mutation:DropOffInterface = await addDropOff(req.body.payload);


        const response:ResponseType<DropOffInterface>  =
        {
            success:true, 
            message:"DropOff created successfully",
            data: dropoff_mutation
        } 

        res.status(200).json(response)
        
    }

    private async updateDropOff(req: RequestType<UpdateDropOffRequestType>, res: Response, next:NextFunction){
        const update_data = req.body.payload.data;
        const dropoff_mutation:DropOffInterface = await DropOffModel.findByIdAndUpdate(req.body.payload.id, update_data, {new:true})
        

        const response:ResponseType<DropOffInterface>  =
        {
            success:true, 
            message:"DropOff update successful",
            data: dropoff_mutation
        } 

        res.status(200).json(response)
        
    }

    private async deleteDropOff(req: RequestType<string>, res: Response, next:NextFunction){
        
        const dropoff_mutation:DropOffInterface = await DropOffModel.findByIdAndDelete(req.body.payload.id);


        const response:ResponseType<DropOffInterface>  =
        {
            success:true, 
            message:"DropOff delete successful",
            data: dropoff_mutation
        } 

        res.status(200).json(response)
        
    }

   
}

export default DropOffController;