import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { EnvironmentConfigService } from '@/infrastructure/config/environment/environment-config.service';
import { UsecasesProxyModule } from '@/infrastructure/usecases-proxy/usecases-proxy.module';
import { UseCaseProxy } from '@/infrastructure/usecases-proxy/usecases-proxy';
import { LoginUseCases } from '@/usecases/auth/login.usecases';
import { LoggerService } from '@/infrastructure/logger/logger.service';
import { ExceptionsService } from '@/infrastructure/exceptions/exceptions.service';
import { TokenPayload } from '@/domain/model/auth';

@Injectable()
/**
 * Represents a strategy for refreshing JWT tokens.
 */
export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token',
) {
  /**
   * Constructs a new instance of the JwtRefreshStrategy class.
   * @param configService - The environment configuration service.
   * @param loginUsecaseProxy - The login use case proxy.
   * @param logger - The logger service.
   * @param exceptionService - The exceptions service.
   */
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
          return request?.cookies?.Refresh;
        },
      ]),
      secretOrKey: configService.getJwtRefreshSecret(),
      passReqToCallback: true,
    });
  }

  /**
   * Validates the request and payload for JWT refresh strategy.
   * @param request - The request object.
   * @param payload - The token payload.
   * @returns The user object if validation is successful.
   */
  async validate(request: Request, payload: TokenPayload) {
    const refreshToken = request.cookies?.Refresh;
    const user = this.loginUsecaseProxy
      .getInstance()
      .getUserIfRefreshTokenMatches(refreshToken, payload.username);
    if (!user) {
      this.logger.warn('JwtStrategy', `User not found or hash not correct`);
      this.exceptionService.unauthorizedException({
        message: 'User not found or hash not correct',
      });
    }
    return user;
  }
}
