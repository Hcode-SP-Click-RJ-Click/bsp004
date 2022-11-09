import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  //Cria um usuário no banco de dados
  async create(user: string) {
    return `Criando um novo usuário ${user['user']}`;
  }

  //Retorna todos os usuários cadastrados
  async findAll() {
    return `Retornando todos os usuários cadastrados no sistema`;
  }

  //Retorna um único usuário pelo id (Identificador unico)
  async findOne(id: number) {
    return `Retornando usuário id ${id}`;
  }

  //Atualiza os dados do usuário
  async update(id: number, user: string) {
    return `Retornando dados do usuário id ${id} e dados atualizados ${user['user']}`;
  }

  // Exclui um usuário
  async delete(id: number) {
    return `Excluindo usuário id ${id}`;
  }
}
