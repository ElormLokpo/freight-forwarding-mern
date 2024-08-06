import Controller from "../../interfaces/controllers.interface";
import { NextFunction, Request, Response, Router } from "express";
import { RequestType, ResponseType } from "../../types";
import { ShipmentInterface, UpdateShipmentRequestType } from "./shipment.types";
import { getAllShipments, getShipment, addShipment, getShipmentByName } from "./shipment.service";
import { ShipmentModel } from "./shipment.model";



class ShipmentController implements Controller{
    public path = "/shipment";
    public router = Router();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get(`${this.path}/freight/all/:id`, this.getAllShipments);
        this.router.post(`${this.path}`, this.addShipment)
        this.router.get(`${this.path}/id`, this.getShipment);
        this.router.get(`${this.path}/name`, this.getShipmentByName);
        this.router.patch(`${this.path}`, this.updateShipment);
        this.router.delete(`${this.path}`, this.deleteShipment);
       }

       private async getAllShipments(req:RequestType<string>, res: Response, next:NextFunction){
        const Shipment_query:ShipmentInterface[] = await getAllShipments(req.params.id);

        const response:ResponseType<ShipmentInterface[]>  =
        {
            success:true, 
            message:"Shipment query successful",
            data: Shipment_query
        } 
        res.status(200).json(response);
        
    }

    private async getShipment(req:RequestType<string>, res: Response, next:NextFunction){
        const Shipment_query:ShipmentInterface = await getShipment(req.body.payload);

        const response:ResponseType<ShipmentInterface>  =
        {
            success:true, 
            message:"Shipment query successful",
            data: Shipment_query
        } 
        res.status(200).json(response);
        
    }

    private async getShipmentByName(req:RequestType<string>, res: Response, next:NextFunction){
        const Shipment_query:ShipmentInterface = await getShipmentByName(req.body.payload);

        const response:ResponseType<ShipmentInterface>  =
        {
            success:true, 
            message:"Shipment query successful",
            data: Shipment_query
        } 
        res.status(200).json(response);
        
    }

    private async addShipment(req: RequestType<ShipmentInterface>, res: Response, next:NextFunction){
        const Shipment_mutation:ShipmentInterface = await addShipment(req.body.payload);


        const response:ResponseType<ShipmentInterface>  =
        {
            success:true, 
            message:"Shipment created successfully",
            data: Shipment_mutation
        } 

        res.status(200).json(response)
        
    }

    private async updateShipment(req: RequestType<UpdateShipmentRequestType>, res: Response, next:NextFunction){
        const update_data = req.body.payload.data;
        const Shipment_mutation:ShipmentInterface = await ShipmentModel.findByIdAndUpdate(req.body.payload.id, update_data, {new:true})
        

        const response:ResponseType<ShipmentInterface>  =
        {
            success:true, 
            message:"Shipment update successful",
            data: Shipment_mutation
        } 

        res.status(200).json(response)
        
    }

    private async deleteShipment(req: RequestType<string>, res: Response, next:NextFunction){
        
        const Shipment_mutation:ShipmentInterface = await ShipmentModel.findByIdAndDelete(req.body.payload.id);


        const response:ResponseType<ShipmentInterface>  =
        {
            success:true, 
            message:"Shipment delete successful",
            data: Shipment_mutation
        } 

        res.status(200).json(response)
        
    }

   
}

export default ShipmentController;