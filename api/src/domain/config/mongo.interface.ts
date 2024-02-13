/**
 * Represents the configuration for MongoDB.
 */
export interface MongoDbConfig {
  /**
   * Retrieves the MongoDB URI.
   * @returns The MongoDB URI.
   */
  getMongoDbUri(): string;
}
