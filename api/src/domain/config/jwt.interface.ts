/**
 * Represents the configuration for JWT (JSON Web Token).
 */
export interface JWTConfig {
  /**
   * Retrieves the JWT secret.
   * @returns The JWT secret.
   */
  getJwtSecret(): string;

  /**
   * Retrieves the JWT expiration time.
   * @returns The JWT expiration time.
   */
  getJwtExpirationTime(): string;

  /**
   * Retrieves the JWT refresh secret.
   * @returns The JWT refresh secret.
   */
  getJwtRefreshSecret(): string;

  /**
   * Retrieves the JWT refresh expiration time.
   * @returns The JWT refresh expiration time.
   */
  getJwtRefreshExpirationTime(): string;
}
