import { WarehouseStaff } from "../../../types"
import { WarehouseStaffModel } from "./warehouse.staff.model";

export const addWarehouseStaff = async (warehouseStaff:WarehouseStaff)=>{
    return await WarehouseStaffModel.create(warehouseStaff);
}


export const getWarehouseStaff = async(guid:string)=>{
    return await WarehouseStaffModel.findOne({guid});

}

export const updateWarehouseStaff = async (guid:string, data:any)=>{
    const warehouse:any = await WarehouseStaffModel.findOne({guid});
    return await WarehouseStaffModel.findByIdAndUpdate(warehouse._id, data,{new:true});
}

export const deleteWarehouseStaff = async (guid:string)=>{
    const warehouse:any = await WarehouseStaffModel.findOne({guid});
    return await WarehouseStaffModel.findByIdAndDelete(warehouse._id);
}