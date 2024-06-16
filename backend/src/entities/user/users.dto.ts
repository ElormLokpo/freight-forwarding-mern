import {IsString, IsOptional, ValidateNested, IsBoolean, IsInt} from "class-validator";

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

class VerifyEmailDto{
    @IsOptional()
    @IsBoolean()
    public email_verified: boolean;

    @IsOptional()
    @IsInt()
    public verfication_code: number;
}

class AccountRecoveryDto{
    @IsOptional()
    @IsInt()
    public recovery_code:number

    @IsOptional()
    @IsBoolean()
    public recovery_code_verified:boolean
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

    @IsOptional()
    @ValidateNested()
    public verify_email: VerifyEmailDto

    @IsOptional()
    @ValidateNested()
    public account_recovery: AccountRecoveryDto

}

