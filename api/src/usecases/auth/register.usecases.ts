import { IBcryptService } from '../../domain/adapters/bcrypt.interface';
import { User } from '../../domain/model/user';
import { UserRepository } from '../../domain/repositories/userRepository.interface';

export class RegisterUseCases {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly bcryptService: IBcryptService,
  ) {}

  /**
   * Checks if a user with the given username already exists.
   * @param {string} username - The username to check.
   * @returns {Promise<boolean>} - A promise that resolves to true if the user does not exist, false otherwise.
   */
  async userShouldNotExist({
    username,
  }: {
    username: string;
  }): Promise<boolean> {
    return !(await this.userRepository.getUserByUsername(username));
  }

  /**
   * Registers a new user.
   * @param {Object} params - The registration parameters.
   * @param {string} params.username - The username of the user.
   * @param {string} params.password - The password of the user.
   * @returns {Promise<User>} - The newly registered user.
   */
  async registerUser({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<User> {
    const user = await this.userRepository.createUser(
      username,
      await this.bcryptService.hash(password),
    );
    return user;
  }
}
