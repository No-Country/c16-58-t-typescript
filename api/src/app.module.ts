import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { ControllersModule } from './infrastructure/controllers/controllers.module';
import { EnvironmentConfigModule } from './infrastructure/config/environment/environment-config.module';
import { MongoConfigModule } from './infrastructure/mongo/mongo.module';
import { UsecasesProxyModule } from './infrastructure/usecases-proxy/usecases-proxy.module';
import { JwtStrategy } from './infrastructure/common/strategies/jwt.strategy';
import { LocalStrategy } from './infrastructure/common/strategies/local.strategy';
import { JwtRefreshTokenStrategy } from './infrastructure/common/strategies/jwtRefresh.strategy';

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
    ControllersModule, // Import the ControllersModule to define and manage controllers
    ExceptionsModule, // Import the ExceptionsModule to handle custom exceptions
    UsecasesProxyModule.register(), // Import the UsecasesProxyModule to handle usecases
  ],
  providers: [
    JwtStrategy, // Define the JwtStrategy provider
    LocalStrategy, // Define the LocalStrategy provider
    JwtRefreshTokenStrategy, // Define the JwtRefreshTokenStrategy provider
  ],
})
export class AppModule {}
