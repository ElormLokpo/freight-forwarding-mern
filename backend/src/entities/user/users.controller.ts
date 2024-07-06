import Controller from "../../interfaces/controllers.interface";
import {Router, Request, Response, NextFunction} from "express";
import { addUser, findAllUsers, findUserByEmail, findUserById } from "./users.services";

import { UserModel } from "./users.model";
import UserNotFoundException from "../../exceptions/user/user.not.found.exception";
import {UpdateUserPayload, UserInterface } from "./users.types";
import { RequestType, ResponseType } from "../../types";

class UsersController implements Controller{

    public path = "/users";
    public router = Router();
  

    constructor(){
        this.intializeRoutes();
    }

    private intializeRoutes(){
        this.router.get(`${this.path}/all`, this.getAllUsers);
        this.router.post(`${this.path}/add`, this.createUser);
        this.router.get(`${this.path}/id`, this.getUserById);
        this.router.get(`${this.path}/email`, this.getUserByEmail);
        this.router.patch(`${this.path}/id`, this.updateUserById);
        this.router.delete(`${this.path}/id`, this.deleteUserById);
    }

    private async getAllUsers(req:RequestType<{}>, res:Response, next:NextFunction){
        const user_query:UserInterface[] = await findAllUsers();
       
        const response:ResponseType<UserInterface[]> = {
            success:true, 
            message:"User query successful.",
            data: user_query
        } 

        res.status(200).json(response).end();
        next();
    }
  

    private async getUserByEmail(req:RequestType<string>, res:Response, next:NextFunction){
        const user_query:UserInterface = await findUserByEmail(req.body.payload);
        
        if (!user_query){
            next(new UserNotFoundException(req.body.payload))
        }

        const response:ResponseType<UserInterface> = {
            success:true, 
            message:"User query successful.",
            data: user_query
        } 

        res.status(200).json(response);
    }

    private async getUserById(req:RequestType<string>, res:Response, next:NextFunction){
        
        const user_query:UserInterface = await findUserById(req.body.payload);

        if(!user_query){
            next(new UserNotFoundException(req.body.payload))
        }
        
        const response:ResponseType<UserInterface[]> = {
            success:true, 
            message:"User query successful.",
            data: user_query
        } 

        res.status(200).json(response);
    }

    private async createUser(req:RequestType<UserInterface>, res:Response, next:NextFunction){
        const user_mutation: UserInterface = req.body.payload;
       
        const created_user:UserInterface = await addUser(user_mutation);

        const response:ResponseType<string> = {
            success:true, 
            message:"User added successfully.",
            data: created_user._id
        } 
        res.status(200).json(response);

    }

   

    private async updateUserById(req:RequestType<UpdateUserPayload>, res:Response, next:NextFunction){
        const user_query:UserInterface = await findUserById(req.body.payload.id);
        
        if(!user_query){
            next(new UserNotFoundException(req.body.payload.id))
        }
       
        const updated_user = await UserModel.findByIdAndUpdate(user_query._id, req.body.payload.body, {new:true})


        const response:ResponseType<UserInterface[]> = {
            success:true, 
            message:"User update successful.",
            data: updated_user
        } 

        res.status(200).json(response);
    
    }

    private async deleteUserById(req:RequestType<string>, res:Response, next:NextFunction){
        const user_query:UserInterface = await findUserById(req.body.payload);
        
        if(!user_query){
            next(new UserNotFoundException(req.body.payload))
        }

        const updated_user = await UserModel.findByIdAndDelete(user_query._id ,req.body)

        const response:ResponseType<UserInterface[]> = {
            success:true, 
            message:"User deleted successfully.",
            data: ""
        } 

        res.status(200).json(response);
    }
}

export default UsersController;