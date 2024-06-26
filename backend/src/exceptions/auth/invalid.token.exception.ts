import HttpException from "../http.exception";

class InvalidTokenException extends HttpException{
    constructor(){
        super(401, "Invalid token")
    }   
}

export default InvalidTokenException;