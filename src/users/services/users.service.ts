import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductsService } from 'src/products/services/products.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';
import { User } from '../entities/entity.entity';
import { Order } from '../entities/order.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private productsService: ProductsService,
  ) {}

  async findAll() {
    return await this.userModel.find().exec();
  }
  async findOne(id: string) {
    const data = await this.userModel.findById(id).exec();
    if (!data) {
      throw new NotFoundException(`data ${id} not found`);
    }
    return data;
  }
  create(payload: CreateUserDto) {
    const newData = new this.userModel(payload);
    return newData.save();
  }
  async update(id: string, changes: UpdateUserDto) {
    const data = this.userModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!data) {
      throw new NotFoundException(`Data #${id} not found`);
    }
    return data;
  }
  async delete(id: string) {
    const data = this.userModel.findByIdAndDelete(id).exec();
    if (!data) {
      throw new NotFoundException(`data ${id} not found`);
    }
    return data;
  }

  async getOrderByUser(id: string) {
    const user = this.findOne(id);
    return {
      data: new Date(),
      user,
      products: await this.productsService.findAll(),
    };
  }
}
