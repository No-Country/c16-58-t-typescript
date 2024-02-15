import { MongooseModule, MongooseModuleFactoryOptions } from '@nestjs/mongoose';
import { EnvironmentConfigService } from '@/config/environment-config.service';
import { EnvironmentConfigModule } from '@/config/environment-config.module';
import { Module } from '@nestjs/common';

export function getMongooseModuleOptions(
  config: EnvironmentConfigService,
): MongooseModuleFactoryOptions {
  return {
    uri: config.getMongoDbUri(),
    auth: {
      password: config.getMongoDbPassword(),
      username: config.getMongoDbUsername(),
    },
  };
}

/**
 * Module for configuring MongoDB connection using Mongoose.
 */
@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: getMongooseModuleOptions,
    }),
  ],
})
export class MongoConfigModule {}
