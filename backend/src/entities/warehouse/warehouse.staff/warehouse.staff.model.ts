import mongoose, {Document} from "mongoose";
import { v4 } from "uuid";
import bcrypt from "bcrypt";


const WarehouseStaffSchema = new mongoose.Schema({
    staff_id:{
        type:String,
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
        required: true
    },  
    role: {
        type:String,
        required: true
    }, 
},{timestamps:true})

WarehouseStaffSchema.pre("save", async function(){
    this.staff_id = v4();
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    
})


export const WarehouseStaffModel =  mongoose.model<Document>("WarehouseStaffModel", WarehouseStaffSchema)