import Controller from "../../../interfaces/controllers.interface";
import { NextFunction, Request, Response, Router } from "express";
import { RequestType, ResponseType } from "../../../types";
import { PickUpInterface, UpdatePickUpRequestType } from "./pickup.types";
import { getAllPickUps, getPickUp, addPickUp, getPickUpByName } from "./pickup.service";
import { PickUpModel } from "./pickup.model";



class PickUpController implements Controller{
    public path = "/pickup";
    public router = Router();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get(`${this.path}/all`, this.getAllPickUps);
        this.router.post(`${this.path}`, this.addPickUp)
        this.router.get(`${this.path}/id`, this.getPickUp);
        this.router.get(`${this.path}/name`, this.getPickUpByName);
        this.router.patch(`${this.path}`, this.updatePickUp);
        this.router.delete(`${this.path}`, this.deletePickUp);
       }

       private async getAllPickUps(req:RequestType<string>, res: Response, next:NextFunction){
        const pickup_query:PickUpInterface[] = await getAllPickUps(req.body.payload);

        const response:ResponseType<PickUpInterface[]>  =
        {
            success:true, 
            message:"PickUp query successful",
            data: pickup_query
        } 
        res.status(200).json(response);
        
    }

    private async getPickUp(req:RequestType<string>, res: Response, next:NextFunction){
        const pickup_query:PickUpInterface = await getPickUp(req.body.payload);

        const response:ResponseType<PickUpInterface>  =
        {
            success:true, 
            message:"PickUp query successful",
            data: pickup_query
        } 
        res.status(200).json(response);
        
    }

    private async getPickUpByName(req:RequestType<string>, res: Response, next:NextFunction){
        const pickup_query:PickUpInterface = await getPickUpByName(req.body.payload);

        const response:ResponseType<PickUpInterface>  =
        {
            success:true, 
            message:"PickUp query successful",
            data: pickup_query
        } 
        res.status(200).json(response);
        
    }

    private async addPickUp(req: RequestType<PickUpInterface>, res: Response, next:NextFunction){
        const pickup_mutation:PickUpInterface = await addPickUp(req.body.payload);


        const response:ResponseType<PickUpInterface>  =
        {
            success:true, 
            message:"PickUp created successfully",
            data: pickup_mutation
        } 

        res.status(200).json(response)
        
    }

    private async updatePickUp(req: RequestType<UpdatePickUpRequestType>, res: Response, next:NextFunction){
        const update_data = req.body.payload.data;
        const pickup_mutation:PickUpInterface = await PickUpModel.findByIdAndUpdate(req.body.payload.id, update_data, {new:true})
        

        const response:ResponseType<PickUpInterface>  =
        {
            success:true, 
            message:"PickUp update successful",
            data: pickup_mutation
        } 

        res.status(200).json(response)
        
    }

    private async deletePickUp(req: RequestType<string>, res: Response, next:NextFunction){
        
        const pickup_mutation:PickUpInterface = await PickUpModel.findByIdAndDelete(req.body.payload.id);


        const response:ResponseType<PickUpInterface>  =
        {
            success:true, 
            message:"PickUp delete successful",
            data: pickup_mutation
        } 

        res.status(200).json(response)
        
    }

   
}

export default PickUpController;