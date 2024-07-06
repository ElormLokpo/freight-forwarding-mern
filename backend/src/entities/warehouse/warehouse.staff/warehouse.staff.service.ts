
import { WarehouseStaffModel } from "./warehouse.staff.model";

export const addWarehouseStaff = async (warehouseStaff:any)=>{
    return await WarehouseStaffModel.create(warehouseStaff);
}


export const getWarehouseStaff = async(guid:string)=>{
    return await WarehouseStaffModel.findOne({guid});

}


export const getWarehouseStaffId = async(staff_id:string)=>{
    return await WarehouseStaffModel.findOne({staff_id}).select("+password");

}


export const updateWarehouseStaff = async (staff_id:string, data:any)=>{
    const warehouse:any = await WarehouseStaffModel.findOne({staff_id});
    return await WarehouseStaffModel.findByIdAndUpdate(warehouse._id, data,{new:true});
}

export const deleteWarehouseStaff = async (staff_id:string)=>{
    const warehouse:any = await WarehouseStaffModel.findOne({staff_id});
    return await WarehouseStaffModel.findByIdAndDelete(warehouse._id);
}