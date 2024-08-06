import { ResponseType } from "../../types"

export const generateResponse = <T>(success:boolean = true , message:string, data:T):ResponseType<T>=>{
    return {
        success,
        message,
        data
    }
}
