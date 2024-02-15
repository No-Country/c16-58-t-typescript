import { EnvironmentConfigService } from '@/infrastructure/config/environment/environment-config.service';
import { EnvironmentConfigModule } from '@/infrastructure/config/environment/environment-config.module';
import { DatabaseUserRepository } from '@/infrastructure/repositories/user/user.repository';
import { RepositoriesModule } from '@/infrastructure/repositories/repositories.module';
import { ExceptionsModule } from '@/infrastructure/exceptions/exceptions.module';
import { BcryptService } from '@/infrastructure/services/bcrypt/bcrypt.service';
import { BcryptModule } from '@/infrastructure/services/bcrypt/bcrypt.module';
import { JwtTokenService } from '@/infrastructure/services/jwt/jwt.service';
import { LoggerService } from '@/infrastructure/logger/logger.service';
import { RegisterUseCases } from '@/usecases/auth/register.usecases';
import { JwtModule } from '@/infrastructure/services/jwt/jwt.module';
import { LoggerModule } from '@/infrastructure/logger/logger.module';
import { LogoutUseCases } from '@/usecases/auth/logout.usecases';
import { LoginUseCases } from '@/usecases/auth/login.usecases';
import { DynamicModule, Module } from '@nestjs/common';
import { UseCaseProxy } from './usecases-proxy';
import { IsAuthenticatedUseCases } from '@/usecases/auth/isAuthenticated.usecases';

/**
 * @module UsecasesProxyModule
 * @description Module that provides the use case proxies for login, register, and logout operations.
 */
@Module({
  imports: [
    LoggerModule,
    JwtModule,
    BcryptModule,
    EnvironmentConfigModule,
    RepositoriesModule,
    ExceptionsModule,
  ],
})
/**
 * Module that provides the use case proxies for login, register, and logout operations.
 */
export class UsecasesProxyModule {
  /**
   * Symbol representing the login use cases proxy.
   */
  static readonly LOGIN_USECASES_PROXY = Symbol('LOGIN_USECASES_PROXY');
  /**
   * Symbol used for registering use cases proxy.
   */
  static readonly REGISTER_USECASES_PROXY = Symbol('REGISTER_USECASES_PROXY');
  /**
   * Symbol representing the use cases proxy for checking authentication.
   */
  static IS_AUTHENTICATED_USECASES_PROXY = Symbol(
    'IS_AUTHENTICATED_USECASES_PROXY',
  );
  /**
   * Symbol representing the logout use cases proxy.
   */
  static readonly LOGOUT_USECASES_PROXY = Symbol('LOGOUT_USECASES_PROXY');

  /**
   * Registers the UsecasesProxyModule.
   * @returns A dynamic module configuration object.
   */
  static register(): DynamicModule {
    return {
      module: UsecasesProxyModule,
      providers: [
        {
          inject: [
            LoggerService,
            JwtTokenService,
            EnvironmentConfigService,
            DatabaseUserRepository,
            BcryptService,
          ],
          provide: UsecasesProxyModule.LOGIN_USECASES_PROXY,
          useFactory: (
            logger: LoggerService,
            jwtTokenService: JwtTokenService,
            config: EnvironmentConfigService,
            userRepo: DatabaseUserRepository,
            bcryptService: BcryptService,
          ) =>
            new UseCaseProxy(
              new LoginUseCases(
                logger,
                jwtTokenService,
                config,
                userRepo,
                bcryptService,
              ),
            ),
        },
        {
          inject: [DatabaseUserRepository, BcryptService],
          provide: UsecasesProxyModule.REGISTER_USECASES_PROXY,
          useFactory: (
            userRepo: DatabaseUserRepository,
            bcryptService: BcryptService,
          ) => new UseCaseProxy(new RegisterUseCases(userRepo, bcryptService)),
        },
        {
          inject: [DatabaseUserRepository],
          provide: UsecasesProxyModule.LOGOUT_USECASES_PROXY,
          useFactory: () => new UseCaseProxy(new LogoutUseCases()),
        },
        {
          inject: [DatabaseUserRepository],
          provide: UsecasesProxyModule.IS_AUTHENTICATED_USECASES_PROXY,
          useFactory: (userRepo: DatabaseUserRepository) =>
            new UseCaseProxy(new IsAuthenticatedUseCases(userRepo)),
        },
      ],
      exports: [
        UsecasesProxyModule.LOGIN_USECASES_PROXY,
        UsecasesProxyModule.REGISTER_USECASES_PROXY,
        UsecasesProxyModule.LOGOUT_USECASES_PROXY,
        UsecasesProxyModule.IS_AUTHENTICATED_USECASES_PROXY,
      ],
    };
  }
}
