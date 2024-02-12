import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongoDbConfig } from '../../../domain/config/mongo.interface';
import { JWTConfig } from '../../../domain/config/jwt.interface';

/**
 * Service that provides environment configuration values for MongoDB and JWT.
 */
@Injectable()
export class EnvironmentConfigService implements MongoDbConfig, JWTConfig {
  constructor(private configService: ConfigService) {}

  /**
   * Retrieves the MongoDB URI from the configuration.
   * @returns The MongoDB URI.
   */
  getMongoDbUri(): string {
    return this.configService.get<string>('MONGODB_URI');
  }

  /**
   * Retrieves the JWT secret from the configuration.
   * @returns The JWT secret.
   */
  getJwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET');
  }

  /**
   * Retrieves the JWT expiration time from the configuration.
   * @returns The JWT expiration time.
   */
  getJwtExpirationTime(): string {
    return this.configService.get<string>('JWT_EXPIRATION_TIME');
  }

  /**
   * Retrieves the JWT refresh token secret from the configuration.
   * @returns The JWT refresh token secret.
   */
  getJwtRefreshSecret(): string {
    return this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET');
  }

  /**
   * Retrieves the JWT refresh token expiration time from the configuration.
   * @returns The JWT refresh token expiration time.
   */
  getJwtRefreshExpirationTime(): string {
    return this.configService.get<string>('JWT_REFRESH_TOKEN_EXPIRATION_TIME');
  }
}
