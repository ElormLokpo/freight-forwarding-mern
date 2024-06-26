import Controller from "../../interfaces/controllers.interface";
import {Router, Request, Response, NextFunction} from "express";
import { addUser, findAllUsers, findUserByEmail, findUserByGuid, findUserById } from "./users.services";
import { CreateUserDto } from "./users.dto";
import { UserModel } from "./users.model";
import UserNotFoundException from "../../exceptions/user/user.not.found.exception";

class UsersController implements Controller{

    public path = "/users";
    public router = Router();
  

    constructor(){
        this.intializeRoutes();
    }

    private intializeRoutes(){
        this.router.get(`${this.path}/all`, this.getAllUsers);
        this.router.post(`${this.path}/add`, this.createUser);
        this.router.get(`${this.path}/guid/:guid`, this.getUserByGuid);
        this.router.get(`${this.path}/email/:email`, this.getUserByEmail);
        this.router.patch(`${this.path}/guid/:guid`, this.updateUserByGuid);
        this.router.delete(`${this.path}/guid/:guid`, this.deleteUserByGuid);
    }

    private async getAllUsers(req:Request, res:Response, next:NextFunction){
        const user_query = await findAllUsers();
       
        res.status(200).json({user_query}).end();
        next();
    }
  

    private async getUserByEmail(req:Request, res:Response, next:NextFunction){
        const user_query = await findUserByEmail(req.params.email);
        
        if (!user_query){
            next(new UserNotFoundException(req.params.email))
        }

        res.status(200).json({user_query});
    }

    private async getUserByGuid(req:Request, res:Response, next:NextFunction){
        
        const user_query = await findUserByGuid(req.params.guid);

        if(!user_query){
            next(new UserNotFoundException(req.params.guid))
        }
        
        res.status(200).json({user_query});
    }

    private async createUser(req:Request, res:Response, next:NextFunction){
        const user: CreateUserDto = req.body;
       
        const created_user = await addUser(user);
        res.status(200).json({message:"User created successfully", created_user});

    }

   

    private async updateUserByGuid(req:Request, res:Response, next:NextFunction){
        const user_query = await findUserByGuid(req.params.guid);
        
        if(!user_query){
            next(new UserNotFoundException(req.params.guid))
        }
       

        const updated_user = await UserModel.findByIdAndUpdate(user_query._id, req.body, {new:true})
        res.status(200).json({updated_user});
    
    }

    private async deleteUserByGuid(req:Request, res:Response, next:NextFunction){
        const user_query = await findUserByGuid(req.params.guid);
        
        if(!user_query){
            next(new UserNotFoundException(req.params.guid))
        }

        const updated_user = await UserModel.findByIdAndDelete(user_query._id ,req.body)
        res.status(200).json({updated_user});
    }
}

export default UsersController;