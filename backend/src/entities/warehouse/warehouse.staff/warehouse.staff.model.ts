import mongoose, {Document} from "mongoose";
import { v4 } from "uuid";
import bcrypt from "bcrypt";


const WarehouseStaffSchema = new mongoose.Schema({
    _id:{
        type:String, 
        
    },
    staff_id:{
        type:Number,
        required: true
    }, 
    fullname: {
        type:String,
        required: true
    }, 
    phone: {
        type:String,
        required: true
    },  
    email:{
        type:String,
        required: true
    },  
    password:{
        type:String,
        required: true,
        select: false
    },  
    role: {
        type:String,
        required: true
    }, 
},{timestamps:true})

WarehouseStaffSchema.pre("save", async function(){
    this._id = v4();
    this.staff_id = Math.floor(100000 + Math.random() * 900000);
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    
})


export const WarehouseStaffModel =  mongoose.model<Document>("WarehouseStaffModel", WarehouseStaffSchema)