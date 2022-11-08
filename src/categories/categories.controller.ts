import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(@Body() name: string) {
    return this.categoriesService.create(name);
  }

  @Get()
  async findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.categoriesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() name: string) {
    return this.categoriesService.update(id, name);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.categoriesService.delete(id);
  }
}
