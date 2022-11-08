import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  // Cria uma nova categoria
  async create(name: string) {
    return `Criando uma nova categoria ${name['name']}`;
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
  async update(id: number, name: string) {
    return `Retornando categoria atualizada id ${id} e novo nome ${name['name']}`;
  }

  // Exclui uma categoria
  async delete(id: number) {
    return `Excluindo categoria id ${id}`;
  }
}
