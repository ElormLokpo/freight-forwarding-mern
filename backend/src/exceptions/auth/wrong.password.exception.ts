import HttpException from "../http.exception";

class WrongPasswordException extends HttpException{
    constructor(){
        super(401, "Incorrect password")
    }   
}

export default WrongPasswordException;