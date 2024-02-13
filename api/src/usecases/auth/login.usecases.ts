import { UserRepository } from '../../domain/repositories/userRepository.interface';
import { IBcryptService } from '../../domain/adapters/bcrypt.interface';
import { JWTConfig } from '../../domain/config/jwt.interface';
import { User } from '../../domain/model/user';
import { randomUUID } from 'crypto';
import {
  IJwtServicePayload,
  IJwtService,
} from '../../domain/adapters/jwt.interface';
import { ILogger } from '../../domain/logger/logger.interface';

/**
 * Use case class for handling login-related operations.
 */
export class LoginUseCases {
  constructor(
    private readonly logger: ILogger,
    private readonly jwtTokenService: IJwtService,
    private readonly jwtConfig: JWTConfig,
    private readonly userRepository: UserRepository,
    private readonly bcryptService: IBcryptService,
  ) {}

  /**
   * Validates a user for local strategy authentication.
   *
   * @param {Object} params - The parameters for validation.
   * @param {string} params.username - The username of the user.
   * @param {string} params.pass - The password of the user.
   * @returns {Promise<Object|null>} - The user object if validation is successful, otherwise null.
   */
  async validateUserForLocalStrategy({
    username,
    pass,
  }: {
    username: string;
    pass: string;
  }): Promise<object | null> {
    const user = await this.userRepository.getUserByUsername(username);
    if (user) {
      const match = await this.bcryptService.compare(pass, user.password);
      if (user && match) {
        await this.updateLoginTime({ username: user.username });
        delete user.password;
        return user;
      }
    }
    return null;
  }

  /**
   * Updates the login time for a user.
   * @param {Object} params - The parameters for updating the login time.
   * @param {string} params.username - The username of the user.
   * @returns {Promise<void>} - A promise that resolves when the login time is updated.
   */
  async updateLoginTime({ username }: { username: string }): Promise<void> {
    await this.userRepository.updateLastLogin(username);
  }

  /**
   * Generates an access token for the given username.
   * @param {string} username - The username for which to generate the access token.
   * @returns {Promise<string>} - A promise that resolves to the generated access token.
   */
  async generateAccessToken({
    username,
  }: {
    username: string;
  }): Promise<string> {
    const uuid = randomUUID();
    const payload: IJwtServicePayload = { id: uuid, username: username };
    const secret = this.jwtConfig.getJwtSecret();
    const expiresIn = this.jwtConfig.getJwtExpirationTime();
    const token = this.jwtTokenService.createToken(payload, secret, expiresIn);
    await this.setCurrentAccessToken({ uuid, username });
    return token;
  }

  /**
   * Generates a refresh token for the given username.
   * @param {Object} params - The parameters for generating the refresh token.
   * @param {string} params.username - The username for which the refresh token is generated.
   * @returns {Promise<string>} - A promise that resolves to the generated refresh token.
   */
  async generateRefreshToken({
    username,
  }: {
    username: string;
  }): Promise<string> {
    const uuid = randomUUID();
    const payload: IJwtServicePayload = { id: uuid, username: username };
    const secret = this.jwtConfig.getJwtRefreshSecret();
    const expiresIn = this.jwtConfig.getJwtRefreshExpirationTime();
    const token = this.jwtTokenService.createToken(payload, secret, expiresIn);
    await this.setCurrentRefreshToken({ uuid, username });
    return token;
  }

  /**
   * Validates a user for JWT strategy.
   * @param {Object} params - The parameters for validation.
   * @param {string} params.username - The username of the user to validate.
   * @returns {Promise<User>} - The user object if validation is successful.
   */
  async validateUserForJWTStrategy({
    username,
  }: {
    username: string;
  }): Promise<User> {
    return await this.userRepository.getUserByUsername(username);
  }

  /**
   * Sets the current refresh token for a user.
   *
   * @param {Object} params - The parameters for setting the refresh token.
   * @param {string} params.uuid - The UUID of the user.
   * @param {string} params.username - The username of the user.
   * @returns {Promise<void>} - A promise that resolves when the refresh token is set.
   */
  private async setCurrentRefreshToken({
    uuid,
    username,
  }: {
    uuid: string;
    username: string;
  }): Promise<void> {
    await this.userRepository.updateRefreshToken(username, uuid);
  }
  /**
   * Sets the current access token for a user.
   * @param {Object} params - The parameters for setting the access token.
   * @param {string} params.uuid - The UUID of the user.
   * @param {string} params.username - The username of the user.
   * @returns {Promise<void>} - A promise that resolves when the access token is set.
   */
  private async setCurrentAccessToken({
    uuid,
    username,
  }: {
    uuid: string;
    username: string;
  }): Promise<void> {
    await this.userRepository.updateAccessToken(username, uuid);
  }
}
