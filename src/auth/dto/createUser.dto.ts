import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Role } from '../Entities/user.Entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  role:Role;
}
