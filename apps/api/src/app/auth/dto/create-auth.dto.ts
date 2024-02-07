import { IsNotEmpty, IsString, IsEmail, Length, min, minLength } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty()
  @IsString()
  public firstName: string;

  @IsNotEmpty()
  @IsString()
  public lastName: string;

  @IsNotEmpty()
  @IsString()
  @Length(10,10, { message: 'Phone number has to be at least 10 chars' }) 
  public phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  public address_1: string;

  @IsNotEmpty()
  @IsString()
  public address_2: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 20, { message: 'Passowrd has to be at between 3 and 20 chars' })
  public password: string;
}




// "email": "ar@1gmail.com",
// "password": "abr",
// "firstName": "sam",
// "lastName": "son",
// "phoneNumber": "1234567891",
// "address_1": "thane",
// "address_2": "india"