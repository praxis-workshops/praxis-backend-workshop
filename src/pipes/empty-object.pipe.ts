import { _ } from 'lodash';

import { Validator } from 'class-validator';
import { BadRequestException } from '@nestjs/common';
import { PipeTransform, ArgumentMetadata } from "@nestjs/common";

import Errors from '../errors';

export class EmptyObjectPipe implements PipeTransform<any> {

  transform(value: any, metadata: ArgumentMetadata) {
    if (_.isEmpty(value)) {
      throw new BadRequestException(Errors.request_without_payload);
    }

    return value;
  }
}