export interface ShipmentInterface{
    _id?:any,
    name?:string, 
    quantity?:number,
    quantity_unit?:string,
    tracking_number?:string,
    description?:string, 
    weight_height?:{
        units?:string, 
        weightValue?:Number, 
        heightValue?:Number
    },
    containsFragile?:Boolean,
    initial_pickup_location?:{
        city?:string,
        gps?:string
    },
    final_destination?:{
        city?:string,
        gps?:string
    },
    in_transit?:boolean,
    is_assigned?:boolean,
    current_warehouse?:string, 
    current_vehicle?:string, 
    delivery_status?:string, 
    processed_by?: string, 
    freight_company?:string, 
    warehouse_trail?:string[]
    shipping_cost?:{
        currency?:string, 
        amount?: number
    }
    status?:string,
    dropoffs?:any[],
    pickups?:any[]
}

export interface ShipmentInitialStateValueType {
    value:{
        all_shipment: ShipmentInterface[],
        current_shipment: ShipmentInterface| null,
    }

}