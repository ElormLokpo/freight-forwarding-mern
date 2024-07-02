import { NextFunction, Request, Response, Router } from "express";
import Controller from "../../../interfaces/controllers.interface";
import {addWarehouseStaff, getWarehouseStaff, updateWarehouseStaff, deleteWarehouseStaff, getWarehouseStaffId} from "./warehouse.staff.service"
import {getAllWarehouseStaff} from "../warehouse.service";
import bcrypt from "bcrypt";


class WarehouseStaffController implements Controller{
    public path = "/warehouse-staff";
    public router = Router();

    constructor(){
        this.initializeRoutes()
    }

    private initializeRoutes(){

    }

    private async addWarehouseStaff(req:Request, res: Response, next:NextFunction){
        const warehouse_staff_mutation = await addWarehouseStaff(req.body);

        res.status(200).json({
            warehouse_staff_mutation
        })
    }

    private async getAllWarehouseStaff(req:Request, res: Response, next:NextFunction){
        const warehouse_staff_query = await getAllWarehouseStaff(req.body.warehouseId);
        
        res.status(200).json({
            warehouse_staff_query
        })
            
    }

    private async getWarehouseStaff(req:Request, res: Response, next:NextFunction){
        const warehouse_staff_query = await getWarehouseStaff(req.body.guid);

        res.status(200).json({
            warehouse_staff_query
        })
    }

    private async loginWarehouseStaff(req:Request, res: Response, next:NextFunction){
        const {staff_id, password} = req.body;
        const warehouse_staff_query:any = await getWarehouseStaffId(staff_id);

        const valid_password = bcrypt.compare(password, warehouse_staff_query.password);

        

    }


}