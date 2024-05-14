/* eslint-disable @nx/enforce-module-boundaries */
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from '../../../../../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async getMyUser(id: string, req: Request) {
    const user = await this.prisma.user.findUnique({
      where: { id }
    })
    if (!user) {
      throw new NotFoundException()
    }

    const decodedUser = req.user as { id: string, email: string };

    if (user.id !== decodedUser.id) {
      throw new ForbiddenException()
    }

    delete user.hashedPassword;

    return { user };
  }

  async getUsers() {
    return this.prisma.user.findMany({});
  }

  async getDoctors() {
    return this.prisma.user.findMany({
      where: {
        role: { equals: ['DOCTOR'] }
      },
      select: {
        id: true,
        name: true
      }
    })
  }


}
