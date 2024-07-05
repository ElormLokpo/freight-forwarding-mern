import { NextFunction, Router, Request, Response } from "express";
import Controller from "../../interfaces/controllers.interface";
import { findUserByEmailSelect,findUserByGuid, addUser } from "../../entities/user/users.services";
import bcrypt from "bcrypt";
import { createCookie, createRefreshToken, createToken } from "./auth.helpers";
import { generateCode } from "../../helpers/code-gen/code.generation";
import { sendEmail } from "../../helpers/mail/mail.helper";
import { UserModel } from "../../entities/user/users.model";
import jwt from 'jsonwebtoken';
import UserNotFoundException from "../../exceptions/user/user.not.found.exception";
import EmptyFieldException from "../../exceptions/auth/empty.fields.exception";
import { LoginRequestBody, RegisterRequestBody } from "types";
import WrongPasswordException from "../../exceptions/auth/wrong.password.exception";
import InvalidTokenException from "../../exceptions/auth/invalid.token.exception";
import UserAlreadyExistsException from "../../exceptions/auth/user.exists.exception";

class AuthController implements Controller{
    public path = "/auth"
    public router = Router();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.post(`${this.path}/login`,this.login)
        this.router.post(`${this.path}/register`, this.register)
        this.router.post(`${this.path}/email/verify`, this.verifyEmail)
        this.router.post(`${this.path}/forgot-password`, this.forgotPassword)
        this.router.post(`${this.path}/recovery-code/verify`, this.accountRecoveryCodeVerification)
        this.router.post(`${this.path}/change-password`, this.changePassword)
        this.router.post(`${this.path}/refresh-token`, this.refreshToken)
    }


    private async register(req:Request<{},{}, RegisterRequestBody>, res:Response, next:NextFunction){
        const code_generated = generateCode();
        const req_body = req.body;

        if(!req_body.firstname || 
            !req_body.lastname || 
            !req_body.email ||
            !req_body.passwordHash ||
            !req_body.role.role 
        ){
            next(new EmptyFieldException())
        }

        //sendEmail(req.body.email, "Email Verification Code",`${code_generated}`, "Kindly enter the code provided to verify accout" );

        const create_user_object = {
            ...req_body, 
            verify_email:{
                verification_code: code_generated
            }
        }

        const created_user = await addUser(create_user_object);
        if(created_user === "User Exists"){
            next(new UserAlreadyExistsException(req.body.email))
        }

        const token = createToken(created_user.guid);
        const refreshToken = createRefreshToken(created_user.guid);


        res.setHeader("Set-Cookie", [createCookie(token)]);
        res.status(200).json({
            access_token: token, 
            refresh_token: refreshToken
        })
        next()
    }

    private async login(req:Request<{},{},LoginRequestBody>, res:Response, next:NextFunction){
        let {email, password} = req.body;
        const user_query = await findUserByEmailSelect(email);

        if(!email || !password){
            next(new EmptyFieldException())
        }

        if(!user_query){
            next(new UserNotFoundException(email))
        }
        
        // if(user_query.verify_email.email_verfied===false){
        //     res.status(200).json({message:"Kindly verify email"});
        //     next();
        // }

        const valid_password = await bcrypt.compare(password, user_query.passwordHash);
        if (!valid_password){
            next(new WrongPasswordException())
        }

        const token = createToken(user_query.guid);
        const refreshToken = createRefreshToken(user_query.guid);

        //res.setHeader("Set-Cookie",[createCookie(token)]);

        res.status(200).json({
            access_token: token, 
            refresh_token:refreshToken
        })
        next()


    }

    private async refreshToken(req:Request, res:Response, next:NextFunction){
        const token = req.body.token;

        if (!token){
            next(new EmptyFieldException())
        }

        jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err:any, data:any)=>{
            if (err){
                next(new InvalidTokenException())
            }

            res.status(200).json({
                access_token : createToken(data.id)
            })
        })

    }

    private async verifyEmail(req:Request, res:Response, next:NextFunction){
        const code_from_request = req.body.code;
        const user_guid = req.body.guid;

        if(!code_from_request|| !user_guid ){
            next(new EmptyFieldException())
        }

       
        const user_query = await UserModel.findOne({guid:user_guid}).select("verify_email.verification_code");

        if(!user_query){
            next(new UserNotFoundException(user_guid))
        }
        
        if (code_from_request == user_query.verify_email.verification_code){
            const update_data = {
                verify_email:{
                    email_verified:true
                }
            }
        
            const updated_user = await UserModel.findByIdAndUpdate(user_query._id, update_data, {new:true})
            res.status(200).json({message:"User email verfied successfully!"})
            next()
        }
        else{
            res.status(200).json({message:"Wrong verification code!"})
            next()
        }   
        
    }

    private async forgotPassword(req:Request, res:Response, next:NextFunction){
        const code_generated = generateCode();
        const user_email = req.body.email;
        const user_guid = req.body.guid;

        if(!user_guid || !user_email){
            next(new EmptyFieldException())
        }

        sendEmail(user_email, "Email Verification Code",`${code_generated}`, "Kindly enter the code provided to verify accout" );

       
        const user_query = await UserModel.findOne({guid:user_guid}).select("account_recovery.recovery_code");
        if(!user_query){
            next(new UserNotFoundException(user_guid))
        }

        const update_data = {
            account_recovery:{
                recovery_code: code_generated
            }
        }

        const updated_user = await UserModel.findByIdAndUpdate(user_query._id, update_data, {new:true})
        
        res.status(200).json({message:"Account recovery code sent"})
        next()
        
    
    }

    private async accountRecoveryCodeVerification(req:Request, res:Response, next:NextFunction){
        const code_from_request = req.body.code;
        const user_guid = req.body.guid;

        if(!code_from_request || !user_guid){
            next(new EmptyFieldException())
        }
        
        const user_query = await UserModel.findOne({guid:user_guid}).select("account_recovery.recovery_code");
        if(!user_query){
            next(new UserNotFoundException(user_guid))
        }
        
        if(code_from_request === user_query.account_recovery.recovery_code){
            const update_data = {
                account_recovery:{
                    recovery_code_verified: true
                }
            }
    
            const updated_user = await UserModel.findByIdAndUpdate(user_query._id, update_data, {new:true})
            
            res.status(200).json({message:"Account recovery code verified"})
            next()
        }else{
            res.status(200).json({message:"Wrong code"})
            next()
        }
      
    }

    private async changePassword(req:Request, res:Response, next:NextFunction){
       
        const new_password = req.body.password;
        const user_guid = req.body.guid;

        if(!new_password || !user_guid){
            next(new EmptyFieldException())
        }

        const user_query = await UserModel.findOne({guid:user_guid}).select("account_recovery.recovery_code_verified");
        if(!user_query){
            next(new UserNotFoundException(user_guid))
        }

        if(user_query.account_recovery.recovery_code_verified === true){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword= await bcrypt.hash(new_password, salt)

            const update_data = {
                passwordHash : hashedPassword,
                account_recovery :{
                   
                    recovery_code_verified: false

                }
            }
            const updated_user = await UserModel.findByIdAndUpdate(user_query._id, update_data, {new:true})
            res.status(200).json({message:"Password change successful!"})
            
        }else{
            res.status(200).json({message:"Unverified recovery codes"})

        }
       
    }

    
}

export default AuthController