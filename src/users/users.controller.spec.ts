import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('Users Controller', () => {
  let module: TestingModule;
  let controller: UsersController;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService,],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // it('should find an user with id', async () => {
  //   jest.spyOn(Model, 'findById').mockImplementation(() => ({
  //     _id: 1,
  //     username: 'abcd',
  //     name: 'abcd',
  //   }));

  //   const response = await service.findById('1');

  //   expect(response).toBeDefined();
  //   expect(response).toBeInstanceOf(Object);
  //   expect(response).toHaveProperty('username');
  //   expect(response).toHaveProperty('name');
  // });

  // it('should find all users', async () => {
  //   jest.spyOn(Model, 'find').mockImplementation(() => []);
  //   const response = await service.findAll();
  //   expect(response).toBeInstanceOf(Array);
  //   expect(response).toEqual([]);
  // });

  // it('should remove an user', async () => {
  //   jest.spyOn(Model, 'deleteOne').mockImplementation(() => ({ ok: 1, n: 1 }));
  //   const response = await service.remove('1');

  //   expect(response).toBeDefined();
  //   expect(response).toEqual(true);
  // });

  // it('should update an user', async () => {
  //   jest.spyOn(Model, 'updateOne').mockImplementation(() => ({
  //     "n": 1,
  //     "nModified": 1,
  //     "ok": 1
  //   }));

  //   const response = await service.update('1', new UpdateUserDto());

  //   expect(response).toBeDefined();
  //   expect(response).toBeInstanceOf(Object);
  //   expect(response).toHaveProperty('n');
  //   expect(response).toHaveProperty('nModified');
  //   expect(response).toHaveProperty('ok');
  // });
});
