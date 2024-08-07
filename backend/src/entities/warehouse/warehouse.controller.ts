import Controller from "../../interfaces/controllers.interface";
import { NextFunction, Request, Response, Router } from "express";
import { RequestType, ResponseType } from "../../types";
import { WarehouseInterface, UpdateWarehouseRequestType, WarehouseAssignInterface } from "./warehouse.types";
import { getAllWarehouses, getWarehouse, addWarehouse, getWarehouseByName, addIncomingShipment } from "./warehouse.service";
import { WarehouseModel } from "./warehouse.model";



class WarehouseController implements Controller{
    public path = "/warehouse";
    public router = Router();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get(`${this.path}/all/:id`, this.getAllWarehouses);
        this.router.post(`${this.path}`, this.addWarehouse)
        this.router.get(`${this.path}/id`, this.getWarehouse);
        this.router.get(`${this.path}/name`, this.getWarehouseByName);
        this.router.patch(`${this.path}`, this.updateWarehouse);
        this.router.patch(`${this.path}/incoming-shipment/:id`, this.addIncomingShipment)
        this.router.delete(`${this.path}`, this.deleteWarehouse);
       }

       private async getAllWarehouses(req:Request, res: Response, next:NextFunction){
        const warehouse_query:WarehouseInterface[] = await getAllWarehouses(req.params.id);

        const response:ResponseType<WarehouseInterface[]>  =
        {
            success:true, 
            message:"Warehouse query successful",
            data: warehouse_query
        } 
        res.status(200).json(response);
        
    }

    private async getWarehouse(req:RequestType<string>, res: Response, next:NextFunction){
        const warehouse_query:WarehouseInterface = await getWarehouse(req.body.payload);

        const response:ResponseType<WarehouseInterface>  =
        {
            success:true, 
            message:"Warehouse query successful",
            data: warehouse_query
        } 
        res.status(200).json(response);
        
    }

    private async getWarehouseByName(req:RequestType<string>, res: Response, next:NextFunction){
        const warehouse_query:WarehouseInterface = await getWarehouseByName(req.body.payload);

        const response:ResponseType<WarehouseInterface>  =
        {
            success:true, 
            message:"Warehouse query successful",
            data: warehouse_query
        } 
        res.status(200).json(response);
        
    }

    private async addWarehouse(req: RequestType<WarehouseInterface>, res: Response, next:NextFunction){
        const warehouse_mutation:WarehouseInterface = await addWarehouse(req.body.payload);


        const response:ResponseType<WarehouseInterface>  =
        {
            success:true, 
            message:"Warehouse created successfully",
            data: warehouse_mutation
        } 

        res.status(200).json(response)
        
    }

    private async addIncomingShipment(req: RequestType<WarehouseAssignInterface>, res: Response, next:NextFunction){
        const warehouse_mutation:boolean = await addIncomingShipment(req.body.payload.shipment_id, req.params.id)


        const response:ResponseType<WarehouseInterface>  =
        {
            success:true, 
            message:"Incoming shipment added successfully",
            data: warehouse_mutation
        } 

        res.status(200).json(response)
        
    }

    private async updateWarehouse(req: RequestType<UpdateWarehouseRequestType>, res: Response, next:NextFunction){
        const update_data = req.body.payload.data;
        const warehouse_mutation:WarehouseInterface = await WarehouseModel.findByIdAndUpdate(req.body.payload.id, update_data, {new:true})
        

        const response:ResponseType<WarehouseInterface>  =
        {
            success:true, 
            message:"Warehouse update successful",
            data: warehouse_mutation
        } 

        res.status(200).json(response)
        
    }

    private async deleteWarehouse(req: RequestType<string>, res: Response, next:NextFunction){
        
        const warehouse_mutation:WarehouseInterface = await WarehouseModel.findByIdAndDelete(req.body.payload.id);


        const response:ResponseType<WarehouseInterface>  =
        {
            success:true, 
            message:"Warehouse delete successful",
            data: warehouse_mutation
        } 

        res.status(200).json(response)
        
    }

   
}

export default WarehouseController;