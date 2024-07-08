export interface PickUpInterface{
    _id?:any, 
    location?:string, 
    warehouse?:string, 
    shipment?:string, 
    vehicle?:string, 
    dropoff_id?: string,
    expected_pickup_date?:Date, 
    actual_pickup_date?:Date,
    status?:string, 
    freight_company?:any,
    isCurrent?:boolean, 
    is_initial_pickup?:boolean, 
    pick_up_complete?:boolean,
    pickups?: any[]
}


export interface UpdatePickUpRequestType{
    id: string, 
    data: PickUpInterface
}