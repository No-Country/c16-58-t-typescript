import { EnvironmentConfigService } from '@/config/environment-config.service';
import { validate } from '@/config/environment-config.validation';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

/**
 * Module for configuring the environment settings.
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
    }),
  ],
  providers: [EnvironmentConfigService],
  exports: [EnvironmentConfigService],
})
export class EnvironmentConfigModule {}
