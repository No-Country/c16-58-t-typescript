import { UsecasesProxyModule } from '@/infrastructure/usecases-proxy/usecases-proxy.module';
import { ExceptionsService } from '@/infrastructure/exceptions/exceptions.service';
import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { UseCaseProxy } from '@/infrastructure/usecases-proxy/usecases-proxy';
import JwtRefreshGuard from '@/infrastructure/common/guards/jwtRefresh.guard';
import { JwtAuthGuard } from '@/infrastructure/common/guards/jwtAuth.guard';
import { LoginGuard } from '@/infrastructure/common/guards/login.guard';
import { RegisterUseCases } from '@/usecases/auth/register.usecases';
import { User } from '@/infrastructure/decorators/user.decorator';
import { LogoutUseCases } from '@/usecases/auth/logout.usecases';
import { AuthLoginDto, AuthRegisterDto } from './auth-dto.class';
import { LoginUseCases } from '@/usecases/auth/login.usecases';
import { IsAuthPresenter } from './auth.presenter';
import { UserModel } from '@/domain/model/user';
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
    return `User with email '${user.email} and username ${user.username} has been registered`;
  }

  // @Post('login')
  // @UseGuards(LoginGuard)
  // @ApiBearerAuth()
  // @ApiBody({ type: AuthLoginDto })
  // @ApiOperation({ description: 'login' })
  // async login(@User() user: UserModel) {
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
