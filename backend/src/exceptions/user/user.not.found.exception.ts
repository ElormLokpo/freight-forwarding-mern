import HttpException from "../http.exception";

class UserNotFoundException extends HttpException{
    constructor(item:string){
        super(404, `User: ${item} not found!`);
    }   
}

export default UserNotFoundException;