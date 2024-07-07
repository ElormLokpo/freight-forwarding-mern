

export interface WarehouseInterface{
    _id?:any,
    name?: string,
    location?: string,
    manager_id?: any,
    freight_company_id?: any,
    warehouse_vacant?:boolean
}

export interface UpdateWarehouseRequestType{
    id: string, 
    data: WarehouseInterface
}