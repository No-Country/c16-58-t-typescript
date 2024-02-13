import { IBcryptService } from '@/domain/adapters/bcrypt.interface';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
/**
 * Service for hashing and comparing passwords using bcrypt.
 */
export class BcryptService implements IBcryptService {
  private readonly rounds = 10;

  /**
   * Hashes a string using bcrypt.
   * @param hashString - The string to be hashed.
   * @returns A promise that resolves to the hashed string.
   */
  async hash(hashString: string): Promise<string> {
    return await bcrypt.hash(hashString, this.rounds);
  }

  /**
   * Compares a plain text password with a hashed password.
   * @param password - The plain text password to compare.
   * @param hashPassword - The hashed password to compare against.
   * @returns A promise that resolves to a boolean indicating whether the passwords match.
   */
  async compare(password: string, hashPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashPassword);
  }
}
