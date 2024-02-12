import { Module } from '@nestjs/common';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { ControllersModule } from './infrastructure/controllers/controllers.module';
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';
/**
 * Represents the main module of the application.
 * This module is responsible for importing and configuring other modules,
 * as well as defining controllers and providers.
 */
@Module({
  imports: [
    LoggerModule, // Import the LoggerModule to enable logging functionality
    ExceptionsModule, // Import the ExceptionsModule to handle custom exceptions
    ControllersModule, // Import the ControllersModule to define and manage controllers
    RepositoriesModule, // Import the RepositoriesModule to handle data repositories
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
