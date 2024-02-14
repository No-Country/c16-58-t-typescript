import { LoggerService } from '@/infrastructure/logger/logger.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {
  ExecutionContext,
  NestInterceptor,
  CallHandler,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  /**
   * Creates an instance of the LoggerInterceptor class.
   * @param logger The logger service used for logging.
   */
  constructor(private readonly logger: LoggerService) {}

  /**
   * Intercepts incoming requests and logs information about the request and response.
   * @param context - The execution context of the request.
   * @param next - The next call handler in the chain.
   * @returns An observable that represents the response stream.
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest();

    const ip = this.getIP({ request });

    this.logger.log(
      `Incoming Request on ${request.path}`,
      `method=${request.method} ip=${ip}`,
    );

    return next.handle().pipe(
      tap(() => {
        this.logger.log(
          `End Request for ${request.path}`,
          `method=${request.method} ip=${ip} duration=${Date.now() - now}ms`,
        );
      }),
    );
  }

  /**
   * Retrieves the IP address from the request object.
   * @param request - The request object containing the headers and connection information.
   * @returns The IP address as a string.
   */
  private getIP({
    request,
  }: {
    request: {
      headers: {
        'x-forwarded-for': string | undefined;
      };
      connection: { remoteAddress: string };
    };
  }): string {
    let ip: string;
    const ipAddr = request.headers['x-forwarded-for'];
    if (ipAddr) {
      const list = ipAddr.split(',');
      ip = list[list.length - 1];
    } else {
      ip = request.connection.remoteAddress;
    }
    return ip.replace('::ffff:', '');
  }
}
