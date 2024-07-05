import jwt from "jsonwebtoken";


export const createToken = (payload:any)=>{
    const token_secret = process.env.TOKEN_SECRET;
    return jwt.sign(payload, token_secret, {expiresIn:60*60});
}