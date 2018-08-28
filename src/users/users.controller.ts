import { Controller, Get, Post, Param, Patch, Body, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(id);
  }

  @Get('/')
  async find() {
    return await this.usersService.find();
  }

  @Get('/:id')
  async findById(@Param('id') id: string) {
    return await this.usersService.findById(id);
  }

  @Patch('/:id')
  async update(@Body() body: any, @Param('id') id: string) {
    return await this.usersService.update(id, body);
  }

  @Post('/')
  async create(@Body() body) {
    const user = await this.usersService.create(body);
    return user;
  }
}
