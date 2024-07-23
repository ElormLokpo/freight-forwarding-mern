export interface FreightCompanyInterface {
    _id?: string 
    company_name?: string | null
    address?: {
        country?:string | null 
        city?:string | null 
        gps_location?:string | null
    }
    email?:string | null 
    phone?:string | null
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