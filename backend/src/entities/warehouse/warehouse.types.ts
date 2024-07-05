import {Types} from "mongoose";

export interface IWarehouse{
    warehouse_name: string,
    warehouse_location: string,
    warehouse_manager_guid: string,
    freight_company?: Types.ObjectId,
    warehouse_staff?: Types.ObjectId[],
    warehouse_current_shipment?: Types.ObjectId[],
    warehouse_expected_shipment?: Types.ObjectId[],
    warehouse_vacant?:boolean
}

export interface IWarehouseServiceReturn<T>{
    
}