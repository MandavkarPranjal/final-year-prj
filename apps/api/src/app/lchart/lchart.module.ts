import { Module } from '@nestjs/common';
import { LchartService } from './lchart.service';
import { LchartController } from './lchart.controller';

@Module({
  controllers: [LchartController],
  providers: [LchartService],
})
export class LchartModule {}
