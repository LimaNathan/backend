import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() createCategoryDto: Prisma.CategoryCreateInput) {
    return this.categoriesService.create(createCategoryDto);
  }
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get()
  findOne(@Query('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @Patch()
  update(
    @Query('id') id: string,

    @Body() updateCategoryDto: Prisma.CategoryUpdateInput,
  ) {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  @Delete()
  remove(@Query('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
