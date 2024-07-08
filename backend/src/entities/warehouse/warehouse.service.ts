import { WarehouseModel } from "./warehouse.model";
import { WarehouseInterface } from "./warehouse.types";


export const getAllWarehouses = async (freight_id:string)=>{
    const warehouse_query = await WarehouseModel
    .find({freight_company_id: freight_id})
    .populate({
        path: "freight_company_id",
        select:"_id company_name"
    })
    .populate({
        path: "warehouse_staff",
        select: "_id fullname staff_id"
    })
    .populate({
        path: "current_shipment",
        select: "_id tracking_number name status"
    })
    .populate({
        path:"manager_id",
        select:"firstname lastname email _id"
    })
    .lean()
    .exec() as WarehouseInterface[];
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
        path: "warehouse_staff",
        select: "_id fullname staff_id"
    })
    .populate({
        path: "current_shipment",
        select: "_id tracking_number name status"
    })
    .populate({
        path:"manager_id",
        select:"firstname lastname email _id"
    })
    .lean()
    .exec() as WarehouseInterface;
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
        path: "warehouse_staff",
        select: "_id fullname staff_id"
    })
    .populate({
        path: "current_shipment",
        select: "_id tracking_number name status"
    })
    .populate({
        path:"manager_id",
        select:"firstname lastname email _id"
    })
    .lean()
    .exec() as WarehouseInterface;
    return warehouse_query;
}


export const addWarehouse = async (warehouse: WarehouseInterface)=>{
    const warehouse_mutation  = await WarehouseModel.create(warehouse) as WarehouseInterface;
    return warehouse_mutation;
}



