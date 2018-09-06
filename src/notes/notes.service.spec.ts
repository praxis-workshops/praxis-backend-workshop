import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

import { NotesService } from './notes.service';
import { CreateNoteDto, UpdateNoteDto } from '../dto/note.dto';
import { async } from 'rxjs/internal/scheduler/async';

describe('NotesService', () => {

  let service: NotesService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesService,
        {
          provide: getModelToken('Note'),
          useValue: Model,
        }],
    }).compile();
    service = module.get<NotesService>(NotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find a note with id', async () => {
    jest.spyOn(Model, 'findById').mockImplementation(() => ({
      _id: 1,
      text: 'text',
      owner: '1234567',
    }));

    const response = await service.findById('1');

    expect(response).toBeDefined();
    expect(response).toBeInstanceOf(Object);
    expect(response).toHaveProperty('text');
    expect(response).toHaveProperty('owner');
  });

  it('should find all notes', async () => {
    jest.spyOn(Model, 'find').mockImplementation(() => []);

    const response = await service.findAll();
    expect(response).toBeInstanceOf(Array);
    expect(response).toEqual([]);
  });

  it('should remove a note', async () => {
    jest.spyOn(Model, 'deleteOne').mockImplementation(() => ({ ok: 1, n: 1 }));
    const response = await service.remove('1');

    expect(response).toBeDefined();
    expect(response).toBeInstanceOf(Object);
    expect(response).toHaveProperty('ok');
    expect(response).toHaveProperty('n');
  });

  it('should update a note', async () => {
    jest.spyOn(Model, 'updateOne').mockImplementation(() => ({
      "n": 1,
      "nModified": 1,
      "ok": 1
    }));

    const response = await service.update('1', new UpdateNoteDto());

    expect(response).toBeDefined();
    expect(response).toBeInstanceOf(Object);
    expect(response).toHaveProperty('n');
    expect(response).toHaveProperty('nModified');
    expect(response).toHaveProperty('ok');
  });

  it('should create a note', async () => {

    const mockedResponse = {
      _id: "1",
      text: "test",
      owner: "1234567",
      createdAt: "2018-09-05T06:39:09.365Z",
      updatedAt: "2018-09-05T06:39:09.365Z",
      __v: 0
    };

    jest.spyOn(Model, 'create').mockImplementation(() => (mockedResponse));

    const response = await service.create(new CreateNoteDto());

    expect(response).toBeDefined();
    expect(response).toBeInstanceOf(Object);
    expect(response).toMatchObject(mockedResponse);

  });

});