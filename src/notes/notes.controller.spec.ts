import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { NotFoundException } from '@nestjs/common';
import { CreateNoteDto, UpdateNoteDto } from '../dto/note.dto';

describe('Notes Controller', () => {
  let module: TestingModule;
  let controller: NotesController;
  let service: NotesService;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [NotesController],
      providers: [
        NotesService,
        {
          provide: getModelToken('Note'),
          useValue: Model
        }
      ]
    }).compile();

    controller = module.get<NotesController>(NotesController);
    service = module.get<NotesService>(NotesService);
  });

  it('should remove a note', async () => {
    jest.spyOn(service, 'remove').mockImplementation(() => true);
    const response = await controller.remove('1');

    expect(response).toBeDefined();
    expect(response).toEqual(true);
  });


  it('should not remove a note', () => {
    jest.spyOn(service, 'remove').mockImplementation(() => false);
    expect.assertions(1);
    return expect(controller.remove('1')).rejects.toBeInstanceOf(NotFoundException);
  });


  it('should find all notes', async () => {
    jest.spyOn(service, 'findAll').mockImplementation(() => []);
    const response = await controller.findAll();
    expect(response).toBeInstanceOf(Array);
    expect(response).toEqual([]);
  });

  it('should find a note with id', async () => {
    jest.spyOn(service, 'findById').mockImplementation(() => ({
      _id: 1,
      text: 'text',
      owner: '1234567',
    }));

    const response = await controller.findById('1');

    expect(response).toBeDefined();
    expect(response).toBeInstanceOf(Object);
    expect(response).toHaveProperty('text');
    expect(response).toHaveProperty('owner');
  });

  it('should update a note', async () => {
    jest.spyOn(service, 'update').mockImplementation(() => ({
      "n": 1,
      "nModified": 1,
      "ok": 1
    }));

    const response = await controller.update('1', new UpdateNoteDto());

    expect(response).toBeDefined();
    expect(response).toBeInstanceOf(Object);
    expect(response).toHaveProperty('n');
    expect(response).toHaveProperty('nModified');
    expect(response).toHaveProperty('ok');
  });

  it('should create a note', async () => {
    const newDto = new CreateNoteDto();
    jest.spyOn(service, 'create').mockImplementation(() => newDto);

    const response = await controller.create(newDto);

    expect(response).toBeDefined();
    expect(response).toBeInstanceOf(CreateNoteDto);
  });
});
