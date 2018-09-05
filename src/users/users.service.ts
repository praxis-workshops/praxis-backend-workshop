import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import { User } from '../schemas/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async create(user: CreateUserDto): Promise<any> {
    return await (new this.userModel(user)).save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findById(id: string): Promise<User> {
    return await this.userModel.findById(id);
  }

  async remove(id: string): Promise<any> {
    const result = await this.userModel.deleteOne({ _id: id });
    return !!result.ok && !!result.n;
  }

  async update(id: string, user: UpdateUserDto): Promise<any> {
    return await this.userModel.updateOne({ _id: id }, { $set: user });
  }
}
