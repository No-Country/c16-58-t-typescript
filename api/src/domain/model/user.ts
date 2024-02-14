/**
 * Represents a user.
 */
export class User {
  id: string;
  username: string;
  email: string;
  createDate: Date;
  updatedDate: Date;
  lastLogin: Date;
  hashRefreshToken: string;
}

/**
 * Represents a user model.
 */
export class UserModel extends User {
  password: string;
}
