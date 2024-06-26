import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateCalendarDto } from './dto/update-calendar.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class CalendarService {
  async createEvent(req, res) {
    const { title, start, end, allDay } = req.body;

    const event = await prisma.event.create({
      data: {
        title,
        start,
        end,
        allDay,
      },
    });
    res.json(event);
    return event;
  }

  findAll() {
    return prisma.event.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} calendar`;
  }

  update(id: number, updateCalendarDto: UpdateCalendarDto) {
    return `This action updates a #${id} calendar`;
  }

  async removeEvent(id: string) {
    const Event = await prisma.event.findFirst({
      where: {
        id: id
      }
    })
    if (Event) {
      const deletedEvent = await prisma.event.delete({
        where: {
          id: id
        }
      })
      return deletedEvent;
    }
    throw new HttpException("Event does not exist", HttpStatus.BAD_REQUEST);
  }
}
