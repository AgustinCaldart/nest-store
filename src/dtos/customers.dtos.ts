import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
