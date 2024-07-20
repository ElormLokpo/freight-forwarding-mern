import { emailRegex } from "../../constants";
import mongoose from "mongoose";
import {v4} from "uuid";
import { NextFunction } from "express";
import bcrypt from "bcrypt";
import { UserInterface } from "./users.types";

const addressSchema =  new mongoose.Schema({
    country: {
        type: String,
        default: "Ghana"
    },
    city:{type:String},
},{
    _id: false
});

const roleSchema = new mongoose.Schema({
    role:{
        type:String, 
        required:true
    },
    section:{
        type:String, 
        
    }
},{
    _id:false
})

const userSchema = new mongoose.Schema({
    _id:{
        type: String,     
    },
    firstname: {
        type:String, 
        required:true
    },
    othernames:{
        type:String, 
    },
    lastname:{
        type:String, 
        required:true
    },
    email:{
        type:String, 
        required:true,
        match:[emailRegex, "Provide valid email"],
        unique:true
    },
    address: addressSchema,
    passwordHash:{
        type:String, 
        required:true,
        select:false,
        
    },
    verify_email:{
        email_verified:{
            type:Boolean, 
            default: false
        },
        verification_code:{
            type:Number,
            select:false
        }
    },
    account_recovery:{
        recovery_code:{
            type:Number,
            select:false
            
        },
        recovery_code_verified:{
            type:Boolean, 
            default: false,
            select:false
        },
    },
   
    role: roleSchema
    
},{timestamps:true})

userSchema.virtual("fullname").get(function(){
    return `${this.firstname} ${this.othernames} ${this.lastname}`
})

userSchema.virtual("freight_companies", {
    ref:"FreightCompanyModel",
    localField:"_id",
    foreignField:"owner"
})

userSchema.set("toJSON", {virtuals:true});
userSchema.set("toObject", {virtuals:true});

userSchema.pre("save", async function(next: NextFunction){
    const user = this;

    
    user._id = v4();
    

    if (user.isModified("passwordHash")){
        const salt = await bcrypt.genSalt(10);
        user.passwordHash = await bcrypt.hash(user.passwordHash, salt);
    }
    
    next();
})

export const UserModel = mongoose.model<UserInterface & mongoose.Document>("UserModel",userSchema)