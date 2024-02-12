import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  IJwtService,
  IJwtServicePayload,
} from '../../../domain/adapters/jwt.interface';

@Injectable()
/**
 * Represents a service for handling JWT tokens.
 */
export class JwtTokenService implements IJwtService {
  constructor(private readonly jwtService: JwtService) {}

  /**
   * Checks the validity of a JWT token.
   * @param token - The JWT token to be checked.
   * @returns A Promise that resolves to the decoded token payload.
   */
  async checkToken(token: string): Promise<any> {
    const decode = await this.jwtService.verifyAsync(token);
    return decode;
  }

  /**
   * Creates a JWT token with the given payload, secret, and expiration time.
   * @param payload - The data to be included in the token.
   * @param secret - The secret key used to sign the token.
   * @param expiresIn - The expiration time for the token.
   * @returns The generated JWT token.
   */
  createToken(
    payload: IJwtServicePayload,
    secret: string,
    expiresIn: string,
  ): string {
    return this.jwtService.sign(payload, {
      secret: secret,
      expiresIn: expiresIn,
    });
  }
}
