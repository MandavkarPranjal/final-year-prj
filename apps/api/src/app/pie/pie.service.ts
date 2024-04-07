import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../prisma/prisma.service';

@Injectable()
export class PieService {
    constructor(private prisma: PrismaService) {}

    async getUserCount(gender: string): Promise<number> {
        const count = await this.prisma.appointment.count({
            where : { gender },
        });
        return count
    }
}
