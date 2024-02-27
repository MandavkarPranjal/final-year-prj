import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../prisma/prisma.service';

@Injectable()
export class PieService {
    constructor(private prisma: PrismaService) {}

    async pieData() {
        const genders = ['Male', 'Female', 'Other'];

        const promises = genders.map(async (gen) => {
            const count = await this.calGen(gen);
            return { [gen]: count };
        });

        const results = await Promise.all(promises);

        const mapData = Object.assign({}, ...results);

        return mapData;
    }

    async calGen(gen: string) {
        return await this.prisma.appointment.count({
            where : {
                gender: gen
            }
        })
    }
}
