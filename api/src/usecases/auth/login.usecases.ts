import { UserRepository } from '@/domain/repositories/userRepository.interface';
import { IBcryptService } from '@/domain/adapters/bcrypt.interface';
import { JWTConfig } from '@/domain/config/jwt.interface';
import { ILogger } from '@/domain/logger/logger.interface';
import {
  IJwtServicePayload,
  IJwtService,
} from '@/domain/adapters/jwt.interface';

/**
 * Represents the use cases for user login functionality.
 */
export class LoginUseCases {
  /**
   * Constructs a new instance of the LoginUseCases class.
   * @param logger - The logger instance.
   * @param jwtTokenService - The JWT token service.
   * @param jwtConfig - The JWT configuration.
   * @param userRepository - The user repository.
   * @param bcryptService - The bcrypt service.
   */
  constructor(
    private readonly logger: ILogger,
    private readonly jwtTokenService: IJwtService,
    private readonly jwtConfig: JWTConfig,
    private readonly userRepository: UserRepository,
    private readonly bcryptService: IBcryptService,
  ) {}

  /**
   * Generates a cookie with a JWT token for the specified username.
   * @param username - The username for which the JWT token is generated.
   * @returns A string representing the generated cookie with the JWT token.
   */
  async getCookieWithJwtToken(username: string) {
    this.logger.log(
      'LoginUseCases execute',
      `The user ${username} have been logged.`,
    );
    const payload: IJwtServicePayload = { username: username };
    const secret = this.jwtConfig.getJwtSecret();
    const expiresIn = this.jwtConfig.getJwtExpirationTime() + 's';
    const token = this.jwtTokenService.createToken(payload, secret, expiresIn);
    return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.jwtConfig.getJwtExpirationTime()}`;
  }

  /**
   * Retrieves a cookie with a JWT refresh token for the specified username.
   * @param username - The username of the user.
   * @returns The cookie containing the JWT refresh token.
   */
  async getCookieWithJwtRefreshToken(username: string) {
    this.logger.log(
      'LoginUseCases execute',
      `The user ${username} have been logged.`,
    );
    const payload: IJwtServicePayload = { username: username };
    const secret = this.jwtConfig.getJwtRefreshSecret();
    const expiresIn = this.jwtConfig.getJwtRefreshExpirationTime() + 's';
    const token = this.jwtTokenService.createToken(payload, secret, expiresIn);
    await this.setCurrentRefreshToken(token, username);
    const cookie = `Refresh=${token}; HttpOnly; Path=/; Max-Age=${this.jwtConfig.getJwtRefreshExpirationTime()}`;
    return cookie;
  }

  /**
   * Validates a user for local strategy authentication.
   *
   * @param username - The username of the user.
   * @param pass - The password of the user.
   * @returns The user object if validation is successful, otherwise null.
   */
  async validateUserForLocalStragtegy(username: string, pass: string) {
    const user = await this.userRepository.getUserByUsername(username);
    if (!user) {
      return null;
    }
    const match = await this.bcryptService.compare(pass, user.password);
    if (user && match) {
      await this.updateLoginTime(user.username);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  /**
   * Validates a user for JWT strategy.
   * @param username - The username of the user to validate.
   * @returns The validated user or null if the user does not exist.
   */
  async validateUserForJWTStragtegy(username: string) {
    const user = await this.userRepository.getUserByUsername(username);
    if (!user) {
      return null;
    }
    return user;
  }

  /**
   * Updates the last login time for a user.
   * @param username - The username of the user.
   * @returns A promise that resolves when the last login time is updated.
   */
  async updateLoginTime(username: string) {
    await this.userRepository.updateLastLogin(username);
  }

  /**
   * Sets the current refresh token for a user.
   * @param refreshToken - The new refresh token.
   * @param username - The username of the user.
   * @returns Promise<void>
   */
  async setCurrentRefreshToken(refreshToken: string, username: string) {
    const currentHashedRefreshToken =
      await this.bcryptService.hash(refreshToken);
    await this.userRepository.updateRefreshToken(
      username,
      currentHashedRefreshToken,
    );
  }

  /**
   * Retrieves a user if the refresh token matches the stored hashed refresh token.
   * @param refreshToken - The refresh token to compare.
   * @param username - The username of the user.
   * @returns The user object if the refresh token matches, otherwise null.
   */
  async getUserIfRefreshTokenMatches(refreshToken: string, username: string) {
    const user = await this.userRepository.getUserByUsername(username);
    if (!user) {
      return null;
    }

    const isRefreshTokenMatching = await this.bcryptService.compare(
      refreshToken,
      user.hashRefreshToken,
    );
    if (isRefreshTokenMatching) {
      return user;
    }

    return null;
  }
}
