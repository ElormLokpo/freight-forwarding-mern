import {Document, Types} from "mongoose"

export interface Warehouse extends Document{
    _id?:Types.ObjectId,
    warehouse_name: string,
    warehouse_location: string,
    warehouse_manager_guid: string,
    freight_company: Types.ObjectId,
    warehouse_staff: Types.ObjectId[],
    warehouse_current_shipment: Types.ObjectId[],
    warehouse_expected_shipment: Types.ObjectId[],
    warehouse_vacant:boolean
}

export interface WarehouseStaff extends Document{
   staff_id:string, 
   fullname: string, 
   phone: string, 
   email:string 
   password:string, 
   role: string
}