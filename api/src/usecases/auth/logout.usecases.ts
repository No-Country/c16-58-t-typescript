import { UserRepository } from '@/domain/repositories/userRepository.interface';

/**
 * Use case class for handling user logout functionality.
 */
export class LogoutUseCases {
  constructor(private readonly userRepository: UserRepository) {}

  /**
   * Deletes the refresh and access tokens for a given user.
   * @param username - The username of the user.
   * @returns A Promise that resolves when the tokens are deleted.
   */
  async deleteRefreshAndAccessToken({
    username,
  }: {
    username: string;
  }): Promise<void> {
    await this.userRepository.deleteRefreshAndAccessToken(username);
  }
}
