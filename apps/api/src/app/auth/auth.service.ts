/* eslint-disable @nx/enforce-module-boundaries */
import { BadRequestException, ForbiddenException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto, UpdatePasswordDto, UpdateRoleDto } from './dto/update-auth.dto';
import { PrismaService } from '../../../../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from '../utils/constant';
import { Request, Response } from 'express';

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

  async signin(createAuthDto: CreateAuthDto, req: Request, res: Response) {
    const {email, password} = createAuthDto;

    const foundUser = await this.prisma.user.findUnique({where: {email}});

    if(!foundUser) {
      throw new BadRequestException('Invalid credentials')
    }

    const isMatch = await this.comparePasswords({password, hash: foundUser.hashedPassword})
    if(!isMatch) {
      throw new BadRequestException('Invalid credentials')
    }

    const token = await this.signToken({id: foundUser.id, email: foundUser.email})
    if(!token) {
      throw new ForbiddenException()
    }
    res.cookie('token', token)

    return res.send({message: 'Logged in successfully'})
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



  //-------------------------Update Team --------------------

  async updateTeam(id: string, data: CreateAuthDto){
    console.log(" updated team");
    // check if appointment exists
    const tempTeam = await this.prisma.user.findFirst({
      where:{
        id: id
      }
    })

    const hashedPassword = await this.hashPassword(data.password);

    if(tempTeam){
      const updatedAppointment = await this.prisma.user.update({
        where:{
          id: id
        },
        data : {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          address_1: data.address_1,
          address_2: data.address_2,
          role: data.role,
          hashedPassword: hashedPassword
        }
      })

      return updatedAppointment;

    }
    throw new HttpException("Appointment does not exist", HttpStatus.BAD_REQUEST);
  }

  async deleteTeam(id : string){
    console.log(" Deleted Team");
    const team = await this.prisma.user.findFirst({
      where:{
        id: id // Convert id to number type
      }
    })
    if(team){
      const deletedTeam = await this.prisma.user.delete({
        where:{
          id: id // Convert id to number type
        }
      })
      return deletedTeam;
    }
    throw new HttpException("Appointment does not exist", HttpStatus.BAD_REQUEST);

  }


  async getTeam(id: string){
    const team= await this.prisma.user.findFirst({
      where:{
        id: id
      }
    })
    if(team){
      return team;
    }
    throw new HttpException("Appointment does not exist", HttpStatus.BAD_REQUEST);
  }


  }





