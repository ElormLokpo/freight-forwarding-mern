import mongoose, { Document } from "mongoose";
import {v4} from "uuid";

const DropOffSchema = new mongoose.Schema({
    _id: {type:String},
    location:{type:String},
    warehouse:{
        type:String,
        ref:"WarehouseModel"
    },
    shipment:{
        type:String, 
        ref:"ShipmentModel"
    },
    freight_company:{
        type:String, 
        ref:"FreightCompanyModel"
    },
    vehicle:{
        type:String, 
        ref:"VehicleModel"
    },
    pickup_id:{
        type:String, 
        ref:"PickUpModel"
    },
    expected_dropoff_date:{type:Date},
    actual_dropoff_date:{type:Date},
    status:{type:String},
    isCurrent:{type:Boolean},
    is_final_dropoff:{type:Boolean},
    drop_off_complete:{type:Boolean, default:false}
})

DropOffSchema.pre("save", async function(){
    this._id = v4();
    
});

DropOffSchema.virtual("pickup", {
    ref:"PickUpModel",
    localField: "_id",
    foreignField: "dropoff_id",
    justOne:true
})

export const DropOffModel = mongoose.model<Document>("DropOffModel", DropOffSchema);