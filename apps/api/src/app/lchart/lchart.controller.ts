import { Controller, Get } from '@nestjs/common';
import { LchartService } from './lchart.service';

@Controller('lchart')
export class LchartController {
  constructor(private readonly lchartService: LchartService) {}

  @Get()
  async getUserGenderCount(): Promise<{ Male: number; Female: number }> {
    const currentMonth = new Date().getMonth() + 1; // Note: Months are zero-indexed in JavaScript
    const maleCount = await this.lchartService.getAppointmentCountByGenderAndMonth('Male', currentMonth);
    const femaleCount = await this.lchartService.getAppointmentCountByGenderAndMonth('Female', currentMonth);

    return { Male: maleCount, Female: femaleCount };
    // console.log('currentMonth', String(currentMonth))
    // return {Male: 0, Female: 0}
  }
}
