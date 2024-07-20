import mongoose, {Document} from "mongoose";
import {v4} from "uuid";

const addressSchema =  new mongoose.Schema({
    country: {
        type: String,
        default: "Ghana"
    },
    city:{type:String},
    gps_location:{type:String}
},{
    _id: false
});


const FreightCompanySchema = new mongoose.Schema({
    _id:{type:String},
    company_name:{
        type:String,
        required:true
    },
    address: addressSchema,
    email:{type:String}, 
    phone:{type:String},
    urls:{type:String},
    owner:{
         type: String, 
         ref:"UserModel",
         required:true

     }
}, {timestamps: true})

FreightCompanySchema.pre("save", async function(){
    this._id = v4();
});

FreightCompanySchema.virtual("warehouses",{
    ref:"WarehouseModel",
    localField: "_id",
    foreignField:"freight_company_id",
    justOne: false
})

FreightCompanySchema.virtual("current_shipment",{
    ref:"ShipmentModel",
    localField:"_id",
    foreignField:"freight_company",
    justOne:false

})

FreightCompanySchema.set("toJSON",{virtuals:true});
FreightCompanySchema.set("toObject", {virtuals:true});

export const FreightCompanyModel = mongoose.model<Document>("FreightCompanyModel", FreightCompanySchema);