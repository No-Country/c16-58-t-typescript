/**
 * Service for handling various types of exceptions in the application.
 */
import {
  IFormatExceptionMessage,
  IException,
} from '@/domain/exceptions/exceptions.interface';
import {
  InternalServerErrorException,
  UnauthorizedException,
  BadRequestException,
  ForbiddenException,
  ConflictException,
  Injectable,
  HttpStatus,
} from '@nestjs/common';

@Injectable()
export class ExceptionsService implements IException {
  /**
   * Throws a BadRequestException with the provided format exception message.
   * @param data The format exception message.
   */
  private throwException(
    exception: any,
    message?: IFormatExceptionMessage,
  ): void {
    if (message) {
      throw new exception(message, HttpStatus.BAD_REQUEST);
    } else {
      throw new exception();
    }
  }

  /**
   * Throws a ConflictException with optional data.
   * @param data - Optional data to be passed to the ConflictException.
   */
  conflictException(data?: IFormatExceptionMessage): void {
    this.throwException(ConflictException, data);
    throw new ConflictException(data);
  }

  /**
   * Throws a BadRequestException with the provided format exception message.
   * @param data The format exception message.
   */
  badRequestException(data: IFormatExceptionMessage): void {
    this.throwException(BadRequestException, data);
    throw new BadRequestException(data);
  }

  /**
   * Throws an InternalServerErrorException with the optional format exception message.
   * @param data The format exception message (optional).
   */
  internalServerErrorException(data?: IFormatExceptionMessage): void {
    this.throwException(InternalServerErrorException, data);
    throw new InternalServerErrorException(data);
  }

  /**
   * Throws a ForbiddenException with the optional format exception message.
   * @param data The format exception message (optional).
   */
  forbiddenException(data?: IFormatExceptionMessage): void {
    this.throwException(ForbiddenException, data);
    throw new ForbiddenException(data);
  }

  /**
   * Throws an UnauthorizedException with the optional format exception message.
   * @param data The format exception message (optional).
   */
  unauthorizedException(data?: IFormatExceptionMessage): void {
    this.throwException(UnauthorizedException, data);
    throw new UnauthorizedException(data);
  }
}
