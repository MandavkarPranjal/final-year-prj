import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  UpdateAuthDto
  , UpdatePasswordDto
  , UpdateRoleDto
} from './dto/update-auth.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('create-user')
  createUser(@Request() req, @Res() res) {
    // createUser(@Body() datafirstname: string, lastname: string, email: string, phoneNumber: string, role: Role[], address_1: string, address_2: string, password: string) {
    return this.authService.createUser(req.body, res);
  }

  // @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.signin(loginDto);
  }

  @Post('/logout')
  logout(@Request() req): string {
    req.session.destroy();
    return 'You are logged out'
  }

  @Patch('update-user/:id')
  updateUser(
    @Param('id') id: string,
    @Body() updateAuthDto: UpdateAuthDto
  ) {
    return this.authService.updateUser(id, updateAuthDto);
  }

  @Patch('update-role/:id')
  updateRole(
    @Param('id') id: string,
    @Body() updateRoleDto: UpdateRoleDto
  ) {
    return this.authService.updateRole(id, updateRoleDto);
  }

  @Patch('update-password/:id')
  updatePassword(
    @Param('id') id: string,
    @Body() updatePasswordDto: UpdatePasswordDto
  ) {
    return this.authService.updatePassword(id, updatePasswordDto);
  }

  @Delete('delete-user/:id')
  deleteUser(@Param('id') id: string) {
    return this.authService.deleteUser(id);
  }


  //------------update Team -----------

  @Patch('teamUpdate/:id')
  async updateTeam(@Body() dto: UpdateAuthDto, @Param('id') id: string) {
    // dto.id = Number(id);
    return this.authService.updateTeam(id, dto);
  }

  @Delete('delete/:id')
  deleteTeam(@Param('id') id: string) {
    return this.authService.deleteTeam(id);
  }



  @Get('get/:id')
  getTeam(@Param('id') id: string) {
    return this.authService.getTeam(id);
  }

}
