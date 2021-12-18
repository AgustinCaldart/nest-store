import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dto';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}
  async findAll() {
    return this.customerModel.find().exec();
  }
  async findOne(id: string) {
    const data = await this.customerModel.findById(id).exec();
    if (!data) {
      throw new NotFoundException(`data ${id} not found`);
    }
    return data;
  }
  create(payload: CreateCustomerDto) {
    const newdata = new this.customerModel(payload);
    return newdata.save();
  }
  async update(id: string, changes: UpdateCustomerDto) {
    const data = await this.customerModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!data) {
      throw new NotFoundException(`Data #${id} not found`);
    }
    return data;
  }
  async delete(id: string) {
    const data = this.customerModel.findByIdAndDelete(id);
    if (!data) {
      throw new NotFoundException(`Data #${id} not found`);
    }
    return data;
  }
}
