import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.dto';
import { Category } from '../entities/entity';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Category[];

  findAll() {
    return this.categories;
  }
  findOne(id: number) {
    const data = this.categories.find((item) => item.id === id);
    if (!data) {
      throw new NotFoundException(`data ${id} not found`);
    }
    return data;
  }
  create(payload: CreateCategoryDto) {
    this.counterId++;
    const newdata = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newdata);
    return newdata;
  }
  update(id: number, changes: UpdateCategoryDto) {
    const data = this.findOne(id);
    if (data) {
      const index = this.categories.findIndex((item) => item.id === id);
      return (this.categories[index] = {
        ...data,
        ...changes,
      });
    }
    return null;
  }
  delete(id: number) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`data ${id} not found`);
    }
    const rta = this.categories.splice(index, 1);
    return rta;
  }
}
