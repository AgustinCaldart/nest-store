import { PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  /* Relacionando uno a muuchos embebido
  @IsNotEmpty()
  @IsArray()
  readonly skills: any; */
}
export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
