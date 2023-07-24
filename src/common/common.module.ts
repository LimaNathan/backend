import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class CommonModule {}
