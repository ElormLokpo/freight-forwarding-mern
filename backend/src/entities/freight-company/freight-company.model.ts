import mongoose, {Document} from "mongoose";
import {v4} from "uuid";


const FreightCompanySchema = new mongoose.Schema({
    guid:{
        type:String,
        
    },
    freight_company_name:{
        type:String,
        required:true
    },
    // owner_id:{
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref:"UserModel"
    // }
}, {timestamps: true})

FreightCompanySchema.pre("save", async function(){
    this.guid = v4();
});


export const FreightCompanyModel = mongoose.model<Document>("FreightCompanyModel", FreightCompanySchema);