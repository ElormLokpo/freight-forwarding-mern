import { emailRegex } from "../../constants";
import mongoose from "mongoose";
import {v4} from "uuid";
import { NextFunction } from "express";
import bcrypt from "bcrypt";
import UserInterface from "./users.interface";

const addressSchema =  new mongoose.Schema({
    country: {
        type: String,
        default: "Ghana"
    },
    city:{type:String},
});

const roleSchema = new mongoose.Schema({
    role:{
        type:String, 
        required:true
    },
    section:{
        type:String, 
        
    }
})

const userSchema = new mongoose.Schema({
    guid:{
        type: String, 
        default: v4, 
        unique: true
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
    role: roleSchema
    
},{timestamps:true})

userSchema.virtual("fullname").get(function(){
    return `${this.firstname} ${this.othernames} ${this.lastname}`
})

userSchema.pre("save", async function(next: NextFunction){
    const user = this;

    if(!user.guid){
        user.guid = v4();
    }

    if (user.isModified("passwordHash")){
        const salt = await bcrypt.genSalt(10);
        user.passwordHash = await bcrypt.hash(user.passwordHash, salt);
    }
    
    next();
})

export const UserModel = mongoose.model<UserInterface & mongoose.Document>("UserModel",userSchema)