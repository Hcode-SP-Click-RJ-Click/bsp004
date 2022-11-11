import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoriesDTO } from './dto/createCategories.dto';
import { UpdateCategoriesDTO } from './dto/updateCategories.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}
  // Cria uma nova categoria
  async create(createCategoriesDTO: CreateCategoriesDTO) {
    const { name } = createCategoriesDTO;
    return this.prisma.categories.create({
      data: {
        name,
      },
    });
  }

  // Retorna todas as categorias
  async findAll() {
    return this.prisma.categories.findMany();
  }

  // Retorna uma única categoria
  async findOne(id: number) {
    return this.prisma.categories.findUnique({
      where: {
        id,
      },
      include: {
        places: {
          include: {
            services: true,
          },
        },
      },
    });
  }

  // Atualiza uma categoria
  async update(id: number, updatecategoriesDTO: UpdateCategoriesDTO) {
    const { name } = updatecategoriesDTO;
    return this.prisma.categories.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
  }

  // Exclui uma categoria
  async delete(id: number) {
    return this.prisma.categories.delete({
      where: {
        id,
      },
    });
  }
}
