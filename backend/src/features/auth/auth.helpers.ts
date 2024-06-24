import jwt from "jsonwebtoken";

export const createToken = (guid:string)=>{
    const expiresIn= 60*60;
    const payload = {
        id: guid
    }
    const secret = process.env.TOKEN_SECRET
    const token = jwt.sign(payload,secret, {expiresIn});
    return token
    
}

export const createRefreshToken = (guid:string)=>{
    const expiresIn  = 60*60; 
    const tokenSecret = process.env.REFRESH_TOKEN_SECRET;
    let payload = {
        id: guid
    }

    return jwt.sign(payload, tokenSecret, {expiresIn})
}

export const createCookie = (token:any)=>{
    return `Authorization=${token.token};HttpOnly;Max-Age=${token.expiresIn}`
}