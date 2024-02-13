/**
 * Interface for the Bcrypt service.
 */
export interface IBcryptService {
  /**
   * Hashes a string.
   * @param hashString - The string to be hashed.
   * @returns A promise that resolves to the hashed string.
   */
  hash(hashString: string): Promise<string>;

  /**
   * Compares a password with a hashed password.
   * @param password - The password to be compared.
   * @param hashPassword - The hashed password to compare against.
   * @returns A promise that resolves to a boolean indicating whether the password matches the hashed password.
   */
  compare(password: string, hashPassword: string): Promise<boolean>;
}
