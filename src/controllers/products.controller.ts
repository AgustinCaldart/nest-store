import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Put,
  Delete,
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
  @Put(':id')
  update(@Res() response: any, @Param('id') id: number, @Body() payload: any) {
    response.status(HttpStatus.OK).json({
      msg: `modificado el ${id}`,
      id,
      payload,
    });
  }
  @Delete(':id')
  delete(@Res() response: any, @Param('id') id: number) {
    response.status(HttpStatus.OK).json({
      msg: `eliminando el ${id}`,
      id,
    });
  }
}
