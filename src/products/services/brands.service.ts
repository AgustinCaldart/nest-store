import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brands.dto';
import { Brand } from '../entities/entity.entity';

@Injectable()
export class BrandsService {
  private counterId = 0;
  private brands: Brand[];

  findAll() {
    return this.brands;
  }
  findOne(id: number) {
    const data = this.brands.find((item) => item.id === id);
    if (!data) {
      throw new NotFoundException(`data ${id} not found`);
    }
    return data;
  }
  create(payload: CreateBrandDto) {
    this.counterId++;
    const newdata = {
      id: this.counterId,
      ...payload,
    };
    this.brands.push(newdata);
    return newdata;
  }
  update(id: number, changes: UpdateBrandDto) {
    const data = this.findOne(id);
    if (data) {
      const index = this.brands.findIndex((item) => item.id === id);
      return (this.brands[index] = {
        ...data,
        ...changes,
      });
    }
    return null;
  }
  delete(id: number) {
    const index = this.brands.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`data ${id} not found`);
    }
    const rta = this.brands.splice(index, 1);
    return rta;
  }
}
