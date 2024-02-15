import { transports, format, createLogger } from 'winston';
import { ILogger } from '@/domain/logger/logger.interface';
import { Injectable, Logger } from '@nestjs/common';

/**
 * Winston logger instance.
 */
export const winstonLogger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/warn.log', level: 'warn' }),
    new transports.File({ filename: 'logs/combined.log' }),
  ],
});

/**
 * LoggerService class that extends Logger and implements ILogger.
 * Provides logging functionality for debug, log, error, warning, and verbose messages.
 */
/**
 * LoggerService class that extends Logger and implements ILogger.
 * Provides logging functionality for the application.
 */
@Injectable()
export class LoggerService extends Logger implements ILogger {
  /**
   * Logs a debug message with the specified context.
   * @param context - The context of the log message.
   * @param message - The debug message to log.
   */
  debug(context: string, message: string) {
    if (process.env.NODE_ENV !== 'production') {
      super.debug(`[DEBUG] ${message}`, context);
      winstonLogger.debug(`[DEBUG] ${message}`, context);
    }
  }

  /**
   * Logs an info message with the specified context.
   * @param context - The context of the log message.
   * @param message - The info message to log.
   */
  log(context: string, message: string) {
    super.log(`[INFO] ${message}`, context);
    winstonLogger.info(`[INFO] ${message}`, context);
  }

  /**
   * Logs an error message with the specified context and optional trace.
   * @param context - The context of the log message.
   * @param message - The error message to log.
   * @param trace - Optional trace information.
   */
  error(context: string, message: string, trace?: string) {
    super.error(`[ERROR] ${message}`, trace, context);
    winstonLogger.error(`[ERROR] ${message}`, trace, context);
  }

  /**
   * Logs a warning message with the specified context.
   * @param context - The context of the log message.
   * @param message - The warning message to log.
   */
  warn(context: string, message: string) {
    super.warn(`[WARN] ${message}`, context);
    winstonLogger.warn(`[WARN] ${message}`, context);
  }

  /**
   * Logs a verbose message with the specified context.
   * @param context - The context of the log message.
   * @param message - The verbose message to log.
   */
  verbose(context: string, message: string) {
    if (process.env.NODE_ENV !== 'production') {
      super.verbose(`[VERBOSE] ${message}`, context);
      winstonLogger.verbose(`[VERBOSE] ${message}`, context);
    }
  }
}
