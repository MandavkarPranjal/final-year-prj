import { Controller, Get, Post, Body } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post('appointment')
  bookAnAppointment(@Body() data:{
    firstName: string,
    lastName: string,
    address: string,
    age: number,
    gender: string,
    phoneNumber: string,
    // bookingDate: Date,
    bookingTime: string
  }) {
    return this.appService.bookAnAppointment(data);
  }
}
