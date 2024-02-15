import { UsecasesProxyModule } from '@/infrastructure/usecases-proxy/usecases-proxy.module';
import { ExceptionsService } from '@/infrastructure/exceptions/exceptions.service';
import { UseCaseProxy } from '@/infrastructure/usecases-proxy/usecases-proxy';
import { LoggerService } from '@/infrastructure/logger/logger.service';
import { LoginUseCases } from '@/usecases/auth/login.usecases';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
/**
 * Represents a strategy for validating JWT tokens.
 */
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   * Constructs a new instance of the JwtStrategy class.
   * @param loginUsecaseProxy - The login use case proxy.
   * @param logger - The logger service.
   * @param exceptionService - The exceptions service.
   */
  constructor(
    @Inject(UsecasesProxyModule.LOGIN_USECASES_PROXY)
    private readonly loginUsecaseProxy: UseCaseProxy<LoginUseCases>,
    private readonly logger: LoggerService,
    private readonly exceptionService: ExceptionsService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request?.cookies?.Authentication;
        },
      ]),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  /**
   * Validates the payload of a JWT token.
   * @param payload - The payload of the JWT token.
   * @returns The user associated with the payload.
   */
  async validate(payload: { username: string }) {
    const user = this.loginUsecaseProxy
      .getInstance()
      .validateUserForJWTStragtegy(payload.username);
    if (!user) {
      this.logger.warn('JwtStrategy', `User not found`);
      this.exceptionService.unauthorizedException({
        message: 'User not found',
      });
    }
    return user;
  }
}
