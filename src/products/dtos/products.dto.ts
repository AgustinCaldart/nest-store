import { PartialType } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  Min,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { CreateCategoryDto } from './categories.dto';

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

  /* RELACION EMBENIDA
  @IsNotEmpty()
  @ValidateNested()
  readonly category: CreateCategoryDto;
  */
}
export class UpdateProductDto extends PartialType(CreateProductDto) {}

export class FilterProductsDto {
  @IsOptional()
  @IsPositive()
  limit: number;
  @IsOptional()
  @Min(0)
  offset: number;

  @IsOptional()
  @ValidateIf((params) => params.maxPrice)
  @Min(0)
  minPrice: number;

  @ValidateIf((params) => params.minPrice)
  @IsPositive()
  maxPrice: number;
}
