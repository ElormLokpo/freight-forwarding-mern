export interface AuthResponseDataType{
    id: string | null | null,
    access_token: string | null | null, 
    refresh_token: string | null | null
}

export interface UserInterface{
    _id?:string | null, 
    firstname:string | null,
    othernames?:string | null,
    lastname:string | null, 
    email:string | null,
    address?:{
        country?:string | null, 
        city?:string | null
    },
    passwordHash:string | null,
    role?:{
        role?:string | null, 
        section?:string | null
    },
    verify_email?:{
        email_verfied?: boolean | null,
        verification_code?: number | null
    },
    account_recovery?:{
        recovery_code?:number | null, 
        recovery_code_verified?:boolean | null
    }

}

export interface AuthStateType<T, V>{
    value: {
        tokens: T,
        current_user: V, 
        
    }
}