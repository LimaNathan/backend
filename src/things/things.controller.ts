import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ThingsService } from './things.service';
// @UseGuards(AuthGuard)
@Controller('things')
export class ThingsController {
  constructor(private readonly thingsService: ThingsService) { }

  @Post()
  create(@Body() createThingDto: Prisma.ThingCreateInput) {
    return this.thingsService.create(createThingDto);
  }

  @Get()
  findAll() {
    return this.thingsService.findAll();
  }

  @Get()
  findOne(@Query('id') id: string) {
    return this.thingsService.findOne(+id);
  }

  @Patch()
  update(
    @Query('id') id: string,
    @Body() updateThingDto: Prisma.ThingUpdateInput,
  ) {
    return this.thingsService.update(+id, updateThingDto);
  }

  @Delete()
  remove(@Query('id') id: string) {
    return this.thingsService.remove(+id);
  }
}
