import jwt from "jsonwebtoken";

export const createToken = (id:string, role:string)=>{
    const expiresIn= 60*60;
    const payload = {
        id,
        role
    }
    const secret = process.env.TOKEN_SECRET
    const token = jwt.sign(payload,secret, {expiresIn});
    return token
    
}

export const createRefreshToken = (id:string, role:string)=>{
    const expiresIn  = 60*60; 
    const tokenSecret = process.env.REFRESH_TOKEN_SECRET;
    let payload = {
        id,
        role
    }

    return jwt.sign(payload, tokenSecret, {expiresIn})
}

export const createCookie = (token:any)=>{
    return `Authorization=${token.token};HttpOnly;Max-Age=${token.expiresIn}`
}