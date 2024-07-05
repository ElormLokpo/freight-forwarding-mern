import { FreightCompanyInterface } from "./freight-company.interface";
import { FreightCompanyModel } from "./freight-company.model";


export const getAllFreightCompanies = async ()=>{
    return await FreightCompanyModel.find();
    
}

export const addFreightCompany = async (company: FreightCompanyInterface)=>{
    return await FreightCompanyModel.create(company);
}