export interface VehicleInterface{
    _id?:any, 
    name?:string, 
    number_plate?:string,
    tracking_number?:number, 
    warehouse?:any,
    max_capacity?:{
        units?:string, 
        weightValue?:string, 
        heightValue?:string,
    }
    is_full?:boolean, 
    driver?:any, 
    shipment?:string[],
    freight_company?:string,
    pickups?:any[],
    dropoffs?:any[]
}

export interface UpdateVehicleRequestType{
    id: string, 
    data: VehicleInterface
}