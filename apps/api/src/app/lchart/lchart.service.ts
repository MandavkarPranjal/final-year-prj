import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../prisma/prisma.service';

@Injectable()
export class LchartService {
    constructor(private prisma: PrismaService) {}

    async getAllSpecializations(): Promise<string[]> {
      const specialiaztions = await this.prisma.appointment.findMany({
        select: {
          Specialization: true,
        },
        distinct: ['Specialization'],
      });

      const uniqueScpecializations = Array.from(
        new Set(specialiaztions.map((appointment) => appointment.Specialization)),
      );

      return uniqueScpecializations;
    }

    async getGenderCountBySpecialization(
      gender: 'Male' | 'Female',
    ) : Promise<number[]> {
      const specialiaztions = await this.getAllSpecializations();

      const result = [];

      for (const specialiaztion of specialiaztions) {
        const count = await this.prisma.appointment.count({
          where: {
            Specialization: specialiaztion,
            gender,
          },
        });

        result.push(count);
      }
      return result;
    }
}
