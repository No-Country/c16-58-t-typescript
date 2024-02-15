import { IsEnum, IsString, validateSync } from 'class-validator';
import { plainToClass } from 'class-transformer';

enum Environment {
  Development = 'development',
  Production = 'production',
  Local = 'local',
  Test = 'test',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsString()
  MONGODB_URI: string;

  @IsString()
  MONGODB_PASSWORD: string;

  @IsString()
  MONGODB_USERNAME: string;

  @IsString()
  JWT_SECRET: string;

  @IsString()
  JWT_EXPIRATION_TIME: string;

  @IsString()
  JWT_REFRESH_TOKEN_SECRET: string;

  @IsString()
  JWT_REFRESH_TOKEN_EXPIRATION_TIME: string;
}

/**
 * Validates the environment configuration object.
 *
 * @param config - The environment configuration object to validate.
 * @returns The validated environment configuration object.
 * @throws Error if there are validation errors.
 */
export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) throw new Error(errors.toString());

  return validatedConfig;
}
