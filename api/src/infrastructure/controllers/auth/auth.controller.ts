import {
  Body,
  Controller,
  // Get,
  // UseGuards,
  Inject,
  Post,
} from '@nestjs/common';
import {
  // ApiBearerAuth,
  ApiBody,
  ApiExtraModels,
  // ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  //  AuthLoginDto,
  AuthRegisterDto,
} from './auth-dto.class';
// import { UserModel } from '../../../domain/model/user';
// import { JwtAuthGuard } from '../../common/guards/jwtAuth.guard';
// import JwtRefreshGuard from '../../common/guards/jwtRefresh.guard';
// import { LoginGuard } from '../../common/guards/login.guard';
// import { User } from '../../decorators/user.decorator';

import { IsAuthPresenter } from './auth.presenter';
import { ExceptionsService } from '@/infrastructure/exceptions/exceptions.service';
import { UseCaseProxy } from '@/infrastructure/usecases-proxy/usecases-proxy';
import { UsecasesProxyModule } from '@/infrastructure/usecases-proxy/usecases-proxy.module';
import { LoginUseCases } from '@/usecases/auth/login.usecases';
import { LogoutUseCases } from '@/usecases/auth/logout.usecases';
import { RegisterUseCases } from '@/usecases/auth/register.usecases';

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
    if (
      (await service.userShouldNotExist({ email: body.email })) &&
      body.confirmPassword === body.password
    ) {
      const user = await service.registerUser({
        email: body.email,
        username: body.username,
        password: body.password,
      });

      return `User ${user.email} Registered!`;
    } else
      this.exceptionsService.conflictException({
        message: `${body.email} already Exists`,
      });
  }

  // @Post('login')
  // @UseGuards(LoginGuard)
  // @ApiBearerAuth()
  // @ApiBody({ type: AuthLoginDto })
  // @ApiOperation({ description: 'login' })
  // /**
  //  * Logs in a user and returns an access token and a refresh token.
  //  * @param user - The user object containing the username.
  //  * @returns An object with the access token and the refresh token.
  //  */
  // async login(
  //   @User() user: UserModel,
  // ): Promise<{ accessToken: string; refreshToken: string }> {
  //   const accessToken = await this.loginUsecaseProxy
  //     .getInstance()
  //     .generateAccessToken({ username: user.username });
  //   const refreshToken = await this.loginUsecaseProxy
  //     .getInstance()
  //     .generateRefreshToken({ username: user.username });
  //   return { accessToken, refreshToken };
  // }

  // @Get('refresh')
  // @UseGuards(JwtRefreshGuard)
  // @ApiBearerAuth()
  // /**
  //  * Refreshes the access token and generates a new refresh token for the authenticated user.
  //  * @param user The authenticated user.
  //  * @returns An object containing the new access token and refresh token.
  //  */
  // async refresh(
  //   @User() user: UserModel,
  // ): Promise<{ accessToken: string; refreshToken: string }> {
  //   const accessToken = await this.loginUsecaseProxy
  //     .getInstance()
  //     .generateAccessToken({ username: user.username });
  //   const refreshToken = await this.loginUsecaseProxy
  //     .getInstance()
  //     .generateRefreshToken({ username: user.username });

  //   return { accessToken, refreshToken };
  // }

  // @Get('logout')
  // @UseGuards(JwtAuthGuard)
  // @ApiOperation({ description: 'logout' })
  // /**
  //  * Logs out the user.
  //  * @param user - The user model.
  //  * @returns A promise that resolves to a string indicating the success of the logout operation.
  //  */
  // async logout(@User() user: UserModel): Promise<string> {
  //   await this.logoutUseCaseProxy
  //     .getInstance()
  //     .deleteRefreshAndAccessToken({ username: user.username });
  //   return ` ${user.username} Logout successful`;
  // }
}
