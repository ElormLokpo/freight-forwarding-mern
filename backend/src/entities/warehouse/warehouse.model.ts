import mongoose from "mongoose";
import {v4} from "uuid";


const WarehouseSchema = new mongoose.Schema({
    _id: {
        type:String
    },
    name: {
        type:String,
        required:true
    },
    location: {
        type:String,
        required:true
    },
    manager_id:{
        type:String,
        ref: "UserModel"
    },
    freight_company_id:{
        type: String,
        ref: "FreightCompanyModel"
    },
   
    warehouse_vacant:{
        type: Boolean,
        default:true
    }
},{
    timestamps:true
});

WarehouseSchema.pre("save", async function(){
    this._id = v4();
})  


export const WarehouseModel = mongoose.model<mongoose.Document>("WarehouseModel", WarehouseSchema)