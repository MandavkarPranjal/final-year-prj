import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class AppointmentDTO{
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  age: number;
  gender: string;
  phoneNumber: string;
  bookingDate: Date;
  bookingTime: string;

}

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async bookAnAppointment(data: {
    firstName: string,
    lastName: string,
    address: string,
    age: number,
    gender: string,
    phoneNumber: string,
    // bookingDate: Date,
    bookingTime: string
  }){

    const patient = await prisma.appointment.create({
        data: data
    })

    console.log('Appointment created')

    return patient;
  }
}
