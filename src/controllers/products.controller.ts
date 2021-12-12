import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return `limit ${limit} offset  ${offset}`;
  }
  @Get(':id')
  getProduct(@Param() params: any) {
    return 'product' + params.id;
  }
  @Get(':id')
  getProduct1(@Param('id') id: any) {
    return 'product' + id;
  }
}
