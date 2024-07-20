import { NextFunction, Request, Response, Router } from "express";
import Controller from "../../../interfaces/controllers.interface";
import {addWarehouseStaff, getWarehouseStaff, getAllWarehouseStaff, getWarehouseStaffByName} from "./warehouse.staff.service"
import { WarehouseStaffInterface, UpdateWarehouseStaffRequestType } from "./warehouse.staff.types";
import { RequestType, ResponseType } from "../../../types";
import { WarehouseStaffModel } from "./warehouse.staff.model";


class WarehouseStaffStaffController implements Controller{
    public path = "/warehouse-staff";
    public router = Router();

    constructor(){
        this.initializeRoutes()
    }

    private initializeRoutes(){
        this.router.get(`${this.path}/all`, this.getAllWarehouseStaff);
        this.router.post(`${this.path}`, this.addWarehouseStaff)
        this.router.get(`${this.path}/id`, this.getWarehouseStaff);
        this.router.get(`${this.path}/name`, this.getWarehouseStaffByName);
        this.router.patch(`${this.path}`, this.updateWarehouseStaff);
        this.router.delete(`${this.path}`, this.deleteWarehouseStaff)
    }

    private async getAllWarehouseStaff(req:RequestType<string>, res: Response, next:NextFunction){
        const WarehouseStaff_query:WarehouseStaffInterface[] = await getAllWarehouseStaff(req.body.payload);

        const response:ResponseType<WarehouseStaffInterface[]>  =
        {
            success:true, 
            message:"Warehouse Staff query successful",
            data: WarehouseStaff_query
        } 
        res.status(200).json(response);
        
    }

    private async getWarehouseStaff(req:RequestType<string>, res: Response, next:NextFunction){
        const WarehouseStaff_query:WarehouseStaffInterface = await getWarehouseStaff(req.body.payload);

        const response:ResponseType<WarehouseStaffInterface>  =
        {
            success:true, 
            message:"Warehouse Staff query successful",
            data: WarehouseStaff_query
        } 
        res.status(200).json(response);
        
    }

    private async getWarehouseStaffByName(req:RequestType<string>, res: Response, next:NextFunction){
        const WarehouseStaff_query:WarehouseStaffInterface = await getWarehouseStaffByName(req.body.payload);

        const response:ResponseType<WarehouseStaffInterface>  =
        {
            success:true, 
            message:"Warehouse Staff query successful",
            data: WarehouseStaff_query
        } 
        res.status(200).json(response);
        
    }

    private async addWarehouseStaff(req: RequestType<WarehouseStaffInterface>, res: Response, next:NextFunction){
        const WarehouseStaff_mutation:WarehouseStaffInterface = await addWarehouseStaff(req.body);


        const response:ResponseType<WarehouseStaffInterface>  =
        {
            success:true, 
            message:"Warehouse Staff added successfully",
            data: WarehouseStaff_mutation
        } 

        res.status(200).json(response)
        
    }

    private async updateWarehouseStaff(req: RequestType<UpdateWarehouseStaffRequestType>, res: Response, next:NextFunction){
        const update_data = req.body.payload.data;
        const WarehouseStaff_mutation:WarehouseStaffInterface = await WarehouseStaffModel.findByIdAndUpdate(req.body.payload.id, update_data, {new:true})
        

        const response:ResponseType<WarehouseStaffInterface>  =
        {
            success:true, 
            message:"Warehouse Staff update successful",
            data: WarehouseStaff_mutation
        } 

        res.status(200).json(response)
        
    }

    private async deleteWarehouseStaff(req: RequestType<string>, res: Response, next:NextFunction){
        
        const WarehouseStaff_mutation:WarehouseStaffInterface = await WarehouseStaffModel.findByIdAndDelete(req.body.payload.id);


        const response:ResponseType<WarehouseStaffInterface>  =
        {
            success:true, 
            message:"Warehouse Staff delete successful",
            data: WarehouseStaff_mutation
        } 

        res.status(200).json(response)
        
    }


}

export default WarehouseStaffStaffController;