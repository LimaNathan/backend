import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [CommonModule],
})
export class CategoriesModule {}
