import { FreightCompanyInterface } from "./freight-company.types";
import { FreightCompanyModel } from "./freight-company.model";


export const getAllFreightCompanies = async ()=>{
    const freight_companies =  await FreightCompanyModel.find()
    .populate({
        path:"warehouses",
        select:"name _id"
    })
    .populate({
        path: "current_shipment",
        select: "_id tracking_number name status"
    })
    .populate({
        path:"owner",
        select:"_id firstname lastname email"
    })
    .lean()
    
    .exec() as FreightCompanyInterface[];

    return freight_companies;
}

export const getFreightCompany = async (id:string)=>{
    const freight_company = await FreightCompanyModel.findById(id)
    .populate({
        path:"warehouses",
        select:"name _id"
    })
    .populate({
        path: "current_shipment",
        select: "_id tracking_number name status"
    })
    .populate({
        path:"owner",
        select:"_id firstname lastname email"
    })
    .lean()
    .exec() as FreightCompanyInterface;

    return freight_company;
}

export const getAllFreightCompaniesByOwner = async (id:string)=>{
    const freight_company = await FreightCompanyModel.find({owner: id})
    .populate({
        path:"warehouses",
        select:"name _id"
    })
    .populate({
        path: "current_shipment",
        select: "_id tracking_number name status"
    })
    .populate({
        path:"owner",
        select:"_id firstname lastname email"
    })
    .lean()
    .exec() as FreightCompanyInterface[];

    return freight_company;
}

export const getFreightCompanyByName = async (name:string)=>{
    const freight_company = await FreightCompanyModel.findOne({company_name: name})
    .populate({
        path:"warehouses",
        select:"name _id"
    })
    .populate({
        path: "current_shipment",
        select: "_id tracking_number name status"
    })
    .populate({
        path:"owner",
        select:"_id firstname lastname email"
    })
    .lean()
    .exec() as FreightCompanyInterface;

    return freight_company
}

export const addFreightCompany = async (company: FreightCompanyInterface)=>{
    const freight_company = await FreightCompanyModel.create(company) as FreightCompanyInterface;
    
    return freight_company;
}

export const isFreightCompanyOwner = async (ownerid:string, freight_company_id:string)=>{
    const freight_company = await FreightCompanyModel.findById(freight_company_id).populate({
        path:"owner",
        select:"_id"
    }) as FreightCompanyInterface;

    if (freight_company.owner?._id == ownerid ){
        return true
    }

    return false;

}