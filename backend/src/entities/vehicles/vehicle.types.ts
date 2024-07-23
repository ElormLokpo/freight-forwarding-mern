export interface VehicleInterface{
    _id?:any, 
    name?:string, 
    number_plate?:string,
    tracking_number?:number, 
  
    max_capacity?:{
        units?:string, 
        weightValue?:number, 
        heightValue?:number,
    }
    is_full?:boolean, 
    driver?:{
        fullname?:string,
        license_number?:string
    }, 
    shipment?:string[],
    freight_company?:string,
    pickups?:any[],
    dropoffs?:any[]
}

export interface UpdateVehicleRequestType{
    id: string, 
    data: VehicleInterface
}