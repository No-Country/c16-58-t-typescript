/**
 * Represents the use case for logging out a user.
 */
export class LogoutUseCases {
  /**
   * Creates a new instance of the LogoutUseCase class.
   */
  constructor() {}

  /**
   * Executes the logout use case.
   * @returns A promise that resolves to an array of strings representing the cookies to be cleared.
   */
  async execute(): Promise<string[]> {
    return [
      'Authentication=; HttpOnly; Path=/; Max-Age=0',
      'Refresh=; HttpOnly; Path=/; Max-Age=0',
    ];
  }
}
