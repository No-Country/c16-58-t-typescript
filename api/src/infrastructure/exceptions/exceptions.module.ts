import { ExceptionsService } from './exceptions.service';
import { Module } from '@nestjs/common';

/**
 * Module for handling exceptions.
 */
@Module({
  providers: [ExceptionsService],
  exports: [ExceptionsService],
})
export class ExceptionsModule {}
