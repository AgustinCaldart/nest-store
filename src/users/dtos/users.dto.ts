import { PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  readonly password: string;
  @IsString()
  @IsNotEmpty()
  readonly role: string;
}
export class UpdateUserDto extends PartialType(CreateUserDto) {}
