import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-auth.dto';
import { Role } from '@prisma/client';
import { IsArray, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {
    @IsNotEmpty()
    @IsString()
    public name: string;
    
    @IsNotEmpty()
    @IsString()
    public email: string;
    
    @IsNotEmpty()
    @IsString()
    public phoneNumber: string;
    
    @IsNotEmpty()
    @IsString()
    public address_1: string;

    @IsNotEmpty()
    @IsString()
    public address_2: string;
    @IsNotEmpty()
    @IsArray()
    public role: Role[];

    @IsNotEmpty()
    @IsString()
    @Length(3, 20, { message: 'Passowrd has to be at between 3 and 20 chars' })
    public password: string;
}


export class UpdateRoleDto extends PartialType(CreateAuthDto) {
    @IsNotEmpty()
    @IsArray()
    public role: Role[];
}

export class UpdatePasswordDto extends PartialType(CreateAuthDto) {
    @IsNotEmpty()
    @IsString()
    @Length(3, 20, { message: 'Passowrd has to be at between 3 and 20 chars' })
    public password: string;
}