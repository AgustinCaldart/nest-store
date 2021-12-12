import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo';
  }
  @Get('products/:id')
  getProduct(@Param() params: any) {
    return 'product' + params.id;
  }
  @Get('product/:id')
  getProduct1(@Param('id') id: any) {
    return 'product' + id;
  }
  @Get('categories/:id/products/:productId')
  getCategory(@Param('id') id: any, @Param('productId') productId: any) {
    return `category: ${id} product: ${productId} `;
  }
}
