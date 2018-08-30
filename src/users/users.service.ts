import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from 'dto/user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel) { }

  async create(user: CreateUserDto): Promise<any> {
    return new this.userModel(user).saveany
  }

  async findAll(): Promise<any[]> {
    return await this.userModel.find();
  }

  async findById(id: string): Promise<any> {
    return await this.userModel.findById(id);
  }

  async remove(id: string) {
    return await this.userModel.deleteOne({ _id: id });
  }
  async update(id: string, user: CreateUserDto) {
    return await this.userModel.updateOne({ _id: id }, { $set: user });
  }
}
