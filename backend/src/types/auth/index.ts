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

