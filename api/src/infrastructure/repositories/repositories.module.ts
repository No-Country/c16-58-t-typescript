import { Module } from '@nestjs/common';
import { ExceptionsService } from '../exceptions/exceptions.service';

/**
 * Represents the module for repositories in the application.
 */
@Module({
  imports: [],
  providers: [ExceptionsService],
  exports: [],
})
export class RepositoriesModule {}
