import { IsEmail, IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class CreateAppointmentDto {

    @IsNotEmpty()
    @IsString()
    public firstName: string;

    @IsNotEmpty()
    @IsString()
    public lastName: string;

    @IsNotEmpty()
    @IsString()
    public address: string;

    @IsNotEmpty()
    @IsNumber()
    public age: number;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @IsString()
    public gender: string;

    @IsNotEmpty()
    @IsString()
    public phoneNumber: string;

    @IsNotEmpty()
    @IsString()
    public bookingDate: string;

    @IsNotEmpty()
    @IsString()
    public Specialization: string;

    @IsNotEmpty()
    @IsString()
    public bookingTime: string;

    @IsNotEmpty()
    @IsString()
    public userId: string;

}