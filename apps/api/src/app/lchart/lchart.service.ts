import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../prisma/prisma.service';

@Injectable()
export class LchartService {
    constructor(private prisma: PrismaService) {}

    async getAppointmentCountByGenderAndMonth(gender: string, month: number): Promise<number> {
      const appointments = await this.prisma.appointment.findMany({
        where: {
          gender,
        },
      });
  
      const filteredAppointments = appointments.filter((appointment) => {
        const appointmentMonth = new Date(appointment.bookingDate).getMonth() + 1; // Adding 1 to convert from zero-based to one-based index
        return appointmentMonth === month;
      });
  
      const count = filteredAppointments.length;
      return count;
    }
}
