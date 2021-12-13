import { PartialType } from '@nestjs/mapped-types';
import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;
  @IsNumber()
  @IsOptional()
  readonly stock?: number;
  @IsUrl()
  @IsOptional()
  readonly image?: string;
}
export class UpdateProductDto extends PartialType(CreateProductDto) {}
