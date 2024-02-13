/**
 * Represents a user.
 */
export class User {
  id: string;
  username: string;
  refreshToken: string;
  accessToken: string;
}

/**
 * Represents a user model.
 */
export class UserModel extends User {
  password: string;
}
