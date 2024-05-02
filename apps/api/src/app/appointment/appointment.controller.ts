import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto as CADto } from './dto/create-appointment.dto';

@Controller('appointment')
export class AppointmentController {
  constructor(
    private readonly appointmentService: AppointmentService
  ) { }

  @Get('all')
  getData() {
    return this.appointmentService.getData();
  }

  @Get('get/:id')
  getAppointment(@Param('id') id: number) {
    return this.appointmentService.getAppointment(Number(id));
  }

  @Post('create')
  bookAppointment(@Body() dto: CADto) {
    return this.appointmentService.bookAppointment(dto);
  }

  @Patch('update/:id')
  async updateAppointment(@Body() dto: CADto, @Param('id') id: string) {
    // dto.id = Number(id);
    return this.appointmentService.updateAppointment(+id, dto);
  }

  @Get('calendar')
  getCalData() {
    return this.appointmentService.getCalData();
  }

  @Delete('delete/:id')
  deleteAppointment(@Param('id') id: string) {
    return this.appointmentService.deleteAppointment(Number(id));
  }

  @Get(':specialization')
  async getDoctorsBySpecialization(@Param('specialization') specialization: string) {
    return this.appointmentService.getDoctorsBySpecialization(specialization);
  }

  @Get('doctorAppointments/:doctorId')
  async getDoctorsAppointments(@Param('doctorId') doctorId: string) {
    return this.appointmentService.getDoctorAppointment(doctorId);
  }

}
