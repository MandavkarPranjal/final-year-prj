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
  bookingDate: string;
  bookingTime: string;
}

@Injectable()
export class AppService {
  async getData(){
    const appointment : AppointmentDTO[] = await prisma.appointment.findMany();
    return appointment;
  }

  async bookAnAppointment(data: {
    firstName: string,
    lastName: string,
    address: string,
    age: number,
    gender: string,
    phoneNumber: string,
    bookingDate: string,
    bookingTime: string
  }){

    const patient = await prisma.appointment.create({
        data: data
    })

    console.log('Appointment Booked')

    return patient;
  }
}
