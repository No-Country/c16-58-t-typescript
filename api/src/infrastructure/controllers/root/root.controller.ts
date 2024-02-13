import { UserModel } from '@/domain/model/user';
import { LoginGuard } from '@/infrastructure/common/guards/login.guard';
import { SessionUser } from '@/infrastructure/decorators/session-user.decorator';
import { UseCaseProxy } from '@/infrastructure/usecases-proxy/usecases-proxy';
import { UsecasesProxyModule } from '@/infrastructure/usecases-proxy/usecases-proxy.module';
import { LoginUseCases } from '@/usecases/auth/login.usecases';
import {
  Controller,
  Get,
  Inject,
  Post,
  Request,
  Response,
  Session,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request as Req, Response as Res } from 'express';
import { AuthLoginDto } from '../auth/auth-dto.class';
import { FlashService } from './flash.service';
import { User } from '@/infrastructure/decorators/user.decorator';

/**
 * Controller for handling root routes and login/logout functionality.
 */
@Controller()
@ApiTags('Home')
export class RootController {
  constructor(
    @Inject(UsecasesProxyModule.LOGIN_USECASES_PROXY)
    private readonly loginUsecaseProxy: UseCaseProxy<LoginUseCases>,
    private readonly flashService: FlashService,
  ) {}

  @Get()
  /**
   * Renders the root page.
   * If the user is not authenticated, it redirects to the login page.
   * Otherwise, it renders the home page.
   * @param req - The request object.
   * @param response - The response object.
   * @param user - The authenticated user object.
   */
  root(
    @Request() req: Req,
    @Response() response: Res,
    @SessionUser() user: { id: string },
  ): void {
    if (!user) return response.redirect('/login');
    return response.render('home');
  }

  @Get('login')
  /**
   * Renders the index page.
   *
   * @param response - The response object.
   * @param session - The session object.
   * @param user - The user object.
   * @returns If the user is logged in, it redirects to the home page. Otherwise, it renders the login page along with any flash messages.
   */
  index(
    @Response() response: Res,
    @Session() session: any,
    @SessionUser() user: { id: string },
  ): void | { flash: Record<string, any> } {
    if (user) return response.redirect('/');
    const flash = this.flashService.getFlashMessage(session);
    response.render('login');
    return { flash };
  }

  @Post('logout')
  @ApiOperation({ description: 'logout' })
  /**
   * Logs out the user by destroying the session and redirecting to the login page.
   *
   * @param request - The request object.
   * @param response - The response object.
   * @returns A promise that resolves to void.
   */
  async logout(
    @Request() request: Req,
    @Response() response: Res,
  ): Promise<void> {
    request.session.destroy((err) => {
      if (err) console.error(err);
      response.redirect('/login');
    });
  }

  @Post('login')
  @UseGuards(LoginGuard)
  @ApiBearerAuth()
  @ApiBody({ type: AuthLoginDto })
  @ApiOperation({ description: 'login' })
  /**
   * Logs in the user and sets the user ID in the session.
   * @param user - The user model.
   * @param request - The request object.
   * @param response - The response object.
   */
  async login(
    @User() user: UserModel,
    @Request() request: Req,
    @Response() response: Res,
  ): Promise<void> {
    request.session['user'] = user.id;
    response.redirect('/');
  }
}
