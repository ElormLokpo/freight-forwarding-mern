

export interface WarehouseInterface{
    _id?:any,
    name?: string,
    location?: string,
    manager_id?: any,
    freight_company_id?: any,
    warehouse_staff?:any[],
    warehouse_vacant?:boolean,
    current_shipment?:any[],
    current_vehicles?:any[],
    incoming_shipment?:any[]

}

export interface UpdateWarehouseRequestType{
    id: string, 
    data: WarehouseInterface
}

export interface WarehouseAssignInterface{
    shipment_id?:string
}