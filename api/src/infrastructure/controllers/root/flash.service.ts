import { Injectable, Session } from '@nestjs/common';

@Injectable()
/**
 * Service for managing flash messages in a session.
 */
export class FlashService {
  /**
   * Sets a flash message in the session.
   * @param session - The session object.
   * @param type - The type of the flash message.
   * @param message - The content of the flash message.
   */
  setFlashMessage(
    @Session() session: Record<string, any>,
    type: FlashMessageType,
    message: string,
  ): void {
    session.flash = { [type]: [message] };
  }

  /**
   * Retrieves the flash message from the session and removes it.
   * @param session - The session object.
   * @returns The flash message or undefined if it doesn't exist.
   */
  getFlashMessage(
    @Session() session: Record<string, any>,
  ): Record<string, any> | undefined {
    const flash = session.flash;
    delete session.flash;
    return flash;
  }
}

/**
 * Enum representing different types of flash messages.
 */
export enum FlashMessageType {
  SUCCESS = 'success',
  ERROR = 'danger',
  WARNING = 'warning',
  INFO = 'info',
}
