import {IsString, IsOptional, ValidateNested} from "class-validator";

class AddressDto{
    @IsString()
    public country: string;
    
    @IsString()
    public city: string;
}

class RoleDto{
    @IsString()
    public role: string;

    @IsString()
    public section:string
}

export class CreateUserDto{

    @IsString()
    public firstname: string;

    @IsString()
    public othernames: string;

    @IsString()
    public lastname: string;

    @IsString()
    public email: string;

    @IsString()
    public passwordHash:string

    @IsOptional()
    @ValidateNested()
    public address: AddressDto

    @ValidateNested()
    public role: RoleDto
}

