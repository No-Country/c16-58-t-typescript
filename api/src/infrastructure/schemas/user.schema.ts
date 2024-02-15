import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserModel } from '@/domain/model/user';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

/**
 * Represents a User schema in MongoDB.
 */
@Schema({ versionKey: false })
export class User
  implements Omit<UserModel, 'id' | 'refreshToken' | 'accessToken'>
{
  /**
   * The id of the user.
   */
  @Prop({
    default: new Types.ObjectId(),
  })
  _id: Types.ObjectId;

  /**
   * The email of the user.
   */
  @Prop({
    required: true,
    unique: true,
  })
  email: string;
  /**
   * The username of the user.
   */
  @Prop({ required: true, unique: true })
  username: string;

  /**
   * The password of the user.
   */
  @Prop({ required: true })
  password: string;

  /**
   * The refresh token hash of the user.
   */
  @Prop({ required: false })
  hashRefreshToken: string;

  /**
   * The date the user was created.
   */
  @Prop({ required: true })
  createDate: Date;

  /**
   * The date the user last logged in.
   */
  @Prop({ required: false })
  lastLogin: Date;

  /**
   * The date the user was last updated.
   */
  @Prop({ required: true })
  updatedDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.index({ email: 1, username: 1 }, { unique: true });
