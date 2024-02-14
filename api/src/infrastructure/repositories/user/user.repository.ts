import { UserRepository } from '@/domain/repositories/userRepository.interface';
import { User } from '@/infrastructure/schemas/user.schema';
import { UserModel } from '@/domain/model/user';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

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
   * Creates a new user with the given username and password.
   * @param username - The username of the user.
   * @param password - The password of the user.
   * @returns A Promise that resolves to the created UserModel.
   */
  async createUser(
    email: string,
    username: string,
    password: string,
  ): Promise<UserModel> {
    const userEntity = this.toUserEntity({
      id: null,
      email: email,
      username: username,
      password: password,
      hashRefreshToken: null,
      createDate: new Date(),
      lastLogin: null,
      updatedDate: new Date(),
    });
    return this.toUser(await this.userSchemaRepository.create(userEntity));
  }

  /**
   * Updates the refresh token for a user.
   *
   * @param username - The username of the user.
   * @param refreshToken - The new refresh token.
   * @returns A promise that resolves when the refresh token is updated.
   */
  async updateRefreshToken(
    username: string,
    refreshToken: string,
  ): Promise<void> {
    await this.userSchemaRepository.updateOne(
      { username: { $eq: username } },
      { hashRefreshToken: refreshToken },
    );
  }

  /**
   * Updates the last login date for a user.
   * @param username - The username of the user.
   * @returns A promise that resolves to void.
   */
  async updateLastLogin(username: string): Promise<void> {
    await this.userSchemaRepository
      .updateOne({ username: { $eq: username } }, { lastLogin: new Date() })
      .exec();
  }

  /**
   * Retrieves a user by their email address.
   * @param email - The email address of the user.
   * @returns A Promise that resolves to a UserModel if a user with the specified email is found, or null otherwise.
   */
  async getUserByEmail(email: string): Promise<UserModel> {
    const userEntity = await this.userSchemaRepository.findOne({
      email: { $eq: email },
    });
    return userEntity ? this.toUser(userEntity) : null;
  }

  /**
   * Retrieves a user by their username.
   * @param username - The username of the user to retrieve.
   * @returns A Promise that resolves to the UserModel if found, or null if not found.
   */
  async getUserByUsername(username: string): Promise<UserModel> {
    const userEntity = await this.userSchemaRepository.findOne({
      username: { $eq: username },
    });
    return userEntity ? this.toUser(userEntity) : null;
  }
  /**
   * Converts a User entity to a UserModel.
   *
   * @param userEntity - The User entity to convert.
   * @returns The converted UserModel.
   */
  private toUser(userEntity: User): UserModel {
    const adminUser: UserModel = new UserModel();

    adminUser.username = userEntity.username;
    adminUser.password = userEntity.password;
    adminUser.email = userEntity.email;
    adminUser.id = userEntity._id?.toString();
    adminUser.createDate = userEntity.createDate;
    adminUser.lastLogin = userEntity.lastLogin;
    adminUser.updatedDate = userEntity.updatedDate;
    adminUser.hashRefreshToken = userEntity.hashRefreshToken;

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

    userEntity._id = null;
    userEntity.username = adminUser.username;
    userEntity.password = adminUser.password;
    userEntity.email = adminUser.email;
    userEntity.createDate = adminUser.createDate;
    userEntity.lastLogin = adminUser.lastLogin;
    userEntity.updatedDate = adminUser.updatedDate;
    userEntity.hashRefreshToken = adminUser.hashRefreshToken;

    return userEntity;
  }
}
