import { EmptyObjectPipe } from './empty-object.pipe';
import { ObjectIdPipe } from './valid-object-id.pipe';
import { BadRequestException } from '@nestjs/common';

describe('Pipes', () => {
  let emptyObjectPipe: EmptyObjectPipe;
  let objectIdPipe: ObjectIdPipe;

  beforeAll(() => {
    emptyObjectPipe = new EmptyObjectPipe();
    objectIdPipe = new ObjectIdPipe();
  });

  it('it should reject empty object', async () => {
    expect(() => {
      emptyObjectPipe.transform({}, {} as any);
    }).toThrow(BadRequestException);
  });

  it('it should accept a non-empty object', async () => {
    expect(() => {
      emptyObjectPipe.transform({ key: 'value' }, {} as any);
    }).not.toThrow(BadRequestException);
  });

  it('it should reject invalid ObjectId', async () => {
    expect(() => {
      objectIdPipe.transform('asdasfklsklkasdj', { type: 'param', data: 'id' } as any);
    }).toThrow(BadRequestException);
  });

  it('it should accept a valid ObjectId', async () => {
    expect(() => {
      objectIdPipe.transform('507f1f77bcf86cd799439011', { type: 'param', data: 'id' } as any);
    }).not.toThrow(BadRequestException);
  });
});
