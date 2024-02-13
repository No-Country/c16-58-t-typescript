import { UsecasesProxyModule } from '@/infrastructure/usecases-proxy/usecases-proxy.module';
import { EnvironmentConfigService } from '@/infrastructure/config/environment/environment-config.service';
import { ExceptionsService } from '@/infrastructure/exceptions/exceptions.service';
import { UseCaseProxy } from '@/infrastructure/usecases-proxy/usecases-proxy';
import { LoggerService } from '@/infrastructure/logger/logger.service';
import { LoginUseCases } from '@/usecases/auth/login.usecases';
import { Inject, Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { TokenPayload } from '@/domain/model/auth';
import { Request } from 'express';

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token',
) {
  constructor(
    private readonly configService: EnvironmentConfigService,
    @Inject(UsecasesProxyModule.LOGIN_USECASES_PROXY)
    private readonly loginUsecaseProxy: UseCaseProxy<LoginUseCases>,
    private readonly logger: LoggerService,
    private readonly exceptionService: ExceptionsService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request?.headers?.authorization.split(' ')[1];
        },
      ]),
      secretOrKey: configService.getJwtRefreshSecret(),
      passReqToCallback: true,
    });
  }

  /**
   * Validates the request and payload for JWT refresh strategy.
   * @param _request - The request object.
   * @param payload - The token payload.
   * @returns The validated user.
   */
  async validate({ payload }: { payload: TokenPayload }) {
    const user = await this.loginUsecaseProxy
      .getInstance()
      .validateUserForJWTStrategy({
        username: payload.username,
      });
    if (!user) {
      this.logger.warn('JwtRefreshTokenStrategy', `User not found`);
      this.exceptionService.unauthorizedException({
        message: 'User not found',
      });
    }

    if (user.refreshToken !== payload.id) {
      this.logger.warn('JwtRefreshTokenStrategy', `Invalid token`);
      this.exceptionService.unauthorizedException({ message: 'Invalid token' });
    }
    return user;
  }
}
