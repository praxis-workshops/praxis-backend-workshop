import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import { async } from 'rxjs/internal/scheduler/async';

describe('UsersService', () => {
  let service: UsersService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService,
        {
          provide: getModelToken('User'),
          useValue: Model,
        }],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find an user with id', async () => {
    jest.spyOn(Model, 'findById').mockImplementation(() => ({
      _id: 1,
      username: 'abcd',
      name: 'abcd',
    }));

    const response = await service.findById('1');

    expect(response).toBeDefined();
    expect(response).toBeInstanceOf(Object);
    expect(response).toHaveProperty('username');
    expect(response).toHaveProperty('name');
  });

  it('should find all users', async () => {
    jest.spyOn(Model, 'find').mockImplementation(() => []);
    const response = await service.findAll();
    expect(response).toBeInstanceOf(Array);
    expect(response).toEqual([]);
  });

  it('should remove an user', async () => {
    jest.spyOn(Model, 'deleteOne').mockImplementation(() => ({ ok: 1, n: 1 }));
    const response = await service.remove('1');

    expect(response).toBeDefined();
    expect(response).toEqual(true);
  });

  it('should update an user', async () => {
    jest.spyOn(Model, 'updateOne').mockImplementation(() => ({
      "n": 1,
      "nModified": 1,
      "ok": 1
    }));

    const response = await service.update('1', new UpdateUserDto());

    expect(response).toBeDefined();
    expect(response).toBeInstanceOf(Object);
    expect(response).toHaveProperty('n');
    expect(response).toHaveProperty('nModified');
    expect(response).toHaveProperty('ok');
  });

  it('should create a new user', async () => {
    const mockedResponse = {
      "_id": "5b90951e95e4d6394303c061",
      "username": "darkgod45",
      "name": "darkgod",
      "createdAt": "2018-09-06T02:46:54.979Z",
      "updatedAt": "2018-09-06T02:46:54.979Z",
      "__v": 0
    };

    jest.spyOn(Model, 'create').mockImplementation(() => mockedResponse);

    const response = await service.create({
      "username": "darkgod45",
      "name": "darkgod",
    });

    expect(response).toBeDefined();
    expect(response).toBeInstanceOf(Object);
    expect(response).toMatchObject(mockedResponse);
  });
});
