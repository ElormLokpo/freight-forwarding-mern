import { NextFunction, Request, Response, Router } from "express";
import Controller from "../../../interfaces/controllers.interface";
import {addWarehouseStaff, getWarehouseStaff, updateWarehouseStaff, deleteWarehouseStaff, getWarehouseStaffId} from "./warehouse.staff.service"
import {getAllWarehouseStaff} from "../warehouse.service";
import bcrypt from "bcrypt";
import { createToken } from "../../../helpers/token-gen/token-gen";

class WarehouseStaffController implements Controller{
    public path = "/warehouse-staff";
    public router = Router();

    constructor(){
        this.initializeRoutes()
    }

    private initializeRoutes(){
            this.router.get(`${this.path}/all`, this.getAllWarehouseStaff);
            this.router.get(`${this.path}/guid`, this.getWarehouseStaff);
            this.router.post(`${this.path}/add`, this.addWarehouseStaff);
            this.router.get(`${this.path}/login`, this.loginWarehouseStaff);
     

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

        if(valid_password){
            const access_token = createToken(warehouse_staff_query.guid);

            if (access_token){
                res.status(200).json({access_token})
            }
        }

    }


}

export default WarehouseStaffController;