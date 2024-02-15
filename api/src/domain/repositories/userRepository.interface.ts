import { UserModel } from '../model/user';

/**
 * Represents a repository for managing user data.
 */

/**
 * Represents a repository for managing user data.
 */
export interface UserRepository {
  /**
   * Creates a new user with the specified email, username, and password.
   * @param email - The email of the user.
   * @param username - The username of the user.
   * @param password - The password of the user.
   * @returns A promise that resolves to the created user model.
   */
  createUser(
    email: string,
    username: string,
    password: string,
  ): Promise<UserModel>;

  /**
   * Retrieves a user by their username.
   * @param username - The username of the user.
   * @returns A promise that resolves to the user model.
   */
  getUserByUsername(username: string): Promise<UserModel>;

  /**
   * Updates the last login timestamp for a user.
   * @param username - The username of the user.
   * @returns A promise that resolves when the update is complete.
   */
  updateLastLogin(username: string): Promise<void>;

  /**
   * Updates the refresh token for a user.
   * @param username - The username of the user.
   * @param refreshToken - The new refresh token.
   * @returns A promise that resolves when the update is complete.
   */
  updateRefreshToken(username: string, refreshToken: string): Promise<void>;

  /**
   * Retrieves a user by their email.
   * @param email - The email of the user.
   * @returns A promise that resolves to the user model.
   */
  getUserByEmail(email: string): Promise<UserModel>;
}
