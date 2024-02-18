import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-auth.dto';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {
    @IsNotEmpty()
    @IsString()
    public firstName: string;
    
    @IsNotEmpty()
    @IsString()
    public lastName: string;
    
    @IsNotEmpty()
    @IsString()
    public email: string;
    
    @IsNotEmpty()
    @IsString()
    public phoneNumber: string;
    
    @IsNotEmpty()
    @IsString()
    public address: string;
}


export class UpdateRoleDto extends PartialType(CreateAuthDto) {
    @IsNotEmpty()
    @IsString()
    public role: string;
}

export class UpdatePasswordDto extends PartialType(CreateAuthDto) {
    @IsNotEmpty()
    @IsString()
    @Length(3, 20, { message: 'Passowrd has to be at between 3 and 20 chars' })
    public password: string;
}