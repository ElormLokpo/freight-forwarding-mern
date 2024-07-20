export interface DropOffInterface{
    _id?:any, 
    location?:string, 
    warehouse?:string, 
    shipment?:string, 
    vehicle?:string, 
    pickup_id?: string,
    expected_dropoff_date?:Date, 
    actual_dropoff_date?:Date,
    status?:string, 
    freight_company?:any,
    isCurrent?:boolean, 
    is_final_dropoff?:boolean, 
    drop_off_complete?:boolean,
    pickups?: any[]
}


export interface UpdateDropOffRequestType{
    id: string, 
    data: DropOffInterface
}