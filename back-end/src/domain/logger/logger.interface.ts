/**
 * Represents a logger interface.
 */
export interface ILogger {
  /**
   * Logs a debug message.
   * @param context - The context of the log message.
   * @param message - The log message.
   */
  debug(context: string, message: string): void;

  /**
   * Logs an informational message.
   * @param context - The context of the log message.
   * @param message - The log message.
   */
  log(context: string, message: string): void;

  /**
   * Logs an error message.
   * @param context - The context of the log message.
   * @param message - The log message.
   * @param trace - Optional. The stack trace of the error.
   */
  error(context: string, message: string, trace?: string): void;

  /**
   * Logs a warning message.
   * @param context - The context of the log message.
   * @param message - The log message.
   */
  warn(context: string, message: string): void;

  /**
   * Logs a verbose message.
   * @param context - The context of the log message.
   * @param message - The log message.
   */
  verbose(context: string, message: string): void;
}
