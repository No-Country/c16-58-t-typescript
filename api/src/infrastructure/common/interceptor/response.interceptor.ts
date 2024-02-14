import { ApiProperty } from '@nestjs/swagger';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {
  ExecutionContext,
  NestInterceptor,
  CallHandler,
  Injectable,
} from '@nestjs/common';

/**
 * Represents the format of a response.
 * @template T - The type of the data in the response.
 */
export class ResponseFormat<T> {
  @ApiProperty()
  isArray: boolean;
  @ApiProperty()
  path: string;
  @ApiProperty()
  duration: string;
  @ApiProperty()
  method: string;

  data: T;
}

@Injectable()
/**
 * Intercepts the incoming request and transforms the response format.
 * @template T - The type of the response data.
 */
export class ResponseInterceptor<T>
  implements NestInterceptor<T, ResponseFormat<T>>
{
  /**
   * Intercepts the incoming request and transforms the response format.
   * @param context - The execution context of the request.
   * @param next - The next call handler in the chain.
   * @returns An observable of the transformed response format.
   */
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseFormat<T>> {
    const now = Date.now();
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest();

    return next.handle().pipe(
      map((data) => {
        return {
          data,
          isArray: Array.isArray(data),
          path: request.path,
          duration: `${Date.now() - now}ms`,
          method: request.method,
        };
      }),
    );
  }
}
