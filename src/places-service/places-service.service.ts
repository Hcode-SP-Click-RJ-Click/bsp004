import { Injectable } from '@nestjs/common';
import { CreatePlacesServiceDTO } from './dto/create-placesService.dto';
import { UpdatePlacesServiceDTO } from './dto/update-placesServices.dto';

@Injectable()
export class PlacesServiceService {
  // Cria um novo registro
  async create(createPlacesServiceDTO: CreatePlacesServiceDTO) {
    return {
      message: 'Criando um novo registro',
      data: createPlacesServiceDTO.name,
    };
  }

  // Lista todos os registros
  async findAll() {
    return {
      message: 'Listando todos os registros',
    };
  }

  // Lista um único registro
  async findOne(id: number) {
    return {
      message: 'Retornando um unico registro',
      id: id,
    };
  }

  // Atualiza um registro
  async update(id: number, updatePlacesServiceDTO: UpdatePlacesServiceDTO) {
    return {
      message: 'Retornando dados atualizdos do registro',
      data: updatePlacesServiceDTO.name,
    };
  }

  // Exclui um registro
  async delete(id: number) {
    return {
      message: 'Excluindo um registro',
      id: id,
    };
  }
}
