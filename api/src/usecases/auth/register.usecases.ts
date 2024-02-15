import { UserRepository } from '@/domain/repositories/userRepository.interface';
import { IBcryptService } from '@/domain/adapters/bcrypt.interface';
import { User } from '@/domain/model/user';

export class RegisterUseCases {
  /**
   * Constructs a new instance of the RegisterUseCases class.
   * @param userRepository - The user repository.
   * @param bcryptService - The bcrypt service.
   */
  constructor(
    private readonly userRepository: UserRepository,
    private readonly bcryptService: IBcryptService,
  ) {}

  /**
   * Checks if a user with the given email and username already exists.
   * @param {string} email - The email of the user.
   * @param {string} username - The username of the user.
   * @returns {Promise<string>} A promise that resolves to a string indicating if the user exists.
   */
  async userShouldNotExist({
    email,
    username,
  }: {
    email: string;
    username: string;
  }): Promise<string | null> {
    if (
      (await this.userRepository.getUserByEmail(email)) &&
      (await this.userRepository.getUserByUsername(username))
    ) {
      return `User with email '${email}' and username '${username}' already exists`;
    } else if (await this.userRepository.getUserByEmail(email)) {
      return `User with email '${email}' already exists`;
    } else if (await this.userRepository.getUserByUsername(username)) {
      return `User with username '${username}' already exists`;
    } else {
      return null;
    }
  }

  /**
   * Checks if the provided password matches the confirmed password.
   * @param {Object} params - The parameters for checking the password.
   * @param {string} params.password - The password to be checked.
   * @param {string} params.confirmPassword - The confirmed password to be compared with the password.
   * @returns {Promise<string | null>} - A promise that resolves to a string if the passwords do not match, or null if they match.
   */
  async checkPassword({
    password,
    confirmPassword,
  }: {
    password: string;
    confirmPassword: string;
  }): Promise<string | null> {
    if (password !== confirmPassword) {
      return 'Passwords do not match';
    }
    return null;
  }

  /**
   * Registers a new user.
   * @param {Object} params - The registration parameters.
   * @param {string} params.email - The email of the user.
   * @param {string} params.password - The password of the user.
   * @returns {Promise<User>} - The newly registered user.
   */
  async registerUser({
    email,
    username,
    password,
  }: {
    email: string;
    username: string;
    password: string;
  }): Promise<User> {
    const user = await this.userRepository.createUser(
      email,
      username,
      await this.bcryptService.hash(password),
    );
    return user;
  }
}
