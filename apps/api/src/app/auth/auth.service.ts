/* eslint-disable @nx/enforce-module-boundaries */
import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto
  , UpdatePasswordDto
  , UpdateRoleDto 
} from './dto/update-auth.dto';
import { PrismaService } from '../../../../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from '../utils/constant';
import { Request, Response } from 'express';
import { ViewUserDto } from './dto/view-user.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}
  
  async createUser(createAuthDto: CreateAuthDto) {
    const { firstName, lastName, email, phoneNumber, role, password,address_1,address_2 } = createAuthDto;
    const foundUser = await this.prisma.user.findUnique({where: {email}})

    if(foundUser) {
      throw new BadRequestException('Email already exists')
    }
    const hashedPassword = await this.hashPassword(password);

    await this.prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        phoneNumber,
        role,
        address_1,
        address_2,
        hashedPassword,
      }
    })

    return {message: 'User created successfully'};
  }

  async signin(data: LoginDto):Promise<ViewUserDto> {
    const user = await this.prisma.user.findFirst({where: {email: data.email}})
    if(!user){
        throw new NotFoundException({
            message:'Couldnt find user'
        })
    }

    const isMatch = await this.comparePasswords({password: data.password, hash: user.hashedPassword})
    if(!isMatch){
      throw new BadRequestException('Invalid credentials');
    }
    return user
  }

  async signout(req: Request, res: Response) {
    res.clearCookie('token')
    return res.send({message: 'Logged out successfully'})
  }

  async updateUser(id: string, updateAuthDto: UpdateAuthDto){
    const { firstName, lastName, email, phoneNumber, address_1,address_2, role} = updateAuthDto;
    const foundUser = await this.prisma.user.findUnique({where: {id}})

    if(!foundUser) {
      throw new BadRequestException('User not found')
    }

    await this.prisma.user.update({
      where: {id},
      data: {
        firstName,
        lastName,
        email,
        phoneNumber,
        address_1,
        address_2,
        role
      }
    })
  }

  async updateRole(id: string, updateRoleDto: UpdateRoleDto){
    const { role } = updateRoleDto;
    const foundUser = await this.prisma.user.findUnique({where: {id}})

    if(!foundUser) {
      throw new BadRequestException('User not found')
    }

    await this.prisma.user.update({
      where: {id},
      data: {
        role
      }
    })
  }

  async updatePassword(id: string, updatePasswordDto: UpdatePasswordDto){
    const { password } = updatePasswordDto;
    const foundUser = await this.prisma.user.findUnique({where: {id}})

    if(!foundUser) {
      throw new BadRequestException('User not found')
    }

    const hashedPassword = await this.hashPassword(password);

    await this.prisma.user.update({
      where: {id},
      data: {
        hashedPassword
      }
    })
  }

  async deleteUser(id: string){
    const foundUser = await this.prisma.user.findUnique({where: {id}})

    if(!foundUser) {
      throw new BadRequestException('User not found')
    }

    await this.prisma.user.delete({where: {id}})
  }

  async hashPassword(password: string){
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }

  async comparePasswords(args: {password: string, hash: string}) {
    return await bcrypt.compare(args.password, args.hash);
  }

  async signToken(args: {id: string, email: string}) {
    const payload = args;

    return this.jwt.signAsync(payload, {secret: jwtSecret})
  }

//---------------------------------Create user function---------------------------------

  // async  createUser(createAuthDto: CreateAuthDto){
  //   const { email, password,phoneNumber,firstName,lastName,address_1,address_2 } = createAuthDto;

  //   const foundUser = await this.prisma.user.findUnique({where: {email}})

  //   if(foundUser) {
  //     throw new BadRequestException('user already exists')
  //   }

  //   const hashedPassword = await this.hashPassword(password);
    
  //   const user = await this.prisma.user.create({
  //     data: {
  //       email,
  //       hashedPassword,
  //       phoneNumber, 
  //       firstName,
  //       lastName,
  //       address_1,
  //       address_2
  //     }
  //   })


   // return (" user created successfully");
}





