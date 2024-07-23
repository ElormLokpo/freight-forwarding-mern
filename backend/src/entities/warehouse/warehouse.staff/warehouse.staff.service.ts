
import { WarehouseStaffModel } from "./warehouse.staff.model";
import { WarehouseStaffInterface } from "./warehouse.staff.types";

export const addWarehouseStaff = async (warehouseStaff:WarehouseStaffInterface)=>{
    return await WarehouseStaffModel.create(warehouseStaff) as WarehouseStaffInterface;
}

export const getAllWarehouseStaffFreight = async(freight_id:string)=>{
    return await WarehouseStaffModel.find({freight_company_id:freight_id})
    .populate({
        path:"warehouse_id",
        select:"_id name"
    })
    .populate({
        path:"freight_company_id",
        select:"_id company_name"
    })
    .lean()
    .exec() as WarehouseStaffInterface[];
}

export const getAllWarehouseStaffWarehouse = async(warehouse_id:string)=>{
    return await WarehouseStaffModel.find({warehouse_id})
    .populate({
        path:"warehouse_id",
        select:"_id name"
    })  .populate({
        path:"freight_company_id",
        select:"_id company_name"
    })
    .lean()
    .exec() as WarehouseStaffInterface[];
}


export const getWarehouseStaff = async(id:string)=>{
    return await WarehouseStaffModel
    .findById(id)
    .populate({
        path:"warehouse_id",
        select:"_id name"
    })
    .lean()
    .exec() as WarehouseStaffInterface;

}

export const getWarehouseStaffByName = async(name:string)=>{
    return await WarehouseStaffModel
    .findOne({fullname:name})
    .populate({
        path:"warehouse_id",
        select:"_id name"
    })
    .lean()
    .exec() as WarehouseStaffInterface;
}


export const getWarehouseStaffId = async(staff_id:string)=>{
    return await WarehouseStaffModel
    .findOne({staff_id})
    .populate({
        path:"warehouse_id",
        select:"_id name"
    })
    .lean()
    .exec() as WarehouseStaffInterface;

}


