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
    <h3>
    Dear ${data.firstName} ${data.lastName}, <br><br>

    I hope this email finds you well. <br>

    I am writing to confirm the appointment you recently booked with WellAppoint. We appreciate your trust in our services and are committed to providing you with the best possible experience.<br><br>

    Here are the details of your upcoming appointment:<br>

    Date: ${data.bookingDate}<br>
    Time: ${data.bookingTime}<br><br>


    If, for any reason, you need to reschedule or cancel your appointment, please let us know at least 3 hours in advance. This allows us to accommodate other patients and manage our schedule efficiently.<br>

    Thank you for choosing WellAppoint. We are dedicated to supporting your health and well-being.<br><br>

    Best regards,<br>

    WellAppoint Team
    </h3>
    `;

    const mailOptions = {
      from: 'wellappoint@gmail.com',
      to: `${data.email}`,
      subject: 'Appoinment Confirmation',
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
      },
      select: {
        bookingDate: true,
        bookingTime: true
      }
    })
    if(tempAppointment){
      const updatedAppointment = await this.prisma.appointment.update({
        where:{
          id: id
        },
        data : data,
      })

      const newAppointment = await this.prisma.appointment.findFirst({
        where : {
          id : id
        },
        select : {
          bookingDate: true,
          bookingTime: true
        }
      })

      const emailTemplate = `
      <h1>Appointment Rescheduled - WellAppoint Hospital</h1>
      <p>Dear ${data.firstName} ${data.lastName},</p>
      <p>We hope this message finds you in good health. This is to inform you that there has been a change in the scheduling of your upcoming appointment at WellAppoint Hospital.</p>
      <p><strong>Original Appointment Details:</strong></p>
      <p><strong>Date:</strong> ${tempAppointment.bookingDate}</p>
      <p><strong>Time:</strong> ${tempAppointment.bookingTime}</p>
      <p><strong>New Appointment Details:</strong></p>
      <p><strong>Date:</strong> ${newAppointment.bookingDate}</p>
      <p><strong>Time:</strong> ${newAppointment.bookingTime}</p>
      <p>We understand that changes in appointment schedules can be inconvenient, and we sincerely apologize for any disruption this may cause. Our team is committed to providing you with the best possible care, and we appreciate your understanding in this matter.</p>
      <p>If the rescheduled timing is not convenient for you or if you have any concerns, please feel free to reach out to our scheduling team at [Hospital Contact Number] to discuss alternative options.</p>
      <p>Once again, we apologize for any inconvenience, and we appreciate your cooperation. Thank you for choosing WellAppoint Hospital for your healthcare needs.</p>
      <p>Best regards,<br>
          WellAppoint Team<br>
    `;

    const mailOptions = {
      from: 'wellappoint@gmail.com',
      to: `${data.email}`,
      subject: 'Appoinment Rescheduled',
      html: emailTemplate
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

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
      where: {
        id: id
      },
      select: {
        firstName: true,
        lastName: true,
        email: true,
        bookingDate: true,
        bookingTime: true
      }
    });
    if(appointment){
      const deletedAppointment = await this.prisma.appointment.delete({
        where:{
          id: id
        }
      })

      const emailTemplate = `
      <h1>Important Notice: Appointment Cancellation</h1>
      <p>Dear ${appointment.firstName} ${appointment.lastName},</p><br>
      <p>I hope this email finds you well. I am writing to inform you of a change in your upcoming appointment at WellAppoint Hospital.</p>
      <p>Unfortunately, due to unforeseen circumstances, we regret to inform you that your scheduled appointment on <strong>${appointment.bookingDate} at ${appointment.bookingTime} has been canceled.</strong> We understand the importance of your healthcare and sincerely apologize for any inconvenience this may cause.</p>
      <p>We understand that unexpected changes can be frustrating, and we appreciate your understanding and cooperation during this time. Our priority is to provide you with the best possible care, and we are committed to ensuring that you receive the attention you need.</p>
      <p>Once again, we apologize for any inconvenience this may cause, and we appreciate your patience as we work to reschedule your appointment. If you have any questions or concerns, please feel free to respond to this email or contact our office directly.</p>
      <p>Thank you for choosing WellAppoint Hospital for your healthcare needs. We look forward to assisting you in rescheduling your appointment and continuing to provide you with the highest level of care.</p>
      <p>Best regards,<br>
          WellAppoint Team<br>
    `;

    const mailOptions = {
      from: 'wellappoint@gmail.com',
      to: `${appointment.email}`,
      subject: 'Important Notice: Appointment Cancellation',
      html: emailTemplate
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

      return deletedAppointment;
    }
    throw new HttpException("Appointment does not exist", HttpStatus.BAD_REQUEST);
  }
}
