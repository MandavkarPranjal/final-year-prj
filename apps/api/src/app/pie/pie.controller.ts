import { Controller, Get } from '@nestjs/common';
import { PieService } from './pie.service';

@Controller('pie')
export class PieController {
  constructor(private readonly pieService: PieService) {}

  @Get()
  pieData() {
    return this.pieService.pieData();
  }
}
