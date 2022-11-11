import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlacesServiceDTO } from './dto/create-placesService.dto';
import { UpdatePlacesServiceDTO } from './dto/update-placesServices.dto';

@Injectable()
export class PlacesServiceService {
  constructor(private readonly prisma: PrismaService) {}

  // Cria um novo registro
  async create(createPlacesServiceDTO: CreatePlacesServiceDTO) {
    const { name, description, price, placeId } = createPlacesServiceDTO;

    return this.prisma.services.create({
      data: {
        name,
        description,
        price: Number(price),
        placeId: Number(placeId),
      },
    });
  }

  // Lista todos os registros
  async findAll() {
    return this.prisma.services.findMany();
  }

  // Lista um único registro
  async findOne(id: number) {
    return this.prisma.services.findUnique({
      where: {
        id,
      },
    });
  }

  // Atualiza um registro
  async update(id: number, updatePlacesServiceDTO: UpdatePlacesServiceDTO) {
    const { name, description, price, placeId } = updatePlacesServiceDTO;
    return this.prisma.services.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        price: Number(price),
        placeId: Number(placeId),
      },
    });
  }

  // Exclui um registro
  async delete(id: number) {
    return this.prisma.services.delete({
      where: {
        id,
      },
    });
  }
}
