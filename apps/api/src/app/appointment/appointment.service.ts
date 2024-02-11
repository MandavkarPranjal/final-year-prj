import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto as CADto} from './dto/create-appointment.dto';
import { PrismaService } from '../../../../../prisma/prisma.service';
@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService) {}
  async getData(){
    const appointment : CADto[] = await this.prisma.appointment.findMany();
    return appointment;
  }

  async bookAppointment(data: CADto){
    const patient = await this.prisma.appointment.create({
        data: data
    })
    console.log('Appointment Booked')
    return patient;
  }
}
