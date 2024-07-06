export interface Address{
    country: string, 
    city: string
}
export interface Role{
    role:string, 
    section?:string
}

export interface RegisterRequestBody{
    firstname: string, 
    lastname: string, 
    email: string, 
    address?:Address,
    passwordHash: string, 
    role: Role
}

export interface LoginRequestBody{
    email: string,
    password: string,
}

export interface AuthResponseDataType{
    id: string,
    access_token: string, 
    refresh_token: string
}

export interface VerifyEmailRequestType{
    code: string, 
    id: string
}

export interface ForgotPasswordRequestType{
    email: string, 
    id: string
}

export interface ChangePasswordRequestType{
    password: string, 
    id: string
}