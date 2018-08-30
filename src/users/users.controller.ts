import { Controller, Get, Post, Param, Patch, Body, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from 'dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(id);
  }

  @Get()
  async findAll(): Promise<any> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<any> {
    return await this.usersService.findById(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string): Promise<any> {
    const response = await this.usersService.update(id, updateUserDto);
    return response;
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createUserDto: CreateUserDto): Promise<any> {
    const user = await this.usersService.create(createUserDto);
    return user;
  }
}
