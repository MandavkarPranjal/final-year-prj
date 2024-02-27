import { Module } from '@nestjs/common';
import { PieService } from './pie.service';
import { PieController } from './pie.controller';

@Module({
  controllers: [PieController],
  providers: [PieService],
})
export class PieModule {}
