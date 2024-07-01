import { NextFunction } from "express"
import { WarehouseModel } from "./warehouse.model"
import { Warehouse } from "../../types"

export const addWarehouse = async (warehouse:Warehouse)=>{
    return await WarehouseModel.create(warehouse);
}

export const getAllWarehouses = async()=>{
    return await WarehouseModel.find();
}

export const getWarehouseByFreightCompany = async(freight_company_id:string)=>{
    return await WarehouseModel.findOne({freight_company: freight_company_id});

}

export const getWarehouse = async(guid:string)=>{
    return await WarehouseModel.findOne({guid});

}

export const getAllWarehouseStaff = async(guid:string)=>{
    const warehouse:any = await WarehouseModel.findOne({guid}).populate("warehouse_staff").exec();
    return warehouse.warehouse_staff;

}

export const getWarehouseCurrentShipment = async(guid:string)=>{
    const warehouse:any = await WarehouseModel.findOne({guid}).populate("warehouse_current_shipment").exec();
    return warehouse.warehouse_current_shipment;
}

export const getWarehouseExpectedShipment = async(guid:string)=>{
    const warehouse:any = await WarehouseModel.findOne({guid}).populate("warehouse_expected_shipment").exec();
    return warehouse.warehouse_current_shipment;
}

export const warehouseVacant = async (guid:string )=>{
    const warehouse:any = await WarehouseModel.findOne({guid});
    return warehouse.warehouse_vacant;
}


export const updateWarehouse = async (guid:string, data:any)=>{
    const warehouse:any = await WarehouseModel.findOne({guid});
    return await WarehouseModel.findByIdAndUpdate(warehouse._id, data,{new:true});
}

export const deleteWarehouse = async (guid:string)=>{
    const warehouse:any = await WarehouseModel.findOne({guid});
    return await WarehouseModel.findByIdAndDelete(warehouse._id);
}