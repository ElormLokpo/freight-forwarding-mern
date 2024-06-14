import { UserModel } from "./users.model"
import { CreateUserDto } from "./users.dto";


export const findAllUsers = async ()=>{
    const user_query = await UserModel.find();
    return user_query;
}

export const findUserById = async (id:any)=>{
    const user_query = await UserModel.findById(id);
    return user_query;
}

export const findUserByGuid = async (guid:string)=>{
    const user_query = await UserModel.findOne({guid});
    return user_query;
}

export const findUserByEmail = async (email:string)=>{
    const user_query = await UserModel.findOne({email});
    return user_query;
}

export const addUser = async (data: CreateUserDto)=>{
    let user_with_email = findUserByEmail(data.email);

    // if(data.role.role == "admin" || data.role.role=="Admin" || data.role.role=="ADMIN"){
    //     return 
    // }

    // if(user_with_email){
    //     return;
    // }

    const user_created = await UserModel.create(data);
    return user_created;

}