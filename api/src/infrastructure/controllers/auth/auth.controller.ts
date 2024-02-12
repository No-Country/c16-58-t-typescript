import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiExtraModels,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { AuthLoginDto, AuthRegisterDto } from './auth-dto.class';
import { IsAuthPresenter } from './auth.presenter';
import { UserModel } from '../../../domain/model/user';
import { LoginUseCases } from '../../../usecases/auth/login.usecases';
import { LogoutUseCases } from '../../../usecases/auth/logout.usecases';
import { RegisterUseCases } from '../../../usecases/auth/register.usecases';
import { JwtAuthGuard } from '../../common/guards/jwtAuth.guard';
import JwtRefreshGuard from '../../common/guards/jwtRefresh.guard';
import { LoginGuard } from '../../common/guards/login.guard';
import { User } from '../../decorators/user.decorator';
import { ExceptionsService } from '../../exceptions/exceptions.service';
import { UseCaseProxy } from '../../usecases-proxy/usecases-proxy';
import { UsecasesProxyModule } from '../../usecases-proxy/usecases-proxy.module';

// import { ApiResponseType } from '../../common/swagger/response.decorator';

@Controller('auth')
@ApiTags('auth')
@ApiResponse({
  status: 401,
  description: 'No authorization token was found',
})
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(IsAuthPresenter)
export class AuthController {
  constructor(
    @Inject(UsecasesProxyModule.LOGIN_USECASES_PROXY)
    private readonly loginUsecaseProxy: UseCaseProxy<LoginUseCases>,
    @Inject(UsecasesProxyModule.REGISTER_USECASES_PROXY)
    private readonly registerUseCaseProxy: UseCaseProxy<RegisterUseCases>,
    @Inject(UsecasesProxyModule.LOGOUT_USECASES_PROXY)
    private readonly logoutUseCaseProxy: UseCaseProxy<LogoutUseCases>,
    private readonly exceptionsService: ExceptionsService,
  ) {}

  @Post('login')
  @UseGuards(LoginGuard)
  @ApiBearerAuth()
  @ApiBody({ type: AuthLoginDto })
  @ApiOperation({ description: 'login' })
  /**
   * Logs in a user and returns an access token and a refresh token.
   * @param user - The user object containing the username.
   * @returns An object with the access token and the refresh token.
   */
  async login(
    @User() user: UserModel,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const accessToken = await this.loginUsecaseProxy
      .getInstance()
      .generateAccessToken({ username: user.username });
    const refreshToken = await this.loginUsecaseProxy
      .getInstance()
      .generateRefreshToken({ username: user.username });
    return { accessToken, refreshToken };
  }

  @Post('register')
  @ApiBody({ type: AuthRegisterDto })
  /**
   * Registers a new user.
   *
   * @param body - The registration data.
   * @returns A message indicating the success of the registration.
   */
  async register(@Body() body: AuthRegisterDto): Promise<string> {
    const service = this.registerUseCaseProxy.getInstance();

    if (await service.userShouldNotExist({ username: body.username })) {
      const user = await service.registerUser({
        username: body.username,
        password: body.password,
      });
      return `User ${user.username} Registered!`;
    } else
      this.exceptionsService.conflictException({
        message: `${body.username} already Exists`,
      });
  }

  @Get('refresh')
  @UseGuards(JwtRefreshGuard)
  @ApiBearerAuth()
  /**
   * Refreshes the access token and generates a new refresh token for the authenticated user.
   * @param user The authenticated user.
   * @returns An object containing the new access token and refresh token.
   */
  async refresh(
    @User() user: UserModel,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const accessToken = await this.loginUsecaseProxy
      .getInstance()
      .generateAccessToken({ username: user.username });
    const refreshToken = await this.loginUsecaseProxy
      .getInstance()
      .generateRefreshToken({ username: user.username });

    return { accessToken, refreshToken };
  }

  @Get('logout')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ description: 'logout' })
  /**
   * Logs out the user.
   * @param user - The user model.
   * @returns A promise that resolves to a string indicating the success of the logout operation.
   */
  async logout(@User() user: UserModel): Promise<string> {
    await this.logoutUseCaseProxy
      .getInstance()
      .deleteRefreshAndAccessToken({ username: user.username });
    return ` ${user.username} Logout successful`;
  }
}
