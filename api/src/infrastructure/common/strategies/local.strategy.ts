import { UsecasesProxyModule } from '@/infrastructure/usecases-proxy/usecases-proxy.module';
import { ExceptionsService } from '@/infrastructure/exceptions/exceptions.service';
import { UseCaseProxy } from '@/infrastructure/usecases-proxy/usecases-proxy';
import { LoggerService } from '@/infrastructure/logger/logger.service';
import { LoginUseCases } from '@/usecases/auth/login.usecases';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { Strategy } from 'passport-local';

@Injectable()
/**
 * Represents a local authentication strategy for Passport.js.
 */
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(UsecasesProxyModule.LOGIN_USECASES_PROXY)
    private readonly loginUsecaseProxy: UseCaseProxy<LoginUseCases>,
    private readonly logger: LoggerService,
    private readonly exceptionService: ExceptionsService,
  ) {
    super();
  }
  /**
   * Validates the username and password for local strategy.
   * @param {Object} params - The parameters for validation.
   * @param {string} params.username - The username to validate.
   * @param {string} params.password - The password to validate.
   * @returns {Promise<object>} - The validated user object.
   */
  async validate({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<object> {
    if (!username || !password) {
      this.logger.warn(
        'LocalStrategy',
        `Username or password is missing, BadRequestException`,
      );
      this.exceptionService.unauthorizedException();
    }
    const user = await this.loginUsecaseProxy
      .getInstance()
      .validateUserForLocalStrategy({
        username,
        pass: password,
      });
    if (!user) {
      this.logger.warn('LocalStrategy', `Invalid username or password`);
      this.exceptionService.unauthorizedException({
        message: 'Invalid username or password.',
      });
    }
    return user;
  }
}
