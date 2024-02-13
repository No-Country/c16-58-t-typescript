import { LoggerService } from '@/infrastructure/logger/logger.service';
import { IError } from '@/domain/filter/filter.interface';
import {
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Catch,
} from '@nestjs/common';
/**
 * Exception filter that handles all exceptions thrown in the application.
 */
@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: LoggerService) {}

  /**
   * Handles the caught exception and sends an appropriate response to the client.
   * @param exception - The caught exception.
   * @param host - The arguments host object.
   */
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request: any = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const message =
      exception instanceof HttpException
        ? (exception.getResponse() as IError)
        : { message: (exception as Error).message, code_error: null };

    const responseData = Object.assign({ statusCode: status }, message);

    this.logMessage(request, message, status, exception);

    const isV1ApiRoute = request.path.startsWith('/api/v1');

    if (!isV1ApiRoute) {
      request.flash('danger', message.message);
      if (status === 401 && request.path !== '/login') {
        request.flash('danger', 'You must login to access this page');
        response.redirect('/login');
      } else if (status === 500) {
        response.status(status).json(responseData);
      } else {
        response.status(status).json(responseData);
      }
    } else {
      response.status(status).json(responseData);
    }
  }

  /**
   * Logs the error message and details.
   * @param request - The request object.
   * @param message - The error message.
   * @param status - The HTTP status code.
   * @param exception - The caught exception.
   */
  private logMessage(
    request: any,
    message: IError,
    status: number,
    exception: any,
  ) {
    if (status === 500) {
      this.logger.error(
        `End Request for ${request.path}`,
        `method=${request.method} status=${status} code_error=${
          message.code_error ? message.code_error : null
        } message=${message.message ? message.message : null}`,
        status >= 500 ? exception.stack : '',
      );
    } else {
      this.logger.warn(
        `End Request for ${request.path}`,
        `method=${request.method} status=${status} code_error=${
          message.code_error ? message.code_error : null
        } message=${message.message ? message.message : null}`,
      );
    }
  }
}
