import Controller from "../../interfaces/controllers.interface";
import { NextFunction, Request, Response, Router } from "express";
import { RequestType, ResponseType } from "../../types";
import { VehicleInterface, UpdateVehicleRequestType } from "./vehicle.types";
import { getAllVehicles, getVehicle, addVehicle, getVehicleByName } from "./vehicle.service";
import { VehicleModel } from "./vehicle.model";



class VehicleController implements Controller{
    public path = "/vehicle";
    public router = Router();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get(`${this.path}/all/:id`, this.getAllVehicles);
        this.router.post(`${this.path}`, this.addVehicle)
        this.router.get(`${this.path}/id`, this.getVehicle);
        this.router.get(`${this.path}/name`, this.getVehicleByName);
        this.router.patch(`${this.path}`, this.updateVehicle);
        this.router.delete(`${this.path}`, this.deleteVehicle);
       }

       private async getAllVehicles(req:RequestType<string>, res: Response, next:NextFunction){
        const vehicle_query:VehicleInterface[] = await getAllVehicles(req.params.id);

        const response:ResponseType<VehicleInterface[]>  =
        {
            success:true, 
            message:"Vehicle query successful",
            data: vehicle_query
        } 
        res.status(200).json(response);
        
    }

    private async getVehicle(req:RequestType<string>, res: Response, next:NextFunction){
        const vehicle_query:VehicleInterface = await getVehicle(req.body.payload);

        const response:ResponseType<VehicleInterface>  =
        {
            success:true, 
            message:"Vehicle query successful",
            data: vehicle_query
        } 
        res.status(200).json(response);
        
    }

    private async getVehicleByName(req:RequestType<string>, res: Response, next:NextFunction){
        const vehicle_query:VehicleInterface = await getVehicleByName(req.body.payload);

        const response:ResponseType<VehicleInterface>  =
        {
            success:true, 
            message:"Vehicle query successful",
            data: vehicle_query
        } 
        res.status(200).json(response);
        
    }

    private async addVehicle(req: RequestType<VehicleInterface>, res: Response, next:NextFunction){
        const vehicle_mutation:VehicleInterface = await addVehicle(req.body.payload);


        const response:ResponseType<VehicleInterface>  =
        {
            success:true, 
            message:"Vehicle created successfully",
            data: vehicle_mutation
        } 

        res.status(200).json(response)
        
    }

    private async updateVehicle(req: RequestType<UpdateVehicleRequestType>, res: Response, next:NextFunction){
        const update_data = req.body.payload.data;
        const vehicle_mutation:VehicleInterface = await VehicleModel.findByIdAndUpdate(req.body.payload.id, update_data, {new:true})
        

        const response:ResponseType<VehicleInterface>  =
        {
            success:true, 
            message:"Vehicle update successful",
            data: vehicle_mutation
        } 

        res.status(200).json(response)
        
    }

    private async deleteVehicle(req: RequestType<string>, res: Response, next:NextFunction){
        
        const vehicle_mutation:VehicleInterface = await VehicleModel.findByIdAndDelete(req.body.payload.id);


        const response:ResponseType<VehicleInterface>  =
        {
            success:true, 
            message:"Vehicle delete successful",
            data: vehicle_mutation
        } 

        res.status(200).json(response)
        
    }

   
}

export default VehicleController;