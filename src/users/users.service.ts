import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel) { }

  async create(newUser: any) {
    const user = new this.userModel(newUser);
    return await user.save();
  }

  async find() {
    return await this.userModel.find();
  }

  async findById(id: string) {
    return await this.userModel.findById(id);
  }

  async remove(id: string) {
    return await this.userModel.deleteOne({ _id: id });
  }
  async update(id: string, data: any) {
    return await this.userModel.updateOne({ _id: id }, { $set: data });
  }
}
