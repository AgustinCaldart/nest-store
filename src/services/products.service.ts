import { Injectable } from '@nestjs/common';
import { Product } from './../entities/entity';

@Injectable()
export class ProductsService {
  private counterId = 0;
  private products: Product[] = [
    {
      id: 1,
      name: 'product 1',
      description: 'bla bla',
      price: 122,
    },
  ];

  findAll() {
    return this.products;
  }
  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }
  create(payload: any) {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(id: number, changes: any) {
    const index = this.products.findIndex((item) => item.id === id);
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }
  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    this.products.splice(index, 1);
  }
}
