import { NextFunction, Router, Request, Response } from "express";
import { getAllFreightCompanies, addFreightCompany, getFreightCompany, getFreightCompanyByName, getAllFreightCompaniesByOwner} from "./freight-company.services";
import Controller from "../../interfaces/controllers.interface";
import { RequestType, ResponseType } from "../../types";
import { FreightCompanyInterface, UpdateFreightCompanyRequestType } from "./freight-company.types";
import { FreightCompanyModel } from "./freight-company.model";

class FreightCompanyController implements Controller{

    public path ="/freight-company";
    public router = Router()

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get(`${this.path}/all`, this.getAllFreightCompanies);
        this.router.post(`${this.path}`, this.addFreightCompany)
        this.router.get(`${this.path}/id`, this.getFreightCompany);
        this.router.get(`${this.path}/name`, this.getFreightCompanyByName);
        this.router.patch(`${this.path}`, this.updateFreightCompany);
        this.router.delete(`${this.path}`, this.deleteFreightCompany);
        this.router.get(`${this.path}/all/owner/:id`, this.getAllFreightCompaniesByOwner)


        
    }

    private async getAllFreightCompanies(req:RequestType<{}>, res: Response, next:NextFunction){
        const freight_company_query:FreightCompanyInterface[] = await getAllFreightCompanies();

        const response:ResponseType<FreightCompanyInterface[]>  =
        {
            success:true, 
            message:"Freight company query successful",
            data: freight_company_query
        } 
        res.status(200).json(response);
        
    }

    private async getAllFreightCompaniesByOwner(req:RequestType<{}>, res: Response, next:NextFunction){
        const freight_company_query:FreightCompanyInterface[] = await getAllFreightCompaniesByOwner(req.params.id);

        const response:ResponseType<FreightCompanyInterface[]>  =
        {
            success:true, 
            message:"Freight company query successful",
            data: freight_company_query
        } 
        res.status(200).json(response);
        
    }


    private async getFreightCompany(req:RequestType<string>, res: Response, next:NextFunction){
        const freight_company_query:FreightCompanyInterface = await getFreightCompany(req.body.payload);

        const response:ResponseType<FreightCompanyInterface>  =
        {
            success:true, 
            message:"Freight company query successful",
            data: freight_company_query
        } 
        res.status(200).json(response);
        
    }

    private async getFreightCompanyByName(req:RequestType<string>, res: Response, next:NextFunction){
        const freight_company_query:FreightCompanyInterface = await getFreightCompanyByName(req.body.payload);

        const response:ResponseType<FreightCompanyInterface>  =
        {
            success:true, 
            message:"Freight company query successful",
            data: freight_company_query
        } 
        res.status(200).json(response);
        
    }

    private async addFreightCompany(req: RequestType<FreightCompanyInterface>, res: Response, next:NextFunction){
        const freight_company_mutation:FreightCompanyInterface = await addFreightCompany(req.body.payload);


        const response:ResponseType<FreightCompanyInterface>  =
        {
            success:true, 
            message:"Freight company created successfully",
            data: freight_company_mutation
        } 

        res.status(200).json(response)
        
    }

    private async updateFreightCompany(req: RequestType<UpdateFreightCompanyRequestType>, res: Response, next:NextFunction){
        const update_data = req.body.payload.data;
        const freight_company_mutation:FreightCompanyInterface = await FreightCompanyModel.findByIdAndUpdate(req.body.payload.id, update_data, {new:true})
        

        const response:ResponseType<FreightCompanyInterface>  =
        {
            success:true, 
            message:"Freight company update successful",
            data: freight_company_mutation
        } 

        res.status(200).json(response)
        
    }

    private async deleteFreightCompany(req: RequestType<string>, res: Response, next:NextFunction){
        
        const freight_company_mutation:FreightCompanyInterface = await FreightCompanyModel.findByIdAndDelete(req.body.payload.id);


        const response:ResponseType<FreightCompanyInterface>  =
        {
            success:true, 
            message:"Freight company delete successful",
            data: freight_company_mutation
        } 

        res.status(200).json(response)
        
    }


}

export default FreightCompanyController;