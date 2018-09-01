import { CreateUserDto, UpdateUserDto } from 'dto/user.dto';

import {
  Body, Controller, Delete,
  Get, Param, Patch,
  Post, UsePipes, ValidationPipe,
} from '@nestjs/common';

import { UsersService } from './users.service';

import { ObjectIdPipe } from '../pipes/valid-object-id.pipe';
import { EmptyObjectPipe } from 'pipes/empty-object.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Delete(':id')
  async remove(@Param('id', new ObjectIdPipe()) id: string) {
    return await this.usersService.remove(id);
  }

  @Get()
  async findAll(): Promise<any> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', new ObjectIdPipe()) id: string): Promise<any> {
    return await this.usersService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id', new ObjectIdPipe()) id: string,
    @Body(new EmptyObjectPipe(), new ValidationPipe({ transform: true })) updateUserDto: UpdateUserDto
  ): Promise<any> {
    const response = await this.usersService.update(id, updateUserDto);
    return response;
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const user = await this.usersService.create(createUserDto);
    return user;
  }
}
