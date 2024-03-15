import { Controller, Get, Query } from '@nestjs/common';
import { LchartService } from './lchart.service';

@Controller('lchart')
export class LchartController {
  constructor(private readonly lchartService: LchartService) {}

  @Get('specializations')
  async getAllSpecializations(): Promise<string[]> {
    return this.lchartService.getAllSpecializations();
  }

  @Get('gender-count')
  async getGenderCountBySpecialization(
    @Query('gender') gender: 'Male' | 'Female',
  ): Promise<number[]> {
    return this.lchartService.getGenderCountBySpecialization(gender);
  }
}
