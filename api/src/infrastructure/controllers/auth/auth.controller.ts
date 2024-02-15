import { UsecasesProxyModule } from '@/infrastructure/usecases-proxy/usecases-proxy.module';
import { ApiResponseType } from '@/infrastructure/common/swagger/response.decorator';
import { ExceptionsService } from '@/infrastructure/exceptions/exceptions.service';
import { IsAuthenticatedUseCases } from '@/usecases/auth/isAuthenticated.usecases';
import { UseCaseProxy } from '@/infrastructure/usecases-proxy/usecases-proxy';
import JwtRefreshGuard from '@/infrastructure/common/guards/jwtRefresh.guard';
import { JwtAuthGuard } from '@/infrastructure/common/guards/jwtAuth.guard';
import { LoginGuard } from '@/infrastructure/common/guards/login.guard';
import { RegisterUseCases } from '@/usecases/auth/register.usecases';
import { LogoutUseCases } from '@/usecases/auth/logout.usecases';
import { AuthLoginDto, AuthRegisterDto } from './auth-dto.class';
import { LoginUseCases } from '@/usecases/auth/login.usecases';
import { IsAuthPresenter } from './auth.presenter';
import {
  Controller,
  UseGuards,
  Request,
  Inject,
  Body,
  Post,
  Get,
  Req,
} from '@nestjs/common';
import {
  ApiExtraModels,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiTags,
} from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
@ApiResponse({
  status: 401,
  description: 'No authorization token was found',
})
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(IsAuthPresenter)
export class AuthController {
  /**
   * Constructs a new instance of the AuthController class.
   * @param loginUsecaseProxy - The proxy for the LoginUseCases.
   * @param registerUseCaseProxy - The proxy for the RegisterUseCases.
   * @param logoutUseCaseProxy - The proxy for the LogoutUseCases.
   * @param isAuthUsecaseProxy - The proxy for the IsAuthenticatedUseCases.
   * @param exceptionsService - The service for handling exceptions.
   */
  constructor(
    @Inject(UsecasesProxyModule.LOGIN_USECASES_PROXY)
    private readonly loginUsecaseProxy: UseCaseProxy<LoginUseCases>,
    @Inject(UsecasesProxyModule.REGISTER_USECASES_PROXY)
    private readonly registerUseCaseProxy: UseCaseProxy<RegisterUseCases>,
    @Inject(UsecasesProxyModule.LOGOUT_USECASES_PROXY)
    private readonly logoutUseCaseProxy: UseCaseProxy<LogoutUseCases>,
    @Inject(UsecasesProxyModule.IS_AUTHENTICATED_USECASES_PROXY)
    private readonly isAuthUsecaseProxy: UseCaseProxy<IsAuthenticatedUseCases>,
    private readonly exceptionsService: ExceptionsService,
  ) {}

  @Post('register')
  @ApiBody({ type: AuthRegisterDto })
  /**
   * Registers a new user.
   *
   * @param body - The registration data for the user.
   * @returns A promise that resolves to a string indicating the success of the registration.
   */
  async register(@Body() body: AuthRegisterDto): Promise<string> {
    const service = this.registerUseCaseProxy.getInstance();
    const validation: string | null = await service.userShouldNotExist({
      email: body.email,
      username: body.username,
    });
    if (validation) {
      this.exceptionsService.conflictException({
        message: validation,
      });
    }
    const passValidation = await service.checkPassword({
      password: body.password,
      confirmPassword: body.confirmPassword,
    });

    if (passValidation) {
      this.exceptionsService.conflictException({
        message: passValidation,
      });
    }
    const user = await service.registerUser({
      email: body.email,
      username: body.username,
      password: body.password,
    });
    return `User with email '${user.email}' and username '${user.username}' has been registered`;
  }

  @Post('login')
  @UseGuards(LoginGuard)
  @ApiBearerAuth()
  @ApiBody({ type: AuthLoginDto })
  @ApiOperation({ description: 'login' })
  /**
   * Logs in a user with the provided authentication credentials.
   * @param auth - The authentication credentials.
   * @param request - The request object.
   * @returns A promise that resolves to a string indicating a successful login.
   */
  async login(
    @Body() auth: AuthLoginDto,
    @Request() request: any,
  ): Promise<string> {
    const accessTokenCookie = await this.loginUsecaseProxy
      .getInstance()
      .getCookieWithJwtToken(auth.username);
    const refreshTokenCookie = await this.loginUsecaseProxy
      .getInstance()
      .getCookieWithJwtRefreshToken(auth.username);
    request.res.setHeader('Set-Cookie', [
      accessTokenCookie,
      refreshTokenCookie,
    ]);
    return 'Login successful';
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ description: 'logout' })
  /**
   * Logs out the user and clears the session cookie.
   * @param request - The request object.
   * @returns A promise that resolves to a string indicating the success of the logout operation.
   */
  async logout(@Request() request): Promise<string> {
    const cookie = await this.logoutUseCaseProxy.getInstance().execute();
    request.res.setHeader('Set-Cookie', cookie);
    return 'Logout successful';
  }

  @Get('is_authenticated')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ description: 'is_authenticated' })
  @ApiResponseType(IsAuthPresenter, false)
  /**
   * Checks if the user is authenticated.
   * @param request - The request object containing the user information.
   * @returns A Promise that resolves to an instance of IsAuthPresenter.
   */
  async isAuthenticated(@Req() request): Promise<IsAuthPresenter> {
    const user = await this.isAuthUsecaseProxy
      .getInstance()
      .execute(request.user.username);
    const response = new IsAuthPresenter();
    response.username = user.username;
    return response;
  }

  @Get('refresh')
  @UseGuards(JwtRefreshGuard)
  @ApiBearerAuth()
  /**
   * Refreshes the access token for the authenticated user.
   * @param request - The request object containing the user information and response object.
   * @returns A promise that resolves to a string indicating the success of the refresh operation.
   */
  async refresh(
    @Req()
    request: {
      user: { username: string };
      res: {
        setHeader: (arg0: string, arg1: string) => void;
      };
    },
  ): Promise<string> {
    const accessTokenCookie = await this.loginUsecaseProxy
      .getInstance()
      .getCookieWithJwtToken(request.user.username);
    request.res.setHeader('Set-Cookie', accessTokenCookie);
    return 'Refresh successful';
  }
}
