export interface WarehouseStaffInterface{
    _id?:any, 
    warehouse_id?:string,
    staff_id?:number,
    fullname?:string, 
    phone?:string,
    email?:string, 
    role?:string, 

}

export interface UpdateWarehouseStaffRequestType{
    id: string, 
    data: WarehouseStaffInterface
}