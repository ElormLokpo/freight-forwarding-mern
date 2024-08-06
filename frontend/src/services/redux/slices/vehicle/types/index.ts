export interface VehicleInterface{
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
    freight_company?:any,
    in_transit?: boolean,
   
}


export interface VehicleInitialStateValueType {
    value:{
        all_vehicle: VehicleInterface[],
        current_vehicle: VehicleInterface | null,
    }

}