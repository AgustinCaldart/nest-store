import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brands.dto';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandsService {
  constructor(@InjectModel(Brand.name) private brandModel: Model<Brand>) {}

  async findAll() {
    return await this.brandModel.find().exec();
  }
  async findOne(id: string) {
    const data = await this.brandModel.findById(id).exec();
    if (!data) {
      throw new NotFoundException(`data ${id} not found`);
    }
    return data;
  }
  async create(payload: CreateBrandDto) {
    const newData = new this.brandModel(payload);
    return newData.save();
  }
  async update(id: string, changes: UpdateBrandDto) {
    const data = await this.brandModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!data) {
      throw new NotFoundException(`Data #${id} not found`);
    }
    return data;
  }
  async delete(id: string) {
    const data = await this.brandModel.findByIdAndDelete(id).exec();
    if (!data) {
      throw new NotFoundException(`Data #${id} not found`);
    }
    return data;
  }
}
