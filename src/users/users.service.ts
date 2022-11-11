import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUsersDTO } from './dto/createUsers.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUsersDto } from './dto/updateUsers.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  //Cria um usuário no banco de dados
  async create(createUsersDTO: CreateUsersDTO) {
    const { name, email, password } = createUsersDTO;

    const passwordHash = await this.passwordHash(password);

    return this.prisma.users.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
    });
  }

  //Retorna todos os usuários cadastrados
  async findAll() {
    return this.prisma.users.findMany();
  }

  //Retorna um único usuário pelo id (Identificador unico)
  async findOne(id: number) {
    return this.prisma.users.findUnique({
      where: {
        id,
      },
    });
  }

  //Atualiza os dados do usuário
  async update(id: number, updateUserDTO: UpdateUsersDto) {
    const { name, email, password } = updateUserDTO;

    const passwordHash = await this.passwordHash(password);

    return this.prisma.users.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        password: passwordHash,
      },
    });
  }

  // Exclui um usuário
  async delete(id: number) {
    return this.prisma.users.delete({
      where: {
        id,
      },
    });
  }

  private async passwordHash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    return passwordHash;
  }
}
