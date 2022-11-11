import { PartialType } from '@nestjs/mapped-types';
import { CreatePlacesDTO } from './create-places.dto';

export class UpdatePlacesDTO extends PartialType(CreatePlacesDTO) {}
