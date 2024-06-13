import {IsString, IsOptional, ValidateNested} from "class-validator";

class UserDTO{
    @IsString()
    public string guid;
}