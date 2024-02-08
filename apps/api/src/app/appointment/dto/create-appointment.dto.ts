import { IsNotEmpty, IsNumber, IsString} from 'class-validator';

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
    public gender: string;

    @IsNotEmpty()
    @IsString()
    public phoneNumber: string;

    @IsNotEmpty()
    @IsString()
    public bookingDate: string;

    @IsNotEmpty()
    @IsString()
    public bookingTime: string;

}