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
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto
  , UpdatePasswordDto
  , UpdateRoleDto
 } from './dto/update-auth.dto';
import { create } from 'domain';
import { LocalAuthGuard } from './local-auth.guard';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('create-user')
  createUser(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.createUser(createAuthDto);
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
}
