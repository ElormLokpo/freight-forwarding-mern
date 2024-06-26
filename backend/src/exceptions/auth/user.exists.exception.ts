import HttpException from "../http.exception";

class UserAlreadyExistsException extends HttpException{
   constructor(item:string){
        super(401, `User with: ${item} already exists`);
   }
}

export default UserAlreadyExistsException