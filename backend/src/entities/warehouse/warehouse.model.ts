import mongoose from "mongoose";
import {v4} from "uuid";


const WarehouseSchema = new mongoose.Schema({
    guid: {
        type:String,
    },
    warehouse_name: {
        type:String,
        required:true
    },
    warehouse_location: {
        type:String,
        required:true
    },
    warehouse_manager_guid:{
        type:String,
        required:true
    },
    freight_company:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "FreightCompanyModel"
    },
    warehouse_staff:[{
        type:mongoose.Schema.Types.ObjectId, 
        ref: "WarehouseStaffModel"
    }],
    warehouse_current_shipment:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "WarehouseShippmentModel"
    }],
    warehouse_expected_shipment:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "WarehouseShippmentModel"
    }],
    warehouse_vacant:{
        type: Boolean,
        default:true
    }
},{
    timestamps:true
});

WarehouseSchema.pre("save", async function(){
    this.guid = v4();
})  


export const WarehouseModel = mongoose.model<mongoose.Document>("WarehouseModel", WarehouseSchema)