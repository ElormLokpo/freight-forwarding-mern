interface UserInterface{
    guid:string, 
    firstname:string,
    othernames:string,
    lastname:string, 
    email:string,
    address:{
        country:string, 
        city:string
    },
    passwordHash:string,
    role:{
        role:string, 
        section:string
    }


}

export default UserInterface;