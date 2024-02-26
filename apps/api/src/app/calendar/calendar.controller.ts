import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
} from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';

@Controller('calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Post('/create')
  create(@Req() req , @Res() res) {
    return this.calendarService.createEvent(req, res);
  }

  @Get()
  findAll() {
    return this.calendarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calendarService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCalendarDto: UpdateCalendarDto
  ) {
    return this.calendarService.update(+id, updateCalendarDto);
  }

  @Delete(':id')
  removeEvent(@Param('id') id: string) {
    return this.calendarService.removeEvent(Number(id));
  }
}
