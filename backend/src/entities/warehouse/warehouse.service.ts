import { WarehouseModel } from "./warehouse.model";
import { WarehouseInterface } from "./warehouse.types";


export const getAllWarehouses = async ()=>{
    const warehouse_query = await WarehouseModel
    .find()
    .populate({
        path: "freight_company_id",
        select:"_id company_name"
    })
    .populate({
        path:"manager_id",
        select:"firstname lastname email _id"
    })
    .lean()
    .exec();
    ;
    return warehouse_query;
}


export const getWarehouse = async (id:string)=>{
    const warehouse_query = await WarehouseModel
    .findById(id)
    .populate({
        path: "freight_company_id",
        select:"_id company_name"
    })
    .populate({
        path:"manager_id",
        select:"firstname lastname email _id"
    })
    .lean()
    .exec();
    return warehouse_query;
}


export const getWarehouseByName = async (name:string)=>{
    const warehouse_query = await WarehouseModel
    .findOne({name})
    .populate({
        path: "freight_company_id",
        select:"_id company_name"
    })
    .populate({
        path:"manager_id",
        select:"firstname lastname email _id"
    })
    .lean()
    .exec();
    return warehouse_query;
}


export const addWarehouse = async (warehouse: WarehouseInterface)=>{
    const warehouse_mutation  = await WarehouseModel.create(warehouse);
    return warehouse_mutation;
}



