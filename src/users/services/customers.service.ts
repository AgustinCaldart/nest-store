import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dtos';
import { Customers } from '../entities/entity';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: Customers[] = [
    {
      id: 1,
      name: 'product 1',
    },
  ];

  findAll() {
    return this.customers;
  }
  findOne(id: number) {
    const data = this.customers.find((item) => item.id === id);
    if (!data) {
      throw new NotFoundException(`data ${id} not found`);
    }
    return data;
  }
  create(payload: CreateCustomerDto) {
    this.counterId++;
    const newdata = {
      id: this.counterId,
      ...payload,
    };
    this.customers.push(newdata);
    return newdata;
  }
  update(id: number, changes: UpdateCustomerDto) {
    const data = this.findOne(id);
    if (data) {
      const index = this.customers.findIndex((item) => item.id === id);
      return (this.customers[index] = {
        ...data,
        ...changes,
      });
    }
    return null;
  }
  delete(id: number) {
    const index = this.customers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`data ${id} not found`);
    }
    const rta = this.customers.splice(index, 1);
    return rta;
  }
}
