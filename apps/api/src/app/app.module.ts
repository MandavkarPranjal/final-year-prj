import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../../../../prisma/prisma.module'; // Import the missing module
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PrismaModule, AuthModule, UsersModule], // Add the imported module to the imports array
})
export class AppModule {}
