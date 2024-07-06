import { NextFunction, Router, Request, Response } from "express";
import Controller from "../../interfaces/controllers.interface";
import { findUserByEmailSelect,findUserById, addUser } from "../../entities/user/users.services";
import bcrypt from "bcrypt";
import { createCookie, createRefreshToken, createToken } from "./auth.helpers";
import { generateCode } from "../../helpers/code-gen/code.generation";
import { sendEmail } from "../../helpers/mail/mail.helper";
import { UserModel } from "../../entities/user/users.model";
import jwt from 'jsonwebtoken';
import UserNotFoundException from "../../exceptions/user/user.not.found.exception";
import EmptyFieldException from "../../exceptions/auth/empty.fields.exception";
import { AuthResponseDataType, ChangePasswordRequestType, ForgotPasswordRequestType, LoginRequestBody, RegisterRequestBody, VerifyEmailRequestType } from "./auth.types";
import WrongPasswordException from "../../exceptions/auth/wrong.password.exception";
import InvalidTokenException from "../../exceptions/auth/invalid.token.exception";
import UserAlreadyExistsException from "../../exceptions/auth/user.exists.exception";
import { RequestType, ResponseType } from "types";
import { UserInterface } from "entities/user/users.types";

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


    private async register(req:RequestType<RegisterRequestBody>, res:Response, next:NextFunction){
        const code_generated = generateCode();
        const req_body:RegisterRequestBody = req.body.payload;

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
            next(new UserAlreadyExistsException(req.body.payload.email))
        }

        const token = createToken(created_user._id);
        const refreshToken = createRefreshToken(created_user._id);

        const response_data:AuthResponseDataType = {
            id: created_user._id, 
            access_token : token ,
            refresh_token: refreshToken
        }

        //res.setHeader("Set-Cookie", [createCookie(token)]);

        const response:ResponseType<AuthResponseDataType> = {
            success: true, 
            message: "User registered successfully",
            data: response_data
        }


        res.status(200).json(response)
        next()
    }

    private async login(req:RequestType<LoginRequestBody>, res:Response, next:NextFunction){
        let {email, password} = req.body.payload;
        const user_query:UserInterface = await findUserByEmailSelect(email);

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

        const valid_password:boolean = await bcrypt.compare(password, user_query.passwordHash);
        if (!valid_password){
            next(new WrongPasswordException())
        }

        const token:string = createToken(user_query._id);
        const refreshToken = createRefreshToken(user_query._id);

        //res.setHeader("Set-Cookie",[createCookie(token)]);

        const response_data:AuthResponseDataType = {
            id: user_query._id, 
            access_token : token ,
            refresh_token: refreshToken
        }


        const response:ResponseType<AuthResponseDataType> = {
            success: true, 
            message: "User login success",
            data: response_data
        }

        res.status(200).json(response)
        next()


    }

    private async refreshToken(req:RequestType<string>, res:Response, next:NextFunction){
        const token = req.body.payload;

        if (!token){
            next(new EmptyFieldException())
        }

        jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err:any, data:any)=>{
            if (err){
                next(new InvalidTokenException())
            }

            const new_token = createToken(data.id)

            const response: ResponseType<string> ={
                success: true, 
                message: "Refresh token generated successfully",
                data: new_token
            } 

            res.status(200).json(response)
        })

    }

    private async verifyEmail(req:RequestType<VerifyEmailRequestType>, res:Response, next:NextFunction){
        const code_from_request:number = req.body.payload.code;
        const user_id:string = req.body.payload.id;

        if(!code_from_request || !user_id ){
            next(new EmptyFieldException())
        }

       
        const user_query:UserInterface = await UserModel.findById(user_id).select("verify_email.verification_code");

        if(!user_query){
            next(new UserNotFoundException(user_id))
        }
        
        if (code_from_request == user_query.verify_email.verification_code){
            const update_data = {
                verify_email:{
                    email_verified:true
                }
            }
        
            const updated_user:UserInterface = await UserModel.findByIdAndUpdate(user_query._id, update_data, {new:true})
            const response:ResponseType<AuthResponseDataType> = {
                success: true, 
                message: "User email verified successfully",
                data: update_data
            }
           
            res.status(200).json(response)
            next()
        }
        else{

            const response:ResponseType<AuthResponseDataType> = {
                success: false, 
                message: "Wrong verification code!",
                data: ""
            }
           

            res.status(200).json(response)
            next()
        }   
        
    }

    private async forgotPassword(req:RequestType<ForgotPasswordRequestType>, res:Response, next:NextFunction){
        const code_generated = generateCode();
        const user_email = req.body.payload.email;
        const user_id = req.body.payload.id;

        if(!user_id || !user_email){
            next(new EmptyFieldException())
        }

        sendEmail(user_email, "Email Verification Code",`${code_generated}`, "Kindly enter the code provided to verify accout" );

       
        const user_query = await UserModel.findById(user_id).select("account_recovery.recovery_code");
        if(!user_query){
            next(new UserNotFoundException(user_id))
        }

        const update_data = {
            account_recovery:{
                recovery_code: code_generated
            }
        }

        const updated_user = await UserModel.findByIdAndUpdate(user_query._id, update_data, {new:true})
        
        const response:ResponseType<AuthResponseDataType> = {
            success: true, 
            message: "Account recovery code sent",
            data: ""
        }

        res.status(200).json(response)
        next()
        
    
    }

    private async accountRecoveryCodeVerification(req:RequestType<VerifyEmailRequestType>, res:Response, next:NextFunction){
        const code_from_request = req.body.payload.code;
        const user_id = req.body.payload.id;

        if(!code_from_request || !user_id){
            next(new EmptyFieldException())
        }
        
        const user_query = await UserModel.findById(user_id).select("account_recovery.recovery_code");
        if(!user_query){
            next(new UserNotFoundException(user_id))
        }
        
        if(code_from_request === user_query.account_recovery.recovery_code){
            const update_data = {
                account_recovery:{
                    recovery_code_verified: true
                }
            }
    
            const updated_user = await UserModel.findByIdAndUpdate(user_query._id, update_data, {new:true})
            const response:ResponseType<AuthResponseDataType> = {
                success: true, 
                message: "Account recovery code verified",
                data: ""
            }

            res.status(200).json(response)
            next()
        }else{
            const response:ResponseType<AuthResponseDataType> = {
                success: false, 
                message: "Wrong code",
                data: ""
            }
            res.status(200).json(response)
            next()
        }
      
    }

    private async changePassword(req:RequestType<ChangePasswordRequestType>, res:Response, next:NextFunction){
       
        const new_password = req.body.payload.password;
        const user_id = req.body.payload.id;

        if(!new_password || !user_id){
            next(new EmptyFieldException())
        }

        const user_query = await UserModel.findById(user_id).select("account_recovery.recovery_code_verified");
        if(!user_query){
            next(new UserNotFoundException(user_id))
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
            
            const response:ResponseType<AuthResponseDataType> = {
                success: true, 
                message: "Password change successful",
                data: ""
            }
            
            res.status(200).json(response)
            
        }else{
            const response:ResponseType<AuthResponseDataType> = {
                success: false, 
                message: "Recovery code not verfied, kindly verify.",
                data: ""
            }
            
            res.status(200).json(response)

        }
       
    }

    
}

export default AuthController