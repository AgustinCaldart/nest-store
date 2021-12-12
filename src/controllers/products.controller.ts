import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';

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
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion mensage',
      payload,
    };
  }
  @Post('/create')
  creates(@Res() response: any, @Body() payload: any) {
    response.status(HttpStatus.OK).json({
      msg: 'Add a new product',
      payload,
    });
  }
}
