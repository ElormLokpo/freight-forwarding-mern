import { WarehouseInterface } from "../../entities/warehouse/warehouse.types"
import { Document } from "mongoose"

export interface FreightCompanyInterface extends Document{
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
    warehouses?: WarehouseInterface[]
}

export interface UpdateFreightCompanyRequestType{
    id: string, 
    data: FreightCompanyInterface
}