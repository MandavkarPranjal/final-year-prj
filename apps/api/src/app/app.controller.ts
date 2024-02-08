import { Controller, Get, Post, Body } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('all')
  getData() {
    return this.appService.getData();
  }

  @Post('appointment')
  bookAnAppointment(@Body() data:{
    firstName: string;
  lastName: string;
  address: string;
  age: number;
  email: string;
  phoneNumber: string;
  bookingDate: string;
  Specialization: string; 
  gender: string;
  bookingTime: string;
  
  }) {
    return this.appService.bookAnAppointment(data);
  }


  
}
