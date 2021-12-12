import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Put,
  Delete,
  Body,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return this.productsService.findAll();
  }
  @Get(':productId')
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }
  @Post()
  create(@Body() payload: any) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    return this.productsService.update(id, payload);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.AMBIGUOUS)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.delete(id);
  }
}
