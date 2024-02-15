import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { UsecasesProxyModule } from '@/infrastructure/usecases-proxy/usecases-proxy.module';
import { ExceptionsService } from '@/infrastructure/exceptions/exceptions.service';
import { LoggerService } from '@/infrastructure/logger/logger.service';
import { LoginUseCases } from '@/usecases/auth/login.usecases';
import { UseCaseProxy } from '@/infrastructure/usecases-proxy/usecases-proxy';

@Injectable()
/**
 * Represents a local authentication strategy.
 */
export class LocalStrategy extends PassportStrategy(Strategy) {
  /**
   * Constructs a new instance of the LocalStrategy class.
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
    super();
  }

  /**
   * Validates the username and password for local strategy.
   * @param username - The username to validate.
   * @param password - The password to validate.
   * @returns The validated user.
   */
  async validate(username: string, password: string) {
    if (!username || !password) {
      this.logger.warn(
        'LocalStrategy',
        `Username or password is missing, BadRequestException`,
      );
      this.exceptionService.unauthorizedException();
    }
    const user = await this.loginUsecaseProxy
      .getInstance()
      .validateUserForLocalStragtegy(username, password);
    if (!user) {
      this.logger.warn('LocalStrategy', `Invalid username or password`);
      this.exceptionService.unauthorizedException({
        message: 'Invalid username or password.',
      });
    }
    return user;
  }
}
