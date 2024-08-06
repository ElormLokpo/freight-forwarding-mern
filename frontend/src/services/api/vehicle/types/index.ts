export interface VehicleResponseType{
    _id?:any,
    name?: string,
    number_plate?: string,
    max_capacity?:{
        units?: string,
        weightValue?: number, 
        heightValue?: number
    },
    driver?:{
        fullname?:string,
        license_number?:string
    }, 
    shipment?: any[],
    freight_company?:any,
    in_transit?: boolean,
    tracking_number?: number
    
}