import { LoggerService } from './logger.service';
import { Module } from '@nestjs/common';

/**
 * Module for providing and exporting the LoggerService.
 */
@Module({
  providers: [LoggerService],
  exports: [LoggerService],
})
export class LoggerModule {}
