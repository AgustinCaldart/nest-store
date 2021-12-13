import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos';
import { User } from '../entities/entity';

@Injectable()
export class UsersService {
  private counterId = 0;
  private users: User[];

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
}
