import { HttpException, Injectable , HttpStatus} from '@nestjs/common';
import { CreateAppointmentDto as CADto} from './dto/create-appointment.dto';
import { PrismaService } from '../../../../../prisma/prisma.service';
import { createTransport } from 'nodemailer';
// import { HttpStatus } from '@nestjs/common';

const transporter = createTransport({
  service: 'gmail',
  auth: {
      user: 'wellappoint@gmail.com',
      pass: 'fosc bstw wvnx ttoy'
}});

@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService) {}
  async getData(){
    const appointment : CADto[] = await this.prisma.appointment.findMany();
    return appointment;
  }

  async getAppointment(id: number){
    const appointment = await this.prisma.appointment.findFirst({
      where:{
        id: id
      }
    })
    if(appointment){
      return appointment;
    }
    throw new HttpException("Appointment does not exist", HttpStatus.BAD_REQUEST);
  }

  async bookAppointment(data: CADto){
    const patient = await this.prisma.appointment.create({
        data: data
    })
    console.log('Appointment Booked')

    const emailTemplate = `
      <p>Hello ${data.firstName},</p>
      <p>Your appointment has been booked successfully.</p>
    `;

    const mailOptions = {
      from: 'wellappoint@gmail.com',
      to: `${data.email}`,
      subject: 'Subject of the email',
      html: emailTemplate
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    return patient;
  }

  async updateAppointment(id: number, data: CADto){
    console.log(" updated Appointment");
    // check if appointment exists
    const tempAppointment = await this.prisma.appointment.findFirst({
      where:{
        id: id
      }
    })
    if(tempAppointment){
      const updatedAppointment = await this.prisma.appointment.update({
        where:{
          id: id
        },
        data : data
      })

      return updatedAppointment;

    }
    throw new HttpException("Appointment does not exist", HttpStatus.BAD_REQUEST);
  }

  async getCalData(){
    const appointment = await this.prisma.appointment.findMany({
      select : {
        firstName: true,
        lastName: true,
        bookingDate: true,
      }
    });

    const title = appointment.map(appointment => `${appointment.firstName} ${appointment.lastName}`);
    const date = appointment.map(appointment => appointment.bookingDate);

    return {title, date};
  }

  async deleteAppointment(id: number){
    const appointment = await this.prisma.appointment.findFirst({
      where:{
        id: id
      }
    })
    if(appointment){
      const deletedAppointment = await this.prisma.appointment.delete({
        where:{
          id: id
        }
      })
      return deletedAppointment;
    }
    throw new HttpException("Appointment does not exist", HttpStatus.BAD_REQUEST);
  }
}
