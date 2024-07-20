export interface FreightCompanyInterface {
    _id?: string
    company_name?: string
    address?: {
        country?:string 
        city?:string 
        gps_location?:string
    }
    email?:string 
    phone?:string
    urls?:string[]
    owner?:any
    warehouses?: any[],
    current_shipment?: any[]
}

export interface FreightInitialStateValueType {
    value:{
        all_freight_companies: FreightCompanyInterface[],
        current_freight_company: FreightCompanyInterface | null,
    }

}