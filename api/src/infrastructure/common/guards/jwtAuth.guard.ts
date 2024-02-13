import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
/**
 * JwtAuthGuard class is a guard that extends the AuthGuard class and is used for JWT authentication.
 */
export class JwtAuthGuard extends AuthGuard('jwt') {}
