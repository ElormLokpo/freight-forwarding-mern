import mongoose,{Document, mongo} from "mongoose";
import {v4} from "uuid";



const WeightHeightSchema = new mongoose.Schema({
    units:{type:String},
    weightValue: {type:Number},
    heightValue: {type:Number}
},{_id:false})

const InitialPickupLocation = new mongoose.Schema({
    city: {type:String},
    gps:{type:String},

},{_id:false})


const FinalDestination = new mongoose.Schema({
    city: {type:String},
    gps:{type:String},

},{_id:false})

const ShippingCostSchema = new mongoose.Schema({
    currency: {type:String},
    amount: {type:Number},
    
}, {_id:false})

const ShipmentSchema = new mongoose.Schema({
    _id:{type:String},
    name: {type:String},
    quantity: {type:Number},
    quantity_unit:{type:String},
    tracking_number:{type:Number},
    description:{type:String},
    weight_height:WeightHeightSchema,
    containsFragile:{type:Boolean, default: false},
    initial_pickup_location: InitialPickupLocation,
    final_destination: FinalDestination,
    current_warehouse:{
        type:String, 
        ref:"WarehouseModel",
       
    },
    warehouse_trail:[{
        type:String, 
        ref: "WarehouseModel"
    }],
    current_vehicle:{
        type:String,
        ref:"VehicleModel"
    },
    is_assigned:{type:Boolean,default:false},
    delivery_status:{type:String},
    processed_by:{
        type:String, 
        ref: "UserModel"
    },
    in_transit:{type:Boolean, default:false},
    status: {type:String},
    freight_company:{
        type:String, 
        ref:"FreightCompanyModel"
    },
    shipping_cost:ShippingCostSchema


}, {timestamps:true})

ShipmentSchema.pre("save", async function(){
    this._id = v4();
    this.tracking_number = Math.floor(100000 + Math.random() * 900000);
});

ShipmentSchema.virtual("dropoffs",{
    ref:"DropOffModel",
    localField:"_id",
    foreignField:"shipment",
    justOne:false
})

ShipmentSchema.virtual("pickups",{
    ref:"PickUpModel",
    localField:"_id",
    foreignField:"shipment",
    justOne:false
})

ShipmentSchema.set("toJSON",{virtuals:true});
ShipmentSchema.set("toObject", {virtuals: true});

export const ShipmentModel = mongoose.model<Document>("ShipmentModel", ShipmentSchema);