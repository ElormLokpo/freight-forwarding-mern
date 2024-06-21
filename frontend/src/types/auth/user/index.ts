type AddressType = {
    country: string, 
    city: string 
}

type VerifyEmailType={
    email_verified:string
}

type RoleType = {
    role: string, 
    section: string
}


export type UserType = {
    id:string, 
    guid:string,
    firstname:string, 
    lastname:string, 
    othernames:string, 
    email:string,
    address:AddressType
    verify_email: VerifyEmailType,
    role: RoleType

}

export type TokenType = {
    token: string
}
