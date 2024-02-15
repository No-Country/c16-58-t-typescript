import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
/**
 * JwtRefreshGuard class is responsible for guarding routes that require a valid JWT refresh token.
 * It extends the AuthGuard class and uses the 'jwt-refresh-token' strategy for authentication.
 */
export default class JwtRefreshGuard extends AuthGuard('jwt-refresh-token') {}
