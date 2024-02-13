import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

/**
 * Custom decorator that retrieves the user object from the request.
 * @param data - Optional data passed to the decorator.
 * @param ctx - The execution context.
 * @returns The user object from the request.
 */
export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    return request.user;
  },
);
