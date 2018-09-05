import {
  Body, Controller, Delete,
  Get, Param, Patch,
  Post, UsePipes, ValidationPipe,
  NotFoundException,
} from '@nestjs/common';

import {
  ApiCreatedResponse, ApiForbiddenResponse, ApiUseTags,
  ApiOkResponse, ApiNotFoundResponse, ApiInternalServerErrorResponse,
} from '@nestjs/swagger';

import { UsersService } from './users.service';

import { ObjectIdPipe } from '../pipes/valid-object-id.pipe';
import { EmptyObjectPipe } from '../pipes/empty-object.pipe';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

@ApiUseTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Delete(':id')
  @ApiOkResponse({})
  @ApiNotFoundResponse({})
  async remove(@Param('id', new ObjectIdPipe()) id: string) {
    const result = await this.usersService.remove(id);

    if (!result)
      throw new NotFoundException();

    return result;
  }

  @ApiInternalServerErrorResponse({})
  @Get()
  async findAll(): Promise<any> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'User found' })
  @ApiNotFoundResponse({ description: 'User not found' })
  async findById(@Param('id', new ObjectIdPipe()) id: string): Promise<any> {
    const data = await this.usersService.findById(id);
    console.log(data);

    if (!data) {
      throw new NotFoundException();
    }

    return data;
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
  @ApiCreatedResponse({ description: 'User created successfully', type: 'CreateUserDto' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const user = await this.usersService.create(createUserDto);
    return user;
  }
}
