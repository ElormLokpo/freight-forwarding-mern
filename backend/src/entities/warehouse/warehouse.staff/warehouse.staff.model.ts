import mongoose, {Document} from "mongoose";
import { v4 } from "uuid";
import bcrypt from "bcrypt";


const WarehouseStaffSchema = new mongoose.Schema({
    _id:{
        type:String, 
        
    },
    warehouse_id:{
        type:String, 
        ref: "WarehouseModel"
    },
    staff_id:{
        type:Number,
        
    }, 
    fullname: {
        type:String,
        required: true
    }, 
    phone: {
        type:String,
       
    },  
    email:{
        type:String,
       
    },  
   
    role: {
        type:String,
       
    }, 
},{timestamps:true})

WarehouseStaffSchema.pre("save", async function(){
    this._id = v4();
    this.staff_id = Math.floor(100000 + Math.random() * 900000);
 
    
})


export const WarehouseStaffModel =  mongoose.model<Document>("WarehouseStaffModel", WarehouseStaffSchema)