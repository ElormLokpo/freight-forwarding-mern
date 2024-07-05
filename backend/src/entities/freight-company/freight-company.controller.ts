import { NextFunction, Router, Request, Response } from "express";
import { getAllFreightCompanies, addFreightCompany} from "./freight-company.services";
import Controller from "../../interfaces/controllers.interface";

class FreightCompanyController implements Controller{

    public path ="/freight-company";
    public router = Router()

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get(`${this.path}/all`, this.getAllFreightCompanies);
        this.router.post(`${this.path}`, this.addFreightCompany)
    }

    private async getAllFreightCompanies(req: Request, res: Response, next:NextFunction){
        const freight_company_query = await getAllFreightCompanies();

        res.status(200).json({freight_company_query})
        
    }

    private async addFreightCompany(req: Request, res: Response, next:NextFunction){
        const freight_company_mutation= await addFreightCompany(req.body);


        res.status(200).json({freight_company_mutation})
        
    }




}

export default FreightCompanyController;