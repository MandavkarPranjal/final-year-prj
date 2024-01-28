import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from '../../../../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from '../utils/constant';
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}
  
  async signup(createAuthDto: CreateAuthDto) {
    const { email, password } = createAuthDto;
    const foundUser = await this.prisma.user.findUnique({where: {email}})

    if(foundUser) {
      throw new BadRequestException('Email already exists')
    }

    const hashedPassword = await this.hashPassword(password);

    const user = await this.prisma.user.create({
      data: {
        email,
        hashedPassword
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
}
