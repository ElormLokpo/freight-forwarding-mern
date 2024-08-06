export interface WarehouseInterface{
    _id?:any,
    name?: string,
    location?: string,
    manager_id?: any,
    freight_company_id?: any,
    warehouse_staff?:any[],
    warehouse_vacant?:boolean,
    current_shipment?:any[]
}

export interface WarehouseInitialStateValueType {
    value:{
        all_warehouses: WarehouseInterface[],
        current_warehouse: WarehouseInterface | null,
    }

}