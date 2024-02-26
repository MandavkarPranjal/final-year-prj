import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class CalendarService {
  prisma: any;
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

 async removeEvent(id: number) {
//   const event = await prisma.event.findFirst({
//     where : {
//       id: id
//     }
//   });
//   if(event){
//     const remove= await this.prisma.event.delete({
//       where :{
//         id:id
//       }
//     })
//     return event;
//   }
 
  
}
}
