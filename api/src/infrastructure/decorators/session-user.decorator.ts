import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

/**
 * Custom decorator that retrieves the user from the session.
 * @param data - Additional data (not used in this decorator).
 * @param ctx - The execution context.
 * @returns The user object from the session.
 */
export const SessionUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    return request.session['user'];
  },
);
