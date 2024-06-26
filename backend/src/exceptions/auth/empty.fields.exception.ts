import HttpException from "../http.exception";

class EmptyFieldException extends HttpException{
    constructor(){
        super(406, "Required fields cannot be empty.")
    }
}

export default EmptyFieldException;