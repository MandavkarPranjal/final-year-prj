import { Controller, Get } from '@nestjs/common';
import { PieService } from './pie.service';

@Controller('pie')
export class PieController {
  constructor(private readonly pieService: PieService) {}

  @Get()
  async getUserGenderCount(): Promise<{ Male: number; Female: number }> {
    const maleCount = await this.pieService.getUserCount('Male');
    const femaleCount = await this.pieService.getUserCount('Female');

    return { Male: maleCount, Female: femaleCount };
  }
}
