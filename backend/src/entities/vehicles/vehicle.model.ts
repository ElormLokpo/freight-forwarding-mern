import mongoose,{Document} from "mongoose";
import {v4} from "uuid";

const WeightHeightSchema = new mongoose.Schema({
    units:{type:String},
    weightValue: {type:Number},
    heightValue: {type:Number}
},{_id:false})

const DriverSchema = new mongoose.Schema({
    fullname:String, 
    license_number: String
},{_id:false})

const VehicleSchema = new mongoose.Schema({
    _id:{type:String},
    name: {type:String},
    number_plate:{type:String},
    tracking_number:{type:Number},
    max_capacity: WeightHeightSchema,
    is_full: {type:Boolean},
    driver: DriverSchema,
    shipment:[{
        type:String, 
        ref:"ShipmentModel"
    }],
    freight_company:{
        type:String, 
        ref:"FreightCompanyModel"
    },
    current_warehouse:{
        type:String, 
        ref:"WarehouseModel"
    },
    in_transit:{
        type: Boolean, 
        default: false
    }

}, {timestamps:true})

VehicleSchema.pre("save", async function(){
    this._id = v4();
    this.tracking_number = Math.floor(100000 + Math.random() * 900000);
});

VehicleSchema.virtual("pickups",{
    ref:"PickUpModel",
    localField:"_id",
    foreignField: "vehicle"
})

VehicleSchema.virtual("dropoffs",{
    ref:"DropOffModel",
    localField:"_id",
    foreignField: "vehicle"
})




export const VehicleModel = mongoose.model<Document>("VehicleModel",VehicleSchema);