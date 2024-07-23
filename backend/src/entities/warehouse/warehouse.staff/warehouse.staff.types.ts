export interface WarehouseStaffInterface{
    _id?:any, 
    warehouse_id?:string,
    staff_id?:number,
    fullname?:string, 
    phone?:string,
    role?:string, 
    freight_company_id?:string

}

export interface UpdateWarehouseStaffRequestType{
    id: string, 
    data: WarehouseStaffInterface
}