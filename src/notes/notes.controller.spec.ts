import { Test, TestingModule } from '@nestjs/testing';
import { NotesController } from './notes.controller';

describe('Notes Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [NotesController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: NotesController = module.get<NotesController>(NotesController);
    expect(controller).toBeDefined();
  });
});
