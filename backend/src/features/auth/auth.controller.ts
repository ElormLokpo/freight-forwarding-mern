import { NextFunction, Router, Request, Response } from "express";
import Controller from "../../interfaces/controllers.interface";
import { findUserByEmailSelect } from "../../entities/user/users.services";
import bcrypt from "bcrypt";

class AuthController implements Controller{
    public path = "/auth"
    public router = Router();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.post(`${this.path}/login`,this.login)
    }

    private async login(req:Request, res:Response, next:NextFunction){
        let {email, password} = req.body;
        const user_query = await findUserByEmailSelect(email);
        if(!user_query){
            return 
        }

        

        const valid_password = await bcrypt.compare(password, user_query.passwordHash);
        if (!valid_password){
            return
        }

        res.status(200).json({
            message: "Login successful"
        })


    }
}

export default AuthController