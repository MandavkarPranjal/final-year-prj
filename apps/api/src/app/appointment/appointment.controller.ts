import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto as CADto } from './dto/create-appointment.dto';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get('all')
  getData() {
    return this.appointmentService.getData();
  }

  @Post('create')
  bookAppointment(@Body() dto: CADto) {
    return this.appointmentService.bookAppointment(dto);
  }
}
