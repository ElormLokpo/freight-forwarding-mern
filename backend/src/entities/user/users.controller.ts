import Controller from "../../interfaces/controllers.interface";
import {Router, Request, Response, NextFunction} from "express";
import { addUser, findAllUsers, findUserByEmail, findUserByGuid, findUserById } from "./users.services";
import { CreateUserDto } from "./users.dto";
import { UserModel } from "./users.model";

class UsersController implements Controller{

    public path = "/users";
    public router = Router();
    public UserModel = UserModel;

    constructor(){
        this.intializeRoutes();
    }

    intializeRoutes(){
        this.router.get(`${this.path}/get/:id`, this.getUserById);
        this.router.get(`${this.path}/get/:guid`, this.getUserByGuid);
        this.router.get(`${this.path}/get/:all`, this.getAllUsers);
        this.router.get(`${this.path}/get/:email`, this.getUserByEmail);
        this.router.post(`${this.path}/add`, this.createUser);
        this.router.patch(`${this.path}/update/:id`, this.updateUser);
        this.router.patch(`${this.path}/update/guid/:guid`, this.updateUserByGuid);
        this.router.delete(`${this.path}/delete/:id`, this.deleteUser);
        this.router.delete(`${this.path}/delete/guid/:guid`, this.deleteUserByGuid);
    }

    private async getAllUsers(req:Request, res:Response, next:NextFunction){
        const user_query = await findAllUsers();
       
        res.status(200).json({user_query});
    }

    private async getUser(params:string, method:any){
        const user_query = await method(params);
        
        if (!user_query){
            return 
        }
        return user_query;
    }

    private async getUserById(req:Request, res:Response, next:NextFunction){
        
        const user_query = await this.getUser(req.params.id,findUserById)
        res.status(200).json({user_query});
    }

    private async getUserByEmail(req:Request, res:Response, next:NextFunction){
        const user_query = await this.getUser(req.params.id,findUserByEmail)
        
        res.status(200).json({user_query});
    }

    private async getUserByGuid(req:Request, res:Response, next:NextFunction){
        const user_query = await this.getUser(req.params.id,findUserByGuid)

        res.status(200).json({user_query});
    }

    private async createUser(req:Request, res:Response, next:NextFunction){
        const user: CreateUserDto = req.body;
        
        const created_user = await addUser(user);
        res.status(200).json({created_user});

    }

    private async updateUser(req:Request, res:Response, next:NextFunction){
        const user_query = await this.getUser(req.params.id,findUserById)
        
        const updated_user = await this.UserModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json({updated_user});
    
    }

    private async updateUserByGuid(req:Request, res:Response, next:NextFunction){
        const user_query = await this.getUser(req.params.id,findUserByGuid)
       
        const updated_user = await this.UserModel.findByIdAndUpdate(user_query.id, req.body, {new:true})
        res.status(200).json({updated_user});
    
    }

    private async deleteUser(req:Request, res:Response, next:NextFunction){
        const user_query = await this.getUser(req.params.id,findUserById)
        
        const updated_user = await this.UserModel.findByIdAndDelete(req.params.id, req.body)
        res.status(200).json({updated_user});
    }

    private async deleteUserByGuid(req:Request, res:Response, next:NextFunction){
        const user_query = await this.getUser(req.params.id,findUserByGuid)
        
        const updated_user = await this.UserModel.findByIdAndDelete(user_query.id ,req.body)
        res.status(200).json({updated_user});
    }
}

export default UsersController;