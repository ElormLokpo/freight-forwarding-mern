import mongoose, { Document } from "mongoose";
import {v4} from "uuid";

const PickUpSchema = new mongoose.Schema({
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
    dropoff_id:{
        type: String, 
        ref: "DropOffModel"
    },
    expected_pickup_date:{type:Date},
    actual_pickup_date:{type:Date},
    status:{type:String},
    isCurrent:{type:Boolean},
    is_initial_pickup:{type:Boolean},
    pick_up_complete:{type:Boolean, default:false}
})

PickUpSchema.pre("save", async function(){
    this._id = v4();
    
});

PickUpSchema.virtual("pickups", {
    ref:"DropOffModel",
    localField: "_id",
    foreignField: "pickup_id",
    justOne:true
})



export const PickUpModel = mongoose.model<Document>("PickUpModel", PickUpSchema);