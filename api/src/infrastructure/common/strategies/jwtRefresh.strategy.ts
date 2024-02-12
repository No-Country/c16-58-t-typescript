import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { EnvironmentConfigService } from '../../config/environment/environment-config.service';
import { UsecasesProxyModule } from '../../usecases-proxy/usecases-proxy.module';
import { UseCaseProxy } from '../../usecases-proxy/usecases-proxy';
import { LoginUseCases } from '../../../usecases/auth/login.usecases';
import { TokenPayload } from '../../../domain/model/auth';
import { LoggerService } from '../../logger/logger.service';
import { ExceptionsService } from '../../exceptions/exceptions.service';

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
