import { Module } from '@nestjs/common';
import { ExceptionsModule } from '../exceptions/exceptions.module';

/**
 * Module that contains the controllers for the application.
 * It imports the ExceptionsModule.
 */
@Module({
  imports: [ExceptionsModule],
})
export class ControllersModule {}
