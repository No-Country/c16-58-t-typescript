import { EnvironmentConfigService } from '@/config/environment-config.service';
import { EnvironmentConfigModule } from '@/config/environment-config.module';
import { JwtTokenService } from './jwt.service';
import { JwtModule as Jwt } from '@nestjs/jwt';
import { Module } from '@nestjs/common';

/**
 * Module for handling JSON Web Tokens (JWT) in the application.
 */
@Module({
  imports: [
    Jwt.registerAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: (config) => ({
        secret: config.getJwtSecret(),
        signOptions: { expiresIn: '24h' },
      }),
    }),
  ],
  providers: [JwtTokenService],
  exports: [JwtTokenService],
})
export class JwtModule {}
