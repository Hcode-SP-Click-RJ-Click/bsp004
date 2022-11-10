import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePlacesServiceDTO } from './dto/create-placesService.dto';
import { UpdatePlacesServiceDTO } from './dto/update-placesServices.dto';
import { PlacesServiceService } from './places-service.service';

@Controller('places-service')
export class PlacesServiceController {
  constructor(private readonly placesService: PlacesServiceService) {}

  @Post()
  async create(@Body() createPlacesServiceDTO: CreatePlacesServiceDTO) {
    return this.placesService.create(createPlacesServiceDTO);
  }

  @Get()
  async findAll() {
    return this.placesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.placesService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePlacesServicesDTO: UpdatePlacesServiceDTO,
  ) {
    return this.placesService.update(id, updatePlacesServicesDTO);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.placesService.delete(id);
  }
}
