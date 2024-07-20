export interface FreightCompanyResponseType{
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
    owner?:string
    warehouses?: any[],
    current_shipment?: any[]
}