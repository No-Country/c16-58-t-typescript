import { UserRepository } from '@/domain/repositories/userRepository.interface';
import { User } from '@/domain/model/user';

export class IsAuthenticatedUseCases {
  /**
   * Constructs a new instance of the `isAuthenticated` use case.
   * @param adminUserRepo The repository for admin users.
   */
  constructor(private readonly adminUserRepo: UserRepository) {}

  /**
   * Executes the isAuthenticated use case.
   * Retrieves a user by their username.
   *
   * @param username - The username of the user to retrieve.
   * @returns A Promise that resolves to the retrieved User object.
   */
  async execute(username: string): Promise<User> {
    const user: User = await this.adminUserRepo.getUserByUsername(username);
    return user;
  }
}
