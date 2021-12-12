import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './../entities/entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
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
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return product;
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
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      return (this.products[index] = {
        ...product,
        ...changes,
      });
    }
    return null;
  }
  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    const rta = this.products.splice(index, 1);
    return rta;
  }
}
