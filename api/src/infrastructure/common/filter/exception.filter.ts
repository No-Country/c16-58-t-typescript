import { LoggerService } from '@/infrastructure/logger/logger.service';
import { IError } from '@/domain/filter/filter.interface';
import { Request } from 'express';
import {
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Catch,
} from '@nestjs/common';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  /**
   * Creates an instance of the ExceptionFilter class.
   * @param logger The logger service used for logging.
   */
  constructor(private readonly logger: LoggerService) {}

  /**
   * Catches and handles exceptions thrown during request processing.
   * @param exception - The exception that was thrown.
   * @param host - The arguments host containing the request and response objects.
   */
  catch(exception: Error, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request: Request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const message =
      exception instanceof HttpException
        ? (exception.getResponse() as IError)
        : { message: (exception as Error).message, code_error: null };

    const responseData = {
      ...{
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      },
      ...message,
    };

    this.logMessage({ request, message, status, exception });

    response.status(status).json(responseData);
  }

  /**
   * Logs the error message and request details.
   *
   * @param request - The request object.
   * @param message - The error message.
   * @param status - The HTTP status code.
   * @param exception - The exception object.
   */
  private logMessage({
    request,
    message,
    status,
    exception,
  }: {
    request: Request;
    message: IError;
    status: number;
    exception: Error;
  }): void {
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
