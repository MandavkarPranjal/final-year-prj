import { Controller, Get, Param, UseGuards, Req, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { user } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('doctors')
  getDoctors(){
    return this.usersService.getDoctors();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getMyUser(@Param() params: {id: string}, @Req() req) {
    return this.usersService.getMyUser(params.id, req);
  }

  @Get()
  getUsers(){
    return this.usersService.getUsers();
  }
}
