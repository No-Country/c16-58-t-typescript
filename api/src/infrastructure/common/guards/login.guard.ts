import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
/**
 * Guard that checks if a user is authenticated using the 'local' strategy.
 */
export class LoginGuard extends AuthGuard('local') {}
