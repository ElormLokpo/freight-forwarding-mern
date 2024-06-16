import jwt from "jsonwebtoken";

export const createToken = (guid:string)=>{
    const expiresIn= 60*60;
    const tokenContent = {
        id: guid
    }
    const secret = process.env.TOKEN_SECRET
    const token = jwt.sign(tokenContent,secret, {expiresIn});
    return {
        expiresIn, token
    }
}

export const createCookie = (token:any)=>{
    return `Authorization=${token.token};HttpOnly;Max-Age=${token.expiresIn}`
}