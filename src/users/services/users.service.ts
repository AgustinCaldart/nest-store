import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsService } from 'src/products/services/products.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';
import { User } from '../entities/entity';
import { Order } from '../entities/order.entity';

@Injectable()
export class UsersService {
  constructor(private productsService: ProductsService) {}
  private counterId = 0;
  private users: User[] = [];

  findAll() {
    return this.users;
  }
  findOne(id: number) {
    const data = this.users.find((item) => item.id === id);
    if (!data) {
      throw new NotFoundException(`data ${id} not found`);
    }
    return data;
  }
  create(payload: CreateUserDto) {
    this.counterId++;
    const newdata = {
      id: this.counterId,
      ...payload,
    };
    console.log(newdata);
    this.users.push(newdata);
    return newdata;
  }

  update(id: number, changes: UpdateUserDto) {
    const data = this.findOne(id);
    if (data) {
      const index = this.users.findIndex((item) => item.id === id);
      return (this.users[index] = {
        ...data,
        ...changes,
      });
    }
    return null;
  }
  delete(id: number) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`data ${id} not found`);
    }
    const rta = this.users.splice(index, 1);
    return rta;
  }

  getOrderByUser(id: number): Order {
    const user = this.findOne(id);
    return {
      data: new Date(),
      user,
      products: this.productsService.findAll(),
    };
  }
}
