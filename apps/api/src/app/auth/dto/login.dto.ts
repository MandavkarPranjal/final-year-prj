import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class LoginDto{

  @IsEmail()
  @MaxLength(250)
  email: string;

  @IsNotEmpty()
  password: string;
}