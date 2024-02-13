import { UserRepository } from '@/domain/repositories/userRepository.interface';
import { IBcryptService } from '@/domain/adapters/bcrypt.interface';
import { User } from '@/domain/model/user';

export class RegisterUseCases {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly bcryptService: IBcryptService,
  ) {}

  /**
   * Checks if a user with the given email already exists.
   * @param {string} email - The email to check.
   * @returns {Promise<boolean>} - A promise that resolves to true if the user does not exist, false otherwise.
   */
  async userShouldNotExist({ email }: { email: string }): Promise<boolean> {
    return !(await this.userRepository.getUserByEmail(email));
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
