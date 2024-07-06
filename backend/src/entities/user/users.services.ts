import { UserModel } from "./users.model"
import { UserInterface } from "./users.types";


export const findAllUsers = async ()=>{
    const user_query:UserInterface[] = await UserModel.find();
    return user_query;
}

export const findUserById = async (id:string)=>{
    const user_query:UserInterface = await UserModel.findById(id);
    return user_query;
}


export const findUserByEmail = async (email:string)=>{
    const user_query:UserInterface = await UserModel.findOne({email});
    return user_query;
}

export const findUserByEmailSelect = async (email:string)=>{
    const user_query:UserInterface = await UserModel.findOne({email}).select("+passwordHash");
    return user_query;
}

export const addUser = async (data: UserInterface):Promise<any> =>{
    //let user_with_email:UserInterface = await findUserByEmail(data.email);

    // if(data.role.role == "admin" || data.role.role=="Admin" || data.role.role=="ADMIN"){
    //     return 
    // }

    // if(user_with_email){
    //     return;
    // }
   

    const user_created = await UserModel.create(data);
    return user_created;

}