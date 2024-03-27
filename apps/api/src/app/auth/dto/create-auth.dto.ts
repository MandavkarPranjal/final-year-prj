import { Role } from '@prisma/client';
import { IsNotEmpty, IsString, IsEmail, Length, min, minLength, IsPhoneNumber } from 'class-validator';

export class CreateAuthDto {

  @IsNotEmpty()
  @IsString()
  public firstName: string;

  @IsNotEmpty()
  @IsString()
  public lastName: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public email: string;
  
  @IsNotEmpty()
  @IsString()
  @Length(10,10, { message: 'Phone number has to be at least 10 chars' }) 
  public phoneNumber: string;

  @IsNotEmpty()
  public role: Role[];

  @IsNotEmpty()
  @IsString()
  public address_1: string;

  @IsNotEmpty()
  @IsString()
  public address_2: string;

  @IsString()
  public specialty: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 20, { message: 'Passowrd has to be at between 3 and 20 chars' })
  public password: string;
}
