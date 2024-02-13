import { UsecasesProxyModule } from '@/infrastructure/usecases-proxy/usecases-proxy.module';
import { ExceptionsService } from '@/infrastructure/exceptions/exceptions.service';
import { UseCaseProxy } from '@/infrastructure/usecases-proxy/usecases-proxy';
import { LoggerService } from '@/infrastructure/logger/logger.service';
import { LoginUseCases } from '@/usecases/auth/login.usecases';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { TokenPayload } from '@/domain/model/auth';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    @Inject(UsecasesProxyModule.LOGIN_USECASES_PROXY)
    private readonly loginUsecaseProxy: UseCaseProxy<LoginUseCases>,
    private readonly logger: LoggerService,
    private readonly exceptionService: ExceptionsService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => request?.headers?.authorization.split(' ')[1],
      ]),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  /**
   * Validates the JWT token payload.
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
      this.logger.warn('JwtStrategy', `User not found`);
      this.exceptionService.unauthorizedException({
        message: 'User not found',
      });
    }

    if (user.accessToken !== payload.id) {
      this.logger.warn('JwtStrategy', `Invalid token`);
      this.exceptionService.unauthorizedException({ message: 'Invalid token' });
    }
    return user;
  }
}
