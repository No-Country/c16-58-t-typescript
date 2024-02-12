import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { ControllersModule } from './infrastructure/controllers/controllers.module';
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';
import { EnvironmentConfigModule } from './infrastructure/config/environment/environment-config.module';
import { MongoConfigModule } from './infrastructure/mongo/mongo.module';
/**
 * Represents the main module of the application.
 * This module is responsible for importing and configuring other modules,
 * as well as defining controllers and providers.
 */
@Module({
  imports: [
    PassportModule.register({ session: true }), // Import the PassportModule to enable authentication
    LoggerModule, // Import the LoggerModule to enable logging functionality
    EnvironmentConfigModule, // Import the EnvironmentConfigModule to handle environment variables
    MongoConfigModule, // Import the MongoConfigModule to handle MongoDB configuration
    ExceptionsModule, // Import the ExceptionsModule to handle custom exceptions
    ControllersModule, // Import the ControllersModule to define and manage controllers
    RepositoriesModule, // Import the RepositoriesModule to handle data repositories
  ],
})
export class AppModule {}
