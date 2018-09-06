import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { NotFoundException } from '@nestjs/common';
import { UpdateUserDto, CreateUserDto } from '../dto/user.dto';

describe('Users Controller', () => {
  let module: TestingModule;
  let controller: UsersController;
  let service: UsersService;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: getModelToken('User'),
          useValue: Model,
        }
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should remove an user', async () => {
    jest.spyOn(service, 'remove').mockImplementation(() => true);
    const response = await controller.remove('1');

    expect(response).toBeDefined();
    expect(response).toEqual(true);
  });

  it('should not remove an user', () => {
    jest.spyOn(service, 'remove').mockImplementation(() => false);
    expect.assertions(1);
    return expect(controller.remove('1')).rejects.toBeInstanceOf(NotFoundException);
  });

  it('should find all users', async () => {
    jest.spyOn(service, 'findAll').mockImplementation(() => []);
    const response = await controller.findAll();
    expect(response).toBeInstanceOf(Array);
    expect(response).toEqual([]);
  });

  it('should find an user with id', async () => {
    jest.spyOn(service, 'findById').mockImplementation(() => ({
      _id: '1',
      username: 'abcd',
      name: 'abcd',
    }));

    const response = await controller.findById('1');

    expect(response).toBeDefined();
    expect(response).toBeInstanceOf(Object);
    expect(response).toHaveProperty('username');
    expect(response).toHaveProperty('name');
  });

  it('should update an user', async () => {
    jest.spyOn(service, 'update').mockImplementation(() => ({
      "n": 1,
      "nModified": 1,
      "ok": 1
    }));

    const response = await controller.update('1', new UpdateUserDto());

    expect(response).toBeDefined();
    expect(response).toBeInstanceOf(Object);
    expect(response).toHaveProperty('n');
    expect(response).toHaveProperty('nModified');
    expect(response).toHaveProperty('ok');
  });

  it('should create an user', async () => {
    const newDto = new CreateUserDto();
    jest.spyOn(service, 'create').mockImplementation(() => newDto);

    const response = await controller.create(newDto);

    expect(response).toBeDefined();
    expect(response).toBeInstanceOf(CreateUserDto);
  });
});
