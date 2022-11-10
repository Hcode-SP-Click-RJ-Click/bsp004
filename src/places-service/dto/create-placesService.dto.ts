import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePlacesServiceDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
}
