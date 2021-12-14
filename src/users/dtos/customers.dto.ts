import { PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
