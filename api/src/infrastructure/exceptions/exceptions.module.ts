import { Module } from '@nestjs/common';
import { ExceptionsService } from './exceptions.service';

/**
 * Module for handling exceptions.
 */
@Module({
  providers: [ExceptionsService],
  exports: [ExceptionsService],
})
export class ExceptionsModule {}
