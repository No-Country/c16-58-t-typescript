/**
 * Represents the configuration for MongoDB.
 */
export interface MongoDbConfig {
  /**
   * Retrieves the MongoDB URI.
   * @returns The MongoDB URI.
   */
  getMongoDbUri(): string;
  /**
   * Retrieves the MongoDB username.
   * @returns The MongoDB username.
   */
  getMongoDbUsername(): string;
  /**
   * Retrieves the MongoDB password.
   * @returns The MongoDB password.
   */
  getMongoDbPassword(): string;
}
