import Controller from "../../interfaces/controllers.interface";
import { NextFunction, Request, Response, Router } from "express";
import { addWarehouse, deleteWarehouse, getAllWarehouses, getWarehouseByFreightCompany, updateWarehouse, warehouseVacant } from "./warehouse.service";



class WarehouseController implements Controller{
    public path = "/warehouse";
    public router = Router();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get(`${this.path}/all`, this.getAllWarehouses);
        this.router.get(`${this.path}/add`, this.addWarehouse);
        this.router.get(`${this.path}/guid`, this.getWarehouse);
        this.router.get(`${this.path}/freight-company`, this.getWarehouseByFreightCompany);
        this.router.get(`${this.path}/vacant`, this.warehouseVacant);
        this.router.get(`${this.path}/guid/update`, this.updateWarehouse);
        this.router.get(`${this.path}/guid/delete`, this.deleteWarehouse);
        


    }
    private addWarehouse(req:Request, res: Response, next:NextFunction){
        const warehouse_mutation =  addWarehouse(req.body);

        res.status(200).json({
            warehouse_mutation
        })
    }

    private getAllWarehouses(req:Request, res: Response, next:NextFunction){
        const warehouse_query =  getAllWarehouses();

        res.status(200).json({
            warehouse_query
        })
    }

    private getWarehouseByFreightCompany(req:Request, res: Response, next:NextFunction){
        const warehouse_query = getWarehouseByFreightCompany(req.body.id);

        res.status(200).json({
            warehouse_query
        })
    }

    private getWarehouse(req:Request, res: Response, next:NextFunction){
        const warehouse_query = getWarehouseByFreightCompany(req.body.guid);

        res.status(200).json({
            warehouse_query
        })
    }

    private warehouseVacant(req:Request, res: Response, next:NextFunction){
        const warehouse_query = warehouseVacant(req.body.guid);

        res.status(200).json({
            warehouse_query
        })
    }

    private updateWarehouse(req:Request, res: Response, next:NextFunction){
        const warehouse_mutation = updateWarehouse(req.body.guid, req.body);

        res.status(200).json({
            warehouse_mutation
        })
    }

    private deleteWarehouse(req:Request, res: Response, next:NextFunction){
        const warehouse_mutation = deleteWarehouse(req.body.id);

        res.status(200).json({
            warehouse_mutation
        })
    }
}

export default WarehouseController;