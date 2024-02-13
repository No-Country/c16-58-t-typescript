import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { UserModel } from '../../../domain/model/user';
import { UserRepository } from '../../../domain/repositories/userRepository.interface';
import { User } from '../schemas/user.schema';

/**
 * DatabaseUserRepository class that implements the UserRepository interface.
 * This class provides methods to interact with the user collection in the MongoDB database.
 */
@Injectable()
export class DatabaseUserRepository implements UserRepository {
  constructor(
    @InjectModel(User.name)
    private userSchemaRepository: Model<User>,
  ) {}

  /**
   * Deletes the refresh token and access token for a given username.
   * @param username - The username of the user.
   * @returns A Promise that resolves when the operation is complete.
   */
  async deleteRefreshAndAccessToken(username: string): Promise<void> {
    await this.userSchemaRepository.updateOne(
      { username: username },
      { $unset: { refresh_token: 1, access_token: 1 } },
    );
  }

  /**
   * Updates the access token for a user.
   * @param username - The username of the user.
   * @param accessToken - The new access token.
   * @returns A Promise that resolves when the access token is updated.
   */
  async updateAccessToken(
    username: string,
    accessToken: string,
  ): Promise<void> {
    await this.userSchemaRepository.updateOne(
      { username: username },
      { access_token: accessToken },
    );
  }

  /**
   * Updates the refresh token for a user.
   * @param username - The username of the user.
   * @param refreshToken - The new refresh token.
   * @returns A Promise that resolves when the refresh token is updated.
   */
  async updateRefreshToken(
    username: string,
    refreshToken: string,
  ): Promise<void> {
    await this.userSchemaRepository.updateOne(
      { username: username },
      { refresh_token: refreshToken },
    );
  }

  /**
   * Creates a new user with the given username and password.
   * @param username - The username of the user.
   * @param password - The password of the user.
   * @returns A Promise that resolves to the created UserModel.
   */
  async createUser(username: string, password: string): Promise<UserModel> {
    const userEntity = this.toUserEntity({
      id: null,

      username: username,
      password: password,

      refreshToken: null,
      accessToken: null,
    });
    return this.toUser(await this.userSchemaRepository.create(userEntity));
  }

  /**
   * Updates the last login date for a user.
   * @param username - The username of the user.
   * @returns A promise that resolves when the update is complete.
   */
  async updateLastLogin(username: string): Promise<void> {
    await this.userSchemaRepository.updateOne(
      { username: username },
      { updatedDate: new Date() },
    );
  }

  /**
   * Retrieves a user by their username.
   * @param username - The username of the user to retrieve.
   * @returns A Promise that resolves to the retrieved UserModel, or null if no user is found.
   */
  async getUserByUsername(username: string): Promise<UserModel> {
    const userEntity = await this.userSchemaRepository.findOne({
      username: username,
    });
    return userEntity ? this.toUser(userEntity) : null;
  }

  /**
   * Converts a User entity to a UserModel.
   * @param userEntity The User entity to convert.
   * @returns The converted UserModel.
   */
  private toUser(userEntity: User): UserModel {
    const adminUser: UserModel = new UserModel();

    adminUser.id = userEntity._id.toString();
    adminUser.username = userEntity.username;
    adminUser.password = userEntity.password;

    adminUser.refreshToken = userEntity.refresh_token;
    adminUser.accessToken = userEntity.access_token;

    return adminUser;
  }

  /**
   * Converts an admin user model to a user entity.
   *
   * @param adminUser The admin user model to convert.
   * @returns The converted user entity.
   */
  private toUserEntity(adminUser: UserModel): User {
    const userEntity: User = new User();

    userEntity.username = adminUser.username;
    userEntity.password = adminUser.password;

    userEntity.refresh_token = adminUser.refreshToken;
    userEntity.access_token = adminUser.accessToken;

    return userEntity;
  }
}
