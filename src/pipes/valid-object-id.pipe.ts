import { Validator } from 'class-validator';
import { BadRequestException } from '@nestjs/common';
import { PipeTransform, ArgumentMetadata } from '@nestjs/common';

import Errors from '../errors';

export class ObjectIdPipe implements PipeTransform<string> {

  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'param' && metadata.data === 'id') {
      if (!new Validator().isMongoId(value)) {
        throw new BadRequestException(Errors.id_invalid_format);
      }
    }

    return value;
  }
}