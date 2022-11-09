import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateUsersDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
