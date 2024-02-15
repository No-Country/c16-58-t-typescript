/**
 * Represents the payload of a JWT service.
 */
export interface IJwtServicePayload {
  username?: string;
  id?: string;
}

/**
 * Interface for JWT service.
 */
export interface IJwtService {
  checkToken(token: string): Promise<any>;
  createToken(
    payload: IJwtServicePayload,
    secret: string,
    expiresIn: string,
  ): string;
}
