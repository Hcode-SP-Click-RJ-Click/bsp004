import { Injectable } from '@nestjs/common';
import { CreateCategoriesDTO } from './dto/createCategories.dto';
import { UpdateCategoriesDTO } from './dto/updateCategories.dto';

@Injectable()
export class CategoriesService {
  // Cria uma nova categoria
  async create(createCategoriesDTO: CreateCategoriesDTO) {
    return createCategoriesDTO;
  }

  // Retorna todas as categorias
  async findAll() {
    return 'Retornando todas as categorias';
  }

  // Retorna uma única categoria
  async findOne(id: number) {
    return `Retornando uma unica categoria com o id ${id}`;
  }

  // Atualiza uma categoria
  async update(id: number, updatecategoriesDTO: UpdateCategoriesDTO) {
    return { id: id, data: updatecategoriesDTO };
  }

  // Exclui uma categoria
  async delete(id: number) {
    return `Excluindo categoria id ${id}`;
  }
}
